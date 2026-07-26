import { motion } from 'framer-motion'
import './SectionHeader.css'

export default function SectionHeader({ eyebrow, title, subtitle, align = 'center', light = false }) {
  return (
    <motion.header
      className={`section-header section-header--${align}${light ? ' section-header--light' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {eyebrow && <span className="section-header__eyebrow">{eyebrow}</span>}
      <h2 className="section-header__title">{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </motion.header>
  )
}
