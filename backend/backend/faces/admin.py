from django.contrib import admin
from django.db import models

# Register your models here.
class Faces(models.Model):
    user_id = models.ForeignKey( "users.Users", on_delete=models.CASCADE, db_column='user_id', null=True)
    image = models.CharField(unique=True, max_length=200, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True, null=True)
    

class Meta:
    db_table = 'faces'