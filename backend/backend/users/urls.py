from django.urls import path
from . import views

# user/urls.py
urlpatterns = [
    path('', views.user),
    path('test',views.user_test)

    
]
