import { packages } from '../../data/packages'
import SectionHeader from './SectionHeader'
import PackageCard from './PackageCard'
import './FeaturedPackages.css'

export default function FeaturedPackages() {
  return (
    <section className="featured-pkgs section-padding">
      <div className="container">
        <SectionHeader
          eyebrow="Curated Experiences"
          title="Featured Packages"
          subtitle="Exclusive journeys designed by our travel artisans — every detail meticulously planned for an unforgettable escape."
        />
        <div className="featured-pkgs__scroll">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
