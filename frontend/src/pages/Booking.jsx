import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import PageHeader from '../components/ui/PageHeader'
import BookingForm, { validateBookingForm } from '../components/booking/BookingForm'
import BookingSummary from '../components/booking/BookingSummary'
import { getPackageById } from '../data/packagesPage'
import { getDestinationName } from '../data/destinationsPage'
import './Booking.css'

const initialFormData = {
  fullName: '',
  email: '',
  phone: '',
  age: '',
  checkIn: '',
  checkOut: '',
  travellers: '2',
  roomPreference: 'Del',
  specialRequests: '',
  foodPreference: 'None',
  travelPurpose: 'Leisure',
}

export default function Booking() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const packageId = searchParams.get('packageId')

  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})

  const packageData = packageId ? getPackageById(packageId) : null

  useEffect(() => {
    if (!packageData) {
      navigate('/packages', { replace: true })
    }
  }, [packageData, navigate])

  if (!packageData) return null

  const handleSubmit = () => {
    const validationErrors = validateBookingForm(formData)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) return

    const travellers = Number(formData.travellers)
    const totalCost = packageData.pricePerPerson * travellers

    navigate('/payment', {
      state: {
        booking: {
          ...formData,
          packageId: packageData.id,
          packageName: packageData.name,
          destination: packageData.destination,
          destinationName: getDestinationName(packageData.destination),
          pricePerPerson: packageData.pricePerPerson,
          travellers,
          totalCost,
        },
      },
    })
  }

  return (
    <>
      <PageHeader
        title="Book Your Trip"
        subtitle={`Complete your booking for ${packageData.name}.`}
      />

      <section className="page-content booking-page">
        <div className="container">
          <div className="booking-page__layout">
            <div className="booking-page__form">
              <BookingForm
                packageData={packageData}
                formData={formData}
                setFormData={setFormData}
                errors={errors}
                setErrors={setErrors}
                onSubmit={handleSubmit}
              />
            </div>
            <BookingSummary packageData={packageData} formData={formData} />
          </div>
        </div>
      </section>
    </>
  )
}
