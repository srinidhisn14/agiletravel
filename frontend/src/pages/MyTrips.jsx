import { FaPassport } from 'react-icons/fa'
import PageHeader from '../components/ui/PageHeader'

export default function MyTrips() {
  return (
    <>
      <PageHeader
        title="My Trips"
        subtitle="View and manage your upcoming and past bookings."
      />
      <section className="page-content">
        <div className="container">
          <div className="page-content__placeholder">
            <FaPassport aria-hidden="true" />
            <p>Your trip dashboard coming soon. Sign in to see your bookings.</p>
          </div>
        </div>
      </section>
    </>
  )
}
