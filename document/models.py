# -*- coding: utf-8 -*- 

from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Author(models.Model):
	first_name = models.CharField(max_length=50, null=True, blank=True)
	last_name = models.CharField(max_length=50, null=True, blank=True)

class Field(models.Model):
	name = models.CharField(max_length=50)
	subfields = models.ManyToManyField('self')

class Publisher(models.Model):
	name = models.CharField(max_length=50)

class Project(models.Model):
	name = models.CharField(max_length=20)
	description = models.CharField(max_length=200, null=True, blank=True)
	create_time = models.DateTimeField(auto_now_add=True)

class Note(models.Model):
	content = models.TextField(null=True, blank=True)
	create_time = models.DateTimeField(auto_now_add=True)
	last_edit_time = models.DateTimeField(auto_now_add=True, null=True)

class UserClass(models.Model):
	name = models.CharField(max_length=20)
	descrpition = models.CharField(max_length=200, null=True, blank=True)
	create_time = models.DateTimeField(auto_now_add=True)

class Document(models.Model):
	title = models.CharField(max_length=200)
	authors = models.ManyToManyField(Author)
	dir = models.CharField(max_length=100, null=True, blank=True)
	link = models.CharField(max_length=100, null=True, blank=True)
	fields = models.ManyToManyField(Field)
	description = models.CharField(max_length=200, null=True, blank=True)
	publish_time = models.CharField(max_length=100, null=True, blank=True)
	create_time = models.DateTimeField(auto_now_add=True)
	last_read_time = models.DateTimeField(null=True, blank=True)
	userclasses = models.ManyToManyField(UserClass)
	priority = models.IntegerField(default=3)
	references = models.ManyToManyField('self')
	publisher = models.ForeignKey(Publisher, null=True)
	projects = models.ManyToManyField(Project)
	note = models.ForeignKey(Note, null=True)

	def __unicode__(self):
		return str(self.id)

	class Meta:
		ordering = ['-create_time']

class ReferenceShip(models.Model):
	cite = models.ForeignKey(Document, related_name="reference_cited")
	reference = models.ForeignKey(Document, related_name="reference_reference")

class Entry(models.Model):
	name = models.CharField(max_length=50)
	documents = models.ManyToManyField(Document)

class Query(models.Model):
	query = models.CharField(max_length=200)
	entrys = models.ManyToManyField(Entry)
	description = models.CharField(max_length=200, null=True, blank=True)
	create_time = models.DateTimeField(auto_now_add=True)
	last_search_time = models.DateTimeField(auto_now_add=True)
	inclusion_list = models.ManyToManyField(Document, related_name="query_inclusion_list")
	exclusion_list = models.ManyToManyField(Document, related_name="query_exclusion_list")

# class FieldDocument(models.Model):
# 	field = models.ForeignKey(Field)
# 	documents = models.ForeignKey(Document2)