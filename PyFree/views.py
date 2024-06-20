from django.shortcuts import render


def home(request):
    return render(request , 'PyFree/home.html') 

def contact(request):
    return render(request , 'PyFree/contact.html')