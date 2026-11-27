import { cookies } from 'next/headers'
import { createSupabase } from './supabase-client'

export async function serverSupabase({ writable = false } = {}) {
  const cookieStore = await cookies()
  return createSupabase(cookieStore, (updates) => {
    // Server Components can read cookies. The proxy refreshes them before rendering.
    if (writable) {
      for (const { name, value, options } of updates) cookieStore.set(name, value, options)
    }
  })
}

export function isAdmin(user) {
  const allowed = (process.env.PERKWAY_ADMIN_EMAILS ?? '')
    .split(',')
    .map((entry) => entry.trim().toLowerCase())
    .filter(Boolean)
  return Boolean(user?.email_confirmed_at && user.email && allowed.includes(user.email.toLowerCase()))
}
