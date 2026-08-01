@echo off
REM Organize the Argmin folder - run from inside Argmin\:  organize.bat
if not exist db mkdir db
if not exist docs\screenshots mkdir docs\screenshots
if not exist archive mkdir archive
REM Supabase SQL -> db\
if exist Supabase\argmin_boards.sql move Supabase\argmin_boards.sql db\
if exist Supabase rd Supabase
REM Pasted screenshots -> docs\screenshots\
if exist uploads move uploads\*.png docs\screenshots\ >nul 2>&1
if exist uploads rd uploads
REM Old attempts and issue snapshots -> archive\
if exist Temp move Temp archive\Temp
if exist argmin-github move argmin-github archive\argmin-github
REM Gitignore the non-app folders
findstr /x "archive/" .gitignore >nul 2>&1 || echo archive/>> .gitignore
findstr /x "docs/screenshots/" .gitignore >nul 2>&1 || echo docs/screenshots/>> .gitignore
echo Done. App files (index.html, support.js, Argmin.dc.html, GiftsScreen.jsx, problems\) untouched.
