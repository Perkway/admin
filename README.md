# Perkway Admin

Next.js admin dashboard with Supabase email and password authentication.

1. Run `npm ci`.
2. Copy `.env.example` to `.env.local`. Set the Supabase publishable key and set `PERKWAY_ADMIN_EMAILS` to a comma-separated list of authorized email addresses.
3. Create each admin in Supabase Authentication → Users with a confirmed email and a password. The app grants dashboard access only when both Supabase and the email allowlist approve the account.
4. Run `npm run dev` and open http://localhost:3000.

For Vercel, import this repository and set the same three environment variables in the target environment. Use `npm run build` to verify the production build locally.
