from django.contrib import admin
from .models import Super_viseur,Patient,Daily,Medicine
# Register your models here.

admin.site.register(Super_viseur)
admin.site.register(Patient)
admin.site.register(Daily)
admin.site.register(Medicine)