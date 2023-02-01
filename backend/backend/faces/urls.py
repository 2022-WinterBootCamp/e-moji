from django.urls import path, include
from . import views

urlpatterns = [
    path('ranking',views.get_ranking),
    path('results/tasks',views.get_task_id),
    path('results/tasks/<task_id>',views.get_task_result),
]
