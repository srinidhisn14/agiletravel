import { FaEnvelopeOpenText } from 'react-icons/fa'
import PageHeader from '../components/ui/PageHeader'

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Have questions? We'd love to hear from you."
      />
      <section className="page-content">
        <div className="container">
          <div className="page-content__placeholder">
            <FaEnvelopeOpenText aria-hidden="true" />
            <p>Contact form coming soon. Reach us at hello@agiletravel.com in the meantime.</p>
          </div>
        </div>
      </section>
    </>
  )
}
