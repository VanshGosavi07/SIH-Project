from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.contrib.auth import get_user_model


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=100, null=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email


class Farmer_User(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, null=True)
    email = models.EmailField(null=True, unique=True)
    farmer_user_id = models.CharField(
        max_length=100, null=True)  # Renamed field
    user_type = models.CharField(max_length=50, null=True)
    password = models.CharField(max_length=100, null=True)
    mobile_number = models.CharField(max_length=15)
    address = models.TextField()
    gender = models.CharField(max_length=10)
    age = models.IntegerField()
    experience = models.IntegerField()
    contracts_made = models.IntegerField()
    image = models.ImageField(
        upload_to='farmer_profile_pics/', null=True, blank=True)
    farm_address = models.TextField()
    land_area = models.FloatField()
    soil_type = models.CharField(max_length=50)
    custom_soil_type = models.CharField(max_length=50, null=True, blank=True)
    farm_type = models.CharField(max_length=50)
    well = models.BooleanField(null=True)
    preferred_crops = models.JSONField(default=list)
    achievements = models.JSONField(default=list)
    additional_info = models.JSONField(default=list)
    contracts = models.JSONField(default=list)

    def __str__(self):
        return self.name


class Company_User(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, null=True)
    email = models.EmailField(null=True, unique=True)
    company_user_id = models.CharField(
        max_length=100, null=True)  # Renamed field
    user_type = models.CharField(max_length=50, null=True)
    password = models.CharField(max_length=100, null=True)
    generative_id = models.CharField(max_length=100)
    website = models.URLField(blank=True, null=True)
    tax_identification_number = models.CharField(max_length=50)
    license_number = models.CharField(max_length=50)
    number_of_contracts = models.PositiveIntegerField(blank=True, null=True)
    company_type = models.CharField(max_length=100)
    company_product = models.CharField(max_length=100, blank=True, null=True)
    establish_date = models.DateField()
    profile_pic = models.ImageField(
        upload_to='company_profile_pics/', null=True, blank=True)
    achievements = models.JSONField()
    additional_info = models.JSONField()
    previous_contracts = models.JSONField()
    contact_name = models.CharField(max_length=100)
    contact_designation = models.CharField(max_length=100)
    contact_email = models.EmailField()
    contact_phone = models.CharField(max_length=15)

    def __str__(self):
        return self.name


User = get_user_model()


class Contract(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='contracts')

    # Contract Information
    contract_title = models.CharField(max_length=255)
    contract_description = models.TextField(blank=True, null=True)
    contract_type = models.CharField(max_length=255)
    custom_contract_type = models.CharField(
        max_length=255, blank=True, null=True)
    duration_months = models.PositiveIntegerField()
    conditions = models.TextField(blank=True, null=True)
    start_date = models.DateField(blank=True, null=True)
    land_required = models.DecimalField(max_digits=10, decimal_places=2)
    payment_type = models.CharField(max_length=255)

    # Crop Information
    crops = models.JSONField(default=list)

    # Additional Rules and Regulations
    rules = models.JSONField(default=list)

    # Legal Clauses
    legal_clauses = models.JSONField(default=list)

    # Add this field for the crop image
    crop_image = models.ImageField(
        upload_to='contracts/', null=True, blank=True)

    def __str__(self):
        return self.contract_title
