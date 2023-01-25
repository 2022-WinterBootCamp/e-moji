from django.db import models
from django_mysql.models import ListCharField
from users.models import User
# Create your models here.

class Emoji(models.Model): # django admin에서 보이는 s 수정
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, db_column='user_id')
    name = models.CharField(max_length=200)
    image = ListCharField(
        base_field=models.CharField(max_length=10),
        size=6,
        max_length=(6 * 11),  # 6 * 10 character nominals, plus commas
    )
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True)
    
    class Meta:
        db_table = 'emoji' 