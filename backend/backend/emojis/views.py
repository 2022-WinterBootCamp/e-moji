from django.shortcuts import render

# Create your views here.

def user_id(request):
    return JsonResponse(data, status=201)

def image(request):
    return JsonResponse()

def kind(request):
    return JsonResponse()

# JsonResponse
# return JsonResponse(data, status=201)
# return JsonResponse({"result": checker.username(value)}, status=200)
# { aaa : bbb}