"""document_management URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from document import views as document_views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', document_views.library, name="mainpage"),
    url(r'^library/$', document_views.library, name="library"),
    url(r'^library/(?P<id>[\d]+)/$', document_views.library, name="library_detail"),
    url(r'^ajax_detail/(?P<id>[\d]+)/$', document_views.ajax_detail, name="ajax_detail"),
    url(r'^project/$', document_views.project, name="project"),
    url(r'^project/(?P<project>[\w\s]*)/$', document_views.project, name="project"),
    url(r'^project/(?P<project>[\w\s]*)/(?P<id>[\d]+)/$', document_views.project, name="project_detail"),
    url(r'^mindmaptest/$', document_views.mindmap, name="mindmap"),
    url(r'^clustertest/$', document_views.cluster, name="cluster"),
    url(r'^cloudtest/$', document_views.cloud, name="cloud"),
    url(r'^search$', document_views.search, name="search"),
    url(r'^search/(?P<query>[\w\d\s]*)/$', document_views.search, name="search"),
    url(r'^fields/$', document_views.fields, name="fields"),
    url(r'^fields/(?P<field>[^/]*/?[^0-9]*)/$', document_views.fields, name="field_select"),
    url(r'^fields/(?P<field>[^/]*/?[^0-9]*)/(?P<id>[\d]+)/$', document_views.fields, name="field_select"),
    # url(r'^project/(?P<field>[^?]*)/(?P<id>[\d]+)/$', document_views.fields, name="field_detail"),
    url(r'^ajax_note/(?P<id>[\d]+)/$', document_views.ajax_note, name="note"),
]
