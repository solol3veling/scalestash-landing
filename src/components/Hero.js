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
            <div className="relative h-[500px] w-full">
              {/* Animated posts falling down */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <div className="flex flex-col space-y-6">
                  {[1, 2, 3].map((post, i) => (
                    <div key={i} className={`bg-white/95 rounded-xl p-4 shadow-2xl w-32 transform transition-all duration-1000 ${
                      i === 0 ? 'animate-bounce delay-0' : 
                      i === 1 ? 'animate-bounce delay-300' : 
                      'animate-bounce delay-500'
                    }`} style={{ animationDelay: `${i * 0.7}s` }}>
                      <div className="w-full h-3 bg-zinc-700 rounded mb-3"></div>
                      <div className="w-4/5 h-2 bg-zinc-400 rounded mb-2"></div>
                      <div className="w-3/5 h-2 bg-zinc-400 rounded mb-2"></div>
                      <div className="w-2/3 h-2 bg-zinc-300 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Zigzag Stacked Social Media Cards */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  {/* Instagram Card - Top */}
                  <div className="absolute -top-8 left-12 transform -translate-x-1/2 rotate-3 z-40">
                    <div className="w-28 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl shadow-2xl border border-purple-400/30 overflow-hidden">
                      <div className="p-3 h-full flex flex-col justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                            <span className="text-purple-600 text-xs font-bold">IG</span>
                          </div>
                          <div className="text-white text-xs font-medium">Instagram</div>
                        </div>
                        <div className="space-y-1">
                          <div className="w-full h-1.5 bg-white/30 rounded animate-pulse"></div>
                          <div className="w-3/4 h-1.5 bg-white/30 rounded animate-pulse delay-100"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Twitter/X Card - Second */}
                  <div className="absolute -top-4 -left-8 transform -translate-x-1/2 -rotate-2 z-30">
                    <div className="w-28 h-20 bg-black rounded-xl shadow-2xl border border-white/20 overflow-hidden">
                      <div className="p-3 h-full flex flex-col justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                            <span className="text-black text-xs font-bold">𝕏</span>
                          </div>
                          <div className="text-white text-xs font-medium">Twitter</div>
                        </div>
                        <div className="space-y-1">
                          <div className="w-full h-1.5 bg-white/30 rounded animate-pulse delay-200"></div>
                          <div className="w-4/5 h-1.5 bg-white/30 rounded animate-pulse delay-300"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn Card - Third */}
                  <div className="absolute top-0 left-16 transform -translate-x-1/2 rotate-1 z-20">
                    <div className="w-28 h-20 bg-blue-600 rounded-xl shadow-2xl border border-blue-400/30 overflow-hidden">
                      <div className="p-3 h-full flex flex-col justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                            <span className="text-blue-600 text-xs font-bold">in</span>
                          </div>
                          <div className="text-white text-xs font-medium">LinkedIn</div>
                        </div>
                        <div className="space-y-1">
                          <div className="w-full h-1.5 bg-white/30 rounded animate-pulse delay-400"></div>
                          <div className="w-2/3 h-1.5 bg-white/30 rounded animate-pulse delay-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Facebook Card - Bottom */}
                  <div className="absolute top-4 -left-4 transform -translate-x-1/2 -rotate-3 z-10">
                    <div className="w-28 h-20 bg-blue-500 rounded-xl shadow-2xl border border-blue-300/30 overflow-hidden">
                      <div className="p-3 h-full flex flex-col justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                            <span className="text-blue-500 text-xs font-bold">f</span>
                          </div>
                          <div className="text-white text-xs font-medium">Facebook</div>
                        </div>
                        <div className="space-y-1">
                          <div className="w-full h-1.5 bg-white/30 rounded animate-pulse delay-600"></div>
                          <div className="w-5/6 h-1.5 bg-white/30 rounded animate-pulse delay-700"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
                <defs>
                  <linearGradient id="flowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.8 }} />
                    <stop offset="50%" style={{ stopColor: '#06b6d4', stopOpacity: 0.6 }} />
                    <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.4 }} />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Animated dotted paths from posts to cards */}
                <g className="animate-pulse">
                  {/* To Instagram */}
                  <path 
                    d="M 240 120 Q 280 200 260 320" 
                    stroke="url(#flowGradient)" 
                    strokeWidth="3" 
                    strokeDasharray="8,4" 
                    fill="none" 
                    filter="url(#glow)"
                    className="animate-pulse"
                    style={{ 
                      strokeDashoffset: '24',
                      animation: 'dash 3s linear infinite, pulse 2s ease-in-out infinite' 
                    }}
                  />
                  
                  {/* To Twitter */}
                  <path 
                    d="M 240 140 Q 180 220 160 340" 
                    stroke="url(#flowGradient)" 
                    strokeWidth="3" 
                    strokeDasharray="8,4" 
                    fill="none" 
                    filter="url(#glow)"
                    className="animate-pulse"
                    style={{ 
                      strokeDashoffset: '24',
                      animation: 'dash 3s linear infinite 0.5s, pulse 2s ease-in-out infinite 0.5s' 
                    }}
                  />
                  
                  {/* To LinkedIn */}
                  <path 
                    d="M 240 160 Q 300 240 280 360" 
                    stroke="url(#flowGradient)" 
                    strokeWidth="3" 
                    strokeDasharray="8,4" 
                    fill="none" 
                    filter="url(#glow)"
                    className="animate-pulse"
                    style={{ 
                      strokeDashoffset: '24',
                      animation: 'dash 3s linear infinite 1s, pulse 2s ease-in-out infinite 1s' 
                    }}
                  />
                  
                  {/* To Facebook */}
                  <path 
                    d="M 240 180 Q 160 260 170 380" 
                    stroke="url(#flowGradient)" 
                    strokeWidth="3" 
                    strokeDasharray="8,4" 
                    fill="none" 
                    filter="url(#glow)"
                    className="animate-pulse"
                    style={{ 
                      strokeDashoffset: '24',
                      animation: 'dash 3s linear infinite 1.5s, pulse 2s ease-in-out infinite 1.5s' 
                    }}
                  />
                </g>
              </svg>

              {/* CSS Animation Keyframes */}
              <style jsx>{`
                @keyframes dash {
                  to {
                    stroke-dashoffset: 0;
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;