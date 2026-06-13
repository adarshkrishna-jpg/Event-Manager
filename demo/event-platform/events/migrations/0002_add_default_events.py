from django.conf import settings
from django.db import migrations
from django.utils import timezone
import datetime


def make_datetime(year, month, day, hour, minute=0):
    dt = datetime.datetime(year, month, day, hour, minute)
    if settings.USE_TZ:
        return timezone.make_aware(dt, timezone.get_default_timezone())
    return dt


def create_default_events(apps, schema_editor):
    Event = apps.get_model('events', 'Event')
    events = [
        {
            'title': 'Innovation Challenge Finale',
            'description': 'AM – Innovation Challenge Finale with winners announcement and keynote session.',
            'date': make_datetime(2024, 10, 29, 9, 0),
            'location': 'TBD',
        },
        {
            'title': 'Ibom Heritage Cultural Night',
            'description': 'Strictly by reservation at Unity Museum, Uyo.',
            'date': make_datetime(2024, 10, 29, 16, 0),
            'location': 'Unity Museum, Uyo',
        },
        {
            'title': 'Conference Day',
            'description': 'A full conference day at Ibom Golf Resort with speakers and networking sessions.',
            'date': make_datetime(2024, 10, 30, 9, 0),
            'location': 'Ibom Golf Resort',
        },
        {
            'title': 'Career Fair & Creative Showcase',
            'description': 'Career fair and creative showcase at the Ibom e-library.',
            'date': make_datetime(2024, 10, 31, 10, 0),
            'location': 'Ibom e-library',
        },
        {
            'title': 'Ecosystem Hub Tours',
            'description': 'Guided ecosystem hub tours with the muster point to be announced.',
            'date': make_datetime(2024, 11, 1, 10, 0),
            'location': 'Muster point to be announced',
        },
        {
            'title': 'Dev Fest Uyo',
            'description': 'Dev Fest Uyo at Je-Nissi Event Center, featuring tech showcases and workshops.',
            'date': make_datetime(2024, 11, 2, 10, 0),
            'location': 'Je-Nissi Event Center, 7 Akpa Ube Street, Uyo',
        },
    ]

    for event in events:
        Event.objects.update_or_create(
            title=event['title'],
            defaults={
                'description': event['description'],
                'date': event['date'],
                'location': event['location'],
            },
        )


def remove_default_events(apps, schema_editor):
    Event = apps.get_model('events', 'Event')
    titles = [
        'Innovation Challenge Finale',
        'Ibom Heritage Cultural Night',
        'Conference Day',
        'Career Fair & Creative Showcase',
        'Ecosystem Hub Tours',
        'Dev Fest Uyo',
    ]
    Event.objects.filter(title__in=titles).delete()


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_events, remove_default_events),
    ]
