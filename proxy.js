import { NextResponse } from 'next/server'
import { createSupabase } from './lib/supabase-client'

export async function proxy(request) {
  let response = NextResponse.next({ request })
  const supabase = createSupabase(request.cookies, (updates, headers) => {
    for (const { name, value } of updates) request.cookies.set(name, value)
    response = NextResponse.next({ request })
    for (const { name, value, options } of updates) response.cookies.set(name, value, options)
    for (const [name, value] of Object.entries(headers ?? {})) response.headers.set(name, value)
  })
  await supabase.auth.getClaims()
  return response
}

export const config = { matcher: ['/dashboard/:path*'] }
