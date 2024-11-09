from .serializers import UserGetSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from .models import ChatMessage
from .serializers import ChatMessageSerializer, UserGetSerializer
from django.db.models import Q

User = get_user_model()


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_list(request):
    try:
        user_obj = User.objects.exclude(id=request.user.id)
        serializer = UserGetSerializer(user_obj, many=True)
        return Response(serializer.data)
    except Exception as e:
        print("Error in getting user list", str(e))
        return Response({"error": "Error in getting user list"}, status=400)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_chat_history(request, user_id):
    request_user = request.user
    chat_with_user = User.objects.get(id=user_id)
    messages = ChatMessage.objects.filter(
        (Q(sender=request_user) & Q(receiver=chat_with_user)) |
        (Q(sender=chat_with_user) & Q(receiver=request_user))
    ).order_by('timestamp')
    serializer = ChatMessageSerializer(messages, many=True)
    return Response(serializer.data)


User = get_user_model()


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_current_user(request):
    user = request.user
    return Response({
        'id': user.id,
        'email': user.email,
        'name': user.name,
    })


User = get_user_model()


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_chat_users(request):
    request_user = request.user
    chat_users = User.objects.filter(
        Q(sent_messages__receiver=request_user) | Q(
            received_messages__sender=request_user)
    ).distinct()
    serializer = UserGetSerializer(chat_users, many=True)
    return Response(serializer.data)


User = get_user_model()


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_detail(request, user_id):
    try:
        user = User.objects.get(id=user_id)
        serializer = UserGetSerializer(user)
        return Response(serializer.data)
    except User.DoesNotExist:
        return Response({'error': 'User not found.'}, status=404)
