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
                Join the growing community of creators using scalestash
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

          {/* Right Column - Analytics Cards Deck */}
          <div className="relative hidden lg:block">
            <div className="relative h-[600px] w-full">
              {/* Enhanced Card Stack */}
              <div className="relative h-full flex items-center justify-center">
                
                {/* Card 1 - Total Posts */}
                <div className="absolute transform -rotate-6 z-10 hover:z-50 transition-all duration-500 hover:scale-105 hover:-rotate-3" style={{ top: '40px', left: '20px' }}>
                  <div className="w-96 h-56 bg-gradient-to-br from-zinc-950/95 via-zinc-900/98 to-zinc-800/95 backdrop-blur-2xl rounded-3xl shadow-[0_20px_70px_rgba(0,0,0,0.3)] border border-zinc-600/30 hover:border-zinc-500/50 hover:shadow-[0_25px_80px_rgba(0,0,0,0.4)] transition-all duration-500 overflow-hidden">
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-2xl"></div>
                    
                    {/* Header */}
                    <div className="relative bg-gradient-to-r from-blue-600/15 via-purple-600/10 to-pink-600/15 p-6 border-b border-zinc-700/40">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="relative group">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-3 border-zinc-900 flex items-center justify-center shadow-lg">
                              <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-pink-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">Total Posts</h3>
                            <p className="text-sm text-zinc-400">Published Content</p>
                          </div>
                        </div>
                        <div className="bg-emerald-500/20 px-4 py-2.5 rounded-2xl border border-emerald-400/30 backdrop-blur-sm">
                          <span className="text-sm text-emerald-300 font-bold">↗ +24%</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Main content */}
                    <div className="relative p-6 flex items-center justify-center h-32">
                      <div className="text-center">
                        <div className="text-6xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 tracking-tight">
                          847
                        </div>
                        <div className="text-lg text-zinc-300 font-semibold">Content Pieces</div>
                        <div className="text-sm text-zinc-500 mt-1.5">All platforms combined</div>
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute top-4 right-6 w-2 h-2 bg-blue-400/40 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Total Engagements */}
                <div className="absolute transform rotate-4 z-20 hover:z-50 transition-all duration-500 hover:scale-105 hover:rotate-1" style={{ top: '100px', right: '50px' }}>
                  <div className="w-96 h-56 bg-gradient-to-br from-zinc-950/95 via-zinc-900/98 to-zinc-800/95 backdrop-blur-2xl rounded-3xl shadow-[0_20px_70px_rgba(0,0,0,0.3)] border border-zinc-600/30 hover:border-zinc-500/50 hover:shadow-[0_25px_80px_rgba(0,0,0,0.4)] transition-all duration-500 overflow-hidden">
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 via-blue-600/5 to-teal-600/5"></div>
                    <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-2xl"></div>
                    
                    {/* Header */}
                    <div className="relative bg-gradient-to-r from-emerald-600/15 via-blue-600/10 to-teal-600/15 p-6 border-b border-zinc-700/40">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="relative group">
                            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 via-blue-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                            </div>
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-pink-500 rounded-full border-3 border-zinc-900 flex items-center justify-center shadow-lg">
                              <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">Total Engagements</h3>
                            <p className="text-sm text-zinc-400">Likes, Comments & Shares</p>
                          </div>
                        </div>
                        <div className="bg-pink-500/20 px-4 py-2.5 rounded-2xl border border-pink-400/30 backdrop-blur-sm">
                          <span className="text-sm text-pink-300 font-bold">↗ +32%</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Main content */}
                    <div className="relative p-6 flex items-center justify-center h-32">
                      <div className="text-center">
                        <div className="text-6xl font-black bg-gradient-to-r from-emerald-400 via-blue-400 to-teal-400 bg-clip-text text-transparent mb-3 tracking-tight">
                          24.1K
                        </div>
                        <div className="text-lg text-zinc-300 font-semibold">Interactions</div>
                        <div className="text-sm text-zinc-500 mt-1.5">User engagement metrics</div>
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute top-4 left-6 w-2 h-2 bg-emerald-400/40 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-6 right-8 w-1.5 h-1.5 bg-teal-400/40 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Success Posts */}
                <div className="absolute transform -rotate-3 z-30 hover:z-50 transition-all duration-500 hover:scale-105 hover:-rotate-1" style={{ top: '180px', left: '80px' }}>
                  <div className="w-96 h-56 bg-gradient-to-br from-zinc-950/95 via-zinc-900/98 to-zinc-800/95 backdrop-blur-2xl rounded-3xl shadow-[0_20px_70px_rgba(0,0,0,0.3)] border border-zinc-600/30 hover:border-zinc-500/50 hover:shadow-[0_25px_80px_rgba(0,0,0,0.4)] transition-all duration-500 overflow-hidden">
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 via-yellow-600/5 to-amber-600/5"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-orange-500/10 to-transparent rounded-full blur-2xl"></div>
                    
                    {/* Header */}
                    <div className="relative bg-gradient-to-r from-orange-600/15 via-yellow-600/10 to-amber-600/15 p-6 border-b border-zinc-700/40">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="relative group">
                            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 via-yellow-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                              </svg>
                            </div>
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-3 border-zinc-900 flex items-center justify-center shadow-lg">
                              <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">Success Posts</h3>
                            <p className="text-sm text-zinc-400">Top Performing Content</p>
                          </div>
                        </div>
                        <div className="bg-orange-500/20 px-4 py-2.5 rounded-2xl border border-orange-400/30 backdrop-blur-sm">
                          <span className="text-sm text-orange-300 font-bold">↗ +18%</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Main content */}
                    <div className="relative p-6 flex items-center justify-center h-32">
                      <div className="text-center">
                        <div className="text-6xl font-black bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent mb-3 tracking-tight">
                          156
                        </div>
                        <div className="text-lg text-zinc-300 font-semibold">Viral Content</div>
                        <div className="text-sm text-zinc-500 mt-1.5">High-engagement posts</div>
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute top-4 right-6 w-2 h-2 bg-orange-400/40 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-amber-400/40 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                    </div>
                  </div>
                </div>

                {/* Card 4 - Audience Growth */}
                <div className="absolute transform rotate-2 z-40 hover:z-50 transition-all duration-500 hover:scale-105 hover:rotate-0" style={{ top: '260px', right: '20px' }}>
                  <div className="w-96 h-56 bg-gradient-to-br from-zinc-950/95 via-zinc-900/98 to-zinc-800/95 backdrop-blur-2xl rounded-3xl shadow-[0_20px_70px_rgba(0,0,0,0.3)] border border-zinc-600/30 hover:border-zinc-500/50 hover:shadow-[0_25px_80px_rgba(0,0,0,0.4)] transition-all duration-500 overflow-hidden">
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-indigo-600/5 to-blue-600/5"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-2xl"></div>
                    
                    {/* Header */}
                    <div className="relative bg-gradient-to-r from-purple-600/15 via-indigo-600/10 to-blue-600/15 p-6 border-b border-zinc-700/40">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="relative group">
                            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                            </div>
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-3 border-zinc-900 flex items-center justify-center shadow-lg">
                              <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">Audience Growth</h3>
                            <p className="text-sm text-zinc-400">Follower Increase</p>
                          </div>
                        </div>
                        <div className="bg-indigo-500/20 px-4 py-2.5 rounded-2xl border border-indigo-400/30 backdrop-blur-sm">
                          <span className="text-sm text-indigo-300 font-bold">↗ +45%</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Main content */}
                    <div className="relative p-6 flex items-center justify-center h-32">
                      <div className="text-center">
                        <div className="text-6xl font-black bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent mb-3 tracking-tight">
                          12.8K
                        </div>
                        <div className="text-lg text-zinc-300 font-semibold">New Followers</div>
                        <div className="text-sm text-zinc-500 mt-1.5">Monthly growth rate</div>
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute top-4 left-6 w-2 h-2 bg-purple-400/40 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-6 right-8 w-1.5 h-1.5 bg-indigo-400/40 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
                    </div>
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