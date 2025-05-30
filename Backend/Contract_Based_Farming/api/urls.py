from django.urls import path, include
from .views import register_farmer, register_company, login_farmer, login_company, logout, get_user_profile, MyTokenObtainPairView, get_user_contracts
from rest_framework.routers import DefaultRouter
from .views import ContractViewSet, ContractManagementViewSet, get_initiated_contracts, get_in_progress_contracts, get_completed_contracts, get_contract_status

router = DefaultRouter()
router.register(r'contracts', ContractViewSet)
router.register(r'contract-management', ContractManagementViewSet)

urlpatterns = [
    path('api/register/farmer/', register_farmer, name='register_farmer'),
    path('api/register/company/', register_company, name='register_company'),
    path('api/login/farmer/', login_farmer, name='login_farmer'),
    path('api/login/company/', login_company, name='login_company'),
    path('api/logout/', logout, name='logout'),
    path('api/contracts/user/<int:user_id>/',
         get_user_contracts, name='get_user_contracts'),
    path('api/profile/', get_user_profile, name='get_user_profile'),
    path('api/contracts/initiated/<int:user_id>/',
         get_initiated_contracts, name='get_initiated_contracts'),
    path('api/contracts/in-progress/<int:user_id>/',
         get_in_progress_contracts, name='get_in_progress_contracts'),
    path('api/contracts/completed/<int:user_id>/',
         get_completed_contracts, name='get_completed_contracts'),
    path('api/contract-status/<int:contract_id>/',
         get_contract_status, name='get_contract_status'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/', include(router.urls)),
]
