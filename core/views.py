from django.shortcuts import render
from django.contrib import messages
from .models import *
from .forms import *
# Create your views here.

def index(request):
    organizados = TurmaSala.objects.all()
    turmas = Turma.objects.all()
    salas = Salas.objects.all()
    dias = DiasHorarios.objects.all()
    disciplinas = Disciplina.objects.all()
    if str(request.method == 'POST'):
        form_organizar = OrganizarForm(request.POST or None)
        if form_organizar.is_valid():
            form_organizar.save()
    else:
        form_organizar = OrganizarForm()
    return render(request, 'index.html', {'form':form_organizar, 'organizados':organizados, 'turmas':turmas, 'salas':salas,
                                          'dias':dias, 'disciplinas':disciplinas})

def turmas(request):
    turmas_cadastradas = Turma.objects.all()
    if str(request.method == 'POST'):
        form_turmas = TurmasForm(request.POST or None)
        if form_turmas.is_valid():
            form_turmas.save()
            messages.success(request, 'Turma cadastrada com sucesso!')
    else:
        form_turmas = TurmasForm()
    return render(request, 'turmas.html', {'form':form_turmas, 'turmas':turmas_cadastradas})

def salas(request):
    salas_cadastradas = Salas.objects.all()
    if str(request.method == 'POST'):
        form_salas = SalasForm(request.POST or None)
        if form_salas.is_valid():
            form_salas.save()
            messages.success(request, 'Sala cadastrada com sucesso!')
    else:
        form_salas = SalasForm()
    return render(request, 'salas.html', {'form':form_salas, 'salas':salas_cadastradas})

def disciplina(request):
    disciplina_cadastradas = Disciplina.objects.all()
    if str(request.method == 'POST'):
        form_disciplina = DisciplinaForm(request.POST or None)
        if form_disciplina.is_valid():
            form_disciplina.save()
            messages.success(request, 'Disciplina cadastrada com sucesso!')
    else:
        form_disciplina = DisciplinaForm()
    return render(request, 'disciplinas.html', {'form':form_disciplina, 'disciplinas':disciplina_cadastradas})

def dias_horarios(request):
    datas_cadastradas = DiasHorarios.objects.all()
    if str(request.method == 'POST'):
        form_datas = DiasHorariosForm(request.POST or None)
        if form_datas.is_valid():
            form_datas.save()
            messages.success(request, 'Cadastrado com sucesso!')
    else:
        form_datas = DiasHorariosForm()
    return render(request, 'datas-horarios.html', {'form':form_datas, 'datas':datas_cadastradas})

