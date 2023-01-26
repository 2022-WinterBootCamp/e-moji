# Generated by Django 4.0.6 on 2023-01-25 13:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
        ('emojis', '0002_alter_emoji_image'),
        ('faces', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Result',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('kind', models.IntegerField()),
                ('image', models.CharField(max_length=200)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('emoji_id', models.ForeignKey(db_column='emoji_id', on_delete=django.db.models.deletion.CASCADE, to='emojis.emoji')),
                ('face_id', models.ForeignKey(db_column='face_id', on_delete=django.db.models.deletion.CASCADE, to='faces.face')),
                ('user_id', models.ForeignKey(db_column='user_id', on_delete=django.db.models.deletion.CASCADE, to='users.user')),
            ],
            options={
                'db_table': 'results',
            },
        ),
    ]
