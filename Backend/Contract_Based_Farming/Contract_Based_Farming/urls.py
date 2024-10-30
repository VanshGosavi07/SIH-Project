# project/urls.py
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import ContractViewSet, CompanyProfileViewSet
from api.views import FarmerProfileDetailView, FarmerProfileListCreateView, LoginView
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path

router = DefaultRouter()
router.register(r'contracts', ContractViewSet)
router.register(r'company-profiles', CompanyProfileViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),  # Include API viewsets
    path('api/farmer_profiles/', FarmerProfileListCreateView.as_view(),
         name='farmer_profile_list_create'),  # No 'api/' here
    path('api/farmer_profiles/<int:pk>/', FarmerProfileDetailView.as_view(),
         name='farmer_profile_detail'),
    path('api/login/', LoginView.as_view(), name='login'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
