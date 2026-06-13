# Event Manager

This repository contains a Django + React event management application built in `demo/event-platform`.

## Project structure

- `demo/event-platform/backend/` - Django backend and API
- `demo/event-platform/events/` - Event and registration app
- `demo/event-platform/frontend/` - React frontend built with Vite
- `demo/event-platform/manage.py` - Django management commands

## Features

- Event list and event details pages
- User registration and login using JWT
- Event registration for authenticated users
- Schedule-style UI for event listing and registered events
- Seeded event schedule entries for October 29 to November 2, 2024

## Seeded events

The project includes a data migration that creates the following events:

- AM – Innovation Challenge Finale — `TBD` — 2024-10-29 09:00
- Ibom Heritage Cultural Night — `Unity Museum, Uyo` — 2024-10-29 16:00
- Conference Day — `Ibom Golf Resort` — 2024-10-30 09:00
- Career Fair & Creative Showcase — `Ibom e-library` — 2024-10-31 10:00
- Ecosystem Hub Tours — `Muster point to be announced` — 2024-11-01 10:00
- Dev Fest Uyo — `Je-Nissi Event Center, 7 Akpa Ube Street, Uyo` — 2024-11-02 10:00

## Setup

1. Create and activate a Python virtual environment.
2. Install backend dependencies:

```bash
cd demo/event-platform
pip install -r requirements.txt
```

3. Install frontend dependencies:

```bash
cd frontend
npm install
```

4. Apply migrations and seed the events:

```bash
cd ..
python manage.py migrate
```

5. Run the Django backend:

```bash
python manage.py runserver
```

6. Run the frontend dev server:

```bash
cd frontend
npm run dev
```

## Notes

- The frontend expects the backend API at `http://127.0.0.1:8000/api/`.
- Registered events are displayed using the same schedule-style layout as the main event listing.

## GitHub

Repository URL: `https://github.com/adarshkrishna-jpg/Event-Manager`
