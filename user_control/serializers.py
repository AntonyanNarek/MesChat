from rest_framework import serializers
from .models import  UserProfile, CustomUser
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
    user_image = serializers.ImageField(required=False)
    message_count = serializers.SerializerMethodField("get_message_count")

    class Meta:
        model = UserProfile
        fields = "__all__"

    def get_message_count(self, obj):
        user_id = self.context["request"].user.id

        from message_control.models import Message
        message = Message.objects.filter(Q(sender_id=user_id, receiver_id=obj.user.id) |
                                         Q(sender_id=obj.user.id, receiver_id=user_id)).distinct()
        return message.count()
