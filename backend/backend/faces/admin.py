from django.contrib import admin
from .models import Faces
from .models import Result

@admin.register(Faces)
class FaceAdmin(admin.ModelAdmin):

    list_display = ['id','user_id','image']

@admin.register(Result)
class ResultAdmin(admin.ModelAdmin):

    list_display = ['id','user_id','face_id','emoji_id','kind','image']