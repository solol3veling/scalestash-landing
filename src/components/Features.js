import React, { useState, useEffect, useRef } from 'react';

const Features = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = [];
    
    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleSections(prev => new Set([...prev, index]));
              }
            });
          },
          { threshold: 0.2, rootMargin: '-50px' }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <section id="features" className="relative bg-black overflow-hidden">
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

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-24 pb-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Everything you need
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Powerful tools designed for modern social media management
          </p>
        </div>
      </div>

      {/* Feature 1: Multi-platform management */}
      <div 
        ref={(el) => sectionRefs.current[0] = el}
        className="max-w-7xl mx-auto px-6 relative z-10 py-16"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${
            visibleSections.has(0) ? 'animate-slideInLeft' : 'opacity-0'
          }`} style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center space-x-4">
              <div className="text-3xl">🔗</div>
              <h3 className="text-2xl font-bold text-white">Multi-platform management</h3>
            </div>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Connect and manage all your social accounts from one unified dashboard. Schedule posts across Instagram, Twitter, LinkedIn, TikTok, and more.
            </p>
            <ul className="space-y-3">
              {[
                'Connect unlimited social accounts',
                'Unified content calendar',
                'Cross-platform posting',
                'Real-time synchronization'
              ].map((detail, i) => (
                <li key={i} className="flex items-center space-x-3 text-zinc-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`relative ${
            visibleSections.has(0) ? 'animate-slideInRight' : 'opacity-0'
          }`} style={{ animationDelay: '0.3s' }}>
            <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-zinc-800 p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="text-white font-semibold text-sm">Connected Platforms</div>
                <div className="text-green-400 text-xs">8 active</div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { name: 'Instagram', icon: 'IG', color: 'from-pink-500 to-orange-500', active: true },
                  { name: 'Twitter', icon: '𝕏', color: 'from-blue-400 to-blue-600', active: true },
                  { name: 'LinkedIn', icon: 'in', color: 'from-blue-600 to-blue-800', active: true },
                  { name: 'TikTok', icon: 'TT', color: 'from-red-500 to-pink-500', active: false }
                ].map((platform, i) => (
                  <div key={i} className={`p-3 rounded-xl border transition-all duration-500 ${
                    platform.active 
                      ? `bg-gradient-to-r ${platform.color} border-transparent` 
                      : 'bg-zinc-800 border-zinc-700'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <div className="text-white font-bold text-sm">{platform.icon}</div>
                      <div>
                        <div className="text-white text-xs font-medium">{platform.name}</div>
                        <div className={`text-xs ${platform.active ? 'text-green-300' : 'text-zinc-500'}`}>
                          {platform.active ? 'Connected' : 'Available'}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-zinc-800/50 p-3 rounded-lg">
                <div className="text-zinc-400 text-xs mb-1">Total reach</div>
                <div className="text-white text-lg font-bold">2.4M followers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 2: Smart scheduling */}
      <div 
        ref={(el) => sectionRefs.current[1] = el}
        className="max-w-7xl mx-auto px-6 relative z-10 py-16"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`relative lg:order-2 ${
            visibleSections.has(1) ? 'animate-slideInRight' : 'opacity-0'
          }`} style={{ animationDelay: '0.1s' }}>
            <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-zinc-800 p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="text-white font-semibold text-sm">Smart Schedule</div>
                <div className="text-blue-400 text-xs">AI Optimized</div>
              </div>
              <div className="space-y-4 mb-6">
                {[
                  { time: '9:00 AM', platform: 'LinkedIn', engagement: '94%', color: 'bg-blue-600' },
                  { time: '2:30 PM', platform: 'Instagram', engagement: '87%', color: 'bg-pink-500' },
                  { time: '7:15 PM', platform: 'Twitter', engagement: '91%', color: 'bg-blue-400' }
                ].map((slot, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 ${slot.color} rounded-full`}></div>
                      <div>
                        <div className="text-white text-sm font-medium">{slot.time}</div>
                        <div className="text-zinc-400 text-xs">{slot.platform}</div>
                      </div>
                    </div>
                    <div className="text-green-400 text-xs font-medium">{slot.engagement} reach</div>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-3 rounded-lg border border-blue-500/30">
                <div className="text-blue-300 text-xs mb-1">AI Recommendation</div>
                <div className="text-white text-sm">Post 2 hours earlier for +23% engagement</div>
              </div>
            </div>
          </div>
          <div className={`space-y-6 lg:order-1 ${
            visibleSections.has(1) ? 'animate-slideInLeft' : 'opacity-0'
          }`} style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center space-x-4">
              <div className="text-3xl">⏰</div>
              <h3 className="text-2xl font-bold text-white">Smart scheduling</h3>
            </div>
            <p className="text-lg text-zinc-400 leading-relaxed">
              AI-powered posting times and content calendar optimization. Let our algorithm find the perfect time to maximize your reach.
            </p>
            <ul className="space-y-3">
              {[
                'AI-powered optimal timing',
                'Automated queue management',
                'Time zone optimization',
                'Peak engagement analysis'
              ].map((detail, i) => (
                <li key={i} className="flex items-center space-x-3 text-zinc-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Feature 3: Analytics */}
      <div 
        ref={(el) => sectionRefs.current[2] = el}
        className="max-w-7xl mx-auto px-6 relative z-10 py-16"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${
            visibleSections.has(2) ? 'animate-slideInLeft' : 'opacity-0'
          }`} style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center space-x-4">
              <div className="text-3xl">📊</div>
              <h3 className="text-2xl font-bold text-white">Analytics & insights</h3>
            </div>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Comprehensive performance tracking and audience analytics. Get detailed insights into what content performs best.
            </p>
            <ul className="space-y-3">
              {[
                'Real-time performance metrics',
                'Audience demographics',
                'Engagement rate tracking',
                'Growth analytics dashboard'
              ].map((detail, i) => (
                <li key={i} className="flex items-center space-x-3 text-zinc-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`relative ${
            visibleSections.has(2) ? 'animate-slideInRight' : 'opacity-0'
          }`} style={{ animationDelay: '0.3s' }}>
            <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-zinc-800 p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="text-white font-semibold text-sm">Analytics Dashboard</div>
                <div className="text-green-400 text-xs">Live</div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: 'Engagement', value: '+127%', color: 'text-green-400' },
                  { label: 'Reach', value: '2.4M', color: 'text-blue-400' },
                  { label: 'Followers', value: '+5.2K', color: 'text-purple-400' },
                  { label: 'Clicks', value: '847', color: 'text-orange-400' }
                ].map((metric, i) => (
                  <div key={i} className="bg-zinc-800/50 p-3 rounded-lg text-center">
                    <div className={`text-lg font-bold ${metric.color}`}>{metric.value}</div>
                    <div className="text-zinc-400 text-xs">{metric.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-zinc-800/50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-zinc-400 text-xs">Top performing post</div>
                  <div className="text-green-400 text-xs">+340% engagement</div>
                </div>
                <div className="text-white text-sm">"Behind the scenes of our latest project..."</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 4: Team collaboration */}
      <div 
        ref={(el) => sectionRefs.current[3] = el}
        className="max-w-7xl mx-auto px-6 relative z-10 py-16 pb-24"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`relative lg:order-2 ${
            visibleSections.has(3) ? 'animate-slideInRight' : 'opacity-0'
          }`} style={{ animationDelay: '0.1s' }}>
            <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-zinc-800 p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="text-white font-semibold text-sm">Team Workspace</div>
                <div className="text-yellow-400 text-xs">3 pending approvals</div>
              </div>
              <div className="space-y-3 mb-6">
                {[
                  { name: 'Sarah Chen', role: 'Content Manager', status: 'Online', avatar: 'SC' },
                  { name: 'Mike Johnson', role: 'Designer', status: 'Away', avatar: 'MJ' },
                  { name: 'Emma Davis', role: 'Social Media', status: 'Online', avatar: 'ED' }
                ].map((member, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{member.avatar}</span>
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">{member.name}</div>
                        <div className="text-zinc-400 text-xs">{member.role}</div>
                      </div>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${member.status === 'Online' ? 'bg-green-400' : 'bg-zinc-500'}`}></div>
                  </div>
                ))}
              </div>
              <div className="bg-orange-500/20 p-3 rounded-lg border border-orange-500/30">
                <div className="text-orange-300 text-xs mb-1">Pending Review</div>
                <div className="text-white text-sm">"New product launch campaign" needs approval</div>
              </div>
            </div>
          </div>
          <div className={`space-y-6 lg:order-1 ${
            visibleSections.has(3) ? 'animate-slideInLeft' : 'opacity-0'
          }`} style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center space-x-4">
              <div className="text-3xl">👥</div>
              <h3 className="text-2xl font-bold text-white">Team collaboration</h3>
            </div>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Invite team members, assign roles, and maintain brand consistency across all your social media channels.
            </p>
            <ul className="space-y-3">
              {[
                'Role-based permissions',
                'Content approval workflow',
                'Team activity tracking',
                'Brand consistency tools'
              ].map((detail, i) => (
                <li key={i} className="flex items-center space-x-3 text-zinc-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;