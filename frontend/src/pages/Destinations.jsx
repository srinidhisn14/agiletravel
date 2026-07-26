import { FaMapMarkedAlt } from 'react-icons/fa'
import PageHeader from '../components/ui/PageHeader'

export default function Destinations() {
  return (
    <>
      <PageHeader
        title="Destinations"
        subtitle="Browse our handpicked destinations and find your next adventure."
      />
      <section className="page-content">
        <div className="container">
          <div className="page-content__placeholder">
            <FaMapMarkedAlt aria-hidden="true" />
            <p>Destination listings coming soon. Explore beaches, mountains, cities, and more.</p>
          </div>
        </div>
      </section>
    </>
  )
}
