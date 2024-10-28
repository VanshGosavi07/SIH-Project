# project/urls.py
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import ContractViewSet, CompanyProfileViewSet
from api.views import ImageUploadView, ImageListView, FarmerProfileDetailView, FarmerProfileListCreateView
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r'contracts', ContractViewSet)
router.register(r'company-profiles', CompanyProfileViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),  # Include API viewsets
    path('api/upload/', ImageUploadView.as_view(),
         name='image-upload'),  # Image upload endpoint
    path('api/images/', ImageListView.as_view(),
         name='image-list'),  # Image list endpoint
    path('api/farmer_profiles/', FarmerProfileListCreateView.as_view(),
         name='farmer_profile_list_create'),
    path('api/farmer_profiles/<int:pk>/',
         FarmerProfileDetailView.as_view(), name='farmer_profile_detail'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
