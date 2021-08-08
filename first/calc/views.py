from django.http.response import HttpResponse
from django.shortcuts import redirect, render
from django.http import HttpResponse
from .models import Events
from django.contrib.auth.models import User,auth
from django.contrib import messages

# Create your views here.
def index(request):
    events=Events.objects.all()
    return render(request,"index.html",{'events':events})

def contact(request):
    if request.method=='POST':
        name=request.POST['name']
        company=request.POST['company']
        email=request.POST['email']
        phone=request.POST['phone']
        message=request.POST['message']
        fromadd='dbmsprojekt@gmail.com'
        print(name)
        return redirect('/')
    else:
        return render(request,"contact.html")

def events(request):
    events=Events.objects.all()
    return render(request,"Event.html",{'events':events})

def login(request):
    if request.method=='POST':
        username=request.POST['username']
        password=request.POST['password']
        user=auth.authenticate(username=username,password=password)
        if user is not None:
            auth.login(request,user)
            return redirect('/')
        else:
            messages.info(request,"incorrect username")
            return redirect('login')
    else:
        return render(request,'login.html')

def logout(request):
    auth.logout(request)
    return redirect('/')