from django.db import models

# Create your models here.



class PostModel(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField(max_length=255)
    date = models.DateField(auto_now_add=True)


    def __str__(self):
        return self.title