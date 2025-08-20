import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-white min-h-[90vh] flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              Scale Your Social Media Presence 
              <span className="block bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                Across All Platforms
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed animate-slide-up">
              Create, schedule, and analyze your content with powerful automation tools. 
              Manage multiple social media accounts from one unified dashboard.
            </p>

            {/* Key Benefits */}
            <div className="space-y-4 mb-8 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-blue-100"><strong className="text-white">Multi-Platform Publishing</strong> - Post to Facebook, Instagram, Twitter, LinkedIn, and more</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-blue-100"><strong className="text-white">Advanced Analytics</strong> - Track performance with detailed insights and reporting</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-purple-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-blue-100"><strong className="text-white">Smart Automation</strong> - Schedule posts, auto-repost, and optimize posting times</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200 backdrop-blur-sm flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Trust Signal */}
            <p className="text-blue-200 text-sm">
              Join 10,000+ content creators scaling their reach
            </p>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                {/* Mock Dashboard Header */}
                <div className="bg-slate-50 p-4 border-b border-slate-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-slate-600 text-sm font-medium">Scale-App Dashboard</div>
                  </div>
                </div>

                {/* Mock Dashboard Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-slate-900 font-semibold">Connected Accounts</h3>
                    <span className="text-green-600 text-sm font-medium">5 Active</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-blue-50 p-3 rounded-lg flex items-center space-x-2">
                      <div className="w-6 h-6 bg-blue-500 rounded"></div>
                      <span className="text-xs text-slate-600">Facebook</span>
                    </div>
                    <div className="bg-pink-50 p-3 rounded-lg flex items-center space-x-2">
                      <div className="w-6 h-6 bg-pink-500 rounded"></div>
                      <span className="text-xs text-slate-600">Instagram</span>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg flex items-center space-x-2">
                      <div className="w-6 h-6 bg-blue-400 rounded"></div>
                      <span className="text-xs text-slate-600">Twitter</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
                    <div className="text-slate-700 text-sm font-medium mb-2">Next Scheduled Post</div>
                    <div className="text-xs text-slate-600">in 2 hours - "Check out our latest feature update!"</div>
                    <div className="flex space-x-2 mt-2">
                      <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                      <div className="w-4 h-4 bg-pink-500 rounded-sm"></div>
                      <div className="w-4 h-4 bg-blue-400 rounded-sm"></div>
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