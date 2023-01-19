from django.urls import path, include
from . import views

# user/urls.py
urlpatterns = [
    path('', views.user),
    path('test',views.user_test),
    path('auth',views.login)
]
