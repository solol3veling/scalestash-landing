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
              {/* Single Post Card */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-zinc-900/90 rounded-xl p-5 shadow-2xl w-96 transform transition-all duration-500 border border-zinc-700/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium text-zinc-400">New Post</div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="text-xs text-zinc-500">Ready</div>
                    </div>
                  </div>
                  <div className="text-base font-semibold text-white mb-3">🚀 Exciting Product Launch!</div>
                  <div className="space-y-2 mb-4">
                    <div className="w-full h-2.5 bg-zinc-700/50 rounded"></div>
                    <div className="w-5/6 h-2.5 bg-zinc-700/50 rounded"></div>
                    <div className="w-4/5 h-2.5 bg-zinc-700/50 rounded"></div>
                    <div className="w-2/3 h-2.5 bg-zinc-700/50 rounded"></div>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-zinc-700/50">
                    <div className="flex space-x-2">
                      <div className="w-6 h-6 bg-purple-500 rounded-lg text-white text-xs flex items-center justify-center font-bold shadow-sm">IG</div>
                      <div className="w-6 h-6 bg-black rounded-lg text-white text-xs flex items-center justify-center font-bold shadow-sm border border-white/20">𝕏</div>
                      <div className="w-6 h-6 bg-blue-600 rounded-lg text-white text-xs flex items-center justify-center font-bold shadow-sm">in</div>
                      <div className="w-6 h-6 bg-blue-500 rounded-lg text-white text-xs flex items-center justify-center font-bold shadow-sm">f</div>
                    </div>
                    <div className="text-sm text-zinc-400 font-medium">Schedule: 2:30 PM</div>
                  </div>
                  
                  {/* Connector Icon at bottom border */}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-pulse border-2 border-zinc-900">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Large Stacked Social Media Cards */}
              <div className="absolute bottom-0 left-0 right-0">
                <div className="relative h-80">
                  {/* Instagram Card - Top Layer */}
                  <div className="absolute top-4 left-8 transform rotate-6 z-40">
                    <div className="w-96 h-56 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-2xl border border-purple-400/30 overflow-hidden backdrop-blur-sm">
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
                  <div className="absolute top-12 -left-4 transform -rotate-8 z-30">
                    <div className="w-96 h-56 bg-black rounded-2xl shadow-2xl border border-white/20 overflow-hidden backdrop-blur-sm">
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
                  <div className="absolute top-20 right-2 transform rotate-5 z-20">
                    <div className="w-96 h-56 bg-blue-600 rounded-2xl shadow-2xl border border-blue-400/30 overflow-hidden backdrop-blur-sm">
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
                  <div className="absolute top-28 left-12 transform -rotate-7 z-10">
                    <div className="w-96 h-56 bg-blue-500 rounded-2xl shadow-2xl border border-blue-300/30 overflow-hidden backdrop-blur-sm">
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
                
                {/* Electrical Circuit Paths */}
                <g>
                  {/* Main vertical bus line - starts below post card */}
                  <line 
                    x1="240" y1="130" 
                    x2="240" y2="220" 
                    stroke="#ffffff" 
                    strokeWidth="4" 
                    strokeOpacity="0.8"
                    filter="url(#glow)"
                  />
                  
                  {/* Horizontal distribution lines */}
                  <line 
                    x1="240" y1="150" 
                    x2="420" y2="150" 
                    stroke="#ffffff" 
                    strokeWidth="3" 
                    strokeOpacity="0.8"
                    filter="url(#glow)"
                  />
                  <line 
                    x1="240" y1="170" 
                    x2="40" y2="170" 
                    stroke="#ffffff" 
                    strokeWidth="3" 
                    strokeOpacity="0.8"
                    filter="url(#glow)"
                  />
                  <line 
                    x1="240" y1="190" 
                    x2="480" y2="190" 
                    stroke="#ffffff" 
                    strokeWidth="3" 
                    strokeOpacity="0.8"
                    filter="url(#glow)"
                  />
                  <line 
                    x1="240" y1="210" 
                    x2="340" y2="210" 
                    stroke="#ffffff" 
                    strokeWidth="3" 
                    strokeOpacity="0.8"
                    filter="url(#glow)"
                  />
                  
                  {/* Vertical drops to cards */}
                  <line 
                    x1="420" y1="150" 
                    x2="420" y2="420" 
                    stroke="#ffffff" 
                    strokeWidth="3" 
                    strokeOpacity="0.8"
                    filter="url(#glow)"
                  />
                  <line 
                    x1="40" y1="170" 
                    x2="40" y2="440" 
                    stroke="#ffffff" 
                    strokeWidth="3" 
                    strokeOpacity="0.8"
                    filter="url(#glow)"
                  />
                  <line 
                    x1="480" y1="190" 
                    x2="480" y2="460" 
                    stroke="#ffffff" 
                    strokeWidth="3" 
                    strokeOpacity="0.8"
                    filter="url(#glow)"
                  />
                  <line 
                    x1="340" y1="210" 
                    x2="340" y2="480" 
                    stroke="#ffffff" 
                    strokeWidth="3" 
                    strokeOpacity="0.8"
                    filter="url(#glow)"
                  />
                  
                  {/* Circuit junctions */}
                  <circle cx="240" cy="150" r="4" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2"/>
                  <circle cx="240" cy="170" r="4" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2"/>
                  <circle cx="240" cy="190" r="4" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2"/>
                  <circle cx="240" cy="210" r="4" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2"/>
                  
                  {/* Connection terminals at cards */}
                  <circle cx="420" cy="420" r="5" fill="#10b981" stroke="#059669" strokeWidth="2" className="animate-pulse"/>
                  <circle cx="40" cy="440" r="5" fill="#10b981" stroke="#059669" strokeWidth="2" className="animate-pulse"/>
                  <circle cx="480" cy="460" r="5" fill="#10b981" stroke="#059669" strokeWidth="2" className="animate-pulse"/>
                  <circle cx="340" cy="480" r="5" fill="#10b981" stroke="#059669" strokeWidth="2" className="animate-pulse"/>
                  
                  {/* Animated current flow indicators */}
                  <circle r="4" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M 240,130 L 240,150 L 420,150 L 420,420"/>
                  </circle>
                  <circle r="4" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M 240,130 L 240,170 L 40,170 L 40,440"/>
                  </circle>
                  <circle r="4" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M 240,130 L 240,190 L 480,190 L 480,460"/>
                  </circle>
                  <circle r="4" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1">
                    <animateMotion dur="2.2s" repeatCount="indefinite" path="M 240,130 L 240,210 L 340,210 L 340,480"/>
                  </circle>
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