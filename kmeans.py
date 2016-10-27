#-*- coding: utf-8 -*-

import os
import django
import numpy as np
import random as rm
from cluster_generate_json import cluster_generate_json

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "document_management.settings")
django.setup()

from document.models import Document, ReferenceShip, Project, Field
# projects = Project.objects.all()
# for p in projects:
# 	print p.name
# exit()
m = "math senior thesis"
sdi = "sdi graduation project"
dl = "deep learning study"
project = dl
deep = Document.objects.filter(projects__name=project)
fields = []

for doc in deep:
	fs = doc.fields.all()
	for field in fs:
		fields.append(field.name)
fields = set(fields)

dic = {}

for i, field in enumerate(fields):
	dic[field] = i

vec = [[0 for col in range(len(fields))] for row in range(len(deep))]

for i, doc in enumerate(deep):
	fs = doc.fields.all()
	for field in fs:
		vec[i][dic[field.name]] = 1

vec = np.array(vec)

def whichclass(x, centers):
	c = 0
	min_distance = len(fields)
	for i in range(k):
		d = sum((x - centers[i])**2)
		if d < min_distance:
			c = i
			min_distance = d
	return c, min_distance

k = 8
iteration = 30
epoch = 50
rm.seed(100)
min_cost = len(fields)*len(vec)
min_classes = None

for e in range(epoch):
	centers = [rm.randint(0, len(deep)-1) for i in range(k)]
	while len(set(centers)) != 3:
		centers = [rm.randint(0, len(deep)-1) for i in range(k)]
	centers = [vec[i] for i in centers]
	centers = np.array(centers, dtype=np.float)

	classes = [0]*len(deep)

	for i in range(iteration):
		classes_dic = {}
		for i in range(k):
			classes_dic[i] = []
		for i, x in enumerate(vec):
			classes[i], __ = whichclass(x, centers)
			classes_dic[classes[i]].append(x)

		for i in range(k):
			if len(classes_dic[i]) == 0:
				continue
			centers[i] = sum(classes_dic[i])/float(len(classes_dic[i]))

	cost = 0
	for x in vec:
		_, tmp = whichclass(x, centers)
		cost += tmp
	if min_cost > cost:
		min_cost = cost
		min_classes = classes

print min_classes
print min_cost/len(vec)
cluster_generate_json(project, min_classes)