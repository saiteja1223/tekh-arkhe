import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="z-50">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-primary'
                  : isScrolled
                  ? 'text-gray-800 hover:text-primary'
                  : 'text-gray-800 hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/login"
            className="btn btn-primary text-sm"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={`w-6 h-6 ${isScrolled || isOpen ? 'text-gray-800' : 'text-gray-800'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`} />
          )}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5 }}
           className="fixed top-4 right-0 w-3/6 h-3/5 bg-white z-40 flex flex-col md:hidden shadow-lg rounded-l-xl"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xl font-medium ${
                    location.pathname === link.path ? 'text-primary' : 'text-gray-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/login" className="btn btn-primary mt-4">
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;