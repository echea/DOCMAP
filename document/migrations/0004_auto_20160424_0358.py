# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-04-24 03:58
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('document', '0003_document_dir'),
    ]

    operations = [
        migrations.AlterField(
            model_name='document',
            name='publish_time',
            field=models.DateTimeField(blank=True),
        ),
    ]