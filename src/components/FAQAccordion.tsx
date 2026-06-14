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
    <div className="space-y-8">
      {categories.map((category) => (
        <div key={category}>
          <h3 className="section-label mb-4 px-1">{category}</h3>
          <div className="space-y-3">
            {faqs
              .filter((faq) => faq.category === category)
              .map((faq) => (
                <div
                  key={faq.id}
                  className="liquid-glass rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className="w-full px-6 py-4 flex justify-between items-center gap-4 text-left hover:bg-white/5 transition-colors"
                    aria-expanded={openId === faq.id}
                  >
                    <h4 className="font-medium text-cream">{faq.question}</h4>
                    <motion.svg
                      animate={{ rotate: openId === faq.id ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5 text-luculuc-300 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                    </motion.svg>
                  </button>

                  <AnimatePresence>
                    {openId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm text-cream/60 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
