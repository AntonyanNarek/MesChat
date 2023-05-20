from django.apps import AppConfig
from decouple import *



class UserControlConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'user_control'
