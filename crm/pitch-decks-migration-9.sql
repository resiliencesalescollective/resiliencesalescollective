-- ============================================================
-- RSC Pitch Deck Builder — Migration 9: second bonus showcase photo
-- Paste this into your Supabase SQL Editor and run it
-- ============================================================

ALTER TABLE public.pitch_decks
  ADD COLUMN IF NOT EXISTS bonus_photo_url_2 TEXT DEFAULT '';
