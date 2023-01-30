from backend.settings import AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY
from .models import Emoji
import pandas as pd
from uuid import uuid4

def create_img(user_id, image):
    return Emoji.objects.create(user_id = user_id, image = image)

def create_emoji(user_id, name, image): # kind 삭제
    return Emoji.objects.create(user_id = user_id, name = name, image = image) # kind 삭제

def top3():
    return Emoji.user_count.rank(axis=1, method = 'first', ascending = False)

    


