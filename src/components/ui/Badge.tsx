'use client';

import { motion } from 'framer-motion';

interface BadgeProps {
  text: string;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
}

const Badge = ({ text, color = 'primary', size = 'md' }: BadgeProps) => {
  const colorClasses = {
    primary: 'bg-blue-50 text-blue-700 border border-blue-100',
    secondary: 'bg-gray-50 text-gray-700 border border-gray-300',
    success: 'bg-green-50 text-green-700 border border-green-100',
    danger: 'bg-red-50 text-red-700 border border-red-100',
    warning: 'bg-yellow-50 text-yellow-700 border border-yellow-100',
    info: 'bg-indigo-50 text-indigo-700 border border-indigo-100',
  };

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-0.5',
    lg: 'text-base px-3 py-1',
  };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className={`
        inline-flex items-center rounded-sm font-medium
        ${colorClasses[color]}
        ${sizeClasses[size]}
        mr-2 mb-2
      `}
    >
      {text}
    </motion.span>
  );
};

export default Badge; 