from django.http import JsonResponse

from .models import Users

def user_test(request):
    if request.method == 'POST':
        return sign_up_test(request)
    
def sign_up_test(request):
    email = request.data['email']
    password = request.data['password']
    alias = request.data['alias']
    Users.objects.create( email=email, alias=alias, password=password)

    return JsonResponse({"result": email}, status=200)