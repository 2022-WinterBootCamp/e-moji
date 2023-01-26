##utils
from .models import User
import jwt
from backend.settings import ALGORITHM, JWT_SECRET_KEY
from datetime import datetime, timedelta
import bcrypt

def user_find_email(email):
    return User.objects.filter(email=email)



def create_salt_hashed_password(password):
    password=str(password).encode('utf-8')
    salt=bcrypt.gensalt()
    hash_password = bcrypt.hashpw(password, salt)
    return hash_password, salt

def create_user(email, password, alias):
    hash_password, salt = create_salt_hashed_password(password)
    return User.objects.create(email=email, alias=alias, password=hash_password, salt=salt)

def user_get_access_token(user_data):
    return jwt.encode(
        {'id': str(user_data.id), 'alias': user_data.alias, 'exp': datetime.utcnow() + timedelta(minutes=30),
         'type': 'access_token'},
        JWT_SECRET_KEY, ALGORITHM).decode('utf-8')

def user_token_to_data(token):
    try:
        payload = jwt.decode(token, JWT_SECRET_KEY, algorithms=ALGORITHM)
    except jwt.exceptions.ExpiredSignatureError: #토큰이 날짜가 만료되었을 때
        return "Expired_Token"
    except jwt.exceptions.DecodeError: # 토큰 디코딩 오류 생겼을 때
        return "Invalid_Token"
    return payload

def user_ispassword(password, user_data):
    password=str(password).encode('utf-8')
    hash_password = bcrypt.hashpw(password, user_data.salt)
    return hash_password == user_data.password

