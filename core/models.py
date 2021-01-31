from django.db import models

# Create your models here.

class Disciplina(models.Model):
    cod_disc = models.AutoField(primary_key=True)
    nome = models.CharField('Nome', max_length=255)

class Salas(models.Model):
    cod_sala = models.AutoField(primary_key=True)
    num = models.IntegerField('Número da sala')

class Turma(models.Model):
    cod_turma = models.AutoField(primary_key=True)
    identificacao = models.CharField('Identificação da turma', max_length=255)

class DiasHorarios(models.Model):
    UNITY_CHOICES = (
        ('Segunda', 'Segunda'),
        ('Terça', 'Terça'),
        ('Quarta', 'Quarta'),
        ('Quinta', 'Quinta'),
        ('Sexta', 'Sexta'),
        ('Sábado', 'Sábado'),
        ('Domingo', 'Domingo'),
    )
    cod = models.AutoField(primary_key=True)
    dia = models.CharField('Data', choices=UNITY_CHOICES, max_length=50)
    hora_inicio = models.TimeField('Hora inicio')
    hora_fim = models.TimeField('Hora fim')


class TurmaSala(models.Model):
    turma = models.ForeignKey(Turma, on_delete=models.CASCADE, blank=False, null=False)
    sala = models.ForeignKey(Salas, on_delete=models.CASCADE, blank=False, null=False)
    dia_horario_ah = models.ForeignKey(DiasHorarios, on_delete=models.CASCADE, blank=False, null=False)
    disciplina_ah = models.ForeignKey(Disciplina, on_delete=models.CASCADE, blank=False, null=False)
