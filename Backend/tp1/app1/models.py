from django.db import models
from django.contrib.auth.models import User


class Super_viseur(models.Model):
    username_super_viseur = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    age = models.IntegerField()
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=100)
    id_card = models.CharField(max_length=100)

    def __str__(self):
        return self.username_super_viseur


class Patient(models.Model):
    super_viseur = models.OneToOneField(Super_viseur, on_delete=models.CASCADE)
    username_patient = models.CharField(max_length=100, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    id_card = models.CharField(max_length=100)
    gender = models.CharField(max_length=100)

    def __str__(self):
        return self.username_patient


class Daily(models.Model):
    la_tache = models.CharField(max_length=100)
    Time = models.CharField(max_length=100)
    bool = models.CharField(max_length=100, default='false')
    super_viseur = models.ForeignKey(Super_viseur, on_delete=models.CASCADE)

    def __str__(self):
        return self.la_tache


class Medicine(models.Model):
    name = models.CharField(max_length=100)
    Time_medecine = models.CharField(max_length=100)
    bool = models.CharField(max_length=100, default='false')
    super_viseur = models.ForeignKey(Super_viseur, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

