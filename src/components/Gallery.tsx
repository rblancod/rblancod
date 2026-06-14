'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface GalleryItemProps {
  label: string;
  src: string;
  span?: boolean;
  icon: string;
}

const items: GalleryItemProps[] = [
  { label: 'Exterior de la Cabaña', src: '/images/gallery/exterior.jpg', span: true, icon: '🏡' },
  { label: 'Interior Principal', src: '/images/gallery/interior.jpg', icon: '🏠' },
  { label: 'Jardines Tropicales', src: '/images/gallery/gardens.jpg', icon: '🌴' },
  { label: 'Habitación Principal', src: '/images/gallery/master-room.jpg', icon: '🛏️' },
  { label: 'Atardeceres', src: '/images/gallery/sunset.jpg', icon: '🌅' },
  { label: 'Naturaleza Circundante', src: '/images/gallery/nature.jpg', icon: '🌿' },
];

export default function Gallery() {
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
          Descubre cada rincón de LUCULUC Garden & Forest
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className={`relative group rounded-2xl overflow-hidden bg-gradient-to-br from-luculuc-900 to-forest-900 liquid-glass ${
              item.span ? 'md:col-span-2 md:row-span-2 aspect-[4/5] md:aspect-auto' : 'aspect-square'
            }`}
          >
            {/* Image or Placeholder */}
            <div className="relative w-full h-full">
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes={
                  item.span
                    ? '(max-width: 768px) 100vw, 66vw'
                    : '(max-width: 768px) 50vw, 33vw'
                }
                onError={(e) => {
                  // Fallback: mostrar placeholder si la imagen no existe
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />

              {/* Placeholder gradient cuando no hay imagen */}
              <div className="absolute inset-0 bg-gradient-to-br from-luculuc-700 via-forest-800 to-forest-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <p className="text-cream/60 text-sm px-4 leading-relaxed">
                    {item.label}
                  </p>
                </div>
              </div>

              {/* Overlay hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 w-full bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-cream font-serif text-lg">{item.label}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12 liquid-glass rounded-2xl p-6"
      >
        <p className="text-cream/70 text-sm mb-3">
          📸 Las imágenes de LUCULUC se cargarán aquí
        </p>
        <p className="text-cream/50 text-xs">
          Copia tus fotos a: <code className="bg-white/5 px-2 py-1 rounded">public/images/gallery/</code>
        </p>
      </motion.div>
    </section>
  );
}
