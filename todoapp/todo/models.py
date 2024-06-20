from django.db import models

class Todo(models.Model):
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=300,blank=True)
    date = models.DateTimeField(auto_now_add=True)
    done = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.title} - {self.done}"

    class Meta:
        verbose_name = 'Задача'
        verbose_name_plural = 'Задачи'
        ordering = ['id']
