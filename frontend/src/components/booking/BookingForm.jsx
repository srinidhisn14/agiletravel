import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaUsers, FaBed } from 'react-icons/fa'
import { getDestinationName } from '../../data/destinationsPage'
import './BookingForm.css'

const FOOD_OPTIONS = ['None', 'Veg', 'Non-Veg', 'Vegan']
const PURPOSE_OPTIONS = ['Leisure', 'Business', 'Honeymoon', 'Family']
const ROOM_OPTIONS = ['Standard', 'Deluxe', 'Suite', 'Villa']

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validatePhone(phone) {
  const digits = phone.replace(/\D/g, '')
  return digits.length >= 10
}

export default function BookingForm({ packageData, formData, setFormData, errors, setErrors, onSubmit }) {
  const destinationName = getDestinationName(packageData.destination)

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <section className="booking-form__section">
        <h2 className="booking-form__section-title">Personal Details</h2>
        <div className="booking-form__grid">
          <div className="booking-form__field">
            <label htmlFor="fullName">
              Full Name <span className="booking-form__required">*</span>
            </label>
            <div className="booking-form__input-wrap">
              <FaUser aria-hidden="true" />
              <input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                placeholder="John Doe"
              />
            </div>
            {errors.fullName && <span className="booking-form__error">{errors.fullName}</span>}
          </div>

          <div className="booking-form__field">
            <label htmlFor="email">
              Email <span className="booking-form__required">*</span>
            </label>
            <div className="booking-form__input-wrap">
              <FaEnvelope aria-hidden="true" />
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="john@example.com"
              />
            </div>
            {errors.email && <span className="booking-form__error">{errors.email}</span>}
          </div>

          <div className="booking-form__field">
            <label htmlFor="phone">
              Phone <span className="booking-form__required">*</span>
            </label>
            <div className="booking-form__input-wrap">
              <FaPhone aria-hidden="true" />
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="9876543210"
              />
            </div>
            {errors.phone && <span className="booking-form__error">{errors.phone}</span>}
          </div>

          <div className="booking-form__field">
            <label htmlFor="age">
              Age <span className="booking-form__required">*</span>
            </label>
            <div className="booking-form__input-wrap">
              <FaUser aria-hidden="true" />
              <input
                id="age"
                type="number"
                min="1"
                max="120"
                value={formData.age}
                onChange={(e) => handleChange('age', e.target.value)}
                placeholder="25"
              />
            </div>
            {errors.age && <span className="booking-form__error">{errors.age}</span>}
            {formData.age && Number(formData.age) < 18 && !errors.age && (
              <span className="booking-form__warning">Travellers under 18 may require guardian consent.</span>
            )}
          </div>
        </div>
      </section>

      <section className="booking-form__section">
        <h2 className="booking-form__section-title">Travel Details</h2>
        <div className="booking-form__grid">
          <div className="booking-form__field">
            <label htmlFor="destination">Destination</label>
            <div className="booking-form__input-wrap booking-form__input-wrap--readonly">
              <input id="destination" type="text" value={destinationName} readOnly />
            </div>
          </div>

          <div className="booking-form__field">
            <label htmlFor="package">Package</label>
            <div className="booking-form__input-wrap booking-form__input-wrap--readonly">
              <input id="package" type="text" value={packageData.name} readOnly />
            </div>
          </div>

          <div className="booking-form__field">
            <label htmlFor="checkIn">
              Check-in <span className="booking-form__required">*</span>
            </label>
            <div className="booking-form__input-wrap">
              <FaCalendarAlt aria-hidden="true" />
              <input
                id="checkIn"
                type="date"
                value={formData.checkIn}
                onChange={(e) => handleChange('checkIn', e.target.value)}
              />
            </div>
            {errors.checkIn && <span className="booking-form__error">{errors.checkIn}</span>}
          </div>

          <div className="booking-form__field">
            <label htmlFor="checkOut">
              Check-out <span className="booking-form__required">*</span>
            </label>
            <div className="booking-form__input-wrap">
              <FaCalendarAlt aria-hidden="true" />
              <input
                id="checkOut"
                type="date"
                value={formData.checkOut}
                onChange={(e) => handleChange('checkOut', e.target.value)}
              />
            </div>
            {errors.checkOut && <span className="booking-form__error">{errors.checkOut}</span>}
          </div>

          <div className="booking-form__field">
            <label htmlFor="travellers">
              Travellers <span className="booking-form__required">*</span>
            </label>
            <div className="booking-form__input-wrap">
              <FaUsers aria-hidden="true" />
              <input
                id="travellers"
                type="number"
                min="1"
                max="20"
                value={formData.travellers}
                onChange={(e) => handleChange('travellers', e.target.value)}
              />
            </div>
            {errors.travellers && <span className="booking-form__error">{errors.travellers}</span>}
          </div>

          <div className="booking-form__field">
            <label htmlFor="roomPreference">
              Room Preference <span className="booking-form__required">*</span>
            </label>
            <div className="booking-form__input-wrap">
              <FaBed aria-hidden="true" />
              <select
                id="roomPreference"
                value={formData.roomPreference}
                onChange={(e) => handleChange('roomPreference', e.target.value)}
              >
                {ROOM_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            {errors.roomPreference && (
              <span className="booking-form__error">{errors.roomPreference}</span>
            )}
          </div>
        </div>
      </section>

      <section className="booking-form__section">
        <h2 className="booking-form__section-title">Additional Information</h2>
        <div className="booking-form__grid">
          <div className="booking-form__field booking-form__field--full">
            <label htmlFor="specialRequests">Special Requests</label>
            <textarea
              id="specialRequests"
              rows={3}
              value={formData.specialRequests}
              onChange={(e) => handleChange('specialRequests', e.target.value)}
              placeholder="Any dietary needs, accessibility requirements, etc."
            />
          </div>

          <div className="booking-form__field">
            <label htmlFor="foodPreference">Food Preference</label>
            <select
              id="foodPreference"
              value={formData.foodPreference}
              onChange={(e) => handleChange('foodPreference', e.target.value)}
            >
              {FOOD_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="booking-form__field">
            <label htmlFor="travelPurpose">Travel Purpose</label>
            <select
              id="travelPurpose"
              value={formData.travelPurpose}
              onChange={(e) => handleChange('travelPurpose', e.target.value)}
            >
              {PURPOSE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <button type="submit" className="btn btn--primary booking-form__submit">
        Proceed to Payment
      </button>
    </form>
  )
}

export function validateBookingForm(formData) {
  const errors = {}

  if (!formData.fullName.trim()) errors.fullName = 'Full name is required.'
  if (!formData.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!formData.phone.trim()) {
    errors.phone = 'Phone number is required.'
  } else if (!validatePhone(formData.phone)) {
    errors.phone = 'Phone must be at least 10 digits.'
  }
  if (!formData.age) {
    errors.age = 'Age is required.'
  } else if (Number(formData.age) < 1) {
    errors.age = 'Please enter a valid age.'
  }
  if (!formData.checkIn) errors.checkIn = 'Check-in date is required.'
  if (!formData.checkOut) errors.checkOut = 'Check-out date is required.'
  if (formData.checkIn && formData.checkOut && formData.checkOut <= formData.checkIn) {
    errors.checkOut = 'Check-out must be after check-in.'
  }
  if (!formData.travellers || Number(formData.travellers) < 1) {
    errors.travellers = 'At least 1 traveller is required.'
  }
  if (!formData.roomPreference) errors.roomPreference = 'Room preference is required.'

  return errors
}

export function computeDurationDays(checkIn, checkOut) {
  if (!checkIn || !checkOut) return 0
  const start = new Date(checkIn)
  const end = new Date(checkOut)
  const diff = end - start
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))
}
