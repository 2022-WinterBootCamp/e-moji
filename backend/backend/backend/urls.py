from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api/v1/admin/', admin.site.urls),
    path('api/v1/users/',include("users.urls")),
    path('api/v1/faces/', include('faces.urls'))
]
