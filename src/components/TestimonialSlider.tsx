'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({
  testimonials,
}: TestimonialSliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="relative">
      <motion.div
        key={current}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-emerald-50 to-forest-50 rounded-2xl p-8 md:p-12"
      >
        <div className="flex flex-col items-center text-center">
          <div className="relative w-16 h-16 mb-6 rounded-full overflow-hidden border-4 border-emerald-600">
            <Image
              src={testimonials[current].avatar}
              alt={testimonials[current].name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex gap-1 mb-4">
            {Array.from({ length: testimonials[current].rating }).map(
              (_, i) => (
                <span key={i} className="text-2xl text-yellow-400">
                  ★
                </span>
              )
            )}
          </div>

          <p className="text-lg text-forest-700 mb-6 italic max-w-2xl">
            "{testimonials[current].text}"
          </p>

          <div>
            <h4 className="font-serif text-xl font-bold text-forest-900">
              {testimonials[current].name}
            </h4>
            <p className="text-sm text-forest-600">
              {testimonials[current].location}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={goToPrevious}
          className="p-3 rounded-full border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === current
                  ? 'bg-emerald-600 w-8'
                  : 'bg-emerald-200'
              }`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-3 rounded-full border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
