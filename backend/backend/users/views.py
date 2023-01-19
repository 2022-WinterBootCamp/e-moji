from django.http import JsonResponse
from .serializers import UserSignupResponse
from .models import Users
import jwt
import datetime
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['username']=user.username

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



from rest_framework.decorators import api_view

def user_hash_password(password):
    password = str(password).encode('utf-8') # 해시하기 전에 인코딩을 먼저 해야된다!!
    return password

def create_user(email, password, alias):
    hash_password = user_hash_password(password)
    return Users.objects.create(email=email, alias=alias, password=hash_password)

@api_view(['POST'])
def user(request):
    if request.method == 'POST':
        return sign_up(request)
    
def sign_up(request):
    email = request.data['email']
    password = request.data['password']
    alias = request.data['alias']
    
    new_user = create_user(email, password, alias)
    data = UserSignupResponse(new_user, many=False).data

    return JsonResponse(data, status=201)

@api_view(['POST'])
def user_test(request) :
    email = 'test@naver.com'
    password = 'test'
    alias = 'test'
    
    new_user = create_user(email, password, alias)
    data = UserSignupResponse(new_user, many=False).data

    return JsonResponse(data, status=201)


