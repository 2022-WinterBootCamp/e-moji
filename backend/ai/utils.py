import boto3
# from env import AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY
from uuid import uuid4

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