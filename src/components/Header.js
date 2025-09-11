import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 30);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-black/95 backdrop-blur-sm border-b border-zinc-800/50'
                : 'bg-black/80 backdrop-blur-sm'
            }`}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                            <img src="/favicon-s-white.png" alt="scalestash" className="h-8 w-8 rounded-md" />
                            <span className="font-semibold text-xl text-white" style={{
                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                letterSpacing: '-0.01em'
                            }}>
                                scalestash
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {isHomePage ? (
                            <a href="#features" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 font-medium">
                                Features
                            </a>
                        ) : (
                            <Link to="/#features" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 font-medium">
                                Features
                            </Link>
                        )}
                        {isHomePage ? (
                            <a href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 font-medium">
                                Pricing
                            </a>
                        ) : (
                            <Link to="/#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 font-medium">
                                Pricing
                            </Link>
                        )}
                        <Link to="/about" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 font-medium">
                            About
                        </Link>
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 font-medium">
                            Sign In
                        </button>
                        <button className="bg-white text-black text-sm font-medium px-4 py-2 rounded-lg hover:bg-zinc-200 transition-all duration-200">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors duration-200"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-6 border-t border-zinc-800 bg-black/95 backdrop-blur-sm">
                        <nav className="flex flex-col space-y-4">
                            {isHomePage ? (
                                <a href="#features" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 font-medium">
                                    Features
                                </a>
                            ) : (
                                <Link to="/#features" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 font-medium">
                                    Features
                                </Link>
                            )}
                            {isHomePage ? (
                                <a href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 font-medium">
                                    Pricing
                                </a>
                            ) : (
                                <Link to="/#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 font-medium">
                                    Pricing
                                </Link>
                            )}
                            <Link to="/about" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 font-medium">
                                About
                            </Link>
                            <div className="flex flex-col space-y-3 pt-4 border-t border-zinc-800">
                                <button className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 font-medium text-left">
                                    Sign In
                                </button>
                                <button className="bg-white text-black text-sm font-medium px-4 py-2 rounded-lg hover:bg-zinc-200 transition-all duration-200 w-full">
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
