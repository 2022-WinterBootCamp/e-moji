from django.http import JsonResponse
from .serializers import UserSignupResponse
from .models import User

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView

from .utils import create_user, user_find_email, user_get_access_token, user_ispassword, UserDuplicateCheck

@api_view(['GET','POST'])
def user(request):
    if request.method == 'GET':
        return is_duplicate(request)
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

@api_view(['POST'])
def login(request): #로그인 구현
    input_email = request.data['email']
    input_password = request.data['password']
    access_token = None
    if input_password and input_email:
        user_data = user_find_email(input_email).first()
        if user_data :
                if user_ispassword(input_password, user_data) :
                    access_token = user_get_access_token(user_data)
                else :
                    return JsonResponse({"message": "user not exist"}, status=400)
        else :
            return JsonResponse({"message": "user not exist"}, status=400)

    logindata = {"access_token": access_token}

    return JsonResponse(logindata, status=200)

def is_duplicate(request):
    case = request.GET.get('case')
    value = request.GET.get('value')
    checker = UserDuplicateCheck()
    #중복된 것이 없으면 true, 중복된 것이 있으면 false

    if case == 'alias':
        return JsonResponse({"result": checker.alias(value)}, status=200)
    elif case == 'email':
        return JsonResponse({"result": checker.email(value)}, status=200)
    else:
        return JsonResponse({"message": "Invalid value"}, status=401)