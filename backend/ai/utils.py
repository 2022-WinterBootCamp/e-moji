import boto3 ,os
from env import AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY
import json
from uuid import uuid4

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


def upload_s3(img) :
       bucket_name = "what-moji"
       file_name = img
       image_uuid = str(uuid4())
       image_type = "jpg"
       s3 = boto3.client('s3',aws_access_key_id=AWS_ACCESS_KEY_ID,
        aws_secret_access_key=AWS_SECRET_ACCESS_KEY)
       s3.upload_file(file_name, bucket_name, image_uuid + "." + image_type)
       image_url = "http://what-moji.s3.ap-northeast-2.amazonaws.com/" + image_uuid + "." + image_type
       return image_url