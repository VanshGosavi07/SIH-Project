from rest_framework import viewsets, status
from rest_framework import status, generics
from .models import Contract, FarmerProfile, CompanyProfile, ProfilePic
from .serializations import ContractSerializer, FarmerProfileSerializer, CompanyProfileSerializer, ImageUploadSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

# Create Contract


class ContractViewSet(viewsets.ModelViewSet):
    queryset = Contract.objects.all()
    serializer_class = ContractSerializer

# Farmer Profile


class FarmerProfileListCreateView(generics.ListCreateAPIView):
    queryset = FarmerProfile.objects.all()
    serializer_class = FarmerProfileSerializer


class FarmerProfileDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FarmerProfile.objects.all()
    serializer_class = FarmerProfileSerializer


# Company Profile


class CompanyProfileViewSet(viewsets.ModelViewSet):
    queryset = CompanyProfile.objects.all()
    serializer_class = CompanyProfileSerializer


class ImageUploadView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = ImageUploadSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ImageListView(APIView):
    def get(self, request, *args, **kwargs):
        images = ProfilePic.objects.all()
        serializer = ImageUploadSerializer(
            images, many=True, context={'request': request})
        return Response(serializer.data)
