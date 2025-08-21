import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
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