from rest_framework.routers import DefaultRouter
from .views import *
from django.urls import path, include


router = DefaultRouter(trailing_slash=False)

router.register("message", MessageView)

urlpatterns = [
    path('', include(router.urls)),
    path('read-messages', ReadMultipleMessages.as_view()),
]