import io
import base64
from PIL import Image
import pickle

from django.http import JsonResponse

from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view

from .serializers import PictureSerializer
from datetime import datetime, timedelta
from .utils import get_img_url, create_img

@api_view(['POST'])
def faces(request):
    user_id = request.data['user_id']
    image = request.data['image']
    img_url = get_img_url(image)

    images = create_img(user_id, img_url)
    data = PictureSerializer(images, many=False).data

    return JsonResponse(data, status = 200)