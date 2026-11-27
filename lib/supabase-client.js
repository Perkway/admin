import { createServerClient } from '@supabase/ssr'

export function createSupabase(cookieStore, setAll) {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    { cookies: { getAll: () => cookieStore.getAll(), setAll } },
  )
}
