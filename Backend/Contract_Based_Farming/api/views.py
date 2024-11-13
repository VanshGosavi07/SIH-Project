from .serializations import ContractManagementSerializer, ContractSerializer
from .models import ContractManagement, Contract
from .serializations import ContractManagementSerializer
from .models import ContractManagement
from rest_framework import viewsets
from .models import Contract, ContractManagement
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
from .serializations import MyTokenObtainPairSerializer, ContractManagementSerializer
from django.db.models import Q


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
        'user_type': user_type,
        'user_id': farmer_user.user_id,
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
        'user_type': user_type,
        'user_id': company_user.user_id,
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


class ContractManagementViewSet(viewsets.ModelViewSet):
    queryset = ContractManagement.objects.all()
    serializer_class = ContractManagementSerializer
    permission_classes = [IsAuthenticated]


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_contracts(request, user_id):
    try:
        contracts = Contract.objects.filter(user_id=user_id)
        serializer = ContractSerializer(contracts, many=True)
        return Response(serializer.data, status=200)
    except Contract.DoesNotExist:
        return Response({'error': 'No contracts found for this user.'}, status=404)

    from rest_framework.decorators import api_view, permission_classes


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_initiated_contracts(request, user_id):
    try:
        contract_managements = ContractManagement.objects.filter(
            (Q(contract_post_person_id=user_id) | Q(
                deal_person_id=user_id)) & Q(status='Initiated')
        )
        contract_ids = contract_managements.values_list(
            'contract_id', flat=True)
        contracts = Contract.objects.filter(id__in=contract_ids)
        serializer = ContractSerializer(contracts, many=True)
        return Response(serializer.data, status=200)
    except ContractManagement.DoesNotExist:
        return Response({'error': 'No initiated contracts found for this user.'}, status=404)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_in_progress_contracts(request, user_id):
    try:
        contract_managements = ContractManagement.objects.filter(
            (Q(contract_post_person_id=user_id) | Q(
                deal_person_id=user_id)) & Q(status='In Progress')
        )
        contract_ids = contract_managements.values_list(
            'contract_id', flat=True)
        contracts = Contract.objects.filter(id__in=contract_ids)
        serializer = ContractSerializer(contracts, many=True)
        return Response(serializer.data, status=200)
    except ContractManagement.DoesNotExist:
        return Response({'error': 'No in-progress contracts found for this user.'}, status=404)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_completed_contracts(request, user_id):
    try:
        contract_managements = ContractManagement.objects.filter(
            (Q(contract_post_person_id=user_id) | Q(
                deal_person_id=user_id)) & Q(status='Completed')
        )
        contract_ids = contract_managements.values_list(
            'contract_id', flat=True)
        contracts = Contract.objects.filter(id__in=contract_ids)
        serializer = ContractSerializer(contracts, many=True)
        return Response(serializer.data, status=200)
    except ContractManagement.DoesNotExist:
        return Response({'error': 'No completed contracts found for this user.'}, status=404)
    try:
        contracts = ContractManagement.objects.filter(
            (Q(contract_post_person_id=user_id) | Q(
                deal_person_id=user_id)) & Q(status='Completed')
        )
        serializer = ContractManagementSerializer(contracts, many=True)
        return Response(serializer.data, status=200)
    except ContractManagement.DoesNotExist:
        return Response({'error': 'No completed contracts found for this user.'}, status=404)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_contract_status(request, contract_id):
    try:
        contract_management = ContractManagement.objects.get(
            contract_id=contract_id)
        data = {
            'status': contract_management.status,
            'sub_status': contract_management.sub_status,
            'contract_id': contract_management.contract_id,
            'contract_post_person_id': contract_management.contract_post_person_id,
            'deal_person_id': contract_management.deal_person_id,
            'id': contract_management.id,
        }
        return Response(data, status=200)
    except ContractManagement.DoesNotExist:
        return Response({'error': 'Contract not found.'}, status=404)
