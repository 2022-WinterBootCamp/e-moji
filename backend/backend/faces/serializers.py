from rest_framework import serializers
from .models import Face, Result
 
class PictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Face
        fields = ("user_id", "image")

class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = ("user_id", "face_id", "emoji_id", "kind", "image")

class PictureIDSerializer(serializers.ModelSerializer):
    class Meta:
        model = Face
        fields = ("id","user_id", "image")