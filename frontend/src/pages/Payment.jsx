import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import PageHeader from '../components/ui/PageHeader'
import PaymentForm, { getPaymentMethodLabel } from '../components/payment/PaymentForm'
import OrderSummary from '../components/payment/OrderSummary'
import './Payment.css'

export default function Payment() {
  const location = useLocation()
  const navigate = useNavigate()
  const booking = location.state?.booking
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    if (!booking) {
      navigate('/packages', { replace: true })
    }
  }, [booking, navigate])

  if (!booking) return null

  const handlePayment = (paymentDetails) => {
    setIsProcessing(true)

    setTimeout(() => {
      const bookingId = `AT-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`

      navigate('/confirmation', {
        state: {
          booking,
          payment: {
            ...paymentDetails,
            methodLabel: getPaymentMethodLabel(paymentDetails.method, paymentDetails),
            status: 'Confirmed',
            bookingId,
          },
        },
      })
    }, 1500)
  }

  return (
    <>
      <PageHeader
        title="Payment"
        subtitle="Complete your payment to confirm your booking."
      />

      <section className="page-content payment-page">
        <div className="container">
          <div className="payment-page__layout">
            <div className="payment-page__form">
              <PaymentForm onSubmit={handlePayment} isProcessing={isProcessing} />
            </div>
            <OrderSummary booking={booking} />
          </div>
        </div>
      </section>
    </>
  )
}
