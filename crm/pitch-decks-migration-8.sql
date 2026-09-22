-- ============================================================
-- RSC Pitch Deck Builder — Migration 8: editable presenter notes
-- Paste this into your Supabase SQL Editor and run it
-- ============================================================

ALTER TABLE public.pitch_decks
  ADD COLUMN IF NOT EXISTS script_overrides TEXT DEFAULT '{}';
