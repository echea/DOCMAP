# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-04-25 03:29
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('document', '0008_auto_20160424_0928'),
    ]

    operations = [
        migrations.AddField(
            model_name='document',
            name='cites',
            field=models.ManyToManyField(related_name='_document_cites_+', to='document.Document'),
        ),
        migrations.AddField(
            model_name='document',
            name='references',
            field=models.ManyToManyField(related_name='_document_references_+', to='document.Document'),
        ),
    ]
