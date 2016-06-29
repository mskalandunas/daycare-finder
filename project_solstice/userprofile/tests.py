from django.test import TestCase
from .models import UserProfile
from django.conf import settings
import factory


class UserFactory(factory.django.DjangoModelFactory):
    """Create User test model."""

    class Meta:
        """Meta."""

        model = settings.AUTH_USER_MODEL


class UserTestCase(TestCase):
    """Test User and UserProfile models."""

    def setUp(self):
        """Setup."""
        self.roger = UserFactory.create(
            username='roger'
        )

    def test_user_profile(self):
        """Test profile is created with user."""
        profiles = UserProfile.objects.all()
        self.assertIn(self.roger.profile, profiles)

