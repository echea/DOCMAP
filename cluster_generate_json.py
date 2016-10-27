#-*- coding: utf-8 -*-

import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "document_management.settings")
django.setup()

from document.models import Document, ReferenceShip, Project


def cluster_generate_json(project, groups):
	# dl = "deep learning study"

	docs = Document.objects.filter(projects__name=project)
	# groups = [2, 2, 5, 5, 1, 1, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3]
	# groups = [3, 3, 6, 6, 4, 4, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3, 3]
	ins = {}

	for i, doc in enumerate(docs):
		ins[doc.title] = [i, groups[i]]

	with open('/home/each/Documents/document_management/static/clusterdata/cluster.json', 'w') as json:
		json.write('{\n')
		json.write('\t"nodes":[\n')
		for i in range(len(docs)-1):
			json.write('\t\t{"name":"' + docs[i].title.encode('utf-8') + '","fields":"blablabla","id":' + str(docs[i].id) + ',"group":' + str(groups[i]) + '},\n')
		i += 1
		json.write('\t\t{"name":"' + docs[i].title.encode('utf-8') + '","fields":"blablabla","id":' + str(docs[i].id) + ',"group":' + str(groups[i]) + '}\n')
		json.write('\t],\n')
		json.write('\t"links":[\n')
		
		gs = set(groups)
		for g in gs:
			same_group = filter(lambda x:ins[x.title][1]==g, docs)
			for i in range(len(same_group)):
				for j in range(i+1,len(same_group)):
					json.write('\t\t{"source":' + str(ins[same_group[i].title][0]) + ',"target":' + str(ins[same_group[j].title][0]) + ',"value":2},\n')

		refships = ReferenceShip.objects.all()
		for i in range(len(refships)-1):
			rs = refships[i]
			value = 1
			if rs.cite.title not in ins or rs.reference.title not in ins:
				continue
			if groups[ins[rs.cite.title][0]] == groups[ins[rs.reference.title][0]]:
				continue
			json.write('\t\t{"source":' + str(ins[rs.cite.title][0]) + ',"target":' + str(ins[rs.reference.title][0]) + ',"value":' + str(value) + '},\n')

		rs = refships[i+1]
		value = 1
		if rs.cite.title in ins and rs.reference.title in ins:
			if groups[ins[rs.cite.title][0]] != groups[ins[rs.reference.title][0]]:
				json.write('\t\t{"source":' + str(ins[rs.cite.title][0]) + ',"target":' + str(ins[rs.reference.title][0]) + ',"value":' + str(value) + '}\n')
		# for doc in docs:
		# for doc in docs:
		# 	for ref in doc.references.all():
		# 		json.write('\t\t{"source":' + str(ins[ref.title]) + ',"target":' + str(ins[doc.title]) + ',"value":1},\n')
		json.write('\t]\n')
		json.write('}')