import SignInForm from './form'

export default function SignInPage() {
  return (
    <main className="auth">
      <section className="card" aria-labelledby="sign-in-title">
        <div className="brand"><span className="mark" aria-hidden="true">P</span> Perkway</div>
        <h1 id="sign-in-title">Sign in</h1>
        <p className="muted">Access the Perkway admin dashboard.</p>
        <SignInForm />
      </section>
    </main>
  )
}
