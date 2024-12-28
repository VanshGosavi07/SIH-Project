import jwt
from django.conf import settings
from django.contrib.auth import get_user_model
from rest_framework.exceptions import AuthenticationFailed
from jwt.exceptions import InvalidTokenError, ExpiredSignatureError
from channels.db import database_sync_to_async
from rest_framework.authentication import BaseAuthentication

User = get_user_model()


class JWTAuthentication(BaseAuthentication):
    @database_sync_to_async
    def authenticate_websocket(self, scope, token):
        try:
            payload = jwt.decode(
                token, settings.SECRET_KEY, algorithms=['HS256'])
            print(payload)  # Add this line to print the payload
            user_id = payload['user_id']  # Change 'id' to 'user_id'
            user = User.objects.get(id=user_id)
            return user
        except (InvalidTokenError, ExpiredSignatureError, User.DoesNotExist):
            raise AuthenticationFailed("Invalid Token")
