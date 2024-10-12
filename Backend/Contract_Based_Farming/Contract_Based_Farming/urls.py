from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import ContractViewSet

router = DefaultRouter()
router.register(r'contracts', ContractViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]
