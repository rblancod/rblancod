'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'La Cabaña', href: '#about' },
    { label: 'Espacios', href: '#rooms' },
    { label: 'Galería', href: '#gallery' },
    { label: 'Experiencias', href: '#experiences' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-forest-950/80 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom py-4 flex justify-between items-center">
        <Link href="#hero" className="flex items-center gap-3 group">
          <span className="text-2xl">🌿</span>
          <span className="font-serif text-xl font-semibold tracking-wide text-cream">
            LUCULUC
            <span className="block text-[10px] tracking-[0.3em] text-cream/50 font-sans uppercase -mt-1">
              Garden &amp; Forest
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-cream/70 hover:text-cream transition-colors text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <Link href="#booking" className="btn-glass rounded-full px-5 py-2.5 text-sm">
            Reservar Ahora
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-cream"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-forest-950/95 backdrop-blur-md border-b border-white/5"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-cream/80 hover:text-cream transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#booking"
                className="btn-primary mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reservar Ahora
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
