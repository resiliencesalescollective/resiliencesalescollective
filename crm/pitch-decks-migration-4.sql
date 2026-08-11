-- ============================================================
-- RSC Pitch Deck Builder — Migration 4: separate main/accent fonts
-- Paste this into your Supabase SQL Editor and run it
-- ============================================================

ALTER TABLE public.pitch_decks
  ADD COLUMN IF NOT EXISTS heading_font TEXT DEFAULT 'archivo',
  ADD COLUMN IF NOT EXISTS accent_font TEXT DEFAULT 'instrumentserif';
