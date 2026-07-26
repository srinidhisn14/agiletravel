import { testimonials } from '../../data/testimonials'
import SectionHeader from './SectionHeader'
import TestimonialCard from './TestimonialCard'
import './Testimonials.css'

export default function Testimonials() {
  return (
    <section className="testimonials section-padding">
      <div className="container">
        <SectionHeader
          eyebrow="Guest Stories"
          title="What Our Travelers Say"
          subtitle="Real experiences from discerning travelers who trust AgileTravel to craft their most memorable journeys."
        />
        <div className="testimonials__grid">
          {testimonials.map((item, index) => (
            <TestimonialCard key={item.id} testimonial={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
