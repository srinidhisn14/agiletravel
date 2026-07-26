import { FaSuitcaseRolling } from 'react-icons/fa'
import PageHeader from '../components/ui/PageHeader'

export default function Packages() {
  return (
    <>
      <PageHeader
        title="Travel Packages"
        subtitle="All-inclusive packages designed for every type of traveler."
      />
      <section className="page-content">
        <div className="container">
          <div className="page-content__placeholder">
            <FaSuitcaseRolling aria-hidden="true" />
            <p>Travel packages coming soon. Curated itineraries at unbeatable prices.</p>
          </div>
        </div>
      </section>
    </>
  )
}
