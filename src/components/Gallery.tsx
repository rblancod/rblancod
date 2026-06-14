'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react';

interface GalleryItem {
  label: string;
  src: string;
  span?: boolean;
}

const items: GalleryItem[] = [
  { label: 'Jacuzzi al Aire Libre', src: '/images/gallery/jacuzzi.jpg', span: true },
  { label: 'Noches de Ensueño', src: '/images/gallery/jacuzzi-noche.jpg' },
  { label: 'Sala & Corredores', src: '/images/gallery/sala.jpg' },
  { label: 'Terraza', src: '/images/gallery/terraza.jpg' },
  { label: 'Ducha Externa', src: '/images/gallery/ducha-externa.jpg' },
  { label: 'Flora Tropical', src: '/images/gallery/flora.jpg' },
  { label: 'Fauna Local', src: '/images/gallery/fauna.jpg' },
  { label: 'Zona de Parrilla', src: '/images/gallery/parrilla.jpg' },
  { label: 'Interior Acogedor', src: '/images/gallery/interior.jpg' },
  { label: 'Hidromasaje', src: '/images/gallery/jacuzzi-detalle.jpg' },
  { label: 'Zona de Trabajo', src: '/images/gallery/area-trabajo.jpg' },
  { label: 'Exterior', src: '/images/gallery/exterior.jpg' },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % items.length)),
    []
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, next, prev]);

  return (
    <section id="gallery" className="section-padding container-custom">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="section-label inline-block mb-4">Galería</span>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-cream">
          Verde por Todas Partes
        </h2>
        <p className="text-cream/60 mt-4">
          Cada rincón de LUCULUC Garden &amp; Forest, en imágenes reales.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] sm:auto-rows-[200px] gap-3 sm:gap-4">
        {items.map((item, i) => (
          <motion.button
            key={item.src}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(i * 0.04, 0.4) }}
            onClick={() => setActive(i)}
            className={`group relative rounded-2xl overflow-hidden bg-forest-900 ring-1 ring-white/5 ${
              item.span ? 'col-span-2 row-span-2' : ''
            }`}
            aria-label={`Ver ${item.label}`}
          >
            <Image
              src={item.src}
              alt={item.label}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes={item.span ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 50vw, 25vw'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-left translate-y-1 group-hover:translate-y-0 transition-transform">
              <p className="text-cream font-serif text-sm sm:text-lg drop-shadow">
                {item.label}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <button
              onClick={close}
              aria-label="Cerrar"
              className="absolute top-5 right-5 text-cream/70 hover:text-cream p-2"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Anterior"
              className="absolute left-3 sm:left-6 text-cream/70 hover:text-cream p-2"
            >
              <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-[3/2] rounded-2xl overflow-hidden"
            >
              <Image
                src={items[active]?.src ?? ''}
                alt={items[active]?.label ?? ''}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                <p className="text-cream font-serif text-xl text-center">{items[active]?.label}</p>
              </div>
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Siguiente"
              className="absolute right-3 sm:right-6 text-cream/70 hover:text-cream p-2"
            >
              <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
