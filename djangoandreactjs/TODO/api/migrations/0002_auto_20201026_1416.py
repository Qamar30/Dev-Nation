# Generated by Django 3.0.3 on 2020-10-26 12:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='completed',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
    ]
