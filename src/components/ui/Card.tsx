'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cardHover } from '@/utils/animations';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

const Card = ({
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
}: CardProps) => {
  const isInteractive = !!onClick || !!href;
  const baseClassName = `
    bg-white dark:bg-gray-800 
    rounded-lg shadow-md overflow-hidden 
    ${isInteractive ? 'cursor-pointer' : ''}
    ${className}
  `;

  const content = (
    <div className="p-6">
      {children}
    </div>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        initial="initial"
        whileHover="hover"
        variants={cardHover}
        className={baseClassName}
      >
        {content}
      </motion.a>
    );
  }

  if (onClick) {
    return (
      <motion.div
        onClick={onClick}
        initial="initial"
        whileHover="hover"
        variants={cardHover}
        className={baseClassName}
      >
        {content}
      </motion.div>
    );
  }

  return <div className={baseClassName}>{content}</div>;
};

export default Card; 