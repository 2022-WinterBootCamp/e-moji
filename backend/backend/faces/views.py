import io
from PIL import Image
import requests

from django.http import JsonResponse

import time
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view

from .serializers import PictureSerializer
from .utils import get_img_url, create_img
from users.models import Users

@api_view(['POST'])
def faces(request):
    user_id = request.data['user_id']
    image = request.data['image']
 
    userId = Users.objects.get(id = user_id)
    if userId :
        # img_url = get_img_url(image)
        img_url = "aaaa"
    else :
        return JsonResponse({"message": "Invalid_User"}, status=401)

    images = create_img(userId, img_url)
    data = PictureSerializer(images, many=False).data

    url = 'http://ai_server:8000/api/v1/images/'
    result = requests.post(url, json=data, verify=False).json()
    return JsonResponse(result, status=201, safe=False)