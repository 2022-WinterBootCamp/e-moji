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
from users.models import Users
# Create your views here.

@api_view(['POST'])
def emojis(request):
    user_id = request.data['user_id']
    name = request.data['name'] # 이모지 이름
    kind = request.data['kind'] # 프로필 사진, 표정 6가지 즉, kind 0~6까지 
    image = request.data['image']

    img_url = "테스트" # get_img_url(image)
 
    userId = Users.objects.get(id = user_id)
    
    images = create_emoji(userId, name, kind, image)
    data = EmojisSerializer(images, many=False).data
    
    return JsonResponse(data, status = 200)