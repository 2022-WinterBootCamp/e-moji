import boto3 ,os
from backend.settings import AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY
from .models import Face
from .models import Result
from .models import Emoji
import json
from uuid import uuid4
import requests

def get_img_url(img):
    s3_client = boto3.client(
        's3',
        aws_access_key_id=AWS_ACCESS_KEY_ID,
        aws_secret_access_key=AWS_SECRET_ACCESS_KEY
    )
    image = img
    image_type = "jpg"
    image_uuid = str(uuid4())
    s3_client.put_object(Body=image, Bucket='what-moji', Key=image_uuid + "." + image_type)
    image_url = "http://what-moji.s3.ap-northeast-2.amazonaws.com/" + \
                image_uuid + "." + image_type
    image_url = image_url.replace(" ", "/")
    return image_url

def create_img(user_id, image):
    return Face.objects.create(user_id = user_id, image = image)

def create_result(user_id, face_id, emoji_id, image):
    return Result.objects.create(user_id = user_id, face_id = face_id, emoji_id = emoji_id, image = image)

def get_ai_result(data): # ai 서버에 api 요청 후 결과 받아오기
    print(data)
    url = 'http://ai_server:8000/api/v1/images/'
    result = requests.post(url, json=data, verify=False).json()
    ai_results = "done"

    return {"ai_results":' '.join(ai_results), "result" : result}
