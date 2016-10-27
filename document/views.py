from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.http import Http404, HttpResponse
from django.db.models import Count
from django.utils import timezone

from document.models import Document, Project, Entry, Query, Field, Note

# Create your views here.
def test(request):
	entry_list = get_entry_list()
	return render(request, 'library.html', {'entry_list':entry_list})

def mindmap(request):
	return render(request, 'mindmap.html')

def cluster(request):
	return render(request, 'cluster.html')

def cloud(request):
	return render(request, 'cloud.html')

def get_entry_list():
	query_list = Query.objects.all().order_by('-last_search_time')[0:5]
	entry_list = []
	for query in query_list:
		tmp = " ".join([entry['name'] for entry in query.entrys.values()])
		entry_list.append(tmp)
	return entry_list

def library(request, id=None):
	document_list = Document.objects.all()
	entry_list = get_entry_list()
	field_list = Field.objects.all()
	projects = Project.objects.all()
	document = None
	if request.GET.get('docID'):
		print "test1"
		document = Document.objects.get(id=request.GET.get('docID'))
		if request.GET.get('isAdd'):
			print "test2"
			if not document.projects.all().filter(id=request.GET.get('proID')):
				print "test3"
				project = Project.objects.get(id=request.GET.get('proID'))
				document.projects.add(project)
				document.save()
	elif id:
		document = Document.objects.get(id=id)
	return render(request, 'library.html', {'document_list':document_list, 'entry_list':entry_list, 'doc':document, 'projects':projects})

def ajax_detail(request, id):
	title = Document.objects.get(id=id).title
	description = Document.objects.get(id=id).description
	authors = Document.objects.get(id=id).authors.all()
	authors = [(author.first_name if author.first_name else "") + " " + (author.last_name if author.last_name else "") for author in authors]
	note = Document.objects.get(id=id).note
	content = ""
	if note:
		content = note.content
	json = {"title": title, "desc" : description, "note":content, "authors": authors}
	return JsonResponse(json)

def ajax_note(request, id):
	json = {"note" : "error"}
	if request.method == "POST":
		content = request.POST.get('note')
		note = Document.objects.get(id=id).note
		document = Document.objects.get(id=id)
		if note:
			note.content = content
			note.save()
			document.save()
		else:
			note = Note.objects.create(content=content)
			document.note = note
			document.save()
		note.last_edit_time = timezone.now()
		json = {"note" : content}
	return JsonResponse(json)

def project(request, project=None, id=None):
	project_list = Project.objects.all()
	entry_list = get_entry_list()
	document = None
	document_list = None
	if project:
		document_list = Document.objects.filter(projects__name=project)
		project = Project.objects.get(name=project)
	if request.GET.get('docID'):
		document = Document.objects.get(id=request.GET.get('docID'))
		if request.GET.get('isDelete'):
			document.projects.remove(project)
	elif id:
		document = Document.objects.get(id=id)
	return render(request, 'library.html', {'document_list':document_list, 'project_list':project_list,  'entry_list':entry_list, 'doc':document, 'project':project})

def fields(request, field=None, id=None):
	fields = Field.objects.all()
	field_list = {}
	for f in fields:
		field_list[f.name] = len(Document.objects.filter(fields__name=f.name))
	max_len = max(field_list.values())
	min_len = min(field_list.values())
	for key in field_list.keys():
		field_list[key] = [100*field_list[key]/max_len - 50*min_len/max_len, field_list[key]]
	field_list = sorted(field_list.iteritems(), key=lambda d:d[1][0], reverse=True)
	entry_list = get_entry_list()
	if not field:
		return render(request, 'fields.html', {'field_list':field_list, 'entry_list':entry_list})
	document_list = Document.objects.filter(fields__name=field)
	document = None
	if id:
		document = Document.objects.get(id=id)
	return render(request, 'library.html', {'document_list':document_list, 'entry_list':entry_list,'field':field, 'doc':document})

def search(request, query=None):
	if "q" not in request.GET and not query:
		return redirect('/')
	if not query:
		query = request.GET['q']
	query = query.lower().strip()
	if not query:
		return redirect('/')
	entrys = query.split()
	document_list = []
	entry_list = []
	flag = True
	for entry in entrys:
		try:
			entryClass = Entry.objects.get(name__contains=entry)
			document_list.extend(entryClass.documents)
		except:
			tmp = []
			tmp.extend(Document.objects.filter(publish_time__contains=entry))
			tmp.extend(Document.objects.filter(publisher__name__contains=entry))
			tmp.extend(Document.objects.filter(title__contains=entry))
			tmp.extend(Document.objects.filter(authors__first_name__contains=entry))
			tmp.extend(Document.objects.filter(authors__last_name__contains=entry))
			tmp.extend(Document.objects.filter(projects__name__contains=entry))
			tmp.extend(Document.objects.filter(fields__name__contains=entry))
			tmp.extend(Document.objects.filter(userclasses__name__contains=entry))
			tmp = list(set(tmp))
			if not tmp:
				continue
			entryClass = Entry(name=entry)
			entryClass.save()
			entryClass.documents.add(*tmp)
			entryClass.save()
			document_list.extend(tmp)
		
		entry_list.append(entryClass)
	
	candidate_query = Query.objects.annotate(c=Count('entrys')).filter(c=len(entry_list))
	for entry in entry_list:
		candidate_query = candidate_query.filter(entrys__name__contains=entry.name)
	if not candidate_query:
		queryClass = Query()
		queryClass.save()
		queryClass.entrys.add(*entry_list)
		queryClass.save()
	else:
		queryClass = candidate_query[0]
		queryClass.last_search_time = timezone.now()
		queryClass.save()

	# project_list = Project.objects.all()
	query_list = Query.objects.all().order_by('-last_search_time')[0:5]
	entry_list = []
	for query in query_list:
		tmp = " ".join([entry['name'] for entry in query.entrys.values()])
		entry_list.append(tmp)
	return render(request, 'library.html', {'document_list':document_list, 'entry_list':entry_list, "query_id":queryClass.id})
