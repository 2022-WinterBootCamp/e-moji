from django.http import JsonResponse
from .serializers import UserSignupResponse
from .models import Users

def user_test(request):
    if request.method == 'POST':
        return sign_up_test(request)
    
def sign_up_test(request):
    email = request.data['email']
    password = request.data['password']
    alias = request.data['alias']
    
    new_user = Users.objects.create( email=email, alias=alias, password=password)
    data = UserSignupResponse(new_user, many=False).data

    return JsonResponse(data, status=201)