from django.urls import path, include
from . import views

# user/urls.py
urlpatterns = [
    path('', views.faces),
]
