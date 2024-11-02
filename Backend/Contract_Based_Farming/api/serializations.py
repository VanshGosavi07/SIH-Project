from .models import Farmer_User, Company_User
from .models import Contract
from rest_framework import serializers


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
