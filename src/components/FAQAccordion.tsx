'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface FAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

  return (
    <div className="space-y-6">
      {categories.map((category) => (
        <div key={category}>
          <h3 className="text-lg font-semibold text-forest-900 mb-4 px-4">
            {category}
          </h3>
          <div className="space-y-3">
            {faqs
              .filter((faq) => faq.category === category)
              .map((faq) => (
                <motion.div
                  key={faq.id}
                  className="border border-emerald-200 rounded-lg overflow-hidden hover:border-emerald-400 transition-colors"
                >
                  <button
                    onClick={() =>
                      setOpenId(openId === faq.id ? null : faq.id)
                    }
                    className="w-full px-6 py-4 flex justify-between items-center hover:bg-emerald-50 transition-colors"
                  >
                    <h4 className="text-left font-semibold text-forest-900">
                      {faq.question}
                    </h4>
                    <motion.svg
                      animate={{ rotate: openId === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5 text-emerald-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </motion.svg>
                  </button>

                  <AnimatePresence>
                    {openId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-emerald-200"
                      >
                        <div className="px-6 py-4 bg-emerald-50 text-forest-700">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
