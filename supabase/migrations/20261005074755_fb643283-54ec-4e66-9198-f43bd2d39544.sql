CREATE TABLE public.enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  form_type text NOT NULL,
  name text NOT NULL,
  mobile text NOT NULL,
  whatsapp text,
  email text,
  preferred_date text,
  preferred_time text,
  purpose text,
  property_id text,
  property_name text,
  details jsonb NOT NULL DEFAULT '{}'::jsonb,
  message text
);
GRANT ALL ON public.enquiries TO service_role;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;