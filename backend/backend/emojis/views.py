import io
from PIL import Image

from django.http import JsonResponse

from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view

from .serializers import EmojisSerializer
from datetime import datetime, timedelta
from .utils import create_emoji
from faces.utils import get_img_url
from users.models import User
from users.utils import user_token_to_data

@api_view(['POST'])
def emojis(request):
    user_id = request.data['user_id']
    name = request.data['name'] # 이모지 이름
    kind = request.data['kind'] # 프로필 사진, 표정 6가지 즉, kind 0~6까지 
    image = request.data['image']

    userID= User.objects.get(id = user_id)
    userData = userID.alias
    payload = user_token_to_data(request.headers.get('Authorization', None))

    if (payload.get('alias') == str(userData)):
        img_url = "테스트" # get_img_url(image)
    else :
        return JsonResponse({"message": "Invalid_User"}, status=401)
    
    images = create_emoji(userID, name, kind, img_url)
    data = EmojisSerializer(images, many=False).data
    
    return JsonResponse(data, status = 200)