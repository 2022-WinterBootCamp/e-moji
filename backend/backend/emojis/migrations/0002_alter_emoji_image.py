# Generated by Django 4.0.6 on 2023-01-25 13:43

from django.db import migrations, models
import django_mysql.models


class Migration(migrations.Migration):

    dependencies = [
        ('emojis', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='emoji',
            name='image',
            field=django_mysql.models.ListCharField(models.CharField(max_length=150), max_length=1400, size=7),
        ),
    ]
