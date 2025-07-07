# Design Rater Stack

This is a minimal stack to collect design samples, store them in Supabase, and rate them via a Next.js UI.

## Contents
- `scraper/`: Dribbble scraping script
- `database/`: SQL schema for Supabase
- `web/`: Next.js reviewer app
- `.env.example`: For Supabase credentials

## Deployment
- Create a Supabase project
- Add `design_samples` table using schema.sql
- Set environment variables
- Deploy to Vercel
