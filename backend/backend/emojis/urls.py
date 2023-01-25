from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.emojis),
    # path('user/<int:user_id>/mypage/<int:number>', views.mypage),
]