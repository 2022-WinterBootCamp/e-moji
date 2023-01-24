from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework.permissions import AllowAny
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view_v1 = get_schema_view(
    openapi.Info(
        title="Faces APIs",
        default_version='v1',
        description="이게 모지 API 목록입니다.",
        terms_of_service="https://www.google.com/policies/terms/",
    ),
    public=True,
    permission_classes=(AllowAny,),
)

urlpatterns = [
    path('api/v1/admin/', admin.site.urls),
    path('api/v1/users/',include("users.urls")),
    path('api/v1/faces/', include('faces.urls')),
    


    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view_v1.without_ui(cache_timeout=0), name='schema-json'),
    re_path(r'^swagger/$', schema_view_v1.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    re_path(r'^redoc/$', schema_view_v1.with_ui('redoc', cache_timeout=0), name='schema-redoc')
]