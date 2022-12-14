from django.db import models

class Tasks(models.Model):
    task_title = models.CharField(max_length=150)
    task_description = models.TextField(max_length=300)
    task_from = models.TextField(max_length=150)
    task_to = models.TextField(max_length=150)
    task_status = models.TextField(max_length=50, blank=True)
    task_view = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    # deadline = models.DateTimeField(blank=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.task_title
