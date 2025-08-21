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

          {/* Right Column - Preview */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main preview card */}
              <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-zinc-800 p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-white font-medium text-lg">scalestash</div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="text-zinc-400 text-base">Connected platforms</div>
                    <div className="text-white font-medium text-base">8 active</div>
                  </div>

                  <div className="grid grid-cols-4 gap-3">
                    {['IG', '𝕏', 'in', 'f'].map((platform, i) => (
                      <div key={i} className="bg-zinc-800 p-3 rounded-xl text-center hover:bg-zinc-700 transition-colors">
                        <div className="text-white text-sm font-medium">{platform}</div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-zinc-800/50 p-4 rounded-xl">
                    <div className="text-zinc-400 text-sm mb-2">Next scheduled</div>
                    <div className="text-white text-base font-medium">Product launch post</div>
                    <div className="text-zinc-500 text-sm">in 2 hours</div>
                  </div>
                </div>
              </div>

              {/* Small floating cards */}
              <div className="absolute -top-3 -right-3 bg-zinc-900/90 backdrop-blur-xl rounded-xl border border-zinc-800 p-4 shadow-xl">
                <div className="text-zinc-400 text-sm mb-1">Reach</div>
                <div className="text-white text-lg font-bold">+127%</div>
                <div className="text-green-400 text-sm">this week</div>
              </div>

              <div className="absolute -bottom-3 -left-3 bg-zinc-900/90 backdrop-blur-xl rounded-xl border border-zinc-800 p-4 shadow-xl">
                <div className="text-zinc-400 text-sm mb-1">Queued</div>
                <div className="text-white text-lg font-bold">24</div>
                <div className="text-blue-400 text-sm">posts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;