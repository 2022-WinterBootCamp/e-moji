from django.contrib import admin
from .models import Faces

@admin.register(Faces)
class UserAdmin(admin.ModelAdmin):

    list_display = ['user_id', 'image']