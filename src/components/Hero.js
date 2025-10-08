import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate fade and transform based on scroll
  const imageOpacity = Math.max(0, 1 - scrollY / 500);
  const imageTransform = scrollY * 0.3;

  return (
    <section className="relative bg-black min-h-screen flex items-center overflow-hidden">
      {/* Dark Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-black"
          style={{
            backgroundImage: `
              linear-gradient(rgba(113, 113, 122, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(113, 113, 122, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 pt-20 pb-32">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Hero Content - Vertical Layout */}
          <div className="space-y-10 max-w-4xl">
            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white" style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              letterSpacing: '-0.02em'
            }}>
              Social media management,
              <span className="text-zinc-400"> simplified</span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-3xl mx-auto">
              Create, schedule, and analyze your content across all platforms. One dashboard for your entire social media workflow.
            </p>

            {/* CTA */}
            <div className="flex flex-col items-center space-y-4">
              <a
                href="https://app.scalestash.com"
                className="inline-block"
              >
                <button className="bg-white text-black font-semibold px-12 py-6 rounded-xl hover:bg-zinc-200 transition-all text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 duration-200">
                  Get Started
                </button>
              </a>

              <p className="text-base text-zinc-400">
                Start your free trial. No credit card required.
              </p>
            </div>
          </div>

          {/* Dashboard Overview Image with Scroll Animation */}
          <div
            className="relative w-full max-w-5xl mt-16 transition-all duration-500"
            style={{
              opacity: imageOpacity,
              transform: `translateY(${imageTransform}px)`
            }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-zinc-700/30 shadow-2xl">
              {/* Image with fade effect */}
              <img
                src="/assets/overview_light.png"
                alt="ScaleStash Dashboard Overview"
                className="w-full h-auto"
                style={{
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)'
                }}
              />

              {/* Optional overlay gradient for better fade */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;