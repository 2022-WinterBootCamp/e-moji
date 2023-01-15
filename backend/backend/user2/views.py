from django.shortcuts import render
from django.http import JsonResponse
from .serializers import UserSignupResponse
from .models import Users
# Create your views here.


def signup(request):
    return