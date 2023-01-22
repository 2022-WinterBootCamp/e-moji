from django.db import models
from django.contrib.auth.models import UserManager, AbstractUser

class Users(AbstractUser):

    objects = UserManager()
    alias = models.CharField(blank=True, max_length=50)
    
class Meta:
    db_table = 'member'