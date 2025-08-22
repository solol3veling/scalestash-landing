import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-zinc-800' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between transition-all duration-500 ${
          isScrolled ? 'h-12' : 'h-14'
        }`}>
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className={`font-medium transition-all duration-500 ${
              isScrolled 
                ? 'text-lg text-white' 
                : 'text-xl text-white'
            }`} style={{ 
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              letterSpacing: '-0.02em'
            }}>
              scalestash
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {!isAboutPage && (
              <>
                <a href="#features" className="text-zinc-300 hover:text-white transition-colors duration-300 font-medium">
                  Features
                </a>
                <a href="#pricing" className="text-zinc-300 hover:text-white transition-colors duration-300 font-medium">
                  Pricing
                </a>
              </>
            )}
            <Link to="/about" className="text-zinc-300 hover:text-white transition-colors duration-300 font-medium">
              About
            </Link>
            {isAboutPage && (
              <a href="#contact" className="text-zinc-300 hover:text-white transition-colors duration-300 font-medium">
                Contact
              </a>
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-zinc-300 hover:text-white transition-colors duration-300 font-medium">
              Sign In
            </button>
            <button className="bg-white text-black font-medium px-4 py-2 text-sm rounded-full hover:bg-zinc-200 transition-all duration-300 transform hover:scale-105">
              Join Waitlist
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-zinc-800 bg-black/90 backdrop-blur-xl">
            <nav className="flex flex-col space-y-6">
              {!isAboutPage && (
                <>
                  <a href="#features" className="text-zinc-300 hover:text-white transition-colors duration-300 font-medium">
                    Features
                  </a>
                  <a href="#pricing" className="text-zinc-300 hover:text-white transition-colors duration-300 font-medium">
                    Pricing
                  </a>
                </>
              )}
              <Link to="/about" className="text-zinc-300 hover:text-white transition-colors duration-300 font-medium">
                About
              </Link>
              {isAboutPage && (
                <a href="#contact" className="text-zinc-300 hover:text-white transition-colors duration-300 font-medium">
                  Contact
                </a>
              )}
              <div className="flex flex-col space-y-4 pt-6 border-t border-zinc-800">
                <button className="text-zinc-300 hover:text-white transition-colors duration-300 font-medium text-left">
                  Sign In
                </button>
                <button className="bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-zinc-200 transition-all duration-300 w-full">
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;