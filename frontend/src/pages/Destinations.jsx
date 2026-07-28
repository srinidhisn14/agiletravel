import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import PageHeader from '../components/ui/PageHeader'
import SectionHeader from '../components/home/SectionHeader'
import DestinationDetailCard from '../components/destinations/DestinationDetailCard'
import { destinationsPage } from '../data/destinationsPage'
import './Destinations.css'

export default function Destinations() {
  const [search, setSearch] = useState('')

  const filteredDestinations = destinationsPage.filter(
    (destination) =>
      destination.name.toLowerCase().includes(search.toLowerCase()) ||
      destination.country.toLowerCase().includes(search.toLowerCase()) ||
      destination.description.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <PageHeader
        title="Destinations"
        subtitle="Browse our handpicked destinations and find your next adventure."
      />

      <section className="page-content destinations-page">
        <div className="container">
          <SectionHeader
            eyebrow="Explore"
            title="Where Will You Go Next?"
            subtitle="From tropical beaches to snow-capped peaks — discover 10 extraordinary destinations curated for every traveler."
            align="center"
          />

          <div className="destinations-page__search">
            <FaSearch aria-hidden="true" />
            <input
              type="text"
              placeholder="Search destinations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search destinations"
            />
          </div>

          {filteredDestinations.length === 0 ? (
            <p className="destinations-page__empty">No destinations match your search.</p>
          ) : (
            <div className="destinations-page__grid">
              {filteredDestinations.map((destination, index) => (
                <DestinationDetailCard
                  key={destination.slug}
                  destination={destination}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
