from django.contrib import admin
from .models import Face
from .models import Result

@admin.register(Face)
class FaceAdmin(admin.ModelAdmin):

    list_display = ['id','user_id','image']

@admin.register(Result)
class ResultAdmin(admin.ModelAdmin):

    list_display = ['id','user_id','face_id','emoji_id','image']