-- ============================================================
-- RSC Pitch Deck Builder — Migration 11: let onboarding form read
-- the template deck, so it can show example answers as placeholders
-- ============================================================

-- Scoped so only the ONE deck marked as the template is readable —
-- no other client's pitch deck is exposed.
CREATE POLICY "Public can view the template deck to prefill the onboarding form"
  ON public.pitch_decks FOR SELECT
  TO anon
  USING (is_template = true);
