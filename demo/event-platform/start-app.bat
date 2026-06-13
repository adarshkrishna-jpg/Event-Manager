@echo off
REM Start Django backend and Vite frontend in separate command windows.
cd /d "%~dp0"

start "Django Backend" cmd /k "cd /d "%~dp0" && venv\Scripts\python.exe manage.py migrate && venv\Scripts\python.exe manage.py runserver 8000"
start "React Frontend" cmd /k "cd /d "%~dp0frontend" && npm.cmd install && npm.cmd run dev"
