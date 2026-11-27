'use client'

import { useActionState } from 'react'
import { signIn } from './actions'

export default function SignInForm() {
  const [error, submit, pending] = useActionState(signIn, null)
  return (
    <form action={submit}>
      <label htmlFor="email">Work email</label>
      <input id="email" name="email" type="email" autoComplete="username" required />
      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password" autoComplete="current-password" required />
      {error && <p className="error" role="alert">{error}</p>}
      <button disabled={pending}>{pending ? 'Signing in…' : 'Sign in'}</button>
    </form>
  )
}
