from django.contrib import admin
from django.urls import include, path

from alien_login_app.views import *

urlpatterns = [
    path('', index),
    path('session/',session_controller),
    path('get-user/',get_user),
    path('get-users-all/',get_users_all)
]
