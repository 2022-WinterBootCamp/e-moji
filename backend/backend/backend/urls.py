from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('api/v1/admin/', admin.site.urls),
    path('api/v1/users/',include("users.urls"))
    path('faces', views.mypage)
]
