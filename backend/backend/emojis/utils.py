import boto3 ,os
from backend.settings import AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY
from .models import Emojis

from uuid import uuid4

def create_img(user_id, image):
    return Emojis.objects.create(user_id = user_id, image = image)

def create_emoji(user_id, name, kind, image):
    return Emojis.objects.create(user_id = user_id, name = name, kind = kind, image = image)