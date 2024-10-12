from django.db import models

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
    crops = models.JSONField(default=list)  # Stores list of crops with requirements

    # Additional Rules and Regulations
    rules = models.JSONField(default=list)  # Stores list of rules with title and description

    # Legal Clauses
    legal_clauses = models.JSONField(default=list)  # Stores list of legal clauses with title and description

    def __str__(self):
        return self.contract_title