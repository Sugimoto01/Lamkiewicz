from django.db import models

class Produkty(models.Model):
    nazwa = models.CharField(max_length=20)
    opis = models.TextField(blank = True)
    cena = models.DecimalField(max_digits=12, decimal_places=2)

def __str__(self):
    return self.nazwa