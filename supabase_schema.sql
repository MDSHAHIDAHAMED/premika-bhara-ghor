-- =========================================================
-- প্রেমিক ভাড়া ঘর (Boyfriend for Rent)
-- Supabase Database Schema
-- Run this SQL in your Supabase SQL Editor:
-- =========================================================

CREATE TABLE IF NOT EXISTS bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  token VARCHAR(50) NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  profile_id VARCHAR(100),
  profile_name VARCHAR(255),
  package_id VARCHAR(100),
  package_name VARCHAR(255),
  price VARCHAR(50),
  booking_date DATE,
  note TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Allow public anonymous inserts for bookings
CREATE POLICY "Allow anonymous bookings insert" 
ON bookings FOR INSERT 
TO anon 
WITH CHECK (true);

-- Allow public anonymous reads for viewing bookings
CREATE POLICY "Allow anonymous bookings select" 
ON bookings FOR SELECT 
TO anon 
USING (true);
