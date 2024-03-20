from rest_framework import serializers
from .models import Super_viseur, Patient, Daily, Medicine

class SuperViseurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Super_viseur
        fields = '__all__'

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'

class DailySerializer(serializers.ModelSerializer):
    class Meta:
        model = Daily
        fields = '__all__'

class MedicineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medicine
        fields = '__all__'



class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
    fields = '__all__'
