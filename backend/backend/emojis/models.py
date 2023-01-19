from django.db import models
from users.models import User
# Create your models here.

class Emoji(models.Model): # django admin에서 보이는 s 수정
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, db_column='user_id')
    name = models.CharField(max_length=200)
    kind = models.IntegerField()
    image = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True)
    
    class Meta:
        db_table = 'emoji' 