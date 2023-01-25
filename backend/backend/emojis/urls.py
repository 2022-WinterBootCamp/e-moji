from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.emojis),
    path('mypage/<number>', views.mypage),
]