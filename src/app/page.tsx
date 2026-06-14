'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import Card from '@/components/Card';
import TestimonialSlider from '@/components/TestimonialSlider';
import FAQAccordion from '@/components/FAQAccordion';
import Gallery from '@/components/Gallery';
import { buildSocials, SocialButtonGrid } from '@/components/SocialLinks';
import propertyData from '@/data/property.json';
import amenitiesData from '@/data/amenities.json';
import experiencesData from '@/data/experiences.json';
import faqsData from '@/data/faqs.json';
import testimonialsData from '@/data/testimonials.json';

const amenityIcons: Record<string, string> = {
  jacuzzi: '🛁',
  wifi: '📶',
  cooking: '🍳',
  parking: '🅿️',
  water: '🚿',
  tv: '📺',
  garden: '🌴',
  terrace: '🌅',
  ac: '❄️',
  security: '🔐',
  pets: '🐾',
  forest: '🌳',
};

const sectionTitle = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const socials = buildSocials({
  whatsapp: propertyData.contact.whatsappLink,
  instagram: propertyData.contact.socialMedia.instagram,
  facebook: propertyData.contact.socialMedia.facebook,
  tiktok: propertyData.contact.socialMedia.tiktok,
  airbnb: propertyData.contact.socialMedia.airbnb,
  waze: propertyData.contact.socialMedia.waze,
  maps: propertyData.contact.socialMedia.googleMaps,
  links: propertyData.contact.socialMedia.linktree,
});

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <HeroSection
        name={propertyData.name}
        fullName={propertyData.fullName}
        tagline={propertyData.tagline}
        description={propertyData.description}
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* ABOUT / EL ESPACIO */}
      <section id="about" className="section-padding container-custom">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.span
            variants={sectionTitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="section-label inline-block mb-4"
          >
            {propertyData.about.title}
          </motion.span>
          <motion.h2
            variants={sectionTitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-semibold text-cream mb-4"
          >
            {propertyData.about.concept}
          </motion.h2>
          <motion.p
            variants={sectionTitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-serif italic text-xl text-luculuc-300 mb-6"
          >
            {propertyData.about.lead}
          </motion.p>
          <motion.p
            variants={sectionTitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-cream/70 leading-relaxed"
          >
            {propertyData.about.description}
          </motion.p>
        </div>

        {/* Detail + Jacuzzi feature with photo */}
        <div className="grid lg:grid-cols-2 gap-6 items-stretch max-w-5xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="liquid-glass rounded-2xl p-7 flex flex-col justify-center"
          >
            <p className="text-cream/75 leading-relaxed mb-5">{propertyData.about.detail}</p>
            <p className="text-cream/75 leading-relaxed">
              <span className="text-luculuc-300 font-serif text-lg">El jacuzzi. </span>
              {propertyData.about.jacuzzi}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden min-h-[280px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(/images/gallery/jacuzzi.jpg)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 to-transparent" />
          </motion.div>
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

      {/* CAPACITY HIGHLIGHT */}
      <section className="section-padding container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto liquid-glass rounded-2xl p-8 md:p-10 text-center"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-4">
            <div>
              <p className="text-4xl font-serif font-bold text-luculuc-300 mb-1">
                {propertyData.capacity?.guests}
              </p>
              <p className="text-xs text-cream/60 uppercase tracking-wide">Huéspedes</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold text-luculuc-300 mb-1">
                {propertyData.capacity?.bedrooms}
              </p>
              <p className="text-xs text-cream/60 uppercase tracking-wide">Habitaciones</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold text-luculuc-300 mb-1">
                {propertyData.capacity?.beds?.queen}
              </p>
              <p className="text-xs text-cream/60 uppercase tracking-wide">Camas Queen</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold text-luculuc-300 mb-1">
                {propertyData.capacity?.bathrooms}
              </p>
              <p className="text-xs text-cream/60 uppercase tracking-wide">Baño</p>
            </div>
          </div>
          <p className="text-sm text-cream/50">
            Espacio perfecto para familias, parejas y grupos de amigos
          </p>
        </motion.div>
      </section>

      {/* ROOMS / SPACES */}
      <section id="rooms" className="section-padding container-custom">
        <div className="text-center mb-14">
          <span className="section-label inline-block mb-4">Habitaciones</span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-cream">
            Espacios Cómodos y Acogedores
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {propertyData.rooms?.map((room) => (
            <Card
              key={`room-${room.id}`}
              title={room.name}
              description={room.description}
              image={room.image}
              badge={`${room.capacity} huéspedes`}
            />
          ))}
        </div>

        <div className="mt-10">
          <h3 className="font-serif text-2xl font-semibold text-cream mb-6">
            Espacios Especiales
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {propertyData.spaces?.map((space) => (
              <div key={`space-${space.id}`} className="liquid-glass rounded-2xl p-6">
                <h4 className="font-serif text-lg font-semibold text-cream mb-2">
                  {space.name}
                </h4>
                <p className="text-xs text-cream/60 leading-relaxed mb-3">
                  {space.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {space.amenities.map((a) => (
                    <span
                      key={a}
                      className="text-xs text-cream/70 bg-white/5 rounded-full px-2 py-0.5"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
              transition={{ delay: Math.min(i * 0.05, 0.4) }}
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

      {/* GALLERY */}
      <Gallery />

      {/* EXPERIENCES */}
      <section id="experiences" className="section-padding container-custom">
        <div className="text-center mb-14">
          <span className="section-label inline-block mb-4">Experiencias Cercanas</span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-cream">
            Descubre San Carlos
          </h2>
          <p className="text-cream/60 mt-4 max-w-2xl mx-auto">
            Aventura, naturaleza y bienestar a pocos minutos de tu refugio.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {experiencesData.experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.05, 0.4) }}
              className="group liquid-glass rounded-2xl p-6 hover:bg-white/5 transition-colors flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl transition-transform group-hover:scale-110">
                  {exp.icon}
                </span>
                <span className="text-[11px] uppercase tracking-wide text-luculuc-300 bg-luculuc-900/40 rounded-full px-2.5 py-1">
                  {exp.category}
                </span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-cream mb-2">{exp.name}</h3>
              <p className="text-sm text-cream/60 leading-relaxed flex-1">{exp.description}</p>
              <p className="text-xs text-luculuc-300 mt-4 font-medium">📍 {exp.distance}</p>
            </motion.div>
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
              <a
                href={propertyData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass px-8 py-4"
              >
                💬 Consultar por WhatsApp
              </a>
              <a
                href={propertyData.links.airbnb}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass px-8 py-4"
              >
                🏡 Ver en Airbnb
              </a>
            </div>
            <p className="text-xs text-cream/50 mt-6">
              Check-in desde las {propertyData.checkIn.time} · Llegada autónoma
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
                  <li key={place.name} className="flex justify-between gap-4 text-sm">
                    <span className="text-cream/70">{place.name}</span>
                    <span className="text-luculuc-300 font-medium whitespace-nowrap">{place.distance}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="liquid-glass rounded-2xl p-6">
              <h3 className="section-label mb-4">Comodidades Cercanas</h3>
              <ul className="space-y-2.5">
                {propertyData.nearby.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-cream/70">
                    <span className="text-luculuc-300 mt-0.5">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="liquid-glass rounded-2xl p-6">
              <h3 className="section-label mb-4">Contáctanos</h3>
              <p className="text-sm text-cream/60 mb-1">
                Anfitriona: <span className="text-cream font-medium">{propertyData.contact.host}</span>
              </p>
              <p className="text-sm text-cream/60 mb-4">
                Propietario: <span className="text-cream font-medium">{propertyData.contact.owner}</span>
              </p>
              <a
                href={`https://wa.me/${propertyData.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-luculuc-300 hover:text-luculuc-200 mb-5"
              >
                📱 {propertyData.contact.whatsappFormatted}
              </a>
              <SocialButtonGrid socials={socials} />
            </div>
          </div>

          <div className="liquid-glass rounded-2xl overflow-hidden min-h-[360px] flex flex-col">
            <iframe
              title="Ubicación de LUCULUC Garden & Forest"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${propertyData.location.longitude - 0.04}%2C${propertyData.location.latitude - 0.04}%2C${propertyData.location.longitude + 0.04}%2C${propertyData.location.latitude + 0.04}&layer=mapnik&marker=${propertyData.location.latitude}%2C${propertyData.location.longitude}`}
              className="w-full flex-1 min-h-[300px] grayscale-[0.2]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex gap-2.5 p-4">
              <a
                href={propertyData.links.waze}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass flex-1 px-4 py-2.5 text-sm"
              >
                🧭 Waze
              </a>
              <a
                href={propertyData.links.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass flex-1 px-4 py-2.5 text-sm"
              >
                📍 Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
