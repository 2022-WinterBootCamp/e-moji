import requests

from django.http import JsonResponse
from django.db.models import Count
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view

from .serializers import PictureSerializer, ResultSerializer, PictureIDSerializer, ResultRankSerializer
from .utils import get_img_url, create_img, create_result
from users.utils import user_token_to_data
from users.models import User
from faces.models import Face
from emojis.models import Emoji
from .models import Result
from datetime import datetime, timedelta
from .tasks import ai_task
from celery.result import AsyncResult

@api_view(['POST'])
def get_task_id(request):
    emoji_id = request.data['emoji_id']
    user_id = request.data['user_id']
    image = request.data['image']

    userID= User.objects.get(id = user_id) # fk user_id

    payload = user_token_to_data(request.headers.get('Authorization', None))
    if (payload.get('id') == str(user_id)):
        image = get_img_url(image)
        # image = "https://upload.wikimedia.org/wikipedia/commons/7/73/BTS_during_a_White_House_press_conference_May_31%2C_2022_%28cropped%29.jpg"

        # 원본 사진 저장
        save_image = create_img(userID, image)
        data = PictureSerializer(save_image, many=False).data
        emojiID = Emoji.objects.get(id = emoji_id) # fk emoji_id
        data["emoji_id"] = emojiID.id
        data["emoji"] = emojiID.image
        task = ai_task.delay(data)
        return JsonResponse({"task_id": task.id})
    else:
        return JsonResponse({"message": "Invalid_Token"}, status=401)


@api_view(['GET'])
def get_task_result(request, task_id):
    task = AsyncResult(task_id)
    if not task.ready():  # 작업이 완료되지 않았을 경우
        return JsonResponse({"ai_result": "notyet"})

    ai_results = task.get("ai_results") # ai_result값 받기
    resultData = task.get("result")["result"] # result값 받아오기 (배열값)
    user_id = resultData['user_id']
    face_id = resultData['face_id']
    emoji_id =resultData['emoji_id']
    image_url = resultData['result_img']

    if ai_results['ai_results'] == 0:  # AI가 판별하지 못한 경우
        return JsonResponse({"ai_result": "false"})
    
    faceID = Face.objects.get(id = face_id) # fk face_id
    userID = User.objects.get(id = user_id) # fk user_id
    emojiID = Emoji.objects.get(id = emoji_id) # fk emoji_id

    save_result = create_result(userID, faceID, emojiID, image_url)
    result_data = ResultSerializer(save_result, many=False).data
    return JsonResponse(result_data, status=201, safe=False)
    


@api_view(['GET'])
def get_ranking(request):
    start_date = datetime.today() + timedelta(days=-6)
    end_date = datetime.today() + timedelta(days=1)
    queryset = Result.objects.filter(created_at__range=(start_date, end_date)).values(
        'emoji_id').annotate(cnt=Count('emoji_id')).order_by('-cnt') # django db에서 제공해주는 Count, 이미 값을 세고 있었다..
    ranking = ResultRankSerializer(queryset, many=True).data 

    #ranking은 emoji_id로 되어있어서 emoji name을 가져와야함.
    get_data = {}
    data_set= {}
    count = 0
    for i in ranking:
            EmojiName = Emoji.objects.filter(id = i['emoji_id']).values().first()
            # 딕셔너리 setdefault -> 값이 변하지 않음. 일반적으로는 값이 변함
            get_data.setdefault('name',EmojiName['name'])
            get_data.setdefault('cnt',i['cnt'])
            data_set[count] = get_data
            get_data = {} # 딕셔너리 초기화 후 데이터 넣기
            count += 1
    print(data_set)
    
    return Response(data_set)