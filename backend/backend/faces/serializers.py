from rest_framework import serializers
from .models import Faces
 
class PictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Faces
        fields = ("user_id", "image")  # 프론트에주는 값