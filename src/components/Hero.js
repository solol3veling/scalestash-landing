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
              linear-gradient(rgba(113, 113, 122, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(113, 113, 122, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 max-w-lg">
            <div className="space-y-4">
              <div className="inline-block bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-sm font-medium">
                Coming Soon
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
                The future of social
                <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                  media management
                </span>
              </h1>
              
              <p className="text-lg text-zinc-400 leading-relaxed">
                Be the first to experience our revolutionary platform that simplifies social media for creators and teams.
              </p>
            </div>

            {/* Waitlist Form */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-zinc-200 transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                  Join Waitlist
                </button>
              </div>
              
              <p className="text-sm text-zinc-500">
                Join <span className="text-white font-medium">2,847</span> others waiting for early access
              </p>
            </div>

            {/* Benefits */}
            <div className="pt-4">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-sm text-zinc-300">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Free for early users</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-zinc-300">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Exclusive features</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-zinc-300">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
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
              <div className="bg-zinc-900/50 backdrop-blur-xl rounded-xl border border-zinc-800 p-5 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-white font-medium text-sm">scalestash</div>
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-zinc-400 text-sm">Connected platforms</div>
                    <div className="text-white font-medium text-sm">8 active</div>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {['IG', '𝕏', 'in', 'f'].map((platform, i) => (
                      <div key={i} className="bg-zinc-800 p-2 rounded-lg text-center">
                        <div className="text-white text-xs font-medium">{platform}</div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-zinc-800/50 p-3 rounded-lg">
                    <div className="text-zinc-400 text-xs mb-1">Next scheduled</div>
                    <div className="text-white text-sm font-medium">Product launch post</div>
                    <div className="text-zinc-500 text-xs">in 2 hours</div>
                  </div>
                </div>
              </div>

              {/* Small floating cards */}
              <div className="absolute -top-2 -right-2 bg-zinc-900/90 backdrop-blur-xl rounded-lg border border-zinc-800 p-3 shadow-xl">
                <div className="text-zinc-400 text-xs mb-1">Reach</div>
                <div className="text-white text-sm font-bold">+127%</div>
                <div className="text-green-400 text-xs">this week</div>
              </div>

              <div className="absolute -bottom-2 -left-2 bg-zinc-900/90 backdrop-blur-xl rounded-lg border border-zinc-800 p-3 shadow-xl">
                <div className="text-zinc-400 text-xs mb-1">Queued</div>
                <div className="text-white text-sm font-bold">24</div>
                <div className="text-blue-400 text-xs">posts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;