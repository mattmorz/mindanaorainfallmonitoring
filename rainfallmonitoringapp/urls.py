from django.conf.urls import url, include
from . import views


urlpatterns = [
    url(r'^$', views.home, name='index'),
    url(r'^device/$', views.rainfall, name='rainfall'),
    url(r'^latest-device/$', views.latest_rainfall, name='latest-rainfall'),
    url(r'^check-rainfall/$', views.dlrainfall, name='check-rainfall'),
    #url('', include('pwa.urls')),
]
