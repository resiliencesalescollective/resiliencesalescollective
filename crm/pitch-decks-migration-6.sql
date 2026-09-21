-- ============================================================
-- RSC Pitch Deck Builder — Migration 6: Closer Training slide
-- (replaces the old "Finish Line" 3-step grad slide)
-- Paste this into your Supabase SQL Editor and run it
-- ============================================================

ALTER TABLE public.pitch_decks
  ADD COLUMN IF NOT EXISTS closer_training_title TEXT DEFAULT '',
  ADD COLUMN IF NOT EXISTS closer_training_intro TEXT DEFAULT '',
  ADD COLUMN IF NOT EXISTS closer_training_points TEXT DEFAULT '';
