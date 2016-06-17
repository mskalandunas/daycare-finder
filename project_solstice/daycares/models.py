"""Daycare Model."""

from django.db import models as md


class Daycare(md.Model):
    """Daycare model."""

    name = md.CharField(max_length=255)
    address = md.CharField(max_length=255)
    phonenum = md.CharField(max_length=255)
    email = md.EmailField()
    licensed = md.BooleanField()
    opentime = md.IntegerField(max_length=255)
    closetime = md.IntegerField(max_length=255)
    price = md.CharField(max_length=255)
    ratio = md.CharField(max_length=255)
    security = md.BooleanField()
    food = md.BooleanField()
    waitlist = md.BooleanField()
    avgwait = md.CharField(max_length=255)
