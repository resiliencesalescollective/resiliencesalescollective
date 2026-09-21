-- ============================================================
-- RSC Pitch Deck Builder — Migration 7: photo on Closer Training slide
-- Paste this into your Supabase SQL Editor and run it
-- ============================================================

ALTER TABLE public.pitch_decks
  ADD COLUMN IF NOT EXISTS closer_training_photo_url TEXT DEFAULT '';
