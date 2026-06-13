'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Navegación',
      links: [
        { label: 'Inicio', href: '#' },
        { label: 'Sobre nosotros', href: '#about' },
        { label: 'Habitaciones', href: '#rooms' },
        { label: 'Política de privacidad', href: '#' },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { label: '📱 WhatsApp', href: 'https://wa.me/' },
        { label: '📧 Email', href: 'mailto:contact@cabanatropical.com' },
        { label: '📍 Ubicación', href: '#contact' },
        { label: '☎️ Teléfono', href: 'tel:+506XXXXXXXX' },
      ],
    },
    {
      title: 'Síguenos',
      links: [
        { label: 'Instagram', href: 'https://instagram.com' },
        { label: 'Facebook', href: 'https://facebook.com' },
        { label: 'TikTok', href: 'https://tiktok.com' },
        { label: 'YouTube', href: 'https://youtube.com' },
      ],
    },
  ];

  return (
    <footer className="bg-forest-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">🌿</span>
              </div>
              <span className="font-serif text-xl font-bold">Cabaña Tropical</span>
            </div>
            <p className="text-forest-300 text-sm leading-relaxed">
              Tu destino perfecto para escapar de la rutina y conectar con la naturaleza.
            </p>
          </motion.div>

          {/* Links */}
          {footerSections.map((section) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-forest-300 hover:text-emerald-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-forest-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-forest-400 text-sm">
              &copy; {currentYear} Cabaña Tropical Premium. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-forest-400 hover:text-emerald-400 transition-colors text-sm">
                Términos
              </Link>
              <Link href="#" className="text-forest-400 hover:text-emerald-400 transition-colors text-sm">
                Privacidad
              </Link>
              <Link href="#" className="text-forest-400 hover:text-emerald-400 transition-colors text-sm">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
