from django.contrib import admin

from .models import Faces

@admin.register(Faces)
class FaceAdmin(admin.ModelAdmin):

    list_display = ['id','user_id','image']