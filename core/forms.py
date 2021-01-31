from .models import *
from django import forms


class TurmasForm(forms.ModelForm):
    class Meta:
        model = Turma
        fields = '__all__'

class SalasForm(forms.ModelForm):
    class Meta:
        model = Salas
        fields = '__all__'


class DisciplinaForm(forms.ModelForm):
    class Meta:
        model = Disciplina
        fields = '__all__'


class DiasHorariosForm(forms.ModelForm):
    class Meta:
        model = DiasHorarios
        fields = '__all__'

class OrganizarForm(forms.ModelForm):
    class Meta:
        model = TurmaSala
        fields = '__all__'