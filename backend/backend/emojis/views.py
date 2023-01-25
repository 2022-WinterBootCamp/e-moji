import io
from PIL import Image
import json

from django.http import JsonResponse

from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view

from .serializers import EmojisSerializer, EmojisMadeSerializer, ResultMadeSerialzer
from datetime import datetime, timedelta
from .utils import create_emoji
from faces.utils import get_img_url
from users.models import User
from users.utils import user_token_to_data
from emojis.models import Emoji
from faces.models import Result

@api_view(['POST'])
def emojis(request):
    user_id = request.data['user_id']
    name = request.data['name'] # 이모지 이름
    image = request.data['image']
    image1 = request.data['image1']
    image2 = request.data['image2']
    image3 = request.data['image3']
    image4 = request.data['image4']
    image5 = request.data['image5']
    image6 = request.data['image6']

    userID= User.objects.get(id = user_id)
 #   userData = userID.alias
 #   payload = user_token_to_data(request.headers.get('Authorization', None))

# if (payload.get('alias') == str(userData)):
    img_url = "테스트" # get_img_url(image)
    img_url1 = "테스트1" # get_img_url(image1)
    img_url2 = "테스트2" # get_img_url(image2)
    img_url3 = "테스트3" # get_img_url(image3)
    img_url4 = "테스트4" # get_img_url(image4)
    img_url5 = "테스트5" # get_img_url(image5)
    img_url6 = "테스트6" # get_img_url(image6)

    img_url_pack = [img_url, img_url1, img_url2, img_url3, img_url4, img_url5, img_url6]
    
    images = create_emoji(userID, name, img_url_pack)
    data = EmojisSerializer(images, many=False).data
    return JsonResponse(data, status = 200)
    
# else :
#    return JsonResponse({"message": "Invalid_User"}, status=401)


#마이페이지 
@api_view(['GET'])
def mypage(request, number):
    user_id = request.data['user_id']
    # 내가 만든 이모지
    if number == 'upload' :
        userId = User.objects.get(id = user_id).id
        # payload = user_token_to_data(request.headers.get('Authorization', None))
        # if (payload.get('id') == str(userId)):
            # 해당 유저에 만든 데이터가 없을때
        if not Emoji.objects.filter(user_id=userId).exists():
            return JsonResponse({userId: 'PRODUCT_DOES_NOT_EXIST'}, status=404)
                
            # 해당 유저 데이터 받아오기
        resultByUser = Emoji.objects.all().filter(user_id = userId).values() 
        get_result= EmojisMadeSerializer(resultByUser, many=True).data
        return JsonResponse(get_result, status = 200, safe=False)
        # else:
        #     return JsonResponse({"message": "Token Error"}, status=401)
    
    # 내가 했던 이모지
    elif number == 'result' :
        userId = User.objects.get(id = user_id).id
        # payload = user_token_to_data(request.headers.get('Authorization', None))
        # if (payload.get('id') == str(userId)):
        if not Result.objects.filter(user_id=userId).exists():
            return JsonResponse({userId: 'PRODUCT_DOES_NOT_EXIST'}, status=404)
                
        resultByUser = Result.objects.all().filter(user_id=userId).values()
        get_result= ResultMadeSerialzer(resultByUser, many=True).data
        return JsonResponse(get_result, status = 200, safe=False)
        # else:
        #     return JsonResponse({"message": "Token Error"}, status=401)
        
    else :
        return JsonResponse({"message" : "Forbidden Route"}, status = 403)