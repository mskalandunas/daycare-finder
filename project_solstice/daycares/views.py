from django.shortcuts import render, redirect
from .forms import DaycareForm

def form_view(request):
    """Return form."""
    if request.method == 'GET':
        form = DaycareForm()
        return render(request, 'form.html', context={'form': form})
    form = DaycareForm(request.POST)
    form.save()
    return redirect('/form')
