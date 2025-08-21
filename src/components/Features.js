import React, { useState, useEffect, useRef } from 'react';

const Features = () => {
    const [visibleSections, setVisibleSections] = useState(new Set());
    const [hoveredCard, setHoveredCard] = useState(null);
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
        <section id="features" className="relative bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
            {/* Subtle background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
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

                    <div className={`space-y-6 lg:order-1 ${visibleSections.has(0) ? 'animate-slideInLeft' : 'opacity-0'
                        }`} style={{ animationDelay: '0.3s' }}>
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">Multi-platform management</h3>
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
                                <li key={i} className="flex items-center space-x-3 text-zinc-300 transform hover:translate-x-2 transition-all duration-300">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`relative ${visibleSections.has(0) ? 'animate-slideInRight' : 'opacity-0'
                        }`} style={{ animationDelay: '0.3s' }}>
                        <div
                            className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 backdrop-blur-xl rounded-3xl border border-zinc-700/50 p-6 shadow-2xl transform hover:scale-[1.02] transition-all duration-500 cursor-pointer"
                            onMouseEnter={() => setHoveredCard(0)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="text-white font-semibold">Connected Platforms</div>
                                <div className="text-green-400 text-sm font-medium">8 active</div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {[
                                    { name: 'Instagram', icon: 'IG', color: 'from-pink-500 to-orange-500', active: true },
                                    { name: 'Twitter', icon: '𝕏', color: 'from-blue-400 to-blue-600', active: true },
                                    { name: 'LinkedIn', icon: 'in', color: 'from-blue-600 to-blue-800', active: true },
                                    { name: 'TikTok', icon: 'TT', color: 'from-red-500 to-pink-500', active: false }
                                ].map((platform, i) => (
                                    <div key={i} className={`p-3 rounded-xl border transition-all duration-500 transform hover:scale-105 ${platform.active
                                        ? `bg-gradient-to-r ${platform.color} border-transparent shadow-lg`
                                        : 'bg-zinc-800/50 border-zinc-600 hover:border-zinc-500'
                                        } ${hoveredCard === 0 ? 'animate-pulse' : ''}`}>
                                        <div className="flex items-center space-x-3">
                                            <div className="text-white font-bold">{platform.icon}</div>
                                            <div>
                                                <div className="text-white text-sm font-medium">{platform.name}</div>
                                                <div className={`text-xs ${platform.active ? 'text-green-300' : 'text-zinc-400'}`}>
                                                    {platform.active ? 'Connected' : 'Available'}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-zinc-800/50 p-3 rounded-xl border border-zinc-700/50">
                                <div className="text-zinc-400 text-sm mb-1">Total reach</div>
                                <div className="text-white text-xl font-bold">2.4M followers</div>
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
                    <div className={`space-y-6 ${visibleSections.has(1) ? 'animate-slideInLeft' : 'opacity-0'
                        }`} style={{ animationDelay: '0.1s' }}>
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">Smart scheduling</h3>
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
                                <li key={i} className="flex items-center space-x-3 text-zinc-300 transform hover:translate-x-2 transition-all duration-300">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`relative ${visibleSections.has(1) ? 'animate-slideInRight' : 'opacity-0'
                        }`} style={{ animationDelay: '0.3s' }}>
                        <div
                            className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 backdrop-blur-xl rounded-3xl border border-zinc-700/50 p-6 shadow-2xl transform hover:scale-[1.02] transition-all duration-500 cursor-pointer"
                            onMouseEnter={() => setHoveredCard(1)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="text-white font-semibold">Smart Schedule</div>
                                <div className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full font-medium">AI Optimized</div>
                            </div>
                            <div className="space-y-4 mb-6">
                                {[
                                    { time: '9:00 AM', platform: 'LinkedIn', engagement: '94%', color: 'bg-blue-500' },
                                    { time: '2:30 PM', platform: 'Instagram', engagement: '87%', color: 'bg-pink-500' },
                                    { time: '7:15 PM', platform: 'Twitter', engagement: '91%', color: 'bg-blue-400' }
                                ].map((slot, i) => (
                                    <div key={i} className={`flex items-center justify-between p-3 bg-zinc-800/50 rounded-xl transition-all duration-500 transform hover:scale-105 border border-zinc-700/30 ${hoveredCard === 1 ? 'animate-pulse' : ''}`}>
                                        <div className="flex items-center space-x-3">
                                            <div className={`w-3 h-3 ${slot.color} rounded-full animate-pulse`}></div>
                                            <div>
                                                <div className="text-white font-medium">{slot.time}</div>
                                                <div className="text-zinc-400 text-sm">{slot.platform}</div>
                                            </div>
                                        </div>
                                        <div className="text-green-400 text-sm font-medium">{slot.engagement} reach</div>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-3 rounded-xl border border-blue-500/30">
                                <div className="text-blue-300 text-xs mb-1">AI Recommendation</div>
                                <div className="text-white">Post 2 hours earlier for +23% engagement</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature 3: Analytics */}
            <div
                ref={(el) => sectionRefs.current[2] = el}
                className="max-w-7xl mx-auto px-6 relative z-10 py-16"
            >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className={`space-y-6 lg:order-1 ${visibleSections.has(2) ? 'animate-slideInLeft' : 'opacity-0'
                        }`} style={{ animationDelay: '0.3s' }}>
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl shadow-lg">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">Analytics & insights</h3>
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
                                <li key={i} className="flex items-center space-x-3 text-zinc-300 transform hover:translate-x-2 transition-all duration-300">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`relative ${visibleSections.has(2) ? 'animate-slideInRight' : 'opacity-0'
                        }`} style={{ animationDelay: '0.3s' }}>
                        <div
                            className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 backdrop-blur-xl rounded-3xl border border-zinc-700/50 p-6 shadow-2xl transform hover:scale-[1.02] transition-all duration-500 cursor-pointer"
                            onMouseEnter={() => setHoveredCard(2)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="text-white font-semibold">Analytics Dashboard</div>
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {[
                                    { label: 'Engagement', value: '+127%', color: 'text-green-400', bg: 'bg-green-400/10' },
                                    { label: 'Reach', value: '2.4M', color: 'text-blue-400', bg: 'bg-blue-400/10' },
                                    { label: 'Followers', value: '+5.2K', color: 'text-purple-400', bg: 'bg-purple-400/10' },
                                    { label: 'Clicks', value: '847', color: 'text-orange-400', bg: 'bg-orange-400/10' }
                                ].map((metric, i) => (
                                    <div key={i} className={`${metric.bg} p-3 rounded-xl text-center transform hover:scale-105 transition-all duration-500 border border-zinc-700/30 ${hoveredCard === 2 ? 'animate-pulse' : ''}`}>
                                        <div className={`text-lg font-bold ${metric.color} mb-1`}>{metric.value}</div>
                                        <div className="text-zinc-400 text-sm">{metric.label}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-zinc-800/50 p-3 rounded-xl border border-zinc-700/50">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="text-zinc-400 text-sm">Top performing post</div>
                                    <div className="text-green-400 text-sm font-medium">+340% engagement</div>
                                </div>
                                <div className="text-white">"Behind the scenes of our latest project..."</div>
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
                    <div className={`space-y-6 ${visibleSections.has(3) ? 'animate-slideInLeft' : 'opacity-0'
                        }`} style={{ animationDelay: '0.1s' }}>
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl shadow-lg">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">Team collaboration</h3>
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
                                <li key={i} className="flex items-center space-x-3 text-zinc-300 transform hover:translate-x-2 transition-all duration-300">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`relative ${visibleSections.has(3) ? 'animate-slideInRight' : 'opacity-0'
                        }`} style={{ animationDelay: '0.3s' }}>
                        <div
                            className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 backdrop-blur-xl rounded-3xl border border-zinc-700/50 p-6 shadow-2xl transform hover:scale-[1.02] transition-all duration-500 cursor-pointer"
                            onMouseEnter={() => setHoveredCard(3)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="text-white font-semibold">Team Workspace</div>
                                <div className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full font-medium">3 pending</div>
                            </div>
                            <div className="space-y-3 mb-6">
                                {[
                                    { name: 'Sarah Chen', role: 'Content Manager', status: 'Online', avatar: 'SC', color: 'from-blue-500 to-cyan-500' },
                                    { name: 'Mike Johnson', role: 'Designer', status: 'Away', avatar: 'MJ', color: 'from-purple-500 to-pink-500' },
                                    { name: 'Emma Davis', role: 'Social Media', status: 'Online', avatar: 'ED', color: 'from-emerald-500 to-teal-500' }
                                ].map((member, i) => (
                                    <div key={i} className={`flex items-center justify-between p-3 bg-zinc-800/50 rounded-xl transform hover:scale-105 transition-all duration-500 border border-zinc-700/30 ${hoveredCard === 3 ? 'animate-pulse' : ''}`}>
                                        <div className="flex items-center space-x-3">
                                            <div className={`w-10 h-10 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center shadow-lg`}>
                                                <span className="text-white text-sm font-bold">{member.avatar}</span>
                                            </div>
                                            <div>
                                                <div className="text-white font-medium">{member.name}</div>
                                                <div className="text-zinc-400 text-sm">{member.role}</div>
                                            </div>
                                        </div>
                                        <div className={`w-3 h-3 rounded-full ${member.status === 'Online' ? 'bg-green-400 animate-pulse' : 'bg-zinc-500'}`}></div>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 p-3 rounded-xl border border-orange-500/30">
                                <div className="text-orange-300 text-xs mb-1">Pending Review</div>
                                <div className="text-white">"New product launch campaign" needs approval</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
