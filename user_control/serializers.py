from rest_framework import serializers
from .models import  UserProfile, CustomUser
from message_control.serializers import GenericFileUploadSerializer, Base64ImageField
from  django.db.models import Q



class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()


class RegisterSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()


class RefreshSerializer(serializers.Serializer):
    refresh = serializers.CharField()


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = "__all__"


class UserProfileSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer(read_only=True)
    user_id = serializers.IntegerField(write_only=True)
    message_count = serializers.SerializerMethodField("get_message_count")

    class Meta:
        model = UserProfile
        fields = "__all__"

    def get_message_count(self, obj):
        try:
            user_id = self.context["request"].user.id
        except Exception as e:
            user_id = None

        from message_control.models import Message
        message = Message.objects.filter(Q(sender_id=user_id, receiver_id=obj.user.id) |
                                         Q(sender_id=obj.user.id, receiver_id=user_id)).distinct()
        return message.count()


class FavoriteSerializer(serializers.Serializer):
    favorite_id = serializers.IntegerField()