from django.http import JsonResponse
from .serializers import UserSignupResponse
from .models import User
from emojis.models import Emoji
from faces.models import Result
from .utils import user_token_to_data

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
    

#마이페이지 
@api_view(['GET'])
def mypage(request, case):
    user_id = request.GET.get('user_id', None)
    userId = User.objects.get(id = user_id).id

    payload = user_token_to_data(request.headers.get('Authorization', None))
    try : 
        payload.get('id') == str(userId)
    except :
        return JsonResponse({"message": "Token Error"}, status = 401, safe=False)
    
    if (payload.get('id') == str(userId)) :
   
        # 결과값 데이터 세팅
        get_data = {}
        data_set = {}
        count = 0 

        # 내가 만든 이모지 
        if case == 'upload' :
                # 해당 유저에 만든 데이터가 없을때
                if not Emoji.objects.filter(user_id=userId, active=1).exists():
                    return JsonResponse({userId: 'PRODUCT_DOES_NOT_EXIST'}, status=404)
                emojiMyData = Emoji.objects.filter(user_id = user_id, active=1).values()

                for i in emojiMyData :
                    userName = User.objects.filter(id = i['user_id_id']).values().first()
                    # 딕셔너리 setdefault -> 값이 변하지 않음. 일반적으로는 값이 변함
                    get_data.setdefault('id', i['id'])
                    get_data.setdefault('name', i['name'])
                    get_data.setdefault('alias',userName['alias'])
                    get_data.setdefault('image',i['image'])
                    data_set[count] = get_data
                    get_data = {} # 딕셔너리 초기화 후 데이터 넣기
                    count += 1

                if(data_set == {}) : # 데이터를 다 지웠을때
                    return JsonResponse({userId: 'PRODUCT_DOES_NOT_EXIST'}, status=404)
                return JsonResponse(data_set, status = 200, safe=False)

        # 내가 했던 이모지
        elif case == 'result' :
            if not Result.objects.filter(user_id=userId).exists():
                return JsonResponse({userId: 'PRODUCT_DOES_NOT_EXIST'}, status=404)
            resultMyData = Result.objects.filter(user_id = user_id).values()

            for i in resultMyData :
                userEmoji = Emoji.objects.filter(id = i['emoji_id_id'], active=1).values().first()
                print(userEmoji)
                if(userEmoji == None) :
                    continue
                makerName = User.objects.filter(id = userEmoji['user_id_id']).values().first()
                # 딕셔너리 setdefault -> 값이 변하지 않음. 일반적으로는 값이 변함
                get_data.setdefault('id', i['id'])
                get_data.setdefault('name', userEmoji['name'])
                get_data.setdefault('alias',makerName['alias'])
                get_data.setdefault('image',i['image'])
                data_set[count] = get_data
                get_data = {} # 딕셔너리 초기화 후 데이터 넣기
                count += 1
                
            if(data_set == {}) : # 데이터를 다 지웠을때
                return JsonResponse({userId: 'PRODUCT_DOES_NOT_EXIST'}, status=404)
            return JsonResponse(data_set, status = 200, safe=False)
            
        else :
            return JsonResponse({"message" : "Forbidden Route"}, status = 403)
    else:
        return JsonResponse({"message": "Invalid Token"}, status=403)