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
    custom_contract_type = models.CharField(max_length=255, blank=True, null=True)
    duration_months = models.PositiveIntegerField()
    conditions = models.TextField(blank=True, null=True)
    start_date = models.DateField(blank=True, null=True)
    land_required = models.DecimalField(max_digits=10, decimal_places=2)
    payment_type = models.CharField(max_length=255)

    # Crop Information
    crops = models.JSONField(default=list)

    # Additional Rules and Regulations
    rules = models.JSONField(default=list)  # Stores list of rules with title and description

    # Legal Clauses
    legal_clauses = models.JSONField(default=list)  # Stores list of legal clauses with title and description

    def __str__(self):
        return self.contract_title
       

# Farmer Profile
class FarmerProfile(models.Model):
    # Farmer Information
    name = models.CharField(max_length=100)
    email = models.EmailField()
    mobile_number = models.CharField(max_length=15)
    address = models.TextField()
    gender = models.CharField(max_length=10, choices=[('male', 'Male'), ('female', 'Female'), ('other', 'Other')])
    age = models.PositiveIntegerField()
    experience = models.PositiveIntegerField()
    contracts_made = models.PositiveIntegerField()
    profile_pic = models.URLField(null=True)

    # Farm Information
    farm_address = models.TextField()
    land_area = models.FloatField()
    soil_type = models.CharField(max_length=50)
    farm_type = models.CharField(max_length=50)
    well = models.BooleanField()
    preferred_crops = models.JSONField()  # Store as a list of strings
    land_pictures = models.JSONField()  # Store as a list of URLs

    # Achievements
    achievements = models.JSONField()  # Store as a list of dictionaries with title, date, and certificate URL

    # Additional Information
    additional_info = models.JSONField()  # Store as a list of dictionaries with title and info

    # Contracts
    contracts = models.JSONField()  # Store as a list of dictionaries with title, date, and certificate URL

    def __str__(self):
        return self.name
    
    
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
    achievements = models.JSONField()  # Store as a list of dictionaries with title, date, and certificate URL

    # Additional Information
    additional_info = models.JSONField()  # Store as a list of dictionaries with title and info

    # Previous Contracts
    previous_contracts = models.JSONField()  # Store as a list of dictionaries with title, date, and certificate URL

    # Primary Contact Person
    contact_name = models.CharField(max_length=100)
    contact_designation = models.CharField(max_length=100)
    contact_email = models.EmailField()
    contact_phone = models.CharField(max_length=15)
    
    def __str__(self):
        return f"{self.generative_id} - {self.company_type}"