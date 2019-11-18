from django.db import models

# Create your models here.
class Student(models.Model):
    username = models.CharField(max_length=30)
    email = models.EmailField()
    dob = models.DateField()
    password = models.CharField(max_length=16)
    image= models.ImageField(upload_to="images")

    def __str__(self):
        return self.username + ','+str(self.dob) +','+ self.email

