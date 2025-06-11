'use client';

import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import profileData from '@/data/profile';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About section */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-4">
              About
            </h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Blockchain Developer & Security Specialist with expertise in Rust, Solidity, and Web3 technologies.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#experience"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact section */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-4">
              Contact
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              <span className="flex items-center">
                <FaEnvelope className="mr-2" /> {profileData.email}
              </span>
            </p>
            <p className="text-sm text-gray-600 mb-4">
              {profileData.location}
            </p>

            {/* Social links */}
            <div className="flex space-x-4 mt-4">
              <a
                href={profileData.socialLinks[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors p-2"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/wxyz-git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors p-2"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} {profileData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 