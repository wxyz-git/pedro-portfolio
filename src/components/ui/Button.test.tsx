import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

// Mock framer-motion to prevent issues with animations in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: Record<string, unknown>) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: Record<string, unknown>) => <button {...props}>{children}</button>,
  },
}));

describe('Button component', () => {
  it('renders the button with children text', () => {
    render(<Button>Click me</Button>);
    
    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument();
  });
  
  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    const button = screen.getByText('Click me');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  it('renders as link when href is provided', () => {
    render(<Button href="/test">Link Button</Button>);
    
    const link = screen.getByText('Link Button').closest('a');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });
  
  it('applies variant styles', () => {
    const { rerender } = render(<Button variant="primary">Primary Button</Button>);
    let button = screen.getByText('Primary Button').closest('button');
    expect(button?.className).toContain('bg-primary-600');
    
    rerender(<Button variant="secondary">Secondary Button</Button>);
    button = screen.getByText('Secondary Button').closest('button');
    expect(button?.className).toContain('bg-secondary-600');
    
    rerender(<Button variant="outline">Outline Button</Button>);
    button = screen.getByText('Outline Button').closest('button');
    expect(button?.className).toContain('border-primary-600');
  });
  
  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>);
    
    const button = screen.getByText('Disabled Button').closest('button');
    expect(button).toBeDisabled();
  });
}); 