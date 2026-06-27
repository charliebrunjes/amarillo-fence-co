-- Fence estimate form submissions
CREATE TABLE fence_estimates (
  id          UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name   TEXT        NOT NULL,
  phone       TEXT        NOT NULL,
  email       TEXT        NOT NULL,
  address     TEXT        NOT NULL,
  fence_type  TEXT        NOT NULL,
  linear_feet TEXT        NOT NULL,
  description TEXT,
  how_heard   TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

ALTER TABLE fence_estimates ENABLE ROW LEVEL SECURITY;

-- Public can insert (form submissions from anonymous visitors)
CREATE POLICY "allow_public_insert" ON fence_estimates
  FOR INSERT TO public
  WITH CHECK (true);

-- Only authenticated users (owners) can read submissions
CREATE POLICY "allow_auth_select" ON fence_estimates
  FOR SELECT TO authenticated
  USING (true);
