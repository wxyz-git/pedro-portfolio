'use client';

import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaArrowDown, FaEthereum } from 'react-icons/fa';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import profileData from '@/data/profile';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [mounted, setMounted] = useState(false);
  
  const roles = useMemo(() => [
    'Blockchain Developer', 
    'Security Specialist', 
    'Smart Contract Engineer', 
    'DeFi Architect'
  ], []);
  
  // Handle mounting to avoid SSR issues with window
  useEffect(() => {
    setMounted(true);
  }, []);
  
  useEffect(() => {
    if (!mounted) return;
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150;
    const pauseDuration = 1500;
    
    const typeRole = () => {
      const currentRole = roles[roleIndex % roles.length];
      
      if (isDeleting) {
        setTypedText(currentRole.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setTypedText(currentRole.substring(0, charIndex + 1));
        charIndex++;
      }
      
      let nextTypingSpeed = typingSpeed;
      
      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        nextTypingSpeed = pauseDuration;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex++;
      }
      
      setTimeout(typeRole, nextTypingSpeed);
    };
    
    const typingTimer = setTimeout(typeRole, 1000);
    
    return () => clearTimeout(typingTimer);
  }, [mounted, roles]);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white z-0"></div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Pedro Heras
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-700 mb-8 h-10">
            <span className="text-primary font-medium">{typedText}</span>
            <span className="animate-pulse ml-1">|</span>
          </div>
          
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            {profileData.summary}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Button 
              href="/#experience" 
              variant="primary" 
              size="lg" 
              className="!bg-gray-800 !text-white hover:!bg-gray-900"
            >
              View My Work
            </Button>
            <Button href="/#contact" variant="outline" size="lg">
              Hire Me
            </Button>
          </div>
          
          {/* Tech stack icons */}
          <div className="flex justify-center gap-6 mb-10">
            <div className="p-3 bg-white rounded-sm border border-gray-100 flex items-center justify-center">
              <Image src="/rust-logo.svg" alt="Rust" width={20} height={20} />
            </div>
            <div className="p-3 bg-white rounded-sm border border-gray-100 flex items-center justify-center">
              <Image src="/solana-logo.svg" alt="Solana" width={20} height={20} />
            </div>
            <div className="p-3 bg-white rounded-sm border border-gray-100 flex items-center justify-center">
              <FaEthereum className="h-5 w-5 text-gray-700" />
            </div>
            <div className="p-3 bg-white rounded-sm border border-gray-100 flex items-center justify-center">
              <Image src="/typescript-logo.svg" alt="TypeScript" width={20} height={20} />
            </div>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href={profileData.socialLinks[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors p-2"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com/wxyz-git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors p-2"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <motion.a
          href="/#experience"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-500 hover:text-primary"
        >
          <FaArrowDown size={20} />
        </motion.a>
        <span className="mt-2 text-sm text-gray-500">Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero; 