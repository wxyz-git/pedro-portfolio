'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Section from '@/components/ui/Section';
import profileData from '@/data/profile';
import { fadeIn, slideUp } from '@/utils/animations';

const Experience = () => {
  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="My professional journey and career highlights."
    >
      <div className="relative">
        {/* Timeline line with dashed connecting lines */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200"></div>
        
        {/* Experience items */}
        <div className="space-y-12">
          {profileData.experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={slideUp}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0
                  ? 'md:flex-row-reverse'
                  : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/3 w-5 h-5 rounded-full bg-primary border-2 border-white z-10 shadow-sm"></div>
              
              {/* Connect dots with dashed lines */}
              {index > 0 && (
                <div 
                  className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-12 w-0.5 -top-12 border-l-2 border-dashed border-gray-400"
                  style={{ height: '48px' }}
                ></div>
              )}

              {/* Content */}
              <div className="md:w-1/2"></div>
              <div className="md:w-1/2 bg-white p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {exp.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-1">
                  <FaBriefcase className="mr-2 text-sm" />
                  <span className="text-sm">{exp.company}</span>
                </div>
                <div className="flex items-center text-gray-500 mb-4 text-sm">
                  <FaCalendarAlt className="mr-2 text-xs" />
                  <span>{exp.startDate} - {exp.endDate || 'Present'}</span>
                </div>
                
                {exp.location && (
                  <div className="flex items-center text-gray-500 mb-4 text-sm">
                    <FaMapMarkerAlt className="mr-2 text-xs" />
                    <span>{exp.location}</span>
                  </div>
                )}

                <div className="space-y-2 mb-4">
                  {exp.description.map((desc, idx) => (
                    <p
                      key={idx}
                      className="text-gray-600 text-sm"
                    >
                      • {desc}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional achievements or certifications could be added here */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
        className="mt-16 text-center"
      >
        <p className="text-base text-gray-600 max-w-3xl mx-auto">
          I&apos;m always looking for new challenges and opportunities to grow professionally.
          Feel free to <a href="#contact" className="text-primary hover:underline">contact me</a> if
          you&apos;d like to discuss potential collaborations.
        </p>
      </motion.div>
    </Section>
  );
};

export default Experience; 