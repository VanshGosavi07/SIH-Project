from rest_framework import viewsets
from .models import Contract, FarmerProfile, CompanyProfile
from .serializations import ContractSerializer, FarmerProfileSerializer, CompanyProfileSerializer


# Create Contract
class ContractViewSet(viewsets.ModelViewSet):
    queryset = Contract.objects.all()
    serializer_class = ContractSerializer

# Farmer Profile
class FarmerProfileViewSet(viewsets.ModelViewSet):
    queryset = FarmerProfile.objects.all()
    serializer_class = FarmerProfileSerializer

# Company Profile
class CompanyProfileViewSet(viewsets.ModelViewSet):
    queryset = CompanyProfile.objects.all()
    serializer_class = CompanyProfileSerializer
