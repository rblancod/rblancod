'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  image?: string;
  badge?: string;
  className?: string;
  onClick?: () => void;
}

export default function Card({
  title,
  description,
  image,
  badge,
  className = '',
  onClick,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className={`group rounded-2xl overflow-hidden liquid-glass ${className}`}
    >
      {image && (
        <div className="relative h-56 sm:h-64 overflow-hidden bg-forest-800">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 to-transparent" />
          {badge && (
            <span className="absolute top-4 right-4 liquid-glass rounded-full px-3 py-1 text-xs font-medium text-cream capitalize">
              {badge}
            </span>
          )}
        </div>
      )}

      <div className="p-6">
        <h3 className="font-serif text-2xl font-semibold text-cream mb-2">{title}</h3>
        <p className="text-sm text-cream/60 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
