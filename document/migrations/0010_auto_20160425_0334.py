# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-04-25 03:34
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('document', '0009_auto_20160425_0329'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='author',
            name='name',
        ),
        migrations.AddField(
            model_name='author',
            name='first_name',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='author',
            name='last_name',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
