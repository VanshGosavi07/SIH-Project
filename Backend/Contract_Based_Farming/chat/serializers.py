from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import ChatMessage

User = get_user_model()


class UserGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ['email', 'name', 'id']
        extra_kwargs = {'id': {'read_only': True}}


class ChatMessageSerializer(serializers.ModelSerializer):
    sender = serializers.SerializerMethodField()

    class Meta:
        model = ChatMessage
        fields = ['sender', 'receiver', 'message', 'timestamp']

    def get_sender(self, obj):
        return {
            'id': obj.sender.id,
            'name': obj.sender.name,  
            'email': obj.sender.email
        }
