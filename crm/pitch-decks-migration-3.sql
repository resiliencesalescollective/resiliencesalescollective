-- ============================================================
-- RSC Pitch Deck Builder — Migration 3: branding (colors + fonts)
-- Paste this into your Supabase SQL Editor and run it
-- ============================================================

ALTER TABLE public.pitch_decks
  ADD COLUMN IF NOT EXISTS brand_dark TEXT DEFAULT '#14100E',
  ADD COLUMN IF NOT EXISTS brand_light TEXT DEFAULT '#F3EDE3',
  ADD COLUMN IF NOT EXISTS brand_accent TEXT DEFAULT '#A08256',
  ADD COLUMN IF NOT EXISTS font_pairing TEXT DEFAULT 'archivo';
