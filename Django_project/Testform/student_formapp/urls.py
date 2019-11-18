from django.urls import path
from . import views
urlpatterns = [
    path("student-register", views.register_student , name="student_register"),
    path("show-student",views.show_student , name="show-student")

]