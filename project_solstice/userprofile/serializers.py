"""Serializers."""
from rest_framework import serializers
from .models import UserProfile


class UserProfileSerailizer(serializers.ModelSerializer):
    """Serializer for UserProfile model."""

    user = serializers.ReadOnlyField(source='user.username')
    favorites = serializers.ReadOnlyField(source='favorites')

    class Meta:
        """Meta."""

        model = UserProfile
        exclude = []

