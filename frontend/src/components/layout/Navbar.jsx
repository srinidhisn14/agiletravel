import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaPlaneDeparture } from 'react-icons/fa'
import { mainNavLinks, authNavLinks } from '../../data/navLinks'
import { cn } from '../../utils/cn'
import './Navbar.css'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <Link to="/" className="navbar__brand" onClick={closeMobile}>
          <FaPlaneDeparture className="navbar__brand-icon" aria-hidden="true" />
          <span>AgileTravel</span>
        </Link>

        <nav className="navbar__desktop" aria-label="Main navigation">
          <ul className="navbar__links">
            {mainNavLinks.map(({ label, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  end={path === '/'}
                  className={({ isActive }) =>
                    cn('navbar__link', isActive && 'navbar__link--active')
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__auth">
          {authNavLinks.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                cn(
                  'navbar__auth-link',
                  path === '/register' && 'navbar__auth-link--cta',
                  isActive && 'navbar__auth-link--active'
                )
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="navbar__backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobile}
              aria-hidden="true"
            />
            <motion.nav
              className="navbar__mobile"
              aria-label="Mobile navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            >
              <ul className="navbar__mobile-links">
                {mainNavLinks.map(({ label, path }) => (
                  <li key={path}>
                    <NavLink
                      to={path}
                      end={path === '/'}
                      className={({ isActive }) =>
                        cn('navbar__mobile-link', isActive && 'navbar__mobile-link--active')
                      }
                      onClick={closeMobile}
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="navbar__mobile-auth">
                {authNavLinks.map(({ label, path }) => (
                  <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) =>
                      cn(
                        'navbar__mobile-auth-link',
                        path === '/register' && 'navbar__mobile-auth-link--cta',
                        isActive && 'navbar__mobile-auth-link--active'
                      )
                    }
                    onClick={closeMobile}
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
