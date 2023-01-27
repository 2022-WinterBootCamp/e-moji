from rest_framework import serializers
from .models import Emoji
from faces.models import Result

# Serializer는 요청한 값을 정제해서 보내주기 위해 사용합니다. 원하는 값을 바로 묶어서 사용할 수 있는 장점이 있습니다.
# 장고 모델 쿼리셋을 json형태로 자동으로 바꿔줄 수 있게 만들어주는 용도입니다.
# 쓰지 않으면 response으로 일일이 넣어줘야되고 하나씩 작업해야 되는 불편함이 있습니다.
        
class EmojisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Emoji
        fields = ("id","user_id", "name", "image")

class EmojisMadeSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    user_id_id = serializers.IntegerField()
    name = serializers.CharField(max_length=100)
    image = serializers.ListField(child=serializers.CharField())

class ResultMadeSerialzer(serializers.ModelSerializer) :
    class Meta:
        model = Result
        fields = ("id","image",)

class EmojisMadeSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    alias = serializers.CharField()
    name = serializers.CharField()
    image = serializers.CharField()