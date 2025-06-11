'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLanguage, FaCode } from 'react-icons/fa';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import profileData from '@/data/profile';
import { fadeIn } from '@/utils/animations';

const About = () => {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Education, languages, and technical skills"
      className="bg-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Education */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
          className="mb-16"
        >
          <div className="flex items-center mb-6">
            <FaGraduationCap className="text-primary text-xl mr-3" />
            <h3 className="text-xl font-bold text-gray-900">
              Education
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profileData.education.map((edu) => (
              <div
                key={edu.id}
                className="bg-white p-5 border border-gray-100"
              >
                <h4 className="text-base font-semibold text-gray-900 mb-2">
                  {edu.degree}
                </h4>
                <p className="text-sm text-gray-600 mb-1">
                  {edu.institution}, {edu.location}
                </p>
                <p className="text-sm text-gray-500">
                  {edu.startDate} - {edu.endDate}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Languages */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
          className="mb-16"
        >
          <div className="flex items-center mb-6">
            <FaLanguage className="text-primary text-xl mr-3" />
            <h3 className="text-xl font-bold text-gray-900">
              Languages
            </h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {profileData.languages.map((lang, index) => (
              <div
                key={index}
                className="bg-white py-2 px-4 border border-gray-100"
              >
                <span className="font-medium text-gray-900">{lang.language}</span>
                <span className="text-sm text-gray-500 ml-2">({lang.proficiency})</span>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
          className="mb-8"
        >
          <div className="flex items-center mb-6">
            <FaCode className="text-primary text-xl mr-3" />
            <h3 className="text-xl font-bold text-gray-900">
              Skills
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profileData.skills.map((skill, index) => (
              <div key={index} className="bg-white p-5 border border-gray-100">
                <h4 className="text-base font-semibold text-gray-900 mb-3">
                  {skill.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <Badge key={idx} text={item} color="secondary" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About; 