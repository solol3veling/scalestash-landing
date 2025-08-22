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
              <div className="inline-block bg-blue-600/10 text-blue-400 px-3 py-1 rounded-md text-sm font-medium border border-blue-600/20">
                Beta Access
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
                Manage all your social media
                <span className="block text-blue-400">
                  from one dashboard
                </span>
              </h1>
              
              <p className="text-lg text-zinc-300 leading-relaxed max-w-xl">
                Schedule, publish, and analyze your content across Instagram, Twitter, LinkedIn, and Facebook. Built for creators and marketing teams.
              </p>
            </div>

            {/* CTA Section */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="flex-1 bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-base text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
                <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap text-base">
                  Get Early Access
                </button>
              </div>
              
              <p className="text-sm text-zinc-500">
                Join 1,200+ creators already using scalestash in beta
              </p>
            </div>

            {/* Features */}
            <div className="pt-4">
              <div className="flex flex-wrap gap-6 text-sm text-zinc-400">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Post Flow Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative h-[600px] w-full">
              {/* Social Media Composer */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-white rounded-lg shadow-lg w-96 border border-gray-200">
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <h3 className="text-sm font-medium text-gray-900">Create Post</h3>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 space-y-4">
                    <textarea 
                      className="w-full h-20 text-sm text-gray-700 placeholder-gray-400 resize-none border-none outline-none"
                      placeholder="What's on your mind?"
                      value="Just shipped our new analytics dashboard! 🚀 Getting real-time insights has never been easier."
                      readOnly
                    />
                    
                    {/* Platform Selection */}
                    <div className="flex items-center space-x-3 pt-2">
                      <span className="text-xs text-gray-500 font-medium">Post to:</span>
                      <div className="flex space-x-2">
                        <div className="flex items-center space-x-1 bg-blue-50 px-2 py-1 rounded-md">
                          <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                          <span className="text-xs text-blue-700">LinkedIn</span>
                        </div>
                        <div className="flex items-center space-x-1 bg-gray-50 px-2 py-1 rounded-md">
                          <div className="w-4 h-4 bg-gray-800 rounded-sm"></div>
                          <span className="text-xs text-gray-700">Twitter</span>
                        </div>
                        <div className="flex items-center space-x-1 bg-purple-50 px-2 py-1 rounded-md">
                          <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-sm"></div>
                          <span className="text-xs text-purple-700">Instagram</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between p-4 border-t border-gray-100 bg-gray-50">
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <button className="flex items-center space-x-1 hover:text-gray-700">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Schedule</span>
                      </button>
                      <span>•</span>
                      <span>Today, 2:30 PM</span>
                    </div>
                    <button className="bg-blue-600 text-white text-xs font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                      Publish
                    </button>
                  </div>
                </div>
              </div>

              {/* Dashboard Analytics Cards */}
              <div className="absolute bottom-0 left-0 right-0">
                <div className="relative h-80">
                  {/* Instagram Analytics */}
                  <div className="absolute top-4 left-8 transform rotate-3 z-40">
                    <div className="w-72 h-40 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                      <div className="p-4 h-full flex flex-col">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                              </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-900">Instagram</span>
                          </div>
                          <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">+12.3%</span>
                        </div>
                        
                        {/* Metrics */}
                        <div className="grid grid-cols-2 gap-4 flex-1">
                          <div>
                            <div className="text-2xl font-bold text-gray-900">2.4K</div>
                            <div className="text-xs text-gray-500">Posts</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-gray-900">127%</div>
                            <div className="text-xs text-gray-500">Engagement</div>
                          </div>
                        </div>
                        
                        {/* Mini Chart */}
                        <div className="mt-2">
                          <div className="flex items-end space-x-1 h-6">
                            <div className="bg-purple-200 w-1 h-2 rounded"></div>
                            <div className="bg-purple-300 w-1 h-4 rounded"></div>
                            <div className="bg-purple-400 w-1 h-3 rounded"></div>
                            <div className="bg-purple-500 w-1 h-6 rounded"></div>
                            <div className="bg-purple-400 w-1 h-4 rounded"></div>
                            <div className="bg-purple-300 w-1 h-5 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Twitter Analytics */}
                  <div className="absolute top-16 -left-2 transform -rotate-2 z-30">
                    <div className="w-72 h-40 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                      <div className="p-4 h-full flex flex-col">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                              </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-900">Twitter</span>
                          </div>
                          <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">+8.7%</span>
                        </div>
                        
                        {/* Metrics */}
                        <div className="grid grid-cols-2 gap-4 flex-1">
                          <div>
                            <div className="text-2xl font-bold text-gray-900">1.8K</div>
                            <div className="text-xs text-gray-500">Tweets</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-gray-900">892</div>
                            <div className="text-xs text-gray-500">Retweets</div>
                          </div>
                        </div>
                        
                        {/* Mini Chart */}
                        <div className="mt-2">
                          <div className="flex items-end space-x-1 h-6">
                            <div className="bg-gray-200 w-1 h-3 rounded"></div>
                            <div className="bg-gray-300 w-1 h-2 rounded"></div>
                            <div className="bg-gray-400 w-1 h-5 rounded"></div>
                            <div className="bg-gray-500 w-1 h-4 rounded"></div>
                            <div className="bg-gray-600 w-1 h-6 rounded"></div>
                            <div className="bg-gray-500 w-1 h-3 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn Analytics */}
                  <div className="absolute top-28 right-4 transform rotate-1 z-20">
                    <div className="w-72 h-40 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                      <div className="p-4 h-full flex flex-col">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-900">LinkedIn</span>
                          </div>
                          <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">+15.2%</span>
                        </div>
                        
                        {/* Metrics */}
                        <div className="grid grid-cols-2 gap-4 flex-1">
                          <div>
                            <div className="text-2xl font-bold text-gray-900">456</div>
                            <div className="text-xs text-gray-500">Posts</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-gray-900">248</div>
                            <div className="text-xs text-gray-500">Connections</div>
                          </div>
                        </div>
                        
                        {/* Mini Chart */}
                        <div className="mt-2">
                          <div className="flex items-end space-x-1 h-6">
                            <div className="bg-blue-200 w-1 h-3 rounded"></div>
                            <div className="bg-blue-300 w-1 h-5 rounded"></div>
                            <div className="bg-blue-400 w-1 h-2 rounded"></div>
                            <div className="bg-blue-500 w-1 h-6 rounded"></div>
                            <div className="bg-blue-600 w-1 h-4 rounded"></div>
                            <div className="bg-blue-500 w-1 h-5 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Distribution Visualization */}
              <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
                {/* Connection arrows */}
                <div className="absolute top-40 left-1/2 transform -translate-x-1/2">
                  <div className="flex space-x-8 opacity-60">
                    {/* Arrow to Instagram */}
                    <div className="transform rotate-12">
                      <svg className="w-16 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                    
                    {/* Arrow to Twitter */}
                    <div className="transform -rotate-12">
                      <svg className="w-16 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                    
                    {/* Arrow to LinkedIn */}
                    <div className="transform rotate-6">
                      <svg className="w-16 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Floating data indicators */}
                <div className="absolute top-52 left-20 animate-pulse">
                  <div className="bg-blue-500/10 rounded-full p-2 border border-blue-500/20">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                <div className="absolute top-60 right-24 animate-pulse" style={{ animationDelay: '0.5s' }}>
                  <div className="bg-blue-500/10 rounded-full p-2 border border-blue-500/20">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                <div className="absolute top-72 left-1/2 animate-pulse" style={{ animationDelay: '1s' }}>
                  <div className="bg-blue-500/10 rounded-full p-2 border border-blue-500/20">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;