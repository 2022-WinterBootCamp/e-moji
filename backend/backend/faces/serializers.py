from rest_framework import serializers
from .models import Face
 
class PictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Face
        fields = ("user_id", "image")  # 프론트에주는 값