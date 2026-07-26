import { motion } from 'framer-motion'
import {
  FaConciergeBell,
  FaShieldAlt,
  FaGem,
  FaRoute,
  FaHeadset,
  FaAward,
} from 'react-icons/fa'
import { features } from '../../data/features'
import SectionHeader from './SectionHeader'
import './WhyChooseUs.css'

const iconMap = {
  FaConciergeBell,
  FaShieldAlt,
  FaGem,
  FaRoute,
  FaHeadset,
  FaAward,
}

export default function WhyChooseUs() {
  return (
    <section className="why-us section-padding">
      <div className="container">
        <SectionHeader
          eyebrow="The AgileTravel Difference"
          title="Why Choose Us"
          subtitle="We redefine luxury travel with personalized service, exclusive access, and an unwavering commitment to excellence."
          light
        />
        <div className="why-us__grid">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon]
            return (
              <motion.div
                key={feature.id}
                className="why-us__item"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
              >
                <div className="why-us__icon">
                  {Icon && <Icon aria-hidden="true" />}
                </div>
                <h3 className="why-us__title">{feature.title}</h3>
                <p className="why-us__desc">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
