from django.urls import path, include
from . import views

# user/urls.py
urlpatterns = [
    path('', views.user),
    path('auth',views.login),
    path('mypage/<case>', views.mypage),
]
