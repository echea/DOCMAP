# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-04-25 05:38
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('document', '0014_auto_20160425_0538'),
    ]

    operations = [
        migrations.AlterField(
            model_name='document',
            name='title',
            field=models.CharField(max_length=200),
        ),
    ]
