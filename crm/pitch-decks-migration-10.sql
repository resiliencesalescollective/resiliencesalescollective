-- ============================================================
-- RSC Pitch Deck Builder — Migration 10: public onboarding questionnaire
-- Paste this into your Supabase SQL Editor and run it
-- ============================================================

-- Link a pitch deck back to the application it came from (optional, for traceability)
ALTER TABLE public.pitch_decks
  ADD COLUMN IF NOT EXISTS client_id UUID REFERENCES public.clients(id) ON DELETE SET NULL;

-- Allow the public onboarding form (no login) to create exactly one new pitch
-- deck per submission. Scoped to INSERT only — it cannot read, edit, or delete
-- any existing deck, so this does not expose other clients' pitch decks.
CREATE POLICY "Public can submit a pitch deck via onboarding form"
  ON public.pitch_decks FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow the public onboarding form to upload the photos it collects
-- (founder photo, bonus screenshots, software screenshot).
CREATE POLICY "Public can upload images via onboarding form"
  ON storage.objects FOR INSERT
  TO anon
  WITH CHECK (bucket_id = 'pitch-deck-images');
