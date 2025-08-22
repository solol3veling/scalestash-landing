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
                                    <span className="text-sm">Unlimited accounts</span>
                                </div>
                                <div className="flex items-center space-x-3 text-zinc-300">
                                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Bulk scheduling</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 text-zinc-300">
                                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Auto-formatting</span>
                                </div>
                                <div className="flex items-center space-x-3 text-zinc-300">
                                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Content preview</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-sm font-semibold text-gray-900">Connected Accounts</h4>
                                <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">4 active</span>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { name: 'Instagram', followers: '12.4K', status: 'Connected' },
                                    { name: 'Twitter', followers: '8.2K', status: 'Connected' },
                                    { name: 'LinkedIn', followers: '3.1K', status: 'Connected' },
                                    { name: 'Facebook', followers: '15.7K', status: 'Connected' }
                                ].map((platform, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">{platform.name}</div>
                                                <div className="text-xs text-gray-500">{platform.followers} followers</div>
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
                                <span className="text-sm font-medium text-purple-400">Smart Scheduling</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">Optimize your posting schedule</h3>
                        </div>
                        <p className="text-lg text-zinc-400 leading-relaxed">
                            Schedule posts for when your audience is most active. Our analytics identify peak engagement times for each platform.
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 text-zinc-300">
                                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Queue management</span>
                                </div>
                                <div className="flex items-center space-x-3 text-zinc-300">
                                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Time zone optimization</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 text-zinc-300">
                                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Optimal timing</span>
                                </div>
                                <div className="flex items-center space-x-3 text-zinc-300">
                                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Engagement tracking</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-sm font-semibold text-gray-900">Scheduled Posts</h4>
                                <span className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded">Next 24h</span>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { time: '9:00 AM', platform: 'LinkedIn', status: 'Ready', engagement: '94%' },
                                    { time: '2:30 PM', platform: 'Instagram', status: 'Scheduled', engagement: '87%' },
                                    { time: '7:15 PM', platform: 'Twitter', status: 'Queued', engagement: '91%' }
                                ].map((post, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">{post.time}</div>
                                                <div className="text-xs text-gray-500">{post.platform} • {post.engagement} avg. reach</div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-green-600 font-medium">{post.status}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-100">
                                <div className="text-xs text-purple-600 font-medium mb-1">Optimization Tip</div>
                                <div className="text-sm text-gray-900">Post 2 hours earlier on weekends for +23% engagement</div>
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
                        <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h4 className="text-sm font-semibold text-gray-900">Performance Overview</h4>
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {[
                                    { label: 'Engagement', value: '12.4%', change: '+2.1%' },
                                    { label: 'Reach', value: '248K', change: '+15%' },
                                    { label: 'Followers', value: '5.2K', change: '+8%' },
                                    { label: 'Clicks', value: '847', change: '+23%' }
                                ].map((metric, i) => (
                                    <div key={i} className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                                        <div className="text-lg font-bold text-gray-900 mb-1">{metric.value}</div>
                                        <div className="text-xs text-gray-500 mb-1">{metric.label}</div>
                                        <div className="text-xs text-green-600 font-medium">{metric.change} vs last month</div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="text-sm font-medium text-gray-900">Top performing post</div>
                                    <div className="text-xs text-emerald-600 font-medium">+340% engagement</div>
                                </div>
                                <div className="text-sm text-gray-600">"Behind the scenes of our latest project launch..."</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature 4: Team collaboration */}
            <div className="max-w-7xl mx-auto px-6 py-16 pb-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="lg:order-2 space-y-6">
                        <div className="space-y-4">
                            <div className="inline-flex items-center space-x-2 bg-orange-600/10 px-3 py-1 rounded-md border border-orange-600/20">
                                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                <span className="text-sm font-medium text-orange-400">Team Tools</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">Collaborate with your team</h3>
                        </div>
                        <p className="text-lg text-zinc-400 leading-relaxed">
                            Invite team members, set permissions, and maintain consistent branding across all your social media accounts.
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 text-zinc-300">
                                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Role permissions</span>
                                </div>
                                <div className="flex items-center space-x-3 text-zinc-300">
                                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Content approval</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 text-zinc-300">
                                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Activity tracking</span>
                                </div>
                                <div className="flex items-center space-x-3 text-zinc-300">
                                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Brand guidelines</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-sm font-semibold text-gray-900">Team Members</h4>
                                <span className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded">2 pending</span>
                            </div>
                            <div className="space-y-3 mb-4">
                                {[
                                    { name: 'Sarah Chen', role: 'Content Manager', status: 'Online' },
                                    { name: 'Mike Johnson', role: 'Designer', status: 'Away' },
                                    { name: 'Emma Davis', role: 'Social Media', status: 'Online' }
                                ].map((member, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                                                <span className="text-white text-sm font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">{member.name}</div>
                                                <div className="text-xs text-gray-500">{member.role}</div>
                                            </div>
                                        </div>
                                        <div className={`w-2 h-2 rounded-full ${member.status === 'Online' ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                                <div className="text-xs text-orange-600 font-medium mb-1">Pending Review</div>
                                <div className="text-sm text-gray-900">"Product launch campaign" awaits approval</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
