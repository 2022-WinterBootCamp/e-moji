from django.db import models

class User(models.Model):
    id = models.AutoField(primary_key=True)
    email = models.CharField(unique=True, max_length=200, null=True, blank=True)
    password = models.BinaryField(max_length=60)
    alias = models.CharField(unique=True, max_length=20)
    active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True)

    class Meta:
        db_table = 'users'