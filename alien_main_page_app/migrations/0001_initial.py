# Generated by Django 4.1.4 on 2022-12-14 10:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tasks',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('task_title', models.CharField(max_length=150)),
                ('task_description', models.TextField(max_length=300)),
                ('task_from', models.TextField(max_length=150)),
                ('task_to', models.TextField(max_length=150)),
                ('task_status', models.TextField(blank=True, max_length=50)),
                ('task_view', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('deadline', models.DateTimeField(blank=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
