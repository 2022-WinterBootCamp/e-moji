import io
from PIL import Image

from django.http import JsonResponse

from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view

from .serializers import PictureSerializer # 클래스 이름 다르게 해야 하는지?
from datetime import datetime, timedelta
from .utils import get_img_url, create_img
from users.models import Users
# Create your views here.

@api_view(['POST'])
def emojis(request):
# 빈 리스트를 만들어서 for문으로 0~6까지 kind에 넣어주는 방법이 괜찮은지?
    return JsonResponse(data, status = 200)