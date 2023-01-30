import os
import boto3
from PIL import Image
from io import BytesIO
from uuid import uuid4
from env import AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY
import urllib.request
import numpy as np
import cv2

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
        

# def from_s3(image):
#         s3_client = boto3.client(
#         's3',
#         aws_access_key_id=AWS_ACCESS_KEY_ID,
#         aws_secret_access_key=AWS_SECRET_ACCESS_KEY
#     )
#         key = image[49:] # s3 url의 사진을 받아오기 위함. 일반 url로는 불가능
#         file_byte_string = s3_client.get_object(Bucket="what-moji", Key=key)['Body'].read()
#         return Image.open(BytesIO(file_byte_string))

def url_to_image(url):
    resp = urllib.request.urlopen(url)
    image = np.asarray(bytearray(resp.read()), dtype="uint8")
    image = cv2.imdecode(image, cv2.IMREAD_COLOR)

    return image

def emotions(result) :
    if result == "neutral" :
            return 0
    elif result == "disgust" :
            return 1
    elif result == "fear" :
            return 2
    elif result == "happy" :
            return 3
    elif result == "angry" :
            return 4
    elif result == "sad" :
            return 5
    elif result == "surprise" :
            return 6
