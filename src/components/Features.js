import React from 'react';

const Features = () => {

    return (
        <section id="features" className="relative bg-black">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                        Features built for creators
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        The essential tools you need to manage your social media presence effectively
                    </p>
                </div>
            </div>

            {/* Supported Accounts Section */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-emerald-600/10 px-4 py-2 rounded-full border border-emerald-600/20 mb-6">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-emerald-400">Supported Platforms</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                        Connect your social accounts
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                        One dashboard to manage all your social media presence across these platforms
                    </p>
                </div>

                {/* Main Platform Grid */}
                <div className="relative">
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-purple-500/5 rounded-3xl blur-3xl"></div>
                    
                    <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-10">
                        {[
                            {
                                name: 'X (Twitter)',
                                type: 'Posts & Threads',
                                users: '450M+ users',
                                icon: (
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                ),
                                gradientFrom: 'from-slate-800',
                                gradientTo: 'to-black',
                                accentColor: 'slate',
                                glowColor: 'slate-500'
                            },
                            {
                                name: 'Instagram',
                                type: 'Posts & Stories',
                                users: '2B+ users',
                                icon: (
                                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
                                    </svg>
                                ),
                                gradientFrom: 'from-purple-600',
                                gradientTo: 'to-pink-600',
                                accentColor: 'pink',
                                glowColor: 'purple-500'
                            },
                            {
                                name: 'LinkedIn',
                                type: 'Business Pages',
                                users: '900M+ professionals',
                                icon: (
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                ),
                                gradientFrom: 'from-blue-600',
                                gradientTo: 'to-blue-800',
                                accentColor: 'blue',
                                glowColor: 'blue-500'
                            },
                            {
                                name: 'Facebook',
                                type: 'Business Pages',
                                users: '3B+ users',
                                icon: (
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                ),
                                gradientFrom: 'from-blue-700',
                                gradientTo: 'to-indigo-800',
                                accentColor: 'indigo',
                                glowColor: 'blue-600'
                            }
                        ].map((platform, i) => (
                            <div key={i} className="group">
                                <div className={`bg-gradient-to-br ${platform.gradientFrom} ${platform.gradientTo} rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:shadow-xl`}>
                                    <div className="flex items-center justify-between mb-4">
                                        {platform.icon}
                                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
                                    <p className="text-sm text-gray-300 mb-3">{platform.type}</p>
                                    <div className="text-xs text-gray-400">{platform.users}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-zinc-500 text-sm mb-4">More platforms coming soon</p>
                    <button className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
                        <span>Connect your accounts</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Feature 1: Multi-platform publishing */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <div className="inline-flex items-center space-x-2 bg-blue-600/10 px-3 py-1 rounded-md border border-blue-600/20">
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                <span className="text-sm font-medium text-blue-400">Multi-platform</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">Publish everywhere at once</h3>
                        </div>
                        <p className="text-lg text-zinc-400 leading-relaxed">
                            Write once, publish everywhere. Connect your Instagram, Twitter, LinkedIn, and Facebook accounts to distribute content simultaneously.
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 text-zinc-300">
                                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Multiple accounts</span>
                                </div>
                                <div className="flex items-center space-x-3 text-zinc-300">
                                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">One-click publishing</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 text-zinc-300">
                                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Content formatting</span>
                                </div>
                                <div className="flex items-center space-x-3 text-zinc-300">
                                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Real-time preview</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-zinc-900 rounded-lg shadow-xl border border-zinc-700 p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-sm font-semibold text-white">Connected Accounts</h4>
                                <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">4 active</span>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { name: 'Instagram', followers: '12.4K', status: 'Connected' },
                                    { name: 'Twitter', followers: '8.2K', status: 'Connected' },
                                    { name: 'LinkedIn', followers: '3.1K', status: 'Connected' },
                                    { name: 'Facebook', followers: '15.7K', status: 'Connected' }
                                ].map((platform, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 bg-zinc-800 rounded-lg border border-zinc-700">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-white">{platform.name}</div>
                                                <div className="text-xs text-zinc-400">{platform.followers} followers</div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-green-600 font-medium">{platform.status}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature 2: Smart scheduling */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="lg:order-2 space-y-6">
                        <div className="space-y-4">
                            <div className="inline-flex items-center space-x-2 bg-purple-600/10 px-3 py-1 rounded-md border border-purple-600/20">
                                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                <span className="text-sm font-medium text-purple-400">Calendar Scheduling</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">Schedule with drag & drop</h3>
                        </div>
                        <p className="text-lg text-zinc-400 leading-relaxed">
                            Use our intuitive calendar interface to schedule posts. Simply drag and drop your content to any date and time.
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 text-zinc-300">
                                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Drag & drop interface</span>
                                </div>
                                <div className="flex items-center space-x-3 text-zinc-300">
                                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Calendar view</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 text-zinc-300">
                                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Bulk scheduling</span>
                                </div>
                                <div className="flex items-center space-x-3 text-zinc-300">
                                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Time zone support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-zinc-900 rounded-lg shadow-xl border border-zinc-700 p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-sm font-semibold text-white">Scheduled Posts</h4>
                                <span className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded">Next 24h</span>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { time: '9:00 AM', platform: 'LinkedIn', status: 'Ready', engagement: '94%' },
                                    { time: '2:30 PM', platform: 'Instagram', status: 'Scheduled', engagement: '87%' },
                                    { time: '7:15 PM', platform: 'Twitter', status: 'Queued', engagement: '91%' }
                                ].map((post, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 bg-zinc-800 rounded-lg border border-zinc-700">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-white">{post.time}</div>
                                                <div className="text-xs text-zinc-400">{post.platform} • {post.engagement} avg. reach</div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-green-600 font-medium">{post.status}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 p-3 bg-purple-900/20 rounded-lg border border-purple-700">
                                <div className="text-xs text-purple-400 font-medium mb-1">Optimization Tip</div>
                                <div className="text-sm text-white">Post 2 hours earlier on weekends for +23% engagement</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature 3: Analytics */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <div className="inline-flex items-center space-x-2 bg-emerald-600/10 px-3 py-1 rounded-md border border-emerald-600/20">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                <span className="text-sm font-medium text-emerald-400">Analytics</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">Track your performance</h3>
                        </div>
                        <p className="text-lg text-zinc-400 leading-relaxed">
                            Monitor engagement, reach, and growth across all platforms. Understand what content resonates with your audience.
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 text-zinc-300">
                                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Real-time metrics</span>
                                </div>
                                <div className="flex items-center space-x-3 text-zinc-300">
                                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Growth tracking</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 text-zinc-300">
                                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Engagement insights</span>
                                </div>
                                <div className="flex items-center space-x-3 text-zinc-300">
                                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Content performance</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-zinc-900 rounded-lg shadow-xl border border-zinc-700 p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h4 className="text-sm font-semibold text-white">Performance Overview</h4>
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {[
                                    { label: 'Engagement', value: '12.4%', change: '+2.1%' },
                                    { label: 'Reach', value: '248K', change: '+15%' },
                                    { label: 'Followers', value: '5.2K', change: '+8%' },
                                    { label: 'Clicks', value: '847', change: '+23%' }
                                ].map((metric, i) => (
                                    <div key={i} className="p-3 bg-zinc-800 rounded-lg border border-zinc-700">
                                        <div className="text-lg font-bold text-white mb-1">{metric.value}</div>
                                        <div className="text-xs text-zinc-400 mb-1">{metric.label}</div>
                                        <div className="text-xs text-green-600 font-medium">{metric.change} vs last month</div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-4 bg-emerald-900/20 rounded-lg border border-emerald-700">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="text-sm font-medium text-white">Top performing post</div>
                                    <div className="text-xs text-emerald-400 font-medium">+340% engagement</div>
                                </div>
                                <div className="text-sm text-zinc-400">"Behind the scenes of our latest project launch..."</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature 4: Recurring Posts */}
            <div className="max-w-7xl mx-auto px-6 py-16 pb-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="lg:order-2 space-y-6">
                        <div className="space-y-4">
                            <div className="inline-flex items-center space-x-2 bg-orange-600/10 px-3 py-1 rounded-md border border-orange-600/20">
                                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                <span className="text-sm font-medium text-orange-400">Coming Soon</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">Recurring posts automation</h3>
                        </div>
                        <p className="text-lg text-zinc-400 leading-relaxed">
                            Set up posts to automatically publish on a recurring schedule. Perfect for regular updates, promotions, and consistent engagement.
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 text-zinc-300">
                                    <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Daily schedules</span>
                                </div>
                                <div className="flex items-center space-x-3 text-zinc-300">
                                    <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Weekly patterns</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 text-zinc-300">
                                    <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Monthly themes</span>
                                </div>
                                <div className="flex items-center space-x-3 text-zinc-300">
                                    <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Custom intervals</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-zinc-900 rounded-lg shadow-xl border border-zinc-700 p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-sm font-semibold text-white">Recurring Schedules</h4>
                                <span className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded">Coming Soon</span>
                            </div>
                            <div className="space-y-3 mb-4">
                                {[
                                    { title: 'Weekly Tips', schedule: 'Every Monday 9 AM', next: 'Dec 23, 2024' },
                                    { title: 'Product Updates', schedule: 'Monthly, 1st day', next: 'Jan 1, 2025' },
                                    { title: 'Motivational Quote', schedule: 'Daily 8 AM', next: 'Tomorrow' }
                                ].map((post, i) => (
                                    <div key={i} className="p-3 bg-zinc-800 rounded-lg border border-zinc-700">
                                        <div className="flex items-center space-x-3 mb-2">
                                            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-sm font-medium text-white">{post.title}</div>
                                                <div className="text-xs text-zinc-400">{post.schedule}</div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-orange-400">Next: {post.next}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-3 bg-orange-900/20 rounded-lg border border-orange-700">
                                <div className="text-xs text-orange-400 font-medium mb-1">Preview Feature</div>
                                <div className="text-sm text-white">Automate your content with recurring schedules</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
