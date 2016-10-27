#-*- coding: utf-8 -*-

import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "document_management.settings")
django.setup()

from document.models import Document, ReferenceShip, Project

docs = Document.objects.all()

index = {111:1,118:2,114:3,117:4,124:5,119:6,121:7,110:8,120:9,116:10,115:11,122:12,113:13,112:14,106:15,123:16,108:17,109:18,107:19,99:20}
ids = {1:111,2:118,3:114,4:117,5:124,6:119,7:121,8:110,9:120,10:116,11:115,12:122,13:113,14:112,15:106,16:123,17:108,18:109,19:107,20:99}

relations = {111:[107,119,115,99], 118:[120,119], 114:[119,124], 117:[124,119], 124:[120,107,115,113], 119:[106], 121:[122,116], 110:[123], 120:[116],  116:[112,106,123,107], 122:[120,106,107], 113:[108], 123:[99,109], 109:[99]}

# i=0
# for r in relations:
# 	ref = Document.objects.get(id=r)
# 	for c in relations[r]:
# 		cite = Document.objects.get(id=c)
# 		i += 1
# 		print i, ref.id, cite.id
# 		try:
# 			rship = ReferenceShip.objects.get(cite__id=cite.id, reference__id=ref.id)
# 			print "old"
# 		except:
# 			print "new"
# 			rship = ReferenceShip()
# 			rship.reference = ref
# 			rship.cite = cite
# 			rship.save()
# exit()

project = "Deep Learning Study"
description = "This project is used for deep learning study"

with open("json", "w") as file:
	file.write('{\n')
	file.write('\t"_comment" : "Created with OWL2VOWL (version 0.2.2-SNAPSHOT), http://vowl.visualdataweb.org",\n')
	file.write('\t"header" : {\n')
	file.write('\t\t"languages" : [ "en", "undefined" ],\n')
	file.write('\t\t"baseIris" : [ "http://purl.org/muto/core", "http://www.w3.org/1999/02/22-rdf-syntax-ns", "http://www.w3.org/2000/01/rdf-schema", "http://purl.org/dc/terms", "http://www.w3.org/2001/XMLSchema", "http://rdfs.org/sioc/ns", "http://www.w3.org/2004/02/skos/core" ],\n')
	file.write('\t\t"title" : {\n')
	file.write('\t\t\t"undefined" : "'+ project +'"\n')
	file.write('\t\t},\n')
	file.write('\t\t"iri" : "http://purl.org/muto/core",\n')
	file.write('\t\t"version" : "Version 1.0 - Global changes (compared to earlier versions): Some properties have been renamed; cardinality constraints in class descriptions (owl:Restriction) have been replaced by global cardinality constraints (owl:FunctionalProperty).",\n')
	file.write('\t\t"author" : [ "Each" ],')
	file.write('\t\t"description" : {\n')
	file.write('\t\t\t"undefined" : "'+description+'"\n')
	file.write('\t\t},\n')
	file.write('\t\t"labels" : {\n')
	file.write('\t\t\t"en" : "MUTO Core Ontology"\n')
	file.write('\t\t},\n')
	file.write('\t\t"other" : {\n')
	file.write('\t\t\t"creator" : [ {\n')
	file.write('\t\t\t\t"identifier" : "creator",\n')
	file.write('\t\t\t\t"language" : "undefined",\n')
	file.write('\t\t\t\t"value" : "Each",\n')
	file.write('\t\t\t\t"type" : "label"\n')
	file.write('\t\t\t} ]\n')
	file.write('\t\t}\n')
	file.write('\t},\n')


	count = 1
	file.write('\t"class" : [ {\n')
	for i in ids.keys()[0:-1]:
		file.write('\t\t"id" : "' + str(count) + '",\n')
		file.write('\t\t"type" : "owl:Class"\n')
		file.write('\t}, {\n')
		count += 1
	file.write('\t\t"id" : "' + str(count) + '",\n')
	file.write('\t\t"type" : "owl:Class"\n')
	file.write('\t} ],\n')
	count += 1


	file.write('\t"classAttribute" : [ {\n')
	for i in ids:
		doc = Document.objects.get(id=ids[i])
		file.write('\t\t"label" : {\n')
		file.write('\t\t\t"IRI-based" : "'+ doc.title +'",\n')
		file.write('\t\t\t"en" : "'+ doc.title +'"\n')
		file.write('\t\t},\n')

		sub = ReferenceShip.objects.filter(reference__id=ids[i])
		super = ReferenceShip.objects.filter(cite__id=ids[i])

		if sub:
			substring = '\t\t"subClasses" : [ '
			for ref in sub:
				substring += '"' + str(index[ref.cite.id]) + '", '
			substring = substring[0:-2]
			substring += "],\n"
			file.write(substring)

		if super:
			file.write('\t\t"id" : ' + '"' + str(i) + '",\n')
			superstring = '\t\t"superClasses" : [ '
			for ref in super:
				superstring += '"' + str(index[ref.reference.id]) + '", '
			superstring = superstring[0:-2]
			superstring += "]\n"
			file.write(superstring)
		else:
			file.write('\t\t"id" : ' + '"' + str(i) + '"\n')
		
		if i < len(ids):
			file.write('\t}, {\n')
		else:
			file.write('\t} ],\n')

	file.write('\t"property" : [ {\n')
	for i in range(count, count+29):
		file.write('\t\t"id" : "' + str(i) + '",\n')
		file.write('\t\t"type" : "rdfs:SubClassOf"\n')
		file.write('\t}, {\n')

	file.write('\t\t"id" : "' + str(count+29) + '",\n')
	file.write('\t\t"type" : "rdfs:SubClassOf"\n')
	file.write('\t} ],\n')


	file.write('\t"propertyAttribute" : [ {\n')

	for i in ids:
		doc = Document.objects.get(id=ids[i])

		sub = ReferenceShip.objects.filter(reference__id=ids[i])

		if sub:
			for ref in sub:
				file.write('\t\t"range" : "' + str(i) + '",\n')
				file.write('\t\t"domain" : "'+  str(index[ref.cite.id]) + '",\n')
				file.write('\t\t"attributes" : [ "anonymous" ],\n')
				file.write('\t\t"id" : "' + str(count) + '"\n')
				substring = '\t\t"subClasses" : [ '
				count += 1
		
				if count < 51:
					file.write('\t}, {\n')
				else:
					file.write('\t} ]\n')

	file.write("}")





			