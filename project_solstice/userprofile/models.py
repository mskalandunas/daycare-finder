"""User Profile."""
from django.db import models as md
from daycares.models import Daycare
from django.conf import settings


class UserProfile(md.Model):
    """Extending Django User Object."""

    user = md.OneToOneField(settings.AUTH_USER_MODEL, related_name='profile')

    favorites = md.ManyToManyField(Daycare, related_name='favorited')
