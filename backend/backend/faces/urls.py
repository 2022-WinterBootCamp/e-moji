from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.faces),
    path('ranking',views.get_ranking)
]
