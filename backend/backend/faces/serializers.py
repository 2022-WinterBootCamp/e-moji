from rest_framework import serializers
from .models import Face, Result
 
class PictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Face
        fields = ("id","user_id", "image")

class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = ("id","user_id", "face_id", "emoji_id", "image")

class PictureIDSerializer(serializers.ModelSerializer):
    class Meta:
        model = Face
        fields = ("id","user_id", "image")

class ResultRankSerializer(serializers.Serializer):
    emoji_id = serializers.SerializerMethodField()
    cnt = serializers.SerializerMethodField()

    class Meta:
        model = Result
        fields = '__all__'

    def get_cnt(self, model_instance):
        print(model_instance)
        return model_instance['cnt']
    
    def get_emoji_id(self, model_instance):
        return model_instance['emoji_id']