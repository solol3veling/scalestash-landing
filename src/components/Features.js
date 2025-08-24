import React from 'react';

const Features = () => {
    return (
        <section id="features" className="relative bg-gray-50">
            {/* Header */}
            <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight" style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        letterSpacing: '-0.02em'
                    }}>
                        Everything you need
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Powerful tools designed for modern social media management
                    </p>
                </div>
            </div>

            {/* Core Features Section */}
            <div className="max-w-6xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-gray-200 mb-6">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-600">Core Features</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                        Built for productivity
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Everything you need to manage your social media presence effectively
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: 'Multi-Platform Publishing',
                            description: 'Schedule and publish content across Instagram, Twitter, LinkedIn, and Facebook simultaneously.',
                            icon: (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                </svg>
                            )
                        },
                        {
                            title: 'Smart Scheduling',
                            description: 'AI-powered optimal posting times based on your audience engagement patterns.',
                            icon: (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            )
                        },
                        {
                            title: 'Analytics Dashboard',
                            description: 'Comprehensive insights into your content performance and audience growth.',
                            icon: (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            )
                        },
                        {
                            title: 'Content Calendar',
                            description: 'Visual calendar view to plan and organize your content strategy effectively.',
                            icon: (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            )
                        },
                        {
                            title: 'Team Collaboration',
                            description: 'Invite team members, assign roles, and approve content before publishing.',
                            icon: (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            )
                        },
                        {
                            title: 'Content Templates',
                            description: 'Pre-built templates and design assets to create engaging content quickly.',
                            icon: (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                </svg>
                            )
                        }
                    ].map((feature, i) => (
                        <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-200 group">
                            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gray-900 group-hover:text-white transition-all duration-200">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;