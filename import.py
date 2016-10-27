#-*- coding: utf-8 -*-

import os
import bibtexparser
import django
from datetime import datetime

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "document_management.settings")
django.setup()

from document.models import Document, Author, Field, Publisher, Project

with open('/home/each/Documents/document_management/static/test/ml.bib', 'r') as bibfile:
	bibstring = bibfile.read()

bd = bibtexparser.loads(bibstring)
docs = bd.entries

pro = Project(name="deep learning study", description="this is project is used for deep learning study")
pro.save()

for doc in docs:
	if "title" in doc:
		title = doc['title'].replace("{", "").replace("}", "")
		try:
			document = Document.objects.get(title=title)
			print "sucess"
		except:
			print "except"
			# exit()
			document = Document(title=title)

	if "author" in doc:
		authors_s = doc['author'].split("and")
		authors = []
		for author_s in authors_s:
			author_s = author_s.strip().replace("{", "").replace("}", "")
			names = author_s.split(", ")
			last_name = names[0]
			if len(names) > 1:
				first_name = names[1]
				try:
					author = Author.objects.get(last_name=last_name, first_name=first_name)
				except:
					author = Author(last_name=last_name, first_name=first_name)
					author.save()
			else:
				try:
					author = Author.objects.get(last_name=last_name)
				except:
					author = Author(last_name=last_name)
					author.save()
			authors.append(author)
			# print last_name

	if "keyword" in doc:
		keywords = doc['keyword'].split(",")
		fields = []
		for keyword in keywords:
			keyword = keyword.strip()
			try:
				field = Field.objects.get(name=keyword)
			except:
				field = Field(name=keyword)
				field.save()
			fields.append(field)
			# print keyword

	if "abstract" in doc:
		description = doc['abstract']
		document.description = description
		# print description

	if "month" in doc and "year" in doc:
		publish_time = datetime.strptime(doc["month"]+"-"+doc["year"], "%b-%Y").date()
		publish_time = str(publish_time.year)+"-"+str(publish_time.month)
		document.publish_time = publish_time
	elif "year" in doc:
		publish_time = datetime.strptime(doc["year"], "%Y").year 
		publish_time = str(publish_time)
		document.publish_time = publish_time

	if "publisher" in doc:
		publisher = doc['publisher']

		# print publisher
	elif "journal" in doc:
		publisher = doc['journal']
		# print publisher
	else:
		publisher = None
	if publisher:
		try:
			publisher = Publisher.objects.get(name=publisher)
		except:
			publisher = Publisher(name=publisher)
			publisher.save()
		document.publisher = publisher
	else:
		document.publisher = None

	if "link" in doc:
		link = doc['link']
		# print link
		document.link = link
	
	document.save()
	for author in authors:
		document.authors.add(author)
	for field in fields:
		document.fields.add(field)
	document.projects.add(pro)
	document.save()
	# exit()
	# document = Document(title=title, url=url, description=description, publish_time=publish_time)
	# document.save()

