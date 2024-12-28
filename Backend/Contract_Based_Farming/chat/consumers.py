from channels.generic.websocket import AsyncWebsocketConsumer
import json
from channels.generic.websocket import AsyncWebsocketConsumer
import json
from django.contrib.auth import get_user_model
from .models import ChatMessage
from channels.db import database_sync_to_async

User = get_user_model()



class PersonalChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        request_user = self.scope['user']
        if request_user.is_authenticated:
            chat_with_user = self.scope['url_route']['kwargs']['id']
            user_ids = [int(request_user.id), int(chat_with_user)]
            user_ids = sorted(user_ids)
            self.room_group_name = f"chat_{user_ids[0]}---{user_ids[1]}"
            await self.channel_layer.group_add(
                self.room_group_name,
                self.channel_name
            )
            await self.accept()
        else:
            await self.close()

    async def receive(self, text_data=None, bytes_data=None):
        data = json.loads(text_data)
        message = data['message']
        sender = self.scope['user']
        receiver_id = self.scope['url_route']['kwargs']['id']
        receiver = await database_sync_to_async(User.objects.get)(id=receiver_id)

        # Save message to the database
        chat_message = await database_sync_to_async(ChatMessage.objects.create)(
            sender=sender,
            receiver=receiver,
            message=message
        )

        await self.channel_layer.group_send(
            self.room_group_name,
            {
                "type": "chat_message",
                "message": message,
                "sender": {
                    "email": sender.email,
                    "name": sender.name  
                }
            }
        )

    async def chat_message(self, event):
        message = event['message']
        sender = event['sender']
        await self.send(text_data=json.dumps({
            "message": message,
            "sender": sender
        }))