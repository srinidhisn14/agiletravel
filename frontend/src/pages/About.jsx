import { FaInfoCircle } from 'react-icons/fa'
import PageHeader from '../components/ui/PageHeader'

export default function About() {
  return (
    <>
      <PageHeader
        title="About AgileTravel"
        subtitle="We're on a mission to make travel accessible, affordable, and unforgettable."
      />
      <section className="page-content">
        <div className="container">
          <div className="page-content__placeholder">
            <FaInfoCircle aria-hidden="true" />
            <p>Learn more about our story, team, and commitment to great travel experiences.</p>
          </div>
        </div>
      </section>
    </>
  )
}
