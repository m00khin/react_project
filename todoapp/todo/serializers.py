from rest_framework import serializers
from .models import Todo


class TodoSerializer(serializers.ModelSerializer):
    # date_time_field = serializers.DateTimeField('format=%d.%m.%Y %H:%M:%S')

    class Meta:
        model = Todo
        # fields = ['id', 'title', 'description', 'date_time_field', 'done']
        fields = '__all__'

