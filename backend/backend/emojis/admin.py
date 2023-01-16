from django.contrib import admin
from .models import Emojis
# Register your models here.

@admin.register(Emojis)
class EmogiAdmin(admin.ModelAdmin):
    
    list_display = ['id','user_id', 'kind', 'image'] # 'name'도 넣어주어야 하는지?
