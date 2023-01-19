from django.urls import path
from django.conf.urls import url

from . import views



# user/urls.py
urlpatterns = [
    path('create', views.Registration.as_view()),
    path('login', views.Login.as_view()),
]
