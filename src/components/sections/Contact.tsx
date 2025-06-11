'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import Section from '@/components/ui/Section';
import profileData from '@/data/profile';
import { fadeIn } from '@/utils/animations';

const Contact = () => {
  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Connect with me for blockchain development and security consultations"
      className="bg-white"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
          className="bg-white p-6 sm:p-8 border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
            {/* Email */}
            <div className="flex items-start">
              <div className="p-2 mr-4 text-primary">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-1">
                  Email
                </h4>
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {profileData.email}
                </a>
              </div>
            </div>
            
            {/* Location */}
            <div className="flex items-start">
              <div className="p-2 mr-4 text-primary">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-1">
                  Location
                </h4>
                <p className="text-gray-600">
                  {profileData.location}
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              I'm available for freelance work and consulting. Feel free to reach out via email or connect with me on social media.
            </p>
            
            <div className="flex justify-center space-x-6">
              <a
                href={profileData.socialLinks[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors p-2"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/wxyz-git"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary transition-colors p-2"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;