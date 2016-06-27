"""Views."""
from .serializers import UserProfileSerailizer
from django.shortcuts import render
from rest_framework import viewsets
from.models import UserProfile


class UserViewSet(viewsets.ModelViewSet):
    """User view set."""

    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerailizer

