-- ============================================================
-- RSC Pitch Deck Builder — Migration 2: 22-slide structure
-- Paste this into your Supabase SQL Editor and run it
-- ============================================================

ALTER TABLE public.pitch_decks
  ADD COLUMN IF NOT EXISTS feature1 TEXT DEFAULT '',
  ADD COLUMN IF NOT EXISTS feature2 TEXT DEFAULT '',
  ADD COLUMN IF NOT EXISTS feature3 TEXT DEFAULT '',
  ADD COLUMN IF NOT EXISTS feature4 TEXT DEFAULT '',
  ADD COLUMN IF NOT EXISTS feature5 TEXT DEFAULT '',
  ADD COLUMN IF NOT EXISTS feature6 TEXT DEFAULT '',
  ADD COLUMN IF NOT EXISTS showcase_title TEXT DEFAULT '',
  ADD COLUMN IF NOT EXISTS showcase_desc TEXT DEFAULT '',
  ADD COLUMN IF NOT EXISTS showcase_image_url TEXT DEFAULT '',
  ADD COLUMN IF NOT EXISTS bonus_expanded_desc TEXT DEFAULT '';
