from django.shortcuts import render
from django.contrib import messages

# Create your views here.
def login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        paswd = request.POST.get('password')
        if email == 'admin@gmail.com' and paswd == '1234567':
            return render(request,'client/welcome.html')
        else:
            messages.info(request, 'username or password is incorrect, please try again')
    return render(request,'client/login.html')