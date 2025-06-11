'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFilter, FaCalendarAlt } from 'react-icons/fa';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import profileData from '@/data/profile';
import { staggerContainer, scaleUp } from '@/utils/animations';

// Extract all unique technologies from projects
const allTechnologies = Array.from(
  new Set(
    profileData.projects.flatMap(project => project.technologies)
  )
).sort();

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  
  const filteredProjects = selectedTech
    ? profileData.projects.filter(project => 
        project.technologies.includes(selectedTech)
      )
    : profileData.projects;

  return (
    <Section
      id="projects"
      title="My Projects"
      subtitle="Check out some of my recent work and projects that showcase my skills and expertise."
      className="bg-gray-50 dark:bg-gray-900"
    >
      {/* Technology filter */}
      <div className="mb-10">
        <div className="flex items-center justify-center mb-4">
          <FaFilter className="mr-2 text-gray-600 dark:text-gray-400" />
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
            Filter by Technology
          </h3>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2">
          <Button
            variant={selectedTech === null ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setSelectedTech(null)}
          >
            All
          </Button>
          
          {allTechnologies.map(tech => (
            <Button
              key={tech}
              variant={selectedTech === tech ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setSelectedTech(tech)}
            >
              {tech}
            </Button>
          ))}
        </div>
      </div>

      {/* Projects grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={scaleUp}
            whileHover="hover"
          >
            <Card className="h-full flex flex-col transition-all duration-300">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {project.title}
                </h3>
                
                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-3">
                  <FaCalendarAlt className="mr-2" size={14} />
                  <span className="text-sm">{project.date}</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} text={tech} size="sm" />
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                {project.githubLink && (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FaGithub className="mr-2" />
                    <span>GitHub</span>
                  </motion.a>
                )}
                
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>View Project</span>
                    <FaExternalLinkAlt className="ml-2" />
                  </motion.a>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            No projects found with the selected technology. Please try another filter.
          </p>
          <Button 
            variant="primary" 
            className="mt-4" 
            onClick={() => setSelectedTech(null)}
          >
            Show All Projects
          </Button>
        </div>
      )}

      <div className="text-center mt-12">
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          These are just a few examples of my work. Visit my GitHub profile for more projects!
        </p>
        <Button
          href={profileData.socialLinks[1].url}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          icon={<FaGithub />}
        >
          View More on GitHub
        </Button>
      </div>
    </Section>
  );
};

export default Projects; 