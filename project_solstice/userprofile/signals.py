"""Handlers for UserProfile."""
from django.db.models.signals import post_save, pre_delete
import logging
from django.conf import settings
from django.dispatch import receiver
from .models import UserProfile

logger = logging.getLogger(__name__)


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def save_user_profile(sender, **kwargs):
    """User profile receiver."""
    if kwargs.get('created', False):
        try:
            new_profile = UserProfile(user=kwargs['instance'])
            new_profile.save()
        except ValueError:
            message = 'Could not create profile for {}'.format(sender)
            logger.error(message.format(kwargs['instance']))


