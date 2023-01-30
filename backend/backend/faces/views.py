import requests

from django.http import JsonResponse

from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view

from .serializers import PictureSerializer, ResultSerializer, PictureIDSerializer
from .utils import get_img_url, create_img, create_result, get_result_emoji
from users.utils import user_token_to_data
from users.models import User
from faces.models import Face
from emojis.models import Emoji

@api_view(['POST'])
def faces(request):
    emoji_id = request.data['emoji_id']
    user_id = request.data['user_id']
    image = request.data['image']

    userID= User.objects.get(id = user_id) # fk user_id
    # userData = userID.id
    # payload = user_token_to_data(request.headers.get('Authorization', None))

    # if (payload.get('id') == str(userData)):
        # img_url = get_img_url(image)
    img_url = "aaaa"

    # 원본 사진 저장
    save_image = create_img(userID, img_url)
    data = PictureSerializer(save_image, many=False).data
    face_id = PictureIDSerializer(save_image, many=False).data.get('id')
    emojiID = Emoji.objects.get(id = emoji_id) # fk emoji_id

    data["emoji_image"] = emojiID.image # 서버에 저장된 선택한 이모지도 같이 보내기

    # ai서버에 api요청
    url = 'http://ai_server:8000/api/v1/images/'
    result = requests.post(url, json=data, verify=False).json()

    # 결과값 저장
    faceID = Face.objects.get(id = face_id) # fk face_id
        
    result_img = get_result_emoji(emojiID.id,result) # 결과 사진

    save_result = create_result(userID, faceID, emojiID, result_img)
    result_data = ResultSerializer(save_result, many=False).data
    return JsonResponse(result_data, status=201, safe=False)
    
    # else :
    #     return JsonResponse({"message": "Invalid_User"}, status=401)
