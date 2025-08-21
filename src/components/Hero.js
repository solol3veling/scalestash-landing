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
            <div className="relative h-[600px] w-full">
              {/* Animated posts falling down */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <div className="flex flex-col space-y-8">
                  {[1, 2, 3].map((post, i) => (
                    <div key={i} className={`bg-white/95 rounded-xl p-5 shadow-2xl w-40 transform transition-all duration-1000 ${
                      i === 0 ? 'animate-bounce delay-0' : 
                      i === 1 ? 'animate-bounce delay-300' : 
                      'animate-bounce delay-500'
                    }`} style={{ animationDelay: `${i * 0.7}s` }}>
                      <div className="w-full h-4 bg-zinc-700 rounded mb-4"></div>
                      <div className="w-4/5 h-3 bg-zinc-400 rounded mb-3"></div>
                      <div className="w-3/5 h-3 bg-zinc-400 rounded mb-3"></div>
                      <div className="w-2/3 h-3 bg-zinc-300 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Large Stacked Social Media Cards */}
              <div className="absolute bottom-0 left-0 right-0">
                <div className="relative h-80">
                  {/* Instagram Card - Top Layer */}
                  <div className="absolute top-4 left-8 transform rotate-2 z-40">
                    <div className="w-80 h-56 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-2xl border border-purple-400/30 overflow-hidden backdrop-blur-sm">
                      <div className="p-6 h-full flex flex-col">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                              <span className="text-purple-600 text-lg font-bold">IG</span>
                            </div>
                            <div>
                              <div className="text-white text-lg font-semibold">Instagram</div>
                              <div className="text-purple-200 text-sm">2.4K posts published</div>
                            </div>
                          </div>
                          <div className="text-white/80">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Content Progress */}
                        <div className="space-y-4 flex-1">
                          <div className="space-y-3">
                            <div className="w-full h-3 bg-white/30 rounded-full overflow-hidden">
                              <div className="w-4/5 h-full bg-white/60 rounded-full animate-pulse"></div>
                            </div>
                            <div className="w-5/6 h-3 bg-white/30 rounded-full overflow-hidden">
                              <div className="w-3/4 h-full bg-white/60 rounded-full animate-pulse delay-100"></div>
                            </div>
                            <div className="w-3/4 h-3 bg-white/30 rounded-full overflow-hidden">
                              <div className="w-2/3 h-full bg-white/60 rounded-full animate-pulse delay-200"></div>
                            </div>
                          </div>
                          <div className="flex justify-between text-white/70 text-sm mt-4">
                            <span>Engagement: +127%</span>
                            <span>Reach: 2.8M</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Twitter/X Card - Second Layer */}
                  <div className="absolute top-12 -left-4 transform -rotate-1 z-30">
                    <div className="w-80 h-56 bg-black rounded-2xl shadow-2xl border border-white/20 overflow-hidden backdrop-blur-sm">
                      <div className="p-6 h-full flex flex-col">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                              <span className="text-black text-lg font-bold">𝕏</span>
                            </div>
                            <div>
                              <div className="text-white text-lg font-semibold">Twitter</div>
                              <div className="text-gray-400 text-sm">1.8K tweets sent</div>
                            </div>
                          </div>
                          <div className="text-white/80">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Content Progress */}
                        <div className="space-y-4 flex-1">
                          <div className="space-y-3">
                            <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                              <div className="w-5/6 h-full bg-white/50 rounded-full animate-pulse delay-200"></div>
                            </div>
                            <div className="w-4/5 h-3 bg-white/20 rounded-full overflow-hidden">
                              <div className="w-3/5 h-full bg-white/50 rounded-full animate-pulse delay-300"></div>
                            </div>
                            <div className="w-3/5 h-3 bg-white/20 rounded-full overflow-hidden">
                              <div className="w-4/5 h-full bg-white/50 rounded-full animate-pulse delay-400"></div>
                            </div>
                          </div>
                          <div className="flex justify-between text-white/70 text-sm mt-4">
                            <span>Retweets: 892</span>
                            <span>Impressions: 1.2M</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn Card - Third Layer */}
                  <div className="absolute top-20 right-2 transform rotate-1 z-20">
                    <div className="w-80 h-56 bg-blue-600 rounded-2xl shadow-2xl border border-blue-400/30 overflow-hidden backdrop-blur-sm">
                      <div className="p-6 h-full flex flex-col">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                              <span className="text-blue-600 text-lg font-bold">in</span>
                            </div>
                            <div>
                              <div className="text-white text-lg font-semibold">LinkedIn</div>
                              <div className="text-blue-200 text-sm">456 posts shared</div>
                            </div>
                          </div>
                          <div className="text-white/80">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Content Progress */}
                        <div className="space-y-4 flex-1">
                          <div className="space-y-3">
                            <div className="w-full h-3 bg-white/30 rounded-full overflow-hidden">
                              <div className="w-2/3 h-full bg-white/60 rounded-full animate-pulse delay-400"></div>
                            </div>
                            <div className="w-4/5 h-3 bg-white/30 rounded-full overflow-hidden">
                              <div className="w-3/4 h-full bg-white/60 rounded-full animate-pulse delay-500"></div>
                            </div>
                            <div className="w-2/3 h-3 bg-white/30 rounded-full overflow-hidden">
                              <div className="w-1/2 h-full bg-white/60 rounded-full animate-pulse delay-600"></div>
                            </div>
                          </div>
                          <div className="flex justify-between text-white/70 text-sm mt-4">
                            <span>Connections: +248</span>
                            <span>Views: 890K</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Facebook Card - Bottom Layer */}
                  <div className="absolute top-28 left-12 transform -rotate-2 z-10">
                    <div className="w-80 h-56 bg-blue-500 rounded-2xl shadow-2xl border border-blue-300/30 overflow-hidden backdrop-blur-sm">
                      <div className="p-6 h-full flex flex-col">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                              <span className="text-blue-500 text-lg font-bold">f</span>
                            </div>
                            <div>
                              <div className="text-white text-lg font-semibold">Facebook</div>
                              <div className="text-blue-200 text-sm">1.1K posts published</div>
                            </div>
                          </div>
                          <div className="text-white/80">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Content Progress */}
                        <div className="space-y-4 flex-1">
                          <div className="space-y-3">
                            <div className="w-full h-3 bg-white/30 rounded-full overflow-hidden">
                              <div className="w-5/6 h-full bg-white/60 rounded-full animate-pulse delay-600"></div>
                            </div>
                            <div className="w-5/6 h-3 bg-white/30 rounded-full overflow-hidden">
                              <div className="w-4/5 h-full bg-white/60 rounded-full animate-pulse delay-700"></div>
                            </div>
                            <div className="w-3/4 h-3 bg-white/30 rounded-full overflow-hidden">
                              <div className="w-2/3 h-full bg-white/60 rounded-full animate-pulse delay-800"></div>
                            </div>
                          </div>
                          <div className="flex justify-between text-white/70 text-sm mt-4">
                            <span>Likes: 15.2K</span>
                            <span>Reach: 3.1M</span>
                          </div>
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
                    <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#06b6d4', stopOpacity: 0.9 }} />
                    <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.8 }} />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
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
                    d="M 240 140 Q 320 280 300 420" 
                    stroke="url(#flowGradient)" 
                    strokeWidth="5" 
                    strokeDasharray="15,8" 
                    fill="none" 
                    filter="url(#glow)"
                    className="animate-pulse"
                    style={{ 
                      strokeDashoffset: '30',
                      animation: 'dash 3s linear infinite, pulse 2s ease-in-out infinite' 
                    }}
                  />
                  
                  {/* To Twitter */}
                  <path 
                    d="M 240 160 Q 120 300 100 440" 
                    stroke="url(#flowGradient)" 
                    strokeWidth="5" 
                    strokeDasharray="15,8" 
                    fill="none" 
                    filter="url(#glow)"
                    className="animate-pulse"
                    style={{ 
                      strokeDashoffset: '30',
                      animation: 'dash 3s linear infinite 0.5s, pulse 2s ease-in-out infinite 0.5s' 
                    }}
                  />
                  
                  {/* To LinkedIn */}
                  <path 
                    d="M 240 180 Q 380 320 360 460" 
                    stroke="url(#flowGradient)" 
                    strokeWidth="5" 
                    strokeDasharray="15,8" 
                    fill="none" 
                    filter="url(#glow)"
                    className="animate-pulse"
                    style={{ 
                      strokeDashoffset: '30',
                      animation: 'dash 3s linear infinite 1s, pulse 2s ease-in-out infinite 1s' 
                    }}
                  />
                  
                  {/* To Facebook */}
                  <path 
                    d="M 240 200 Q 200 340 220 480" 
                    stroke="url(#flowGradient)" 
                    strokeWidth="5" 
                    strokeDasharray="15,8" 
                    fill="none" 
                    filter="url(#glow)"
                    className="animate-pulse"
                    style={{ 
                      strokeDashoffset: '30',
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