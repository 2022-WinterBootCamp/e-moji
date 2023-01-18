from django.db import models
from users.models import Users
from emojis.models import Emojis

class Faces(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE, db_column='user_id')
    image = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True)

    class Meta:
        db_table = 'faces'

class Result(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE, db_column='user_id')
    face_id = models.ForeignKey(Faces, on_delete=models.CASCADE, db_column='face_id')
    emoji_id = models.ForeignKey(Emojis, on_delete=models.CASCADE, db_column='emoji_id')
    kind = models.IntegerField()
    image = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True)

    class Meta:
        db_table = 'results'