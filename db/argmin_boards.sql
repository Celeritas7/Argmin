-- Argmin storage: one table for every model.
-- Rename the existing gift_boards table and add per-model columns.

alter table if exists public.gift_boards rename to argmin_boards;

alter table public.argmin_boards
  add column if not exists model  text,
  add column if not exists family text;

-- Backfill: the old rows already used the model id as the primary key,
-- except the gift board which was stored under 'default'.
update public.argmin_boards set id = 'gifts' where id = 'default';
update public.argmin_boards set model = id where model is null;
update public.argmin_boards set family = case
  when model in ('transportation','transshipment')                       then 't'
  when model = 'assignment'                                              then 'a'
  when model in ('knapsack','setcovering','binpacking','jobseq')         then 'l'
  when model in ('shortestpath','maxflow','mincostflow','tsp','vrp')     then 'g'
  when model in ('stable','bipartite')                                   then 'p'
  when model = 'gifts'                                                   then 'gf'
end where family is null;

alter table public.argmin_boards alter column model set not null;

create index if not exists argmin_boards_model_idx  on public.argmin_boards (model);
create index if not exists argmin_boards_family_idx on public.argmin_boards (family);

-- Final shape
--   id         text primary key   -- board key; today one board per model ('transportation', 'gifts', …)
--   model      text not null      -- 'transportation' | 'assignment' | 'knapsack' | … | 'gifts'
--   family     text               -- solver family: t | a | l | g | p | gf
--   data       jsonb              -- { data: <model payload>, title: <string> }
--   updated_at timestamptz
