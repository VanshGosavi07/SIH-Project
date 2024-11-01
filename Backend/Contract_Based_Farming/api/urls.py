# urls.py
from django.urls import path, include
from .views import register_farmer, register_company, login_farmer, login_company, logout
from rest_framework.routers import DefaultRouter
from .views import ContractViewSet
router = DefaultRouter()
router.register(r'contracts', ContractViewSet)

urlpatterns = [
    path('api/register/farmer/', register_farmer, name='register_farmer'),
    path('api/register/company/', register_company, name='register_company'),
    path('api/login/farmer/', login_farmer, name='login_farmer'),
    path('api/login/company/', login_company, name='login_company'),
    path('api/logout/', logout, name='logout'),
    path('api/', include(router.urls)),
]
