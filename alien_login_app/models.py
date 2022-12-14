from django.db import models

class Users(models.Model):
    user_login = models.CharField(max_length=150)
    user_password = models.CharField(max_length=150)
    user_name = models.CharField(max_length=150)
    user_surname = models.CharField(max_length=150,blank=True)
    user_work_position = models.CharField(max_length=150)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user_name

