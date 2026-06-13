
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

## Screenshots
<img width="1920" height="1080" alt="Screenshot 2026-06-13 130315" src="https://github.com/user-attachments/assets/e28c4878-5156-425c-b599-653df023f441" />
<img width="1920" height="1080" alt="Screenshot 2026-06-13 130302" src="https://github.com/user-attachments/assets/2b5f3192-838f-4c37-b123-6d709c7c72a0" />
<img width="1920" height="1080" alt="Screenshot 2026-06-13 130224" src="https://github.com/user-attachments/assets/3175d2fb-2984-431c-bcd8-58b9767a529f" />
<img width="1920" height="1080" alt="Screenshot 2026-06-13 130213" src="https://github.com/user-attachments/assets/15bd315e-b92d-4b85-9dec-6520a685ee59" />
<img width="1920" height="1080" alt="Screenshot 2026-06-13 130147" src="https://github.com/user-attachments/assets/e5654e52-71d4-4677-8b92-a51bb9cb463c" />
<img width="1478" height="753" alt="Screenshot 2026-06-13 130121" src="https://github.com/user-attachments/assets/ca0d1136-d3d7-40fd-a9ee-527c9ce1f9f1" />




