import json

from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from django.http import JsonResponse

from .serializers import EmojisSerializer, EmojisMadeSerializer, AllDataSerializer
from .utils import create_emoji
from faces.utils import get_img_url
from users.models import User
from users.utils import user_token_to_data
from emojis.models import Emoji
from faces.models import Result
    


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
        img_url =  get_img_url(image) 
        img_url1 = get_img_url(image1)
        img_url2 = get_img_url(image2)
        img_url3 = get_img_url(image3)
        img_url4 = get_img_url(image4)
        img_url5 = get_img_url(image5)
        img_url6 = get_img_url(image6)

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
