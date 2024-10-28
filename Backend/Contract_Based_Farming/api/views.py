from rest_framework import viewsets, status
from rest_framework import status, generics
from .models import Contract, FarmerProfile, CompanyProfile
from .serializations import ContractSerializer, FarmerProfileSerializer, CompanyProfileSerializer
from rest_framework.views import APIView
from rest_framework.response import Response



class ContractViewSet(viewsets.ModelViewSet):
    queryset = Contract.objects.all()
    serializer_class = ContractSerializer

class CompanyProfileViewSet(viewsets.ModelViewSet):
    queryset = CompanyProfile.objects.all()
    serializer_class = CompanyProfileSerializer


class FarmerProfileListCreateView(generics.ListCreateAPIView):
    queryset = FarmerProfile.objects.all()
    serializer_class = FarmerProfileSerializer

class FarmerProfileDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FarmerProfile.objects.all()
    serializer_class = FarmerProfileSerializer

