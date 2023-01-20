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
from users.utils import user_token_to_data
from users.models import User

@api_view(['POST'])
def faces(request):
    user_id = request.data['user_id']
    image = request.data['image']

    userID= User.objects.get(id = user_id)
    userData = userID.alias
    payload = user_token_to_data(request.headers.get('Authorization', None))
    if (payload.get('alias') == str(userData)):
        # img_url = get_img_url(image)
        img_url = "aaaa"
    else :
        return JsonResponse({"message": "Invalid_User"}, status=401)

    images = create_img(userID, img_url)
    data = PictureSerializer(images, many=False).data

    url = 'http://ai_server:8000/api/v1/images/'
    result = requests.post(url, json=data, verify=False).json()
    return JsonResponse(result, status=201, safe=False)