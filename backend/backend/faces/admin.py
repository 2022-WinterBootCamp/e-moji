from django.contrib import admin
from .models import Face

@admin.register(Face)
class FaceAdmin(admin.ModelAdmin):

    list_display = ['id','user_id','image']