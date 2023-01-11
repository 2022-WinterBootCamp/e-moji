from django.shortcuts import render
from django.http import JsonResponse
from .models import Great, Picture, Result
from users.models import Users
from users.serializers import UUIDSerializer
from users.userUtil import user_token_to_data

from backend.settings import AWS_STORAGE_BUCKET_NAME, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY

from .utils import s3_connection, get_ai_result, s3_get_image_url, s3_put_object, get_animal_num
from .serializers import GreatlistResponse, MyPageResponse

from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
import requests
from django.conf import settings
from django.core.files.storage import FileSystemStorage


# redis 
import time
import logging
from django.core.cache import cache


import os, json
from pathlib import Path
from uuid import uuid4
from datetime import datetime
from dateutil.relativedelta import *
from .tasks import ai_task
from celery.result import AsyncResult
from PIL import Image, ImageOps
import numpy as np

@api_view(['POST'])
def faces(request,user_id):
    userId = Users.objects.get(uuid = user_id).id
    payload = user_token_to_data(request.headers.get('Authorization', None))
    if (payload.get('id') == str(userId)):
        picuuid = str(uuid4())
        file = request.FILES['filename']
        userquery = Users.objects.filter(uuid = user_id).values()
        userid = (userquery[0])['id']
        fs = FileSystemStorage(location='media', base_url='media')
        filename = fs.save(picuuid+'.png', file)
        uploaded_file_url = fs.url(filename)
        # s3 버킷에 업로드
        s3 = s3_connection()
        retPut = s3_put_object(
            s3, AWS_STORAGE_BUCKET_NAME, '/app/media/' + str(picuuid) + '.png', 'image/' + str(picuuid) + '.png')
        retGet = s3_get_image_url(s3, 'image/' + str(picuuid) + '.png') #s3 이미지 url
        # picture 정보 db에 저장
        Picture.objects.create(user_id = Users.objects.get(id=userid), picture_url = retGet, uuid = picuuid )
        task = ai_task.delay(filename)
        returndata = {"task_id":task.id, "picuuid":picuuid}
        # task = ai_task.delay()
        return JsonResponse(returndata)
    else:
        return JsonResponse({"message": "Token Error"}, status=401)