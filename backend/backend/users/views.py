from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status, mixins
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from rest_framework.decorators import permission_classes, authentication_classes

from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework_jwt.serializers import VerifyJSONWebTokenSerializer

from .serializers import *
from .models import *

@permission_classes([AllowAny])
class Registration(generics.GenericAPIView):
    serializer_class=CustomRegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if not serializer.is_valid(reaise_exception=True):
            return Response({"message": "Request Body Error."}, status=status.HTTP_409_CONFLICT)

        serializer.is_valid(raise_exception=True)
        user=serializer.save(request)
        return Response(
            {
                "user": UserSerializer(
                    user, context=self.get_serializer_context()
                ).data
            },
                status=status.HTTP_201_CREATED,
        )
            
@permission_classes([AllowAny])
class Login(generics.GenericAPIView):
    serializer_class = UserLoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        if not serializer.is_valid(raise_exception=True):
            return Response({"message": "Request Body Error."}, status=status.HTTP_409_CONFLICT)

        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        if user['email'] == "None":
            return Response({"message": "fail"}, status=status.HTTP_401_UNAUTHORIZED)
        
        return Response(
            {
                "user": UserSerializer(
                    user, context=self.get_serializer_context()
                ).data,
                "token": user['token']
            }
        )