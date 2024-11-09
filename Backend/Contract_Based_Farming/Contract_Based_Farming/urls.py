from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import TokenRefreshView
from chat.views import get_user_list, get_chat_history, get_current_user, get_chat_users, get_user_detail
from api.views import MyTokenObtainPairView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('api.urls')),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/user/', get_user_list, name='get_user_list'),
    path('chat/history/<int:user_id>/',
         get_chat_history, name='get_chat_history'),
    path('api/user/me/', get_current_user, name='get_current_user'),
    path('chat/users/', get_chat_users, name='get_chat_users'),
    path('user/<int:user_id>/', get_user_detail, name='get_user_detail'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
