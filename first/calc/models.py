from django.db import models

# Create your models here.
class Events(models.Model):
    name=models.CharField(max_length=100)
    img=models.ImageField(upload_to='pics')
    desc=models.TextField()

    def __str__(self):
        return self.name