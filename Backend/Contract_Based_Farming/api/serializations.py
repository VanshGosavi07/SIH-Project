from .models import Farmer_User, Company_User
from .models import Contract
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class ContractSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contract
        fields = '__all__'
        read_only_fields = ['user']


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
