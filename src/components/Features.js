import React, { useEffect, useRef, useState } from 'react';

const Features = () => {
    const [visibleItems, setVisibleItems] = useState(new Set());
    const observerRef = useRef(null);

    const features = [
        {
            title: 'Multi-Platform Publishing',
            description: 'Schedule and publish content across Instagram, Twitter, LinkedIn, and Facebook simultaneously. Reach your entire audience from one powerful dashboard.',
            image: '/assets/make_post_quarter.png',
            imagePosition: 'left'
        },
        {
            title: 'Smart Scheduling',
            description: 'AI-powered optimal posting times based on your audience engagement patterns. Let our intelligent system determine the best times to post for maximum impact.',
            image: '/assets/schedule_half.png',
            imagePosition: 'right'
        },
        {
            title: 'Analytics Dashboard',
            description: 'Comprehensive insights into your content performance and audience growth. Track engagement, reach, and conversions with detailed analytics.',
            image: '/assets/analytic_half.png',
            imagePosition: 'left'
        },
        {
            title: 'Content Calendar',
            description: 'Visual calendar view to plan and organize your content strategy effectively. See your entire content pipeline at a glance and never miss a posting opportunity.',
            image: '/assets/calender_half.png',
            imagePosition: 'right'
        }
    ];

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = parseInt(entry.target.dataset.index);
                    if (entry.isIntersecting) {
                        setVisibleItems((prev) => new Set([...prev, index]));
                    } else {
                        setVisibleItems((prev) => {
                            const newSet = new Set(prev);
                            newSet.delete(index);
                            return newSet;
                        });
                    }
                });
            },
            { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
        );

        const elements = document.querySelectorAll('[data-feature-item]');
        elements.forEach((el) => observerRef.current?.observe(el));

        return () => observerRef.current?.disconnect();
    }, []);

    return (
        <section id="features" className="relative bg-zinc-950 py-24">
            {/* Header */}
            <div className="max-w-6xl mx-auto px-6 mb-20">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight" style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        letterSpacing: '-0.02em'
                    }}>
                        Everything you need
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        Powerful tools designed for modern social media management
                    </p>
                </div>
            </div>

            {/* Features List */}
            <div className="max-w-6xl mx-auto px-6 space-y-32">
                {features.map((feature, index) => {
                    const isVisible = visibleItems.has(index);
                    return (
                        <div
                            key={index}
                            data-feature-item
                            data-index={index}
                            className={`flex flex-col ${
                                feature.imagePosition === 'left'
                                    ? 'md:flex-row'
                                    : 'md:flex-row-reverse'
                            } items-center gap-12 md:gap-16 transition-all duration-1000 ${
                                isVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-12'
                            }`}
                        >
                            {/* Image */}
                            <div
                                className={`w-full md:w-1/2 transition-all duration-1000 delay-200 ${
                                    isVisible
                                        ? 'opacity-100 translate-x-0'
                                        : feature.imagePosition === 'left'
                                        ? 'opacity-0 -translate-x-12'
                                        : 'opacity-0 translate-x-12'
                                }`}
                            >
                                <div className="relative rounded-2xl overflow-hidden border border-zinc-700/50 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)]">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-auto"
                                    />
                                    {/* Subtle overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                                </div>
                            </div>

                            {/* Content */}
                            <div
                                className={`w-full md:w-1/2 transition-all duration-1000 delay-300 ${
                                    isVisible
                                        ? 'opacity-100 translate-x-0'
                                        : feature.imagePosition === 'left'
                                        ? 'opacity-0 translate-x-12'
                                        : 'opacity-0 -translate-x-12'
                                }`}
                            >
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight" style={{
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                    letterSpacing: '-0.02em'
                                }}>
                                    {feature.title}
                                </h3>
                                <p className="text-lg text-zinc-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Features;