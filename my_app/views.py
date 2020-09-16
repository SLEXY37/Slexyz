from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from .forms import ContactForm
from django.contrib import messages
# Create your views here.
def home(request):
    return render(request, 'index.html')

def contact(request):
        if request.method == 'GET':
            form = ContactForm()
        else:
            form = ContactForm(request.POST)
            if form.is_valid():
                name = form.cleaned_data['name']
                subject = form.cleaned_data['subject'] + " - " + name
                email = form.cleaned_data['from_email']
                message = form.cleaned_data['message'] + "\n" + email
                send_mail(subject, message, email, ['denis.batausu1@gmail.com'])
                messages.success(request, 'Successfully Sent The Message!')
                return redirect("http://127.0.0.1:8000/contact/")
        return render(request, "contact.html", {'form': form})

def membership(request):
    return render(request, 'membership.html')
