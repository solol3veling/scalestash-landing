import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-white min-h-screen flex items-center overflow-hidden">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-white" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px'
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 max-w-xl">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Now in Beta</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900" style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                letterSpacing: '-0.02em'
              }}>
                Social media management,
                <span className="text-gray-500"> simplified</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Create, schedule, and analyze your content across all platforms. One dashboard for your entire social media workflow.
              </p>
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all shadow-sm"
                />
                <button className="bg-gray-900 text-white font-medium px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap text-base shadow-sm">
                  Get Started
                </button>
              </div>
              
              <p className="text-sm text-gray-500">
                Start your free trial. No credit card required.
              </p>
            </div>

            {/* Features */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  <span>Multi-platform</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  <span>Smart scheduling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  <span>Real-time analytics</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <div className="relative hidden lg:block">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium text-gray-600">Dashboard</span>
                  </div>
                  <div className="text-xs text-gray-500">Live Preview</div>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-gray-900">847</div>
                    <div className="text-sm text-gray-600">Total Posts</div>
                    <div className="text-xs text-green-600 font-medium">+12% this month</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-gray-900">24.1K</div>
                    <div className="text-sm text-gray-600">Engagements</div>
                    <div className="text-xs text-green-600 font-medium">+8.5% this week</div>
                  </div>
                </div>
                
                {/* Chart Placeholder */}
                <div className="bg-gray-50 rounded-lg p-4 h-32">
                  <div className="flex items-end justify-between h-full">
                    {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
                      <div key={i} className="bg-gray-900 rounded-t" style={{width: '12px', height: `${height}%`}}></div>
                    ))}
                  </div>
                </div>
                
                {/* Platform Status */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-gray-900">Connected Platforms</div>
                  {[
                    { name: 'Instagram', status: 'Active', color: 'bg-purple-500' },
                    { name: 'Twitter', status: 'Active', color: 'bg-blue-500' },
                    { name: 'LinkedIn', status: 'Active', color: 'bg-blue-600' }
                  ].map((platform, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 ${platform.color} rounded-full`}></div>
                        <span className="text-sm text-gray-700">{platform.name}</span>
                      </div>
                      <span className="text-xs text-gray-500">{platform.status}</span>
                    </div>
                  ))}
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