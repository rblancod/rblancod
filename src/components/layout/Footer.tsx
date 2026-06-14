'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import propertyData from '@/data/property.json';
import { buildSocials, SocialIconRow } from '@/components/SocialLinks';

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Navegación',
      links: [
        { label: 'Inicio', href: '#hero' },
        { label: 'La Cabaña', href: '#about' },
        { label: 'Experiencias', href: '#experiences' },
        { label: 'Preguntas Frecuentes', href: '#faq' },
      ],
    },
    {
      title: 'Explora',
      links: [
        { label: 'Espacios', href: '#rooms' },
        { label: 'Amenidades', href: '#amenities' },
        { label: 'Opiniones', href: '#testimonials' },
        { label: 'Ubicación', href: '#contact' },
      ],
    },
    {
      title: 'Conecta',
      links: [
        { label: 'Instagram', href: propertyData.contact.socialMedia.instagram },
        { label: 'Facebook', href: propertyData.contact.socialMedia.facebook },
        { label: 'TikTok', href: propertyData.contact.socialMedia.tiktok },
        { label: 'Airbnb', href: propertyData.contact.socialMedia.airbnb },
        { label: 'Todos nuestros enlaces', href: propertyData.contact.socialMedia.linktree },
      ],
    },
  ];

  return (
    <footer className="bg-forest-950 border-t border-white/5">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="relative h-12 w-12 rounded-full overflow-hidden ring-1 ring-white/15">
                <Image
                  src="/images/logo-mark.png"
                  alt="Emblema LUCULUC Garden & Forest"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </span>
              <span className="font-serif text-xl font-semibold text-cream">
                LUCULUC
                <span className="block text-[10px] tracking-[0.3em] text-cream/40 font-sans uppercase -mt-1">
                  Garden &amp; Forest
                </span>
              </span>
            </div>
            <p className="font-serif italic text-luculuc-300 mb-3">
              &ldquo;{propertyData.tagline}&rdquo;
            </p>
            <p className="text-sm text-cream/50 leading-relaxed mb-5">
              {propertyData.location.address}, {propertyData.location.country}.
            </p>
            <SocialIconRow socials={socials} />
          </motion.div>

          {sections.map((section) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="section-label mb-4">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/60 hover:text-luculuc-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/40">
            &copy; {currentYear} LUCULUC Garden &amp; Forest. Todos los derechos reservados.
          </p>
          <p className="text-xs text-cream/40">
            {propertyData.contact.host} · Hecho con 🌿 en San Carlos, Costa Rica
          </p>
        </div>
      </div>
    </footer>
  );
}
