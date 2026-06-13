'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import Card from '@/components/Card';
import TestimonialSlider from '@/components/TestimonialSlider';
import FAQAccordion from '@/components/FAQAccordion';
import propertyData from '@/data/property.json';
import amenitiesData from '@/data/amenities.json';
import experiencesData from '@/data/experiences.json';
import faqsData from '@/data/faqs.json';
import testimonialsData from '@/data/testimonials.json';

const amenityIcons: Record<string, string> = {
  wifi: '📶',
  cooking: '🍳',
  parking: '🅿️',
  water: '🚿',
  tv: '📺',
  garden: '🌴',
  bbq: '🌅',
  security: '🔐',
  service: '🌳',
};

const sectionTitle = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <HeroSection
        name={propertyData.name}
        fullName={propertyData.fullName}
        tagline={propertyData.tagline}
        description={propertyData.shortDescription}
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* ABOUT */}
      <section id="about" className="section-padding container-custom">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.span
            variants={sectionTitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="section-label inline-block mb-4"
          >
            Sobre LUCULUC
          </motion.span>
          <motion.h2
            variants={sectionTitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-semibold text-cream mb-6"
          >
            {propertyData.about.concept}
          </motion.h2>
          <motion.p
            variants={sectionTitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-cream/60 leading-relaxed text-lg"
          >
            {propertyData.about.description}
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {propertyData.about.highlights.map((highlight, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="liquid-glass rounded-xl p-5 flex items-start gap-3"
            >
              <span className="text-luculuc-300 mt-0.5">✦</span>
              <p className="text-sm text-cream/80">{highlight}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ROOMS / SPACES */}
      <section id="rooms" className="section-padding container-custom">
        <div className="text-center mb-14">
          <span className="section-label inline-block mb-4">Espacios</span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-cream">
            La Cabaña y sus Rincones
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {propertyData.rooms.map((room) => (
            <Card
              key={`room-${room.id}`}
              title={room.name}
              description={room.description}
              image={room.image}
              badge={`${room.capacity} huéspedes`}
            />
          ))}
          {propertyData.spaces.map((space) => (
            <div key={`space-${space.id}`} className="liquid-glass rounded-2xl p-6">
              <h3 className="font-serif text-2xl font-semibold text-cream mb-2">
                {space.name}
              </h3>
              <p className="text-sm text-cream/60 leading-relaxed mb-4">
                {space.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {space.amenities.map((a) => (
                  <span
                    key={a}
                    className="text-xs text-cream/70 bg-white/5 rounded-full px-3 py-1"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AMENITIES */}
      <section id="amenities" className="section-padding container-custom">
        <div className="text-center mb-14">
          <span className="section-label inline-block mb-4">Amenidades</span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-cream">
            Todo para tu Descanso
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {amenitiesData.amenities.map((amenity, i) => (
            <motion.div
              key={amenity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="liquid-glass rounded-2xl p-6 hover:bg-white/5 transition-colors"
            >
              <div className="text-3xl mb-3">{amenityIcons[amenity.icon] || '✨'}</div>
              <h3 className="font-serif text-xl font-semibold text-cream mb-1">
                {amenity.name}
              </h3>
              <p className="text-sm text-cream/60">{amenity.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GALLERY placeholder */}
      <section id="gallery" className="section-padding container-custom">
        <div className="text-center mb-14">
          <span className="section-label inline-block mb-4">Galería</span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-cream">
            Verde por Todas Partes
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['Exterior', 'Interior', 'Jardines', 'Habitación', 'Atardeceres', 'Naturaleza'].map(
            (label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`liquid-glass rounded-2xl flex items-center justify-center text-cream/40 ${
                  i % 5 === 0 ? 'md:row-span-2 aspect-[3/4] md:aspect-auto' : 'aspect-square'
                }`}
              >
                <span className="text-sm tracking-wide">{label}</span>
              </motion.div>
            )
          )}
        </div>
        <p className="text-center text-cream/40 text-sm mt-6">
          📸 Las fotos reales de LUCULUC se cargarán aquí
        </p>
      </section>

      {/* EXPERIENCES */}
      <section id="experiences" className="section-padding container-custom">
        <div className="text-center mb-14">
          <span className="section-label inline-block mb-4">Experiencias Cercanas</span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-cream">
            Descubre San Carlos
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {experiencesData.experiences.map((exp) => (
            <Card
              key={exp.id}
              title={exp.name}
              description={exp.description}
              image={exp.image}
              badge={exp.distance}
            />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section-padding container-custom">
        <div className="text-center mb-14">
          <span className="section-label inline-block mb-4">Opiniones</span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-cream">
            Lo que Dicen Nuestros Huéspedes
          </h2>
        </div>
        <TestimonialSlider testimonials={testimonialsData.testimonials} />
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding container-custom">
        <div className="text-center mb-14">
          <span className="section-label inline-block mb-4">Preguntas Frecuentes</span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-cream">
            Resolvemos tus Dudas
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={faqsData.faqs} />
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="section-padding container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-luculuc-700 to-forest-900" />
          <div className="noise-overlay relative p-10 md:p-14 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-cream mb-4">
              ¿Listo para tu Escapada?
            </h2>
            <p className="text-cream/70 mb-8 max-w-xl mx-auto">
              Reserva directamente con nosotros y vive la experiencia LUCULUC.
              Te ayudamos con fechas, disponibilidad e instrucciones de llegada.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#contact" className="btn-glass px-8 py-4">
                Consultar por WhatsApp
              </a>
              <a
                href={propertyData.links.airbnb}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass px-8 py-4"
              >
                Ver en Airbnb
              </a>
            </div>
            <p className="text-xs text-cream/50 mt-6">
              Check-in desde las {propertyData.checkIn.time} · Check-in independiente
            </p>
          </div>
        </motion.div>
      </section>

      {/* CONTACT & LOCATION */}
      <section id="contact" className="section-padding container-custom">
        <div className="text-center mb-14">
          <span className="section-label inline-block mb-4">Ubicación &amp; Contacto</span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-cream">
            Encuéntranos en La Tigra
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="liquid-glass rounded-2xl p-6">
              <h3 className="section-label mb-4">Distancias</h3>
              <ul className="space-y-3">
                {Object.values(propertyData.location.nearbyPlaces).map((place) => (
                  <li key={place.name} className="flex justify-between text-sm">
                    <span className="text-cream/70">{place.name}</span>
                    <span className="text-luculuc-300 font-medium">{place.distance}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="liquid-glass rounded-2xl p-6">
              <h3 className="section-label mb-4">Contáctanos</h3>
              <p className="text-sm text-cream/60 mb-4">
                Anfitriona: <span className="text-cream">{propertyData.contact.host}</span>
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={propertyData.contact.socialMedia.linktree}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glass px-5 py-2.5 text-sm"
                >
                  🔗 Todos los enlaces
                </a>
                <a
                  href={propertyData.contact.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glass px-5 py-2.5 text-sm"
                >
                  📷 Instagram
                </a>
                <a
                  href={propertyData.contact.socialMedia.airbnb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glass px-5 py-2.5 text-sm"
                >
                  🏡 Airbnb
                </a>
              </div>
            </div>
          </div>

          <div className="liquid-glass rounded-2xl overflow-hidden min-h-[360px]">
            <iframe
              title="Ubicación de LUCULUC Garden & Forest"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${propertyData.location.longitude - 0.05}%2C${propertyData.location.latitude - 0.05}%2C${propertyData.location.longitude + 0.05}%2C${propertyData.location.latitude + 0.05}&layer=mapnik&marker=${propertyData.location.latitude}%2C${propertyData.location.longitude}`}
              width="100%"
              height="100%"
              className="min-h-[360px] grayscale-[0.2]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
