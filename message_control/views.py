from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import *
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from Meschat.custom_methods import IsAuthenticatedCustom
from rest_framework.response import Response
from rest_framework import status
from  django.db.models import Q
from django.conf import settings
import requests
import json
from Meschat.swagger_docs import *


def handleRequest(serializerData):
    notification = {
        "message": serializerData.data.get("message"),
        "from": serializerData.data.get("sender"),
        "receiver": serializerData.data.get("receiver").get("id")
    }

    headers = {
        'Content-Type': 'application/json',
    }
    try:
        response = requests.post(settings.SOCKET_SERVER, json.dumps(
            notification), headers=headers)
        print(response.json())
    except Exception as e:
        pass
    return True


class GenericFileUploadView(ModelViewSet):
    queryset = GenericFileUpload.objects.all()
    serializer_class = GenericFileUploadSerializer


class MessageView(ModelViewSet):
    queryset = Message.objects.select_related("sender", "receiver").prefetch_related("message_attachments")
    serializer_class = MessageSerializer
    permission_classes = (IsAuthenticatedCustom,)

    @get_messages_list
    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    @get_message
    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    @update_partial_message
    def partial_update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        return self.update(request, *args, **kwargs)

    @get_messages_queryset
    def get_queryset(self):
        data = self.request.query_params.dict()
        user_id = data.get("user_id", None)

        if user_id:
            active_user_id = self.request.user.id
            return self.queryset.filter(Q(sender_id=user_id, receiver_id=active_user_id) | Q(
                sender_id=active_user_id, receiver_id=user_id)).distinct()
        return self.queryset

    @delete_message
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    @create_message
    def create(self, request, *args, **kwargs):
        try:
            request.data._mutable = True
        except:
            pass
        attachments = request.data.pop("attachments", None)

        if str(request.user.id) != str(request.data.get("sender_id", None)):
            raise Exception("only sender can create a message")

        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        if attachments:
            MessageAttachment.objects.bulk_create([MessageAttachment(
                **attachment, message_id=serializer.data["id"]) for attachment in attachments])

            message_data = self.get_queryset().get(id=serializer.data["id"])
            return Response(self.serializer_class(message_data).data, status=201)

        handleRequest(serializer)
        print("created")

        return Response(serializer.data, status=201)

    @update_message
    def update(self, request, *args, **kwargs):

        try:
            request.data._mutable = True
        except:
            pass
        attachments = request.data.pop("attachments", None)
        instance = self.get_object()

        serializer = self.serializer_class(
            data=request.data, instance=instance, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        MessageAttachment.objects.filter(message_id=instance.id).delete()

        if attachments:
            MessageAttachment.objects.bulk_create([MessageAttachment(
                **attachment, message_id=instance.id) for attachment in attachments])

            message_data = self.get_object()
            return Response(self.serializer_class(message_data).data, status=200)

        handleRequest(serializer)
        print("updated")

        return Response(serializer.data, status=200)


class ReadMultipleMessages(APIView):

    @read_messages
    def post(self, request):
        data = request.data.get("message_ids", None)

        Message.objects.filter(id__in=data).update(is_read=True)
        return Response("success")
