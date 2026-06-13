'use client';

import HeroSection from '@/components/HeroSection';
import Card from '@/components/Card';
import TestimonialSlider from '@/components/TestimonialSlider';
import FAQAccordion from '@/components/FAQAccordion';
import { motion } from 'framer-motion';
import propertyData from '@/data/property.json';
import amenitiesData from '@/data/amenities.json';
import experiencesData from '@/data/experiences.json';
import faqsData from '@/data/faqs.json';
import testimonialsData from '@/data/testimonials.json';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <main>
      {/* Hero */}
      <HeroSection
        title={propertyData.name}
        subtitle={propertyData.tagline}
        backgroundImage="/images/hero-bg.jpg"
        cta={[
          { label: 'Reservar Ahora', href: '#booking' },
          { label: 'Ver Galería', href: '#gallery' },
        ]}
      />

      {/* About Section */}
      <section id="about" className="section-padding container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-900 mb-6">
            {propertyData.about.title}
          </h2>
          <p className="text-lg text-forest-600 leading-relaxed mb-6">
            {propertyData.about.description}
          </p>
          <p className="text-2xl font-serif italic text-emerald-600">
            "{propertyData.about.concept}"
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {propertyData.about.highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex gap-4 items-start"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <p className="text-forest-700 font-semibold">{highlight}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="section-padding container-custom bg-gradient-to-b from-emerald-50 to-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-900 mb-4">
            Habitaciones de Lujo
          </h2>
          <p className="text-lg text-forest-600">
            Espacios exclusivos diseñados para tu comodidad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {propertyData.rooms.map((room) => (
            <Card
              key={room.id}
              title={room.name}
              description={room.description}
              image={room.image}
              badge={`${room.capacity} huéspedes`}
            />
          ))}
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="section-padding container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-900 mb-4">
            Amenidades Premium
          </h2>
          <p className="text-lg text-forest-600">
            Todo lo que necesitas para una estadía perfecta
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {amenitiesData.amenities.map((amenity) => (
            <motion.div
              key={amenity.id}
              variants={itemVariants}
              className="p-6 bg-gradient-to-br from-emerald-50 to-forest-50 rounded-2xl border border-emerald-200 hover:border-emerald-600 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-3">{getAmenityIcon(amenity.icon)}</div>
              <h3 className="font-serif text-xl font-bold text-forest-900 mb-2">
                {amenity.name}
              </h3>
              <p className="text-sm text-forest-600">{amenity.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Experiences Section */}
      <section
        id="experiences"
        className="section-padding container-custom bg-gradient-to-b from-white to-emerald-50"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-900 mb-4">
            Experiencias Cercanas
          </h2>
          <p className="text-lg text-forest-600">
            Descubre lo que hay alrededor de tu refugio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiencesData.experiences.map((exp) => (
            <Card
              key={exp.id}
              title={exp.name}
              description={`${exp.description} - A ${exp.distance}`}
              image={exp.image}
              badge={exp.difficulty}
            />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-900 mb-4">
            Historias de Nuestros Huéspedes
          </h2>
          <p className="text-lg text-forest-600">
            Lee lo que dicen quienes han estado aquí
          </p>
        </motion.div>

        <TestimonialSlider testimonials={testimonialsData.testimonials} />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding container-custom bg-gradient-to-b from-emerald-50 to-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-forest-600">
            Resolvemos tus dudas sobre tu estadía
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={faqsData.faqs} />
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="section-padding container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
        >
          <h2 className="font-serif text-4xl font-bold mb-4">
            ¿Listo para tu Escapada?
          </h2>
          <p className="text-emerald-100 mb-8 text-lg">
            Reserva directamente y evita comisiones de intermediarios. Nuestro
            equipo está disponible 24/7 para ti.
          </p>
          <div className="space-y-3">
            <button className="w-full px-6 py-4 bg-white text-emerald-600 font-bold rounded-lg hover:bg-emerald-50 transition-all">
              📅 Reservar por Calendario
            </button>
            <button className="w-full px-6 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.945 1.247l-.335-.17-3.479.656.667-2.433-.161-.256a9.879 9.879 0 011.516-4.684 9.873 9.873 0 0112.532.856 9.875 9.875 0 012.853 6.987c0 5.45-4.424 9.874-9.876 9.874-1.583 0-3.088-.368-4.556-1.026l-.355-.187-3.686.694.712-2.604-.159-.254a9.875 9.875 0 01-1.516-5.26 9.877 9.877 0 012.465-6.554z" />
              </svg>
              Contactar por WhatsApp
            </button>
            <button className="w-full px-6 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all">
              📧 Enviar Correo
            </button>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding container-custom bg-gradient-to-b from-emerald-50 to-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-900 mb-4">
            Ubicación y Contacto
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-serif text-xl font-bold text-forest-900 mb-2">
                Ubicación
              </h3>
              <p className="text-forest-600">{propertyData.location.address}</p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold text-forest-900 mb-2">
                Contacto Directo
              </h3>
              <ul className="space-y-2 text-forest-600">
                <li>
                  <a
                    href={`https://wa.me/${propertyData.contact.whatsapp}`}
                    className="hover:text-emerald-600 transition-colors"
                  >
                    📱 WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${propertyData.contact.email}`}
                    className="hover:text-emerald-600 transition-colors"
                  >
                    📧 {propertyData.contact.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${propertyData.contact.phone}`} className="hover:text-emerald-600 transition-colors">
                    ☎️ {propertyData.contact.phone}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold text-forest-900 mb-2">
                Síguenos
              </h3>
              <div className="flex gap-4">
                <a
                  href={propertyData.contact.socialMedia.instagram}
                  className="p-3 bg-emerald-100 rounded-full hover:bg-emerald-600 hover:text-white transition-all"
                >
                  📷
                </a>
                <a
                  href={propertyData.contact.socialMedia.facebook}
                  className="p-3 bg-emerald-100 rounded-full hover:bg-emerald-600 hover:text-white transition-all"
                >
                  👥
                </a>
                <a
                  href={propertyData.contact.socialMedia.tiktok}
                  className="p-3 bg-emerald-100 rounded-full hover:bg-emerald-600 hover:text-white transition-all"
                >
                  🎵
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden h-96 bg-emerald-100"
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d${Math.pow(2, -9)}!2d${propertyData.location.longitude}!3d${propertyData.location.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodeURIComponent(propertyData.location.address)}!5e0!3m2!1ses!2scr!4v1234567890`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function getAmenityIcon(iconName: string): string {
  const icons: Record<string, string> = {
    wifi: '📡',
    cooking: '🍳',
    parking: '🅿️',
    water: '💧',
    tv: '📺',
    ac: '❄️',
    jacuzzi: '🛁',
    workspace: '💼',
    bbq: '🔥',
    security: '🔐',
    garden: '🌿',
    service: '🛎️',
  };
  return icons[iconName] || '✨';
}
