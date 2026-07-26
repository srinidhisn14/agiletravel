import { FaCalendarCheck } from 'react-icons/fa'
import PageHeader from '../components/ui/PageHeader'

export default function Booking() {
  return (
    <>
      <PageHeader
        title="Book Your Trip"
        subtitle="Search and book flights, hotels, and activities in one place."
      />
      <section className="page-content">
        <div className="container">
          <div className="page-content__placeholder">
            <FaCalendarCheck aria-hidden="true" />
            <p>Booking engine coming soon. Plan your perfect trip with our easy-to-use tools.</p>
          </div>
        </div>
      </section>
    </>
  )
}
