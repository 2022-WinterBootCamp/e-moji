# Generated by Django 4.0.6 on 2023-01-30 15:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('emojis', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='emoji',
            name='user_count',
            field=models.IntegerField(default=0),
        ),
    ]
