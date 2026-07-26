import { FaSignInAlt } from 'react-icons/fa'
import PageHeader from '../components/ui/PageHeader'

export default function Login() {
  return (
    <>
      <PageHeader
        title="Login"
        subtitle="Welcome back! Sign in to manage your bookings."
      />
      <section className="page-content">
        <div className="container">
          <div className="page-content__placeholder">
            <FaSignInAlt aria-hidden="true" />
            <p>Login form coming soon. Access your account to view trips and bookings.</p>
          </div>
        </div>
      </section>
    </>
  )
}
