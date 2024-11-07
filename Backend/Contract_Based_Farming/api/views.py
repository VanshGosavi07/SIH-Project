from .serializations import FarmerUserSerializer, CompanyUserSerializer
from .models import Farmer_User, Company_User, CustomUser, Contract
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets, status
from rest_framework import status, generics
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.hashers import check_password
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.exceptions import PermissionDenied
from .serializations import ContractSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializations import MyTokenObtainPairSerializer


@api_view(['POST'])
def register_farmer(request):
    required_fields = ['email', 'password', 'name', 'mobile_number', 'address', 'gender', 'age',
                       'experience', 'contracts_made', 'farm_address', 'land_area', 'soil_type', 'farm_type']
    for field in required_fields:
        if not request.data.get(field):
            return Response({'error': f'{field} is required.'}, status=status.HTTP_400_BAD_REQUEST)

    email = request.data.get('email')
    password = request.data.get('password')

    if CustomUser.objects.filter(email=email).exists():
        return Response({'error': 'User with this email already exists.'}, status=status.HTTP_400_BAD_REQUEST)

    user = CustomUser(email=email, password=make_password(password))
    user.save()
    farmer_user = Farmer_User(
        user=user,
        name=request.data.get('name'),
        email=email,
        farmer_user_id=request.data.get('user_id'),  # Updated field
        user_type=request.data.get('user_type'),
        password=password,
        mobile_number=request.data.get('mobile_number'),
        address=request.data.get('address'),
        gender=request.data.get('gender'),
        age=request.data.get('age'),
        experience=request.data.get('experience'),
        contracts_made=request.data.get('contracts_made'),
        image=request.data.get('image'),
        farm_address=request.data.get('farm_address'),
        land_area=request.data.get('land_area'),
        soil_type=request.data.get('soil_type'),
        custom_soil_type=request.data.get('custom_soil_type'),
        farm_type=request.data.get('farm_type'),
        well=request.data.get('well'),
        preferred_crops=request.data.get('preferred_crops'),
        achievements=request.data.get('achievements'),
        additional_info=request.data.get('additional_info'),
        contracts=request.data.get('contracts')
    )
    farmer_user.save()

    return Response({'message': 'Farmer registered successfully.'}, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def register_company(request):
    required_fields = ['email', 'password', 'name', 'generative_id', 'tax_identification_number', 'license_number',
                       'company_type', 'establish_date', 'contact_name', 'contact_designation', 'contact_email', 'contact_phone']
    for field in required_fields:
        if not request.data.get(field):
            return Response({'error': f'{field} is required.'}, status=status.HTTP_400_BAD_REQUEST)

    email = request.data.get('email')
    password = request.data.get('password')

    if CustomUser.objects.filter(email=email).exists():
        return Response({'error': 'User with this email already exists.'}, status=status.HTTP_400_BAD_REQUEST)

    user = CustomUser(email=email, password=make_password(password))
    user.save()
    company_user = Company_User(
        user=user,
        name=request.data.get('name'),
        email=email,
        company_user_id=request.data.get('user_id'),  # Updated field
        user_type=request.data.get('user_type'),
        password=password,
        generative_id=request.data.get('generative_id'),
        website=request.data.get('website'),
        tax_identification_number=request.data.get(
            'tax_identification_number'),
        license_number=request.data.get('license_number'),
        number_of_contracts=request.data.get('number_of_contracts'),
        company_type=request.data.get('company_type'),
        company_product=request.data.get('company_product'),
        establish_date=request.data.get('establish_date'),
        profile_pic=request.data.get('profile_pic'),
        achievements=request.data.get('achievements'),
        additional_info=request.data.get('additional_info'),
        previous_contracts=request.data.get('previous_contracts'),
        contact_name=request.data.get('contact_name'),
        contact_designation=request.data.get('contact_designation'),
        contact_email=request.data.get('contact_email'),
        contact_phone=request.data.get('contact_phone')
    )
    company_user.save()

    return Response({'message': 'Company registered successfully.'}, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def login_farmer(request):
    email = request.data.get('email')
    password = request.data.get('password')

    if not email or not password:
        return Response({'error': 'Email and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = CustomUser.objects.get(email=email)
        if not check_password(password, user.password):
            raise Exception('Invalid password')
    except CustomUser.DoesNotExist:
        return Response({'error': 'Invalid email or password.'}, status=status.HTTP_401_UNAUTHORIZED)

    refresh = RefreshToken.for_user(user)
    farmer_user = Farmer_User.objects.get(user=user)
    profile_image_url = farmer_user.image.url if farmer_user.image else "no"
    user_type = farmer_user.user_type if farmer_user.user_type else "Farmer"
    return Response({
        'refresh': str(refresh),
        'access': str(refresh.access_token),
        'profile_image_url': profile_image_url,
        'user_type': user_type
    }, status=status.HTTP_200_OK)


@api_view(['POST'])
def login_company(request):
    email = request.data.get('email')
    password = request.data.get('password')

    if not email or not password:
        return Response({'error': 'Email and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = CustomUser.objects.get(email=email)
        if not check_password(password, user.password):
            raise Exception('Invalid password')
    except CustomUser.DoesNotExist:
        return Response({'error': 'Invalid email or password.'}, status=status.HTTP_401_UNAUTHORIZED)

    refresh = RefreshToken.for_user(user)
    company_user = Company_User.objects.get(user=user)
    profile_image_url = company_user.profile_pic.url if company_user.profile_pic else "no"
    user_type = company_user.user_type if company_user.user_type else "company"
    return Response({
        'refresh': str(refresh),
        'access': str(refresh.access_token),
        'profile_image_url': profile_image_url,
        'user_type': user_type
    }, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout(request):
    try:
        refresh_token = request.data["refresh"]
        token = RefreshToken(refresh_token)
        token.blacklist()
        return Response(status=status.HTTP_205_RESET_CONTENT)
    except Exception as e:
        return Response(status=status.HTTP_400_BAD_REQUEST)


class ContractViewSet(viewsets.ModelViewSet):
    queryset = Contract.objects.all()
    serializer_class = ContractSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def create(self, request, *args, **kwargs):
        data = request.data.copy()
        if 'crop_image' in request.FILES:
            data['crop_image'] = request.FILES['crop_image']
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_profile(request):
    user = request.user
    if hasattr(user, 'farmer_user'):
        profile = user.farmer_user
        serializer = FarmerUserSerializer(profile)
    elif hasattr(user, 'company_user'):
        profile = user.company_user
        serializer = CompanyUserSerializer(profile)
    else:
        return Response({'error': 'User profile not found.'}, status=status.HTTP_404_NOT_FOUND)

    return Response(serializer.data, status=status.HTTP_200_OK)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
