from django.contrib import admin
from .models import Emojis
# Register your models here.

@admin.register(Emojis)
class EmojiAdmin(admin.ModelAdmin):
    
    list_display = ['id', 'user_id', 'name', 'kind', 'image'] # 'name', 'kind'
