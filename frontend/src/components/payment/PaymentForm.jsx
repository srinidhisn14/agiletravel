import { useState } from 'react'
import { FaCreditCard, FaMobileAlt, FaUniversity, FaWallet } from 'react-icons/fa'
import './PaymentForm.css'

const PAYMENT_METHODS = [
  { id: 'card', label: 'Credit/Debit Card', icon: FaCreditCard },
  { id: 'upi', label: 'UPI', icon: FaMobileAlt },
  { id: 'netbanking', label: 'Net Banking', icon: FaUniversity },
  { id: 'wallet', label: 'Wallet', icon: FaWallet },
]

const INDIAN_BANKS = [
  'State Bank of India',
  'HDFC Bank',
  'ICICI Bank',
  'Axis Bank',
  'Punjab National Bank',
  'Bank of Baroda',
  'Kotak Mahindra Bank',
  'IndusInd Bank',
]

const WALLETS = ['Paytm', 'PhonePe', 'Google Pay']

function formatCardNumber(value) {
  const digits = value.replace(/\D/g, '').slice(0, 16)
  return digits.replace(/(\d{4})(?=\d)/g, '$1 ').trim()
}

function formatExpiry(value) {
  const digits = value.replace(/\D/g, '').slice(0, 4)
  if (digits.length >= 3) {
    return `${digits.slice(0, 2)}/${digits.slice(2)}`
  }
  return digits
}

export default function PaymentForm({ onSubmit, isProcessing }) {
  const [method, setMethod] = useState('card')
  const [formData, setFormData] = useState({
    cardHolderName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    upiId: '',
    bank: INDIAN_BANKS[0],
    wallet: WALLETS[0],
  })
  const [errors, setErrors] = useState({})

  const handleChange = (field, value) => {
    let formatted = value
    if (field === 'cardNumber') formatted = formatCardNumber(value)
    if (field === 'expiry') formatted = formatExpiry(value)
    if (field === 'cvv') formatted = value.replace(/\D/g, '').slice(0, 3)

    setFormData((prev) => ({ ...prev, [field]: formatted }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const validate = () => {
    const newErrors = {}

    if (method === 'card') {
      if (!formData.cardHolderName.trim()) newErrors.cardHolderName = 'Cardholder name is required.'
      const cardDigits = formData.cardNumber.replace(/\D/g, '')
      if (cardDigits.length !== 16) newErrors.cardNumber = 'Card number must be 16 digits.'
      if (!/^\d{2}\/\d{2}$/.test(formData.expiry)) newErrors.expiry = 'Enter expiry as MM/YY.'
      if (formData.cvv.length !== 3) newErrors.cvv = 'CVV must be 3 digits.'
    } else if (method === 'upi') {
      if (!formData.upiId.trim() || !formData.upiId.includes('@')) {
        newErrors.upiId = 'Enter a valid UPI ID (e.g. name@upi).'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    const paymentDetails = {
      method,
      ...(method === 'card' && {
        cardHolderName: formData.cardHolderName,
        cardNumber: formData.cardNumber,
        expiry: formData.expiry,
      }),
      ...(method === 'upi' && { upiId: formData.upiId }),
      ...(method === 'netbanking' && { bank: formData.bank }),
      ...(method === 'wallet' && { wallet: formData.wallet }),
    }

    onSubmit(paymentDetails)
  }

  return (
    <form className="payment-form" onSubmit={handleSubmit} noValidate>
      <div className="payment-form__methods">
        {PAYMENT_METHODS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            className={`payment-form__method${method === id ? ' payment-form__method--active' : ''}`}
            onClick={() => setMethod(id)}
          >
            <Icon aria-hidden="true" />
            <span>{label}</span>
          </button>
        ))}
      </div>

      <div className="payment-form__fields">
        {method === 'card' && (
          <>
            <div className="payment-form__field">
              <label htmlFor="cardHolderName">Cardholder Name</label>
              <input
                id="cardHolderName"
                type="text"
                value={formData.cardHolderName}
                onChange={(e) => handleChange('cardHolderName', e.target.value)}
                placeholder="Name on card"
              />
              {errors.cardHolderName && (
                <span className="payment-form__error">{errors.cardHolderName}</span>
              )}
            </div>
            <div className="payment-form__field">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                id="cardNumber"
                type="text"
                inputMode="numeric"
                value={formData.cardNumber}
                onChange={(e) => handleChange('cardNumber', e.target.value)}
                placeholder="1234 5678 9012 3456"
              />
              {errors.cardNumber && (
                <span className="payment-form__error">{errors.cardNumber}</span>
              )}
            </div>
            <div className="payment-form__row">
              <div className="payment-form__field">
                <label htmlFor="expiry">Expiry (MM/YY)</label>
                <input
                  id="expiry"
                  type="text"
                  inputMode="numeric"
                  value={formData.expiry}
                  onChange={(e) => handleChange('expiry', e.target.value)}
                  placeholder="MM/YY"
                />
                {errors.expiry && <span className="payment-form__error">{errors.expiry}</span>}
              </div>
              <div className="payment-form__field">
                <label htmlFor="cvv">CVV</label>
                <input
                  id="cvv"
                  type="password"
                  inputMode="numeric"
                  value={formData.cvv}
                  onChange={(e) => handleChange('cvv', e.target.value)}
                  placeholder="123"
                  maxLength={3}
                />
                {errors.cvv && <span className="payment-form__error">{errors.cvv}</span>}
              </div>
            </div>
          </>
        )}

        {method === 'upi' && (
          <div className="payment-form__field">
            <label htmlFor="upiId">UPI ID</label>
            <input
              id="upiId"
              type="text"
              value={formData.upiId}
              onChange={(e) => handleChange('upiId', e.target.value)}
              placeholder="yourname@upi"
            />
            {errors.upiId && <span className="payment-form__error">{errors.upiId}</span>}
          </div>
        )}

        {method === 'netbanking' && (
          <div className="payment-form__field">
            <label htmlFor="bank">Select Bank</label>
            <select
              id="bank"
              value={formData.bank}
              onChange={(e) => handleChange('bank', e.target.value)}
            >
              {INDIAN_BANKS.map((bank) => (
                <option key={bank} value={bank}>
                  {bank}
                </option>
              ))}
            </select>
          </div>
        )}

        {method === 'wallet' && (
          <div className="payment-form__wallet-options">
            {WALLETS.map((wallet) => (
              <label key={wallet} className="payment-form__wallet-option">
                <input
                  type="radio"
                  name="wallet"
                  value={wallet}
                  checked={formData.wallet === wallet}
                  onChange={(e) => handleChange('wallet', e.target.value)}
                />
                <span>{wallet}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="btn btn--primary payment-form__submit"
        disabled={isProcessing}
      >
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  )
}

export function getPaymentMethodLabel(method, details) {
  switch (method) {
    case 'card':
      return `Credit/Debit Card ending ${details.cardNumber?.slice(-4) || '****'}`
    case 'upi':
      return `UPI (${details.upiId})`
    case 'netbanking':
      return `Net Banking (${details.bank})`
    case 'wallet':
      return `Wallet (${details.wallet})`
    default:
      return method
  }
}
