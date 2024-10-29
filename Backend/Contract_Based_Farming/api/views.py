from rest_framework import viewsets, status
from rest_framework import status, generics
from .models import Contract, FarmerProfile, CompanyProfile
from .serializations import ContractSerializer, FarmerProfileSerializer, CompanyProfileSerializer
from rest_framework.views import APIView
from rest_framework.response import Response




class ContractViewSet(viewsets.ModelViewSet):
    queryset = Contract.objects.all()
    serializer_class = ContractSerializer

    def create(self, request, *args, **kwargs):
        data = request.data.copy()
        if 'crop_image' in request.FILES:
            data['crop_image'] = request.FILES['crop_image']
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class CompanyProfileViewSet(viewsets.ModelViewSet):
    queryset = CompanyProfile.objects.all()
    serializer_class = CompanyProfileSerializer


class FarmerProfileListCreateView(generics.ListCreateAPIView):
    queryset = FarmerProfile.objects.all()
    serializer_class = FarmerProfileSerializer


class FarmerProfileDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FarmerProfile.objects.all()
    serializer_class = FarmerProfileSerializer
