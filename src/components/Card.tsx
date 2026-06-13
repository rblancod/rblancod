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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      onClick={onClick}
      className={`rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all cursor-pointer ${className}`}
    >
      {image && (
        <div className="relative h-48 sm:h-64 overflow-hidden bg-forest-200">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
          {badge && (
            <div className="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {badge}
            </div>
          )}
        </div>
      )}

      <div className="p-6">
        <h3 className="font-serif text-2xl font-bold text-forest-900 mb-2">
          {title}
        </h3>
        <p className="text-forest-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
