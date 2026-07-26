import { motion } from 'framer-motion'

export default function PageHeader({ title, subtitle }) {
  return (
    <motion.section
      className="page-header"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="container">
        <h1 className="page-header__title">{title}</h1>
        {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
      </div>
    </motion.section>
  )
}
