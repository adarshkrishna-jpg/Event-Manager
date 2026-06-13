from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import RegisterView, EventListCreateView, EventDetailView, RegisterForEventView, MyRegistrationsView, api_index

urlpatterns = [
    # API index
    path('', api_index, name='api_index'),
    # Auth
    path('register', RegisterView.as_view(), name='auth_register'),
    path('login', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    # Events
    path('events', EventListCreateView.as_view(), name='event_list'),
    path('events/<int:id>', EventDetailView.as_view(), name='event_detail'),
    path('events/<int:id>/register', RegisterForEventView.as_view(), name='event_register'),
    path('my-registrations', MyRegistrationsView.as_view(), name='my_registrations'),
]
