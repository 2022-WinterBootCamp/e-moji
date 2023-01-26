from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.emojis),
     path('users/<user_id>/pages/<page_number>',views.recent_check)
]
