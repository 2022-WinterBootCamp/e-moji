from django.urls import path
from user2 import views

urlpatterns = [

    path('', views.user2),
    path('test', views.user2_test),


    ]