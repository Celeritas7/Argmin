# Argmin

Interactive optimisation workbench — pick a model (transportation, assignment, knapsack, TSP, matching, and more), enter your data, and see the solution with every step of the working.

Everything lives in a single self-contained file: `index.html`. No build step, no dependencies, works offline.

## Run locally

Double-click `index.html` — it opens and runs in any modern browser.

## Launch on GitHub Pages (free hosting)

1. Create a new repository on GitHub (e.g. `argmin`).
2. Upload `index.html` and this `README.md` to the repository root (Add file → Upload files).
3. Go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
5. After a minute your app is live at `https://<your-username>.github.io/argmin/`.

## Notes

- This is a high-fidelity interactive prototype: the UI, editors, examples, step-through solver views, saved models, and light/dark theme all work in the browser.
- To change anything, edit `index.html` (or ask for changes in the original design project and re-export).
