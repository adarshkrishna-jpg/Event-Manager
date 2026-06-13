# events/views.py
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from .models import Event, Registration
from .serializers import UserSerializer, EventSerializer, RegistrationSerializer

# Auth View
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_with_rest_framework = UserSerializer
    serializer_class = UserSerializer

# Event Views
class EventListCreateView(generics.ListCreateAPIView):
    queryset = Event.objects.all().order_by('date')
    serializer_class = EventSerializer
    permission_classes = (permissions.AllowAny,) # Viewable by anyone

class EventDetailView(generics.RetrieveAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = (permissions.AllowAny,)
    lookup_field = 'id'

# Registration Views
class RegisterForEventView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, id):
        try:
            event = Event.objects.get(id=id)
        except Event.DoesNotExist:
            return Response({"error": "Event not found"}, status=status.HTTP_404_NOT_FOUND)

        if Registration.objects.filter(user=request.user, event=event).exists():
            return Response({"error": "You are already registered for this event"}, status=status.HTTP_400_BAD_REQUEST)

        registration = Registration.objects.create(user=request.user, event=event)
        return Response(RegistrationSerializer(registration).data, status=status.HTTP_201_CREATED)

class MyRegistrationsView(generics.ListAPIView):
    serializer_class = RegistrationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Registration.objects.filter(user=self.request.user)


@api_view(['GET'])
@permission_classes([AllowAny])
def api_index(request):
    """Simple API index returning available endpoints."""
    endpoints = {
        'register': request.build_absolute_uri('register'),
        'login': request.build_absolute_uri('login'),
        'token_refresh': request.build_absolute_uri('token/refresh/'),
        'events': request.build_absolute_uri('events'),
        'event_detail': request.build_absolute_uri('events/{id}'),
        'event_register': request.build_absolute_uri('events/{id}/register'),
        'my_registrations': request.build_absolute_uri('my-registrations'),
    }
    return Response({'endpoints': endpoints})