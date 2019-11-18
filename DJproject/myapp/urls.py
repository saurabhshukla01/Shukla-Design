from django.urls import path
from . import views

urlpatterns = [
    path("home",views.home , name="home"),
    path("about",views.about , name="about"),
    path("profile",views.Profile , name="Profile"),
    path("addstudent",views.addstudent , name="addstudent"),
    path("showstudent", views.showstudent , name="showstudent"),
    path("updatestudent/<int:id>", views.updatestudent , name="updatestudent"),
    path("deletestudent/<int:id>", views.deletestudent , name="deletestudent"),

]