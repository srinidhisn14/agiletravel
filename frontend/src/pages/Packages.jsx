import { useMemo, useState, useEffect } from 'react'
import { FaSearch, FaFilter } from 'react-icons/fa'
import { useSearchParams } from 'react-router-dom'
import PageHeader from '../components/ui/PageHeader'
import SectionHeader from '../components/home/SectionHeader'
import PackageListingCard from '../components/packages/PackageListingCard'
import { packagesPage } from '../data/packagesPage'
import { destinationsPage } from '../data/destinationsPage'
import { getDestinationName } from '../data/destinationsPage'
import './Packages.css'

const SORT_OPTIONS = [
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
]

export default function Packages() {
  const [searchParams, setSearchParams] = useSearchParams()
  const destinationParam = searchParams.get('destination') || 'all'

  const [destinationFilter, setDestinationFilter] = useState(destinationParam)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('price-asc')

  useEffect(() => {
    setDestinationFilter(destinationParam)
  }, [destinationParam])

  const handleDestinationChange = (value) => {
    setDestinationFilter(value)
    if (value === 'all') {
      searchParams.delete('destination')
    } else {
      searchParams.set('destination', value)
    }
    setSearchParams(searchParams, { replace: true })
  }

  const filteredPackages = useMemo(() => {
    let results = [...packagesPage]

    if (destinationFilter && destinationFilter !== 'all') {
      results = results.filter((pkg) => pkg.destination === destinationFilter)
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      results = results.filter(
        (pkg) =>
          pkg.name.toLowerCase().includes(query) ||
          pkg.location.toLowerCase().includes(query) ||
          getDestinationName(pkg.destination).toLowerCase().includes(query)
      )
    }

    results.sort((a, b) => {
      if (sortBy === 'price-desc') return b.pricePerPerson - a.pricePerPerson
      return a.pricePerPerson - b.pricePerPerson
    })

    return results
  }, [destinationFilter, searchQuery, sortBy])

  const activeDestinationName =
    destinationFilter !== 'all' ? getDestinationName(destinationFilter) : null

  return (
    <>
      <PageHeader
        title="Travel Packages"
        subtitle="All-inclusive packages designed for every type of traveler."
      />

      <section className="page-content packages-page">
        <div className="container">
          <SectionHeader
            eyebrow="Packages"
            title={activeDestinationName ? `Packages in ${activeDestinationName}` : 'Curated Travel Packages'}
            subtitle={
              activeDestinationName
                ? `Handpicked resorts and experiences in ${activeDestinationName}.`
                : 'Luxury resorts, boutique stays, and adventure retreats across 10 destinations.'
            }
            align="center"
          />

          <div className="packages-page__filters">
            <div className="packages-page__search">
              <FaSearch aria-hidden="true" />
              <input
                type="text"
                placeholder="Search packages or resorts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search packages"
              />
            </div>

            <div className="packages-page__filter-group">
              <FaFilter aria-hidden="true" />
              <select
                value={destinationFilter}
                onChange={(e) => handleDestinationChange(e.target.value)}
                aria-label="Filter by destination"
              >
                <option value="all">All Destinations</option>
                {destinationsPage.map((dest) => (
                  <option key={dest.slug} value={dest.slug}>
                    {dest.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="packages-page__filter-group">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort by price"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <p className="packages-page__count">
            {filteredPackages.length} package{filteredPackages.length !== 1 ? 's' : ''} found
          </p>

          {filteredPackages.length === 0 ? (
            <p className="packages-page__empty">No packages match your filters.</p>
          ) : (
            <div className="packages-page__grid">
              {filteredPackages.map((pkg, index) => (
                <PackageListingCard key={pkg.id} pkg={pkg} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
