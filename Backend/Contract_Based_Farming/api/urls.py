from django.urls import path, include
from .views import register_farmer, register_company, login_farmer, login_company, logout, get_user_profile, MyTokenObtainPairView
from rest_framework.routers import DefaultRouter
from .views import ContractViewSet,ContractManagementViewSet

router = DefaultRouter()
router.register(r'contracts', ContractViewSet)
router.register(r'contract-management', ContractManagementViewSet)

urlpatterns = [
    path('api/register/farmer/', register_farmer, name='register_farmer'),
    path('api/register/company/', register_company, name='register_company'),
    path('api/login/farmer/', login_farmer, name='login_farmer'),
    path('api/login/company/', login_company, name='login_company'),
    path('api/logout/', logout, name='logout'),
    path('api/profile/', get_user_profile, name='get_user_profile'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/', include(router.urls)),
]