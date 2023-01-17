from django.http import JsonResponse
from .serializers import UserSignupResponse         #serializer 추가 필요.
from .models import Users                       #models.py 추가 필요.

from rest_framework.decorators import api_view

def create_password(password):

    password=str(password)

    return password

def create_user(email, password, alias):

    password = create_password(password)
    
    return Users.objects.create(email=email, alias=alias, password=password)

@api_view(['POST'])
def user(request):
    if request.method=='POST':
        return sign_up(request)

def sign_up(request):
    email=request.data['email']
    alias=request.data['alias']
    password=request.data['password']

    new_user=create_user(email, password, alias)
    data=UserSignupResponse(new_user, many=False).data

    return JsonResponse(data, status=201)

    
api_view(['POST'])
def user2_test(request):
    email='test@gmail.com'
    password='password'
    alias='daehee'

    new_user=create_user(email, password, alias)
    data=UserSignupResponse(new_user, many=False).data
    
    return JsonResponse(data, status=201)