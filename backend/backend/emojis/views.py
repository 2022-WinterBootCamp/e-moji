import json

from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from django.http import JsonResponse

from .serializers import EmojisSerializer, EmojisMadeSerializer, AllDataSerializer
from datetime import datetime, timedelta
from .utils import create_emoji
from faces.utils import get_img_url
from users.models import User
from users.utils import user_token_to_data
from emojis.models import Emoji
from faces.models import Result
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
    


@api_view(['GET', 'POST'])
def emojis(request):
    if request.method == 'GET':
        return emoji_check(request)
    
    if request.method == 'POST':
        return emoji_create(request)
    
def emoji_create(request):
    user_id = request.data['user_id']
    name = request.data['name'] # 이모지 이름
    image = request.data['image']
    image1 = request.data['image1']
    image2 = request.data['image2']
    image3 = request.data['image3']
    image4 = request.data['image4']
    image5 = request.data['image5']
    image6 = request.data['image6']

    userID= User.objects.get(id = user_id)
    userData = userID.id
    payload = user_token_to_data(request.headers.get('Authorization', None))

    if (payload.get('id') == str(userData)):
        img_url =  "https://what-moji.s3.ap-northeast-2.amazonaws.com/42b21296-d2b7-48ea-977e-d5c98a7f4218.jpg" # get_img_url(image) 
        img_url1 = "https://what-moji.s3.ap-northeast-2.amazonaws.com/719b5c80-b12b-440a-93d4-d91aab4ebdd3.jpg" # get_img_url(image1)
        img_url2 = "https://what-moji.s3.ap-northeast-2.amazonaws.com/678d9650-0fe9-437e-a402-5d5ceb6452a7.jpg" # get_img_url(image2)
        img_url3 = "https://what-moji.s3.ap-northeast-2.amazonaws.com/61e42736-e75f-46b7-ad6b-733f2be827a5.jpg" # get_img_url(image3)
        img_url4 = "https://what-moji.s3.ap-northeast-2.amazonaws.com/30e5f2ef-6756-4264-8668-991c527f0dbe.jpg" # get_img_url(image4)
        img_url5 = "https://what-moji.s3.ap-northeast-2.amazonaws.com/a3a01b60-9a1b-45f3-8d38-a94ab53144ac.jpg" # get_img_url(image5)
        img_url6 = "https://what-moji.s3.ap-northeast-2.amazonaws.com/98614e0a-2bd3-4df4-9dee-ea9f85d58e41.jpg" # get_img_url(image6)

        img_url_pack = [img_url, img_url1, img_url2, img_url3, img_url4, img_url5, img_url6]
        
        images = create_emoji(userID, name, img_url_pack)
        data = EmojisSerializer(images, many=False).data
        return JsonResponse(data, status = 200)
    
    else :
        return JsonResponse({"message": "Invalid_User"}, status=401)

def emoji_check(request, emoji_number) :
    emojiData = Emoji.objects.get(id = emoji_number, active = 1)
    result = EmojisMadeSerializer(emojiData).data
    return JsonResponse(result, status = 201)


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


# 페이지당 이모지 8개씩 조회 
EMOJIS_PAGE_SIZE = 8
@api_view(['GET'])
def recent_check(self, page_number):
        get_data = {}
        data_set = {}
        offset = (page_number-1)*EMOJIS_PAGE_SIZE
        recentData = Emoji.objects.filter(active=1).order_by('-created_at')[offset:offset+EMOJIS_PAGE_SIZE].values()
        count = recentData.count()
        print(count)
        for i in recentData :
            makerName = User.objects.filter(id = i['user_id_id']).values().first()
            # 딕셔너리 setdefault -> 값이 변하지 않음. 일반적으로는 값이 변함
            get_data.setdefault('id', i['id'])
            get_data.setdefault('name', i['name'])
            get_data.setdefault('alias',makerName['alias'])
            get_data.setdefault('image',i['image'])
            data_set[count] = get_data
            get_data = {} # 딕셔너리 초기화 후 데이터 넣기
            count -= 1
        serializer = AllDataSerializer(data_set.values(), many=True)
        return JsonResponse(serializer.data, safe = False)


# 삭제 API 
# 실제 DB에서는 삭제하지 않고 페이지 조회에서 보이지 않음
@api_view(['PUT'])
def emoji_delete(request, emoji_id):
    Emoji.objects.filter(id=emoji_id).update(active = 0)
    return Response("test ok", status=status.HTTP_200_OK)
