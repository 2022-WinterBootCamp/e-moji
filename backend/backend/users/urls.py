from django.urls import path, include
from . import views

# user/urls.py
urlpatterns = [
    path('', views.user),
    path('test',views.user_test),
    path('signup', views.sign_up),
    path('auth',views.login),
    path('check', views.User_duplicate_check),
    
         
        
]
