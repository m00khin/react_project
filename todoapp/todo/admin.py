from django.contrib import admin
from .models import *


@admin.register(Todo)
class TodoAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description', 'datetime', 'done')
    search_fields = ('id', 'title', 'description')
    list_editable = ('done', )
    list_filter = ('done', )

    def datetime(self, stamp):
        return stamp.date.strftime('%d.%m.%Y %H:%M:%S')

# admin.site.register(Todo, TodoAdmin)
