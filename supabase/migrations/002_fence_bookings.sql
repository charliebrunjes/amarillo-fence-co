-- Estimate booking requests
CREATE TABLE fence_bookings (
  id               UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name        TEXT        NOT NULL,
  phone            TEXT        NOT NULL,
  email            TEXT        NOT NULL,
  address          TEXT        NOT NULL,
  fence_type       TEXT        NOT NULL,
  preferred_date   DATE        NOT NULL,
  preferred_time   TEXT        NOT NULL,
  backup_date      DATE,
  notes            TEXT,
  created_at       TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

ALTER TABLE fence_bookings ENABLE ROW LEVEL SECURITY;

-- Public can submit bookings
CREATE POLICY "allow_public_insert" ON fence_bookings
  FOR INSERT TO public
  WITH CHECK (true);

-- Only authenticated users (owners) can read bookings
CREATE POLICY "allow_auth_select" ON fence_bookings
  FOR SELECT TO authenticated
  USING (true);
