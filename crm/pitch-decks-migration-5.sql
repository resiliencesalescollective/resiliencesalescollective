-- ============================================================
-- RSC Pitch Deck Builder — Migration 5: "Set as Template" feature
-- Paste this into your Supabase SQL Editor and run it
-- ============================================================

ALTER TABLE public.pitch_decks
  ADD COLUMN IF NOT EXISTS is_template BOOLEAN DEFAULT FALSE;
