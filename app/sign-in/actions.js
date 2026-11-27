'use server'

import { redirect } from 'next/navigation'
import { isAdmin, serverSupabase } from '../../lib/supabase'

export async function signIn(_previous, formData) {
  const email = String(formData.get('email') ?? '').trim()
  const password = String(formData.get('password') ?? '')
  if (!email || !password) return 'Enter your email and password.'

  const supabase = await serverSupabase({ writable: true })
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) return 'Sign-in failed. Check your email and password and try again.'
  if (!isAdmin(data.user)) {
    await supabase.auth.signOut({ scope: 'local' })
    return 'Sign-in failed. Check your email and password and try again.'
  }

  redirect('/dashboard')
}

export async function signOut() {
  const supabase = await serverSupabase({ writable: true })
  await supabase.auth.signOut({ scope: 'local' })
  redirect('/sign-in')
}
