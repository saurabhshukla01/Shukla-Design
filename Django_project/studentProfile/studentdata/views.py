from django.shortcuts import render
from django.http import HttpResponse
from .models import Student
from .filters import StudentFilter
import time

# Create your views here.
def home(request):
    return render (request,'studentdata/home.html')
def about(request):
    return render (request,'studentdata/about.html')
def Profile(request):
    return render(request,'studentdata/profile.html')

def addstudent(request):
    if request.method == "POST":
        username = request.POST.get('username')
        dob = request.POST.get('dob')
        email = request.POST.get('email')
        password = request.POST.get('pwd')
        image = request.POST.get('profileImage')
        obj_student = Student.objects.create(username=username , dob = dob , email = email , password=password , image = image)
        #print(obj_student)
        obj_student.save()
        return HttpResponse("<h2>student create successfully</h2><a href='showstudent'>Show Student</a>")
    return render(request,'studentdata/addstudent.html')

def showstudent(request):
    """
    dict_student = {}
    student_data = Student.objects.all()
    print(student_data)
    lst_username = []
    lst_dob = []
    lst_email = []
    lst_image = []
    for i in student_data:
        lst_username.append(i.username)
        lst_dob.append(i.dob)
        lst_email.append(i.email)
        lst_image.append(i.image)
    """

    Student_list = Student.objects.all()
    student_filter = StudentFilter(request.GET, queryset=Student_list)
    #return render(request, 'search/user_list.html', {'filter': user_filter})

    #dict_student = {'username': lst_username , 'dob': lst_dob , 'email': lst_email , 'image': lst_image}
    return render(request,'studentdata/showstudent.html',{'filter': student_filter})

def updatestudent(request,id):
    if request.method == "GET":
        Student_list = Student.objects.filter(id=id)
        print(Student_list)
        student_dict = {}
        for i in Student_list:
            conv = time.strptime(str(i.dob), "%Y-%m-%d")
            student_dict['username'] = i.username
            student_dict['dob'] = time.strftime("%Y-%m-%d", conv)
            student_dict['email'] = i.email
            student_dict['password'] = i.password
        return render(request, 'studentdata/updatestudent.html', student_dict)
    if request.method == "POST":
        username = request.POST.get('username')
        dob = request.POST.get('dob')
        email = request.POST.get('email')
        password = request.POST.get('pwd')
        print(username+str(dob)+email+password)
        Student.objects.filter(id=id).update(username=username, dob =dob , email = email , password=password)
        print(Student)
        #print(student_dict)
        return HttpResponse('<h2>Record updated Successfully</h2><a href="../showstudent">back show student</a>')

def deletestudent(request,id):
    student_delete = Student.objects.get(id=id)
    student_delete.delete()
    return HttpResponse('<h2>Record deleted Successfully</h2><a href="../showstudent">back show student</a>')
    #return render(request,'studentdata/showstudent.html')