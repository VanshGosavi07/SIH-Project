from rest_framework import serializers
from .models import Contract, FarmerProfile, CompanyProfile


# Create Contract
class ContractSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contract
        fields = '__all__'

# Company Profile
class CompanyProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyProfile
        fields = '__all__'



# farmer profile
class FarmerProfileSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = FarmerProfile
        fields = '__all__'

    def get_image_url(self, obj):
        request = self.context.get('request')
        if request is not None and obj.image:
            return request.build_absolute_uri(obj.image.url)
        return None
