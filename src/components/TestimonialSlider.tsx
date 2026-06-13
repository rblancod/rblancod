'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((prev) => (prev + 1) % testimonials.length),
    [testimonials.length]
  );
  const prev = () =>
    setCurrent((p) => (p === 0 ? testimonials.length - 1 : p - 1));

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const t = testimonials[current];
  if (!t) return null;

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="liquid-glass noise-overlay rounded-2xl p-8 md:p-12 min-h-[280px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="w-full text-center"
          >
            <div className="flex justify-center gap-1 mb-5">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} className="text-luculuc-300 text-xl">
                  ★
                </span>
              ))}
            </div>
            <p className="font-serif italic text-xl md:text-2xl text-cream/90 leading-relaxed mb-6">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="font-semibold text-cream">{t.name}</p>
            <p className="text-sm text-cream/50">{t.location}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={prev}
          className="liquid-glass rounded-full p-3 text-cream hover:bg-white/10 transition-colors"
          aria-label="Anterior"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === current ? 'w-8 bg-luculuc-400' : 'w-1.5 bg-cream/20'
              }`}
              aria-label={`Ir al testimonio ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="liquid-glass rounded-full p-3 text-cream hover:bg-white/10 transition-colors"
          aria-label="Siguiente"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
