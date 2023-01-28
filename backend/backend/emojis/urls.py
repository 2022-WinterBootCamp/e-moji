from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.emojis),
    path('mypage/<case>', views.mypage),
    path('pages/<page_number>',views.recent_check),
    path('delete/<user_id>',views.emoji_delete)
]