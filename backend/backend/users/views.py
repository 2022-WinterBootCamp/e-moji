from django.http import JsonResponse
from .serializers import UserSignupResponse
from .models import User

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView

from .utils import create_user, user_find_email, user_get_access_token, user_ispassword, Duplicate_Check

@api_view(['GET', 'POST'])
def user(request):
    if request.method == 'GET':
        return user_duplicate_check(request)
    
    if request.method == 'POST':
        return sign_up(request)
    
    
def sign_up(request):
    email = request.POST['email']
    password = request.POST['password']
    alias = request.POST['alias']
    
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


def user_duplicate_check(request):
    case = request.GET.get('case')
    value = request.GET.get('value')
    standard= Duplicate_Check()

    if case =='email':
        return JsonResponse({"result": standard.email(value)}, status = 200)
    
    elif case == 'alias':
        return JsonResponse({"result": standard.alias(value)}, status=200)
    
    else:
        return JsonResponse({"message": "Invalid value"}, status=401)