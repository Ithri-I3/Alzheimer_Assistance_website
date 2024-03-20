from django.shortcuts import render
from django.http import JsonResponse
from .models import Daily, Super_viseur
from .serializers import DailySerializer, PatientSerializer, SuperViseurSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.serializers import serialize
from rest_framework import status

import json
from django.http import JsonResponse

from django.http import JsonResponse
import json

@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        json_data = json.loads(request.body)

        # Serialize supervisor data
        supervisor_serializer = SuperViseurSerializer(data=json_data)
        if supervisor_serializer.is_valid():
            email = supervisor_serializer.validated_data['email']
            password = supervisor_serializer.validated_data['password']

            try:
                # Check if a user with the provided email exists
                user = Super_viseur.objects.get(email=email)
            except Super_viseur.DoesNotExist:
                # If user doesn't exist, return an error message
                return JsonResponse({'message': 'Invalid email or password'}, status=status.HTTP_400_BAD_REQUEST)

            # Check if the provided password matches the user's password
            if password == user.password:
                # Authentication successful
                return JsonResponse({'message': 'Login successful'})
            else:
                # If passwords don't match, return an error message
                return JsonResponse({'message': 'Invalid email or password'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            # If data is invalid, return an error message
            return JsonResponse({'message': 'Invalid data'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        # If request method is not POST, return an error message
        return JsonResponse({'message': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)


@api_view(['POST'])
def sign_in(request):
    if request.method == 'POST':
        json_data = json.loads(request.body)

        # Serialize supervisor data
        supervisor_serializer = SuperViseurSerializer(data=json_data.get('supervisor'))
        if supervisor_serializer.is_valid():
            supervisor = supervisor_serializer.save()
        else:
            return JsonResponse({'message': 'Invalid supervisor data'}, status=status.HTTP_400_BAD_REQUEST)

        # Serialize patient data
        patient_serializer = PatientSerializer(data=json_data.get('patient'))
        if patient_serializer.is_valid():
            # Associate the supervisor with the patient
            patient_data = patient_serializer.validated_data
            patient_data['super_viseur'] = supervisor.id  # Assuming supervisor has an 'id' attribute
            patient = patient_serializer.save()
        else:
            # Rollback supervisor creation if patient creation fails
            supervisor.delete()
            return JsonResponse({'message': 'Invalid patient data'}, status=status.HTTP_400_BAD_REQUEST)

        return JsonResponse({'message': 'Account created successfully'})
    else:
        return JsonResponse({'message': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)


def dailyy(request):
    if request.method == 'GET':
        # Récupérer les données JSON depuis le corps de la requête
        json_data = json.loads(request.body)

        # Accéder aux données spécifiques
        mail = json_data.get('email')

        list_daily = Daily.objects.filter(email=mail)
        serialized_data = serialize('json', list_daily)

        return JsonResponse({'message': 'Données envoiyé avec succès', 'resultat': json.loads(serialized_data)})



    else:
        return JsonResponse({'message': 'Méthode non autorisée'}, status=405)


def Medecine(request):
    if request.method == 'GET':
        # Récupérer les données JSON depuis le corps de la requête
        json_data = json.loads(request.body)

        # Accéder aux données spécifiques
        mail = json_data.get('email')

        list_Medeine = Daily.objects.filter(email=mail)
        serialized_data = serialize('json', list_Medeine)

        return JsonResponse({'message': 'Données envoiyé avec succès','resultat': json.loads(serialized_data)})

    else:
        return JsonResponse({'message': 'Méthode non autorisée'}, status=405)