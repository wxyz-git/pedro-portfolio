import { Variants } from 'framer-motion';

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

// Slide up animation
export const slideUp: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

// Slide down animation
export const slideDown: Variants = {
  hidden: { y: -30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

// Slide in from left animation
export const slideInLeft: Variants = {
  hidden: { x: -60, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

// Slide in from right animation
export const slideInRight: Variants = {
  hidden: { x: 60, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

// Stagger children animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Scale up animation
export const scaleUp: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.6 }
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};

// Card hover animation
export const cardHover: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.03,
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
    transition: { duration: 0.3, ease: 'easeInOut' }
  }
}; 