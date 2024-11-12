from django.contrib import admin
from .models import CustomUser, Farmer_User, Company_User, Contract, ContractManagement

admin.site.register(CustomUser)
admin.site.register(Farmer_User)
admin.site.register(Company_User)
admin.site.register(Contract)
admin.site.register(ContractManagement)