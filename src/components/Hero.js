import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center overflow-hidden">
      {/* Planetary Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-950"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
            {Array.from({ length: 96 }).map((_, i) => (
              <div key={i} className="border border-zinc-800/30"></div>
            ))}
          </div>
        </div>

        {/* Social Media Planets */}
        <div className="absolute inset-0">
          {/* Instagram - Top Right */}
          <div className="absolute top-20 right-32 flex flex-col items-center animate-planetPulse">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/20">
              <span className="text-white font-bold text-lg">IG</span>
            </div>
          </div>

          {/* Twitter/X - Top Left */}
          <div className="absolute top-32 left-24 flex flex-col items-center animate-planetPulse" style={{ animationDelay: '0.5s' }}>
            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-white font-bold">𝕏</span>
            </div>
          </div>

          {/* LinkedIn - Middle Right */}
          <div className="absolute top-1/2 right-20 flex flex-col items-center animate-planetPulse" style={{ animationDelay: '1s' }}>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/20">
              <span className="text-white font-bold text-sm">in</span>
            </div>
          </div>

          {/* TikTok - Bottom Right */}
          <div className="absolute bottom-32 right-40 flex flex-col items-center animate-planetPulse" style={{ animationDelay: '1.5s' }}>
            <div className="w-14 h-14 bg-gradient-to-br from-black via-red-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/20">
              <span className="text-white font-bold">TT</span>
            </div>
          </div>

          {/* YouTube - Bottom Left */}
          <div className="absolute bottom-24 left-32 flex flex-col items-center animate-planetPulse" style={{ animationDelay: '2s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-lg shadow-red-600/20">
              <span className="text-white font-bold">YT</span>
            </div>
          </div>

          {/* Facebook - Middle Left */}
          <div className="absolute top-1/2 left-16 flex flex-col items-center animate-planetPulse" style={{ animationDelay: '2.5s' }}>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full flex items-center justify-center shadow-lg shadow-blue-700/20">
              <span className="text-white font-bold text-sm">f</span>
            </div>
          </div>

          {/* Pinterest - Top Center */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-planetPulse" style={{ animationDelay: '3s' }}>
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-lg shadow-red-500/20">
              <span className="text-white font-bold text-xs">P</span>
            </div>
          </div>
        </div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{ zIndex: 1 }}>
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          {/* Connecting lines between platforms */}
          <line x1="20%" y1="35%" x2="80%" y2="20%" stroke="url(#connectionGradient)" strokeWidth="1" className="animate-connectionPulse" strokeDasharray="5,5" />
          <line x1="15%" y1="50%" x2="85%" y2="50%" stroke="url(#connectionGradient)" strokeWidth="1" className="animate-connectionPulse" strokeDasharray="5,5" style={{ animationDelay: '1s' }} />
          <line x1="25%" y1="80%" x2="75%" y2="70%" stroke="url(#connectionGradient)" strokeWidth="1" className="animate-connectionPulse" strokeDasharray="5,5" style={{ animationDelay: '2s' }} />
          <line x1="50%" y1="15%" x2="50%" y2="85%" stroke="url(#connectionGradient)" strokeWidth="1" className="animate-connectionPulse" strokeDasharray="5,5" style={{ animationDelay: '1.5s' }} />
        </svg>

        {/* Traveling Posts */}
        <div className="absolute inset-0">
          {/* Post 1 - Moving from Instagram to Twitter */}
          <div className="absolute animate-floatingPost" style={{ 
            top: '25%', 
            right: '20%',
            animationDelay: '0s'
          }}>
            <div className="w-4 h-4 bg-white rounded-full shadow-lg shadow-white/50 opacity-80"></div>
          </div>

          {/* Post 2 - Moving from YouTube to LinkedIn */}
          <div className="absolute animate-floatingPost2" style={{ 
            bottom: '30%', 
            left: '25%',
            animationDelay: '2s'
          }}>
            <div className="w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50 opacity-70"></div>
          </div>

          {/* Post 3 - Moving from TikTok to Facebook */}
          <div className="absolute animate-floatingPost3" style={{ 
            bottom: '40%', 
            right: '30%',
            animationDelay: '4s'
          }}>
            <div className="w-3 h-3 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50 opacity-70"></div>
          </div>
        </div>

        {/* Central Hub */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-hubPulse shadow-2xl shadow-purple-500/30"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                Scale your social 
                <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                  presence
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-lg">
                One dashboard to manage, schedule, and analyze all your social media content across every platform.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-zinc-200 transition-all duration-300 transform hover:scale-105">
                Start free trial
              </button>
              <button className="border border-zinc-700 text-white font-semibold px-8 py-4 rounded-full hover:bg-zinc-900 transition-all duration-300 flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span>Watch demo</span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-zinc-500 text-sm">Trusted by</div>
              <div className="flex items-center space-x-6 opacity-60">
                <div className="text-zinc-400 font-medium">10,000+</div>
                <div className="text-zinc-500 text-sm">creators</div>
              </div>
            </div>
          </div>

          {/* Right Column - Modern Dashboard Preview */}
          <div className="relative">
            {/* Floating cards */}
            <div className="relative">
              {/* Main dashboard card */}
              <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-zinc-800 p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-white font-semibold">scalestash</div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-zinc-300">Connected platforms</div>
                    <div className="text-white font-medium">8 active</div>
                  </div>

                  <div className="grid grid-cols-4 gap-3">
                    {['IG', 'TW', 'LI', 'FB'].map((platform, i) => (
                      <div key={i} className="bg-zinc-800 p-3 rounded-lg text-center">
                        <div className="text-white text-sm font-medium">{platform}</div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-zinc-800/50 p-4 rounded-lg">
                    <div className="text-zinc-300 text-sm mb-2">Next scheduled</div>
                    <div className="text-white">Product launch announcement</div>
                    <div className="text-zinc-500 text-sm">in 2 hours</div>
                  </div>
                </div>
              </div>

              {/* Analytics card */}
              <div className="absolute -top-4 -right-4 bg-zinc-900/90 backdrop-blur-xl rounded-xl border border-zinc-800 p-4 shadow-xl">
                <div className="text-zinc-300 text-xs mb-2">Engagement</div>
                <div className="text-white text-lg font-bold">+127%</div>
                <div className="text-green-400 text-xs">vs last month</div>
              </div>

              {/* Schedule card */}
              <div className="absolute -bottom-4 -left-4 bg-zinc-900/90 backdrop-blur-xl rounded-xl border border-zinc-800 p-4 shadow-xl">
                <div className="text-zinc-300 text-xs mb-2">Posts queued</div>
                <div className="text-white text-lg font-bold">47</div>
                <div className="text-blue-400 text-xs">next 7 days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;