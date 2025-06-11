'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, title, subtitle, children, className = '' }: SectionProps) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="w-16 h-0.5 bg-primary mx-auto mt-6"></div>
        </motion.div>
        {children}
      </div>
    </section>
  );
};

export default Section; 