from django.contrib import admin
from django.urls import include, path

from alien_main_page_app.views import *

urlpatterns = [
    path('',check_user_login),
    path('main-page/',index),
    path('main-page/create_new_task/',create_new_task),
    path('main-page/get_my_tasks/',get_my_tasks),
    path('main-page/get_sent_tasks/',get_sent_tasks),
    path('main-page/logout/',logout)
]