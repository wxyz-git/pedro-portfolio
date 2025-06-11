import { render, screen } from '@testing-library/react';
import Hero from './Hero';
import React, { ReactNode } from 'react';

// Add Jest matcher types
import '@testing-library/jest-dom';

// Mock profile data
jest.mock('@/data/profile', () => ({
  __esModule: true,
  default: {
    name: 'Pedro Heras',
    title: 'Software Engineer',
    summary: 'Passionate software engineer with expertise in full-stack development.',
    location: 'Spain',
    email: 'pedro.heras@example.com',
    socialLinks: [
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/pedroheras', icon: 'FaLinkedin' },
      { platform: 'GitHub', url: 'https://github.com/pedroheras', icon: 'FaGithub' }
    ]
  }
}));

// Mock the useEffect hook to prevent React warnings about act()
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn((fn) => fn()),
}));

// Mock framer-motion to prevent issues with animations in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: Record<string, unknown>) => <div {...props}>{children as ReactNode}</div>,
    a: ({ children, ...props }: Record<string, unknown>) => <a {...props}>{children as ReactNode}</a>,
    nav: ({ children, ...props }: Record<string, unknown>) => <nav {...props}>{children as ReactNode}</nav>,
  },
}));

// Mock window.innerWidth and window.innerHeight
Object.defineProperty(window, 'innerWidth', { value: 1024 });
Object.defineProperty(window, 'innerHeight', { value: 768 });

describe('Hero component', () => {
  it('renders the name from profile data', () => {
    render(<Hero />);
    
    const nameElement = screen.getByText(/Hi, I'm Pedro Heras/i);
    expect(nameElement).toBeInTheDocument();
  });
  
  it('renders the summary from profile data', () => {
    render(<Hero />);
    
    const summaryElement = screen.getByText('Passionate software engineer with expertise in full-stack development.');
    expect(summaryElement).toBeInTheDocument();
  });
  
  it('renders the buttons for navigation', () => {
    render(<Hero />);
    
    const learnMoreButton = screen.getByText('Learn More');
    const contactButton = screen.getByText('Contact Me');
    
    expect(learnMoreButton).toBeInTheDocument();
    expect(contactButton).toBeInTheDocument();
  });
  
  it('renders social media links', () => {
    render(<Hero />);
    
    const socialLinks = screen.getAllByRole('link', { name: /linkedin|github/i });
    expect(socialLinks).toHaveLength(2);
    
    // Check that the links have the correct hrefs
    expect(socialLinks[0]).toHaveAttribute('href', 'https://linkedin.com/in/pedroheras');
    expect(socialLinks[1]).toHaveAttribute('href', 'https://github.com/pedroheras');
  });
}); 