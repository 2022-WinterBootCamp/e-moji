import io
from PIL import Image

from django.http import JsonResponse

from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view

from .serializers import PictureSerializer
from datetime import datetime, timedelta
from .utils import get_img_url, create_img
from users.models import Users

@api_view(['POST'])
def faces(request):
    user_id = request.data['user_id']
    image = request.data['image']
    img_url = get_img_url(image)
 
    userId = Users.objects.get(id = user_id)

    images = create_img(userId, img_url)
    data = PictureSerializer(images, many=False).data

    return JsonResponse(data, status = 200)