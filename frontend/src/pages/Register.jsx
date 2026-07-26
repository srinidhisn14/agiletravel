import { FaUserPlus } from 'react-icons/fa'
import PageHeader from '../components/ui/PageHeader'

export default function Register() {
  return (
    <>
      <PageHeader
        title="Create Account"
        subtitle="Join AgileTravel and start planning your next adventure."
      />
      <section className="page-content">
        <div className="container">
          <div className="page-content__placeholder">
            <FaUserPlus aria-hidden="true" />
            <p>Registration form coming soon. Create an account to unlock exclusive deals.</p>
          </div>
        </div>
      </section>
    </>
  )
}
