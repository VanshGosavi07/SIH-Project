from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import ContractViewSet, FarmerProfileViewSet, CompanyProfileViewSet

router = DefaultRouter()
router.register(r'contracts', ContractViewSet)
router.register(r'farmer-profiles', FarmerProfileViewSet)
router.register(r'company-profiles', CompanyProfileViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]
