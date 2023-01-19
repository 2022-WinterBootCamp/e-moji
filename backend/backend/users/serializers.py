from rest_framework import serializers
from allauth.account.adapter import get_adapter
from rest_framework_jwt.settings import api_settings
from django.contrib.auth import get_user_model
from django.contrib.auth.models import update_last_login
from django.contrib.auth import authenticate
from rest_auth.registration.serializers import RegisterSerializer
from .models import *


# Serializer는 요청한 값을 정제해서 보내주기 위해 사용합니다. 원하는 값을 바로 묶어서 사용할 수 있는 장점이 있습니다.
# 장고 모델 쿼리셋을 json형태로 자동으로 바꿔줄 수 있게 만들어주는 용도입니다.
# 쓰지 않으면 response으로 일일이 넣어줘야되고 하나씩 작업해야 되는 불편함이 있습니다.

JWT_PAYLOAD_HANDLER = api_settings.JWT_PAYLOAD_HANDLER
JWT_ENCODE_HANDLER = api_settings.JWT_ENCODE_HANDLER

User = get_user_model()

class CustomRegisterSerializer(RegisterSerializer):
    alias = serializers.CharField(required=False, max_length=50)

    def get_cleaned_data(self):
        data_dict=super().get_cleaned_data()
        
        return data_dict

class UserLoginSerializer(serializers.Serializer):
    email=serializers.CharField(max_length=30)
    password = serializers.CharField(max_length=128, write_only=True)
    token = serializers.CharField(max_length=255, read_only=True)

    def validate(self, data):
        email=data.get("email")
        password=data.get("password", None)

        user = authenticate(email=email, password=password)

        if user is None:
            return {'email':'None'}

        try:
            payload = JWT_PAYLOAD_HANDLER(user)
            jwt_token = JWT_ENCODE_HANDLER(payload)
            update_last_login(None, user)

        except User.DoesNotExist:
            raise serializers.ValidationError('User with given email and password does not exist')

        return {
            'email': user.email,
            'token': jwt_token
        }

    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model=User
            fields = ('id', 'email', 'alias')
