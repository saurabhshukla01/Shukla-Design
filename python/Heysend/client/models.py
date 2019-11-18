from django.db import models

# Create your models here.
class list_upload(models.Model):
    TYPE_CHOICES = (
        ('1', 'List'),
        ('2', 'Segment'),
        ('3', 'Testmail'),
        ('4', 'Transactional Mail'),
    )
    type = models.CharField(max_length=1, choices=TYPE_CHOICES)
    name = models.CharField(max_length=50)
    uploadBtn = models.FileField()
    datacount = models.IntegerField(default=0)
    addeddate = models.DateTimeField()
    uid = models.CharField(max_length=20)


