from django import forms

class ContactForm(forms.Form):
    from_email = forms.EmailField(widget=forms.TextInput(attrs={'class' : 'red', 'placeholder' : 'Your email...'}), required=True)
    name = forms.CharField(widget=forms.TextInput(attrs={'class' : 'red', 'placeholder' : 'Your name...'}), required=True)
    subject = forms.CharField(widget=forms.TextInput(attrs={'class' : 'red', 'placeholder' : 'Subject...'}), required=True)
    message = forms.CharField(widget=forms.Textarea(attrs={'class' : 'red', 'placeholder' : 'Your message...'}),required=True)
