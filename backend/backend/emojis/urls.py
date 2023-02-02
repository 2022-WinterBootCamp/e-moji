from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.emojis),
    path('pages/<int:page_number>',views.recent_check),
    path('delete/<int:emoji_id>',views.emoji_delete),
    path('<int:emoji_number>',views.emoji_check)
]