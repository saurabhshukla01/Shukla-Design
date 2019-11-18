"""Heysend URL Configuration

The `urlpatterns` lists routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
#from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from admin import views
from client import views as views1

urlpatterns = [
    #path('admin/', admin.site.urls),
    path('admin/', views.login),
    path('header/',views1.header),
    path('footer/',views1.header),
    path('client/auth/login', views1.login),
    path('client/auth/forgot_password', views1.forgot_password),
    path('client/auth/reset_password', views1.reset_password),
    path('client/list/create', views1.create),
    path('client/list/update/<int:id>', views1.update),
    path('client/list/delete/<int:id>', views1.delete),
    path('client/list/subscriber', views1.subscriber),
    path('client/list/reject', views1.reject),
    path('client/list/', views1.index),
    path('client/list/get_list', views1.get_list),
    path('client/segments/',views1.segments),
    path('client/segments/create-segment',views1.create_segment),
    path('client/segments/upload/<int:id>', views1.upload),
    path('client/campaigns/',views1.campaigns_index),
    path('client/campaigns/create',views1.campaigns_create),
    path('client/campaigns/template_create',views1.campaigns_template_create),
    path('client/campaigns/update',views1.campaigns_update),
    path('client/campaigns/score_details',views1.campaigns_score_details),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
#static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
