"""Model Form."""
from django.forms import ModelForm
from .models import Daycare

class DaycareForm(ModelForm):
    """Daycare form."""

    class Meta:
        """Meta."""
        model = Daycare


