import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-black" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(113, 113, 122, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(113, 113, 122, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 max-w-2xl">
            <div className="space-y-6">
              <div className="inline-block bg-zinc-800 text-zinc-300 px-4 py-2 rounded-full text-sm font-medium">
                Coming Soon
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight">
                The future of social
                <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                  media management
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-xl">
                Be the first to experience our revolutionary platform that simplifies social media for creators and teams.
              </p>
            </div>

            {/* Waitlist Form */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-3 text-base text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-zinc-200 transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-base">
                  Join Waitlist
                </button>
              </div>
              
              <p className="text-base text-zinc-500">
                Join <span className="text-white font-medium">2,847</span> others waiting for early access
              </p>
            </div>

            {/* Benefits */}
            <div className="pt-6">
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-3 text-base text-zinc-300">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Free for early users</span>
                </div>
                <div className="flex items-center space-x-3 text-base text-zinc-300">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Exclusive features</span>
                </div>
                <div className="flex items-center space-x-3 text-base text-zinc-300">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Priority support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Post Flow Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative h-96">
              {/* Animated posts falling down */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                <div className="flex flex-col space-y-4 animate-pulse">
                  {[1, 2, 3].map((post, i) => (
                    <div key={i} className={`bg-white/90 rounded-lg p-3 shadow-lg w-24 transform transition-all duration-1000 ${
                      i === 0 ? 'animate-bounce delay-0' : 
                      i === 1 ? 'animate-bounce delay-150' : 
                      'animate-bounce delay-300'
                    }`} style={{ animationDelay: `${i * 0.5}s` }}>
                      <div className="w-full h-2 bg-zinc-700 rounded mb-2"></div>
                      <div className="w-3/4 h-1.5 bg-zinc-400 rounded mb-1"></div>
                      <div className="w-1/2 h-1.5 bg-zinc-400 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stacked Social Media Buckets */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end space-x-4">
                {/* Instagram Stack */}
                <div className="flex flex-col space-y-2">
                  <div className="text-center mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-1">
                      <span className="text-white text-xs font-bold">IG</span>
                    </div>
                  </div>
                  {[1, 2, 3].map((card, i) => (
                    <div key={i} className={`w-20 h-12 rounded-lg border-2 border-purple-500/30 transition-all duration-500 ${
                      i < 2 ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20' : 'bg-zinc-900/50'
                    }`} style={{ transform: `translateY(-${i * 2}px)` }}>
                      {i < 2 && <div className="w-full h-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg animate-pulse"></div>}
                    </div>
                  ))}
                </div>

                {/* Twitter/X Stack */}
                <div className="flex flex-col space-y-2">
                  <div className="text-center mb-2">
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center mx-auto mb-1 border border-white/20">
                      <span className="text-white text-xs font-bold">𝕏</span>
                    </div>
                  </div>
                  {[1, 2, 3, 4].map((card, i) => (
                    <div key={i} className={`w-20 h-12 rounded-lg border-2 border-white/30 transition-all duration-500 ${
                      i < 3 ? 'bg-white/10' : 'bg-zinc-900/50'
                    }`} style={{ transform: `translateY(-${i * 2}px)` }}>
                      {i < 3 && <div className="w-full h-full bg-white/5 rounded-lg animate-pulse"></div>}
                    </div>
                  ))}
                </div>

                {/* LinkedIn Stack */}
                <div className="flex flex-col space-y-2">
                  <div className="text-center mb-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-1">
                      <span className="text-white text-xs font-bold">in</span>
                    </div>
                  </div>
                  {[1, 2].map((card, i) => (
                    <div key={i} className={`w-20 h-12 rounded-lg border-2 border-blue-600/30 transition-all duration-500 ${
                      i < 1 ? 'bg-blue-600/20' : 'bg-zinc-900/50'
                    }`} style={{ transform: `translateY(-${i * 2}px)` }}>
                      {i < 1 && <div className="w-full h-full bg-blue-600/10 rounded-lg animate-pulse"></div>}
                    </div>
                  ))}
                </div>

                {/* Facebook Stack */}
                <div className="flex flex-col space-y-2">
                  <div className="text-center mb-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-1">
                      <span className="text-white text-xs font-bold">f</span>
                    </div>
                  </div>
                  {[1, 2, 3].map((card, i) => (
                    <div key={i} className={`w-20 h-12 rounded-lg border-2 border-blue-500/30 transition-all duration-500 ${
                      i < 2 ? 'bg-blue-500/20' : 'bg-zinc-900/50'
                    }`} style={{ transform: `translateY(-${i * 2}px)` }}>
                      {i < 2 && <div className="w-full h-full bg-blue-500/10 rounded-lg animate-pulse"></div>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#6b7280', stopOpacity: 0.8 }} />
                    <stop offset="100%" style={{ stopColor: '#6b7280', stopOpacity: 0.2 }} />
                  </linearGradient>
                </defs>
                {/* Dotted lines from posts to buckets */}
                <path d="M 200 60 Q 80 150 60 280" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5" fill="none" className="animate-pulse" />
                <path d="M 200 60 Q 140 150 140 280" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5" fill="none" className="animate-pulse" />
                <path d="M 200 60 Q 200 150 220 280" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5" fill="none" className="animate-pulse" />
                <path d="M 200 60 Q 260 150 300 280" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5" fill="none" className="animate-pulse" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;