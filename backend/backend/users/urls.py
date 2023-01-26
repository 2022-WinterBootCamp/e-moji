from django.urls import path, include
from . import views

# user/urls.py
urlpatterns = [
    path('', views.user),
    path('test',views.user_test),
    path('sign_up', views.sign_up),
    path('auth',views.login),
    path('check_email', views.duplicate_check_email),
    path('check_alias', views.duplicate_check_alias),
         
        
]
