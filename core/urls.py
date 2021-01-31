from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='index'),
    path('index/turmas', turmas, name='turmas'),
    path('index/salas', salas, name='salas'),
    path('index/datas', dias_horarios, name='datas'),
    path('index/disciplinas', disciplina, name='disciplinas'),
]