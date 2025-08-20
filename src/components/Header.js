import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-container mx-auto px-4 lg:px-6">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-14' : 'h-16'
        }`}>
          {/* Logo */}
          <div className="flex items-center">
            <span className={`font-semibold tracking-tight transition-all duration-300 ${
              isScrolled 
                ? 'text-xl text-slate-900 dark:text-white' 
                : 'text-2xl text-white'
            }`} style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
              ScaleStash
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className={`font-medium transition-colors duration-200 ${
              isScrolled 
                ? 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white' 
                : 'text-white/80 hover:text-white'
            }`}>
              Features
            </a>
            <a href="#pricing" className={`font-medium transition-colors duration-200 ${
              isScrolled 
                ? 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white' 
                : 'text-white/80 hover:text-white'
            }`}>
              Pricing
            </a>
            <a href="#about" className={`font-medium transition-colors duration-200 ${
              isScrolled 
                ? 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white' 
                : 'text-white/80 hover:text-white'
            }`}>
              About
            </a>
            <a href="#contact" className={`font-medium transition-colors duration-200 ${
              isScrolled 
                ? 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white' 
                : 'text-white/80 hover:text-white'
            }`}>
              Contact
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 transition-colors duration-200 ${
                isScrolled 
                  ? 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white' 
                  : 'text-white/80 hover:text-white'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            
            <button className={`font-medium transition-colors duration-200 ${
              isScrolled 
                ? 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white' 
                : 'text-white/80 hover:text-white'
            }`}>
              Sign In
            </button>
            <button className={`font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
              isScrolled 
                ? 'bg-primary hover:bg-primary-700 text-white' 
                : 'bg-white text-blue-600 hover:bg-blue-50'
            }`}>
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-200 ${
              isScrolled 
                ? 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white' 
                : 'text-white/80 hover:text-white'
            }`}
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
          <div className={`md:hidden py-4 border-t transition-colors duration-200 ${
            isScrolled 
              ? 'border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95' 
              : 'border-white/20 bg-white/10 backdrop-blur-sm'
          }`}>
            <nav className="flex flex-col space-y-4">
              <a href="#features" className={`font-medium transition-colors duration-200 ${
                isScrolled 
                  ? 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white' 
                  : 'text-white/80 hover:text-white'
              }`}>
                Features
              </a>
              <a href="#pricing" className={`font-medium transition-colors duration-200 ${
                isScrolled 
                  ? 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white' 
                  : 'text-white/80 hover:text-white'
              }`}>
                Pricing
              </a>
              <a href="#about" className={`font-medium transition-colors duration-200 ${
                isScrolled 
                  ? 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white' 
                  : 'text-white/80 hover:text-white'
              }`}>
                About
              </a>
              <a href="#contact" className={`font-medium transition-colors duration-200 ${
                isScrolled 
                  ? 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white' 
                  : 'text-white/80 hover:text-white'
              }`}>
                Contact
              </a>
              <div className={`flex items-center justify-between pt-4 border-t transition-colors duration-200 ${
                isScrolled 
                  ? 'border-slate-200 dark:border-slate-700' 
                  : 'border-white/20'
              }`}>
                <button
                  onClick={toggleDarkMode}
                  className={`p-2 transition-colors duration-200 ${
                    isScrolled 
                      ? 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white' 
                      : 'text-white/80 hover:text-white'
                  }`}
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? '☀️' : '🌙'}
                </button>
                <div className="flex space-x-3">
                  <button className={`font-medium transition-colors duration-200 ${
                    isScrolled 
                      ? 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white' 
                      : 'text-white/80 hover:text-white'
                  }`}>
                    Sign In
                  </button>
                  <button className={`font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
                    isScrolled 
                      ? 'bg-primary hover:bg-primary-700 text-white' 
                      : 'bg-white text-blue-600 hover:bg-blue-50'
                  }`}>
                    Get Started
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;