from django.urls import path
from . import views

urlpatterns = [
    path("",views.index , name="index"),
    path("student-form",views.studentform , name="student_form"),
]