import boto3 ,os
from backend.settings import AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY
from backend.settings import AWS_BUCKET_REGION, AWS_STORAGE_BUCKET_NAME

def s3_connection():
    '''
    s3 bucket에 연결하는 함수 
    '''
    s3 = boto3.client('s3',region_name = AWS_BUCKET_REGION, aws_access_key_id = AWS_ACCESS_KEY_ID, aws_secret_access_key = AWS_SECRET_ACCESS_KEY)
    return s3

def s3_put_object(s3, bucket, filepath, filename):
    '''
    s3 bucket에 파일 업로드
    '''
    try:
        s3.upload_file(filepath, bucket, filename)
    except Exception as e:
        print(e)
        return False
    return True

def s3_get_image_url(s3, filename : str):
    '''
    image url을 불러오는 함수 
    '''
    return f'https://{AWS_STORAGE_BUCKET_NAME}.s3.{AWS_BUCKET_REGION}.amazonaws.com/{filename}'