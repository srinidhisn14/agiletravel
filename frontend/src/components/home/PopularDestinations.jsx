import { destinations } from '../../data/destinations'
import SectionHeader from './SectionHeader'
import DestinationCard from './DestinationCard'
import './PopularDestinations.css'

export default function PopularDestinations() {
  return (
    <section className="popular-dest section-padding">
      <div className="container">
        <SectionHeader
          eyebrow="Destinations"
          title="Popular Destinations"
          subtitle="Handpicked locales where luxury meets wonder — each destination curated for the extraordinary traveler."
        />
        <div className="popular-dest__grid">
          {destinations.map((dest, index) => (
            <DestinationCard key={dest.id} destination={dest} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
