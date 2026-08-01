#!/usr/bin/env bash
# Organize the Argmin folder — run from inside Argmin/:  bash organize.sh
set -e
mkdir -p db docs/screenshots archive
# Supabase SQL → db/
[ -d Supabase ] && mv Supabase/argmin_boards.sql db/ && rmdir Supabase
# Pasted screenshots → docs/screenshots/
[ -d uploads ] && mv uploads/*.png docs/screenshots/ 2>/dev/null && rmdir uploads
# Old attempts & issue snapshots → archive/
[ -d Temp ] && mv Temp archive/
[ -d argmin-github ] && mv argmin-github archive/
# Gitignore the non-app folders
touch .gitignore
grep -qx "archive/" .gitignore || echo "archive/" >> .gitignore
grep -qx "docs/screenshots/" .gitignore || echo "docs/screenshots/" >> .gitignore
echo "Done. App files (index.html, support.js, Argmin.dc.html, GiftsScreen.jsx, problems/) untouched."
