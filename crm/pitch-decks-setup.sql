-- ============================================================
-- RSC Pitch Deck Builder — Database Setup
-- Paste this entire file into your Supabase SQL Editor and run it
-- ============================================================

-- PITCH DECKS TABLE
CREATE TABLE public.pitch_decks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  client_name TEXT NOT NULL DEFAULT 'Untitled Pitch',

  program_name TEXT DEFAULT '',
  category TEXT DEFAULT '',
  movement TEXT DEFAULT '',

  proof_points TEXT DEFAULT '',

  founder_name TEXT DEFAULT '',
  founder_story TEXT DEFAULT '',
  founder_photo_url TEXT DEFAULT '',

  roadmap_title TEXT DEFAULT '',
  p1_weeks TEXT DEFAULT '', p1_title TEXT DEFAULT '',
  p1_skills TEXT DEFAULT '', p1_checks TEXT DEFAULT '',
  p2_weeks TEXT DEFAULT '', p2_title TEXT DEFAULT '',
  p2_skills TEXT DEFAULT '', p2_checks TEXT DEFAULT '',
  p3_weeks TEXT DEFAULT '', p3_title TEXT DEFAULT '',
  p3_skills TEXT DEFAULT '', p3_checks TEXT DEFAULT '',

  g1_weeks TEXT DEFAULT '', g1_title TEXT DEFAULT '', g1_text TEXT DEFAULT '',
  g2_weeks TEXT DEFAULT '', g2_title TEXT DEFAULT '', g2_text TEXT DEFAULT '',
  g3_weeks TEXT DEFAULT '', g3_title TEXT DEFAULT '', g3_text TEXT DEFAULT '',

  platform_name TEXT DEFAULT '',
  features TEXT DEFAULT '',
  credibility TEXT DEFAULT '',

  bold_claim TEXT DEFAULT '',
  promise_title TEXT DEFAULT '',
  promise TEXT DEFAULT '',

  bonus_name TEXT DEFAULT '',
  bonus_desc TEXT DEFAULT '',
  bonus_photo_url TEXT DEFAULT '',

  pkg1_name TEXT DEFAULT '', pkg1_features TEXT DEFAULT '',
  pkg1_price TEXT DEFAULT '', pkg1_today TEXT DEFAULT '',
  pkg2_name TEXT DEFAULT '', pkg2_features TEXT DEFAULT '',
  pkg2_price TEXT DEFAULT '', pkg2_today TEXT DEFAULT '',
  closer_line TEXT DEFAULT '',

  progressive_features BOOLEAN DEFAULT TRUE,
  show_today_pricing BOOLEAN DEFAULT TRUE,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.pitch_decks ENABLE ROW LEVEL SECURITY;

-- Admins have full access to all pitch decks
CREATE POLICY "Admins have full access to pitch decks"
  ON public.pitch_decks FOR ALL
  TO authenticated
  USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'))
  WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

-- Auto-update updated_at (reuses the existing trigger function)
CREATE TRIGGER pitch_decks_updated_at
  BEFORE UPDATE ON public.pitch_decks
  FOR EACH ROW EXECUTE PROCEDURE public.handle_updated_at();

-- STORAGE BUCKET for pitch deck images
INSERT INTO storage.buckets (id, name, public)
  VALUES ('pitch-deck-images', 'pitch-deck-images', true)
  ON CONFLICT DO NOTHING;

CREATE POLICY "Admins can upload pitch deck images"
  ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (
    bucket_id = 'pitch-deck-images'
    AND EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Pitch deck images are publicly readable"
  ON storage.objects FOR SELECT TO public
  USING (bucket_id = 'pitch-deck-images');

CREATE POLICY "Admins can update pitch deck images"
  ON storage.objects FOR UPDATE TO authenticated
  USING (
    bucket_id = 'pitch-deck-images'
    AND EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admins can delete pitch deck images"
  ON storage.objects FOR DELETE TO authenticated
  USING (
    bucket_id = 'pitch-deck-images'
    AND EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );
