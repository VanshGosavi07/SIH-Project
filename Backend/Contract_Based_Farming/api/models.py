from django.db import models

# Create Contract


class Contract(models.Model):
    # Company Information
    company_name = models.CharField(max_length=255)
    contact_email = models.EmailField()
    user_id = models.CharField(max_length=255)
    website_link = models.URLField()
    address = models.TextField()

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
    # Stores list of rules with title and description
    rules = models.JSONField(default=list)

    # Legal Clauses
    # Stores list of legal clauses with title and description
    legal_clauses = models.JSONField(default=list)

    def __str__(self):
        return self.contract_title

# Company Profile


class CompanyProfile(models.Model):
    # Company Information
    generative_id = models.CharField(max_length=100)
    website = models.URLField(blank=True, null=True)
    tax_identification_number = models.CharField(max_length=50)
    license_number = models.CharField(max_length=50)
    number_of_contracts = models.PositiveIntegerField(blank=True, null=True)
    company_type = models.CharField(max_length=100)
    company_product = models.CharField(max_length=100, blank=True, null=True)
    establish_date = models.DateField()
    profile_pic = models.ImageField(null=True)

    # Achievements
    # Store as a list of dictionaries with title, date, and certificate URL
    achievements = models.JSONField()

    # Additional Information
    # Store as a list of dictionaries with title and info
    additional_info = models.JSONField()

    # Previous Contracts
    # Store as a list of dictionaries with title, date, and certificate URL
    previous_contracts = models.JSONField()

    # Primary Contact Person
    contact_name = models.CharField(max_length=100)
    contact_designation = models.CharField(max_length=100)
    contact_email = models.EmailField()
    contact_phone = models.CharField(max_length=15)

    def __str__(self):
        return f"{self.generative_id} - {self.company_type}"

# Farmer Profile


class FarmerProfile(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    mobile_number = models.CharField(max_length=15)
    address = models.TextField()
    gender = models.CharField(max_length=10)
    age = models.IntegerField()
    experience = models.IntegerField()
    contracts_made = models.IntegerField()
    farm_address = models.TextField()
    land_area = models.FloatField()
    soil_type = models.CharField(max_length=50)
    custom_soil_type = models.CharField(max_length=50, null=True, blank=True)
    farm_type = models.CharField(max_length=50)
    preferred_crops = models.JSONField(default=list)
    achievements = models.JSONField(default=list)
    additional_info = models.JSONField(default=list)
    contracts = models.JSONField(default=list)
    image = models.ImageField(
        upload_to='images/', null=True, blank=True)  # Add this line

    def __str__(self):
        return self.name
