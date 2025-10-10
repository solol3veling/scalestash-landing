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

  // Calculate parallax effect (subtle movement, not fade out)
  const imageTransform = scrollY * 0.15; // Reduced for subtler effect

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

      <div className="max-w-6xl mx-auto px-6 relative z-10 pt-32 md:pt-40 pb-32 md:pb-40">
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

          {/* Dashboard Overview Image with Parallax Effect */}
          <div
            className="relative w-full max-w-6xl mt-20 pb-20"
            style={{
              transform: `translateY(${imageTransform}px)`,
              transition: 'transform 0.1s linear'
            }}
          >
            {/* Perspective container for depth */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-visible">
                {/* Image with border and shadow */}
                <div className="relative rounded-2xl overflow-hidden border border-zinc-800/50 shadow-[0_20px_100px_-20px_rgba(0,0,0,0.9)]">
                  <img
                    src="/assets/overview_light.png"
                    alt="ScaleStash Dashboard Overview"
                    className="w-full h-auto block"
                  />
                </div>

                {/* Seamless fade overlay - starts from bottom of image */}
                <div
                  className="absolute inset-x-0 bottom-0 pointer-events-none"
                  style={{
                    height: '60%',
                    background: 'linear-gradient(to top, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.95) 10%, rgba(0, 0, 0, 0.85) 20%, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.15) 60%, rgba(0, 0, 0, 0.05) 75%, transparent 100%)',
                    borderRadius: '0 0 1rem 1rem'
                  }}
                ></div>
              </div>

              {/* Extended fade beyond container for seamless blend */}
              <div
                className="absolute inset-x-0 pointer-events-none"
                style={{
                  bottom: '-100px',
                  height: '200px',
                  background: 'linear-gradient(to top, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 25%, rgba(0, 0, 0, 0.4) 50%, transparent 100%)'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;