import { redirect } from 'next/navigation'
import { isAdmin, serverSupabase } from '../../lib/supabase'
import { signOut } from '../sign-in/actions'

export default async function Dashboard() {
  const supabase = await serverSupabase()
  const { data, error } = await supabase.auth.getUser()
  if (error || !isAdmin(data.user)) redirect('/sign-in')

  return (
    <div className="dashboard">
      <header>
        <div className="brand"><span className="mark" aria-hidden="true">P</span> Perkway</div>
        <form action={signOut}><button className="secondary">Sign out</button></form>
      </header>
      <main>
        <h1>Dashboard</h1>
        <p className="muted">Signed in as {data.user.email}</p>
      </main>
    </div>
  )
}
