from .models import ContractManagement
from .models import Farmer_User, Company_User
from .models import Contract
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import CustomUser


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'name']


class ContractSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Contract
        fields = '__all__'


class FarmerUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Farmer_User
        fields = '__all__'


class CompanyUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Company_User
        fields = '__all__'


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['id'] = user.id
        return token


class ContractManagementSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContractManagement
        fields = '__all__'
