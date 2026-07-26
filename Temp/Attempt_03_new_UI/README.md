# argmin

Optimisation problem solver — 15 models with step-by-step working.

## Structure

    index.html              app shell: nav, home menu, screen routing, all UI
    support.js              runtime (required)
    problems/
      transportation/data.js  Denver example + MODI step data
      assignment/data.js      Hungarian sample matrix
      lists/data.js           knapsack, bin packing, set covering, job sequencing
      graphs/data.js          shared network + solver steps for 5 graph models
      matching/data.js        stable matching / bipartite preferences
      gifts/data.js           gift board starter gifts & friends

Problem data loads lazily on first model open, so the home menu paints immediately.

## Where to make changes

| Change | File |
|---|---|
| Home menu, nav, any screen layout | index.html — template, top half |
| Screen logic, handlers, solver wiring | index.html — script at the bottom |
| A model's sample or step data | problems/<area>/data.js |
| Add a model | MODELS map in index.html + a data.js entry |

## Run locally

Needs a server (ES module imports are blocked on file://):

    python3 -m http.server 8000

Then open http://localhost:8000

## Deploy

Settings → Pages → deploy from branch root. No build step.
