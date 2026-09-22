-- ============================================================
-- RSC CRM — Add "reason not closing" to clients
-- Paste into your Supabase SQL Editor and run it.
-- ============================================================

ALTER TABLE public.clients
  ADD COLUMN IF NOT EXISTS lost_reason TEXT DEFAULT '';
