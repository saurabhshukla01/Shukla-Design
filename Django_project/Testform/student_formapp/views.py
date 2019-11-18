from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
'''
def register(request):
    return HttpResponse('index form')
'''
def register_student(request):
    return render(request,'register_student.html')
def show_student(request):
    stu_dict ={}
    stu_fname= request.POST.get('fname')
    stu_lname= request.POST.get('lname')
    stu_email= request.POST.get('email')
    stu_image= request.POST.get('file')
    stu_username= request.POST.get('username')
    password= request.POST.get('pwd')
    confirm_password= request.POST.get('cpwd')
    stu_dict = {'first_name' : stu_fname, 'last_name' :stu_lname , 'email' : stu_email , 'image_path' : stu_image ,
                'username' : stu_username }
    return render(request,'show_student.html',stu_dict)