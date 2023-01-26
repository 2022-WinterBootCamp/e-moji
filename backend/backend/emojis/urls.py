from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.emojis),
    path('recent', views.recent_check)
]
