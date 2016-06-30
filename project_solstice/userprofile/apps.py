from django.apps import AppConfig


class UserprofileConfig(AppConfig):
    name = 'userprofile'

    def ready(self):
        """Tell Django to import signals when app is loaded."""
        import userprofile.signals
