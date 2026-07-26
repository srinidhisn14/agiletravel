import { Link } from 'react-router-dom'
import { FaPlaneDeparture, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { mainNavLinks } from '../../data/navLinks'
import './Footer.css'

const socialLinks = [
  { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__grid">
          <div className="footer__brand-col">
            <Link to="/" className="footer__brand">
              <FaPlaneDeparture className="footer__brand-icon" aria-hidden="true" />
              <span>AgileTravel</span>
            </Link>
            <p className="footer__tagline">
              Discover the world with confidence. Book flights, hotels, and curated travel packages — all in one place.
            </p>
            <div className="footer__social">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Quick Links</h3>
            <ul className="footer__links">
              {mainNavLinks.slice(0, 4).map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="footer__link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Company</h3>
            <ul className="footer__links">
              {mainNavLinks.slice(4).map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="footer__link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Contact Us</h3>
            <ul className="footer__contact">
              <li>
                <HiLocationMarker className="footer__contact-icon" aria-hidden="true" />
                <span>123 Travel Street, Adventure City, AC 12345</span>
              </li>
              <li>
                <HiPhone className="footer__contact-icon" aria-hidden="true" />
                <a href="tel:+18001234567">+1 (800) 123-4567</a>
              </li>
              <li>
                <HiMail className="footer__contact-icon" aria-hidden="true" />
                <a href="mailto:hello@agiletravel.com">hello@agiletravel.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} AgileTravel. All rights reserved.</p>
          <p className="footer__bottom-tagline">Travel smarter, explore further.</p>
        </div>
      </div>
    </footer>
  )
}
