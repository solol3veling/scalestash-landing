import React, { useState } from 'react';
import Header from './Header';

const About = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        
        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="min-h-screen bg-black">
            <Header />
            
            {/* Hero Section */}
            <section className="relative bg-black pt-32 pb-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight" style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                            letterSpacing: '-0.02em'
                        }}>
                            About 
                            <span className="block text-zinc-400">scalestash</span>
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                            We're building the future of social media management for creators, businesses, and teams worldwide.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="bg-zinc-950 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <div className="inline-flex items-center space-x-2 bg-zinc-800/50 px-3 py-1.5 rounded-full border border-zinc-700/50">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span className="text-sm font-medium text-zinc-300">Our Story</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white">Building better social media tools</h2>
                            </div>
                            <p className="text-lg text-zinc-400 leading-relaxed">
                                scalestash was founded with a simple mission: make social media management accessible, 
                                efficient, and powerful for everyone. We saw creators and businesses struggling with 
                                fragmented tools and decided to build something better.
                            </p>
                            <p className="text-lg text-zinc-400 leading-relaxed">
                                Our team combines years of experience in social media, product design, and engineering 
                                to deliver a platform that truly understands your workflow.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="bg-zinc-900/50 rounded-2xl border border-zinc-700/50 shadow-sm p-6 backdrop-blur-sm">
                                <div className="flex items-center justify-between mb-6">
                                    <h4 className="text-lg font-semibold text-white">Company Metrics</h4>
                                    <span className="text-xs text-blue-400 bg-blue-900/50 px-3 py-1.5 rounded-full border border-blue-700/50">Growing</span>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { label: 'Beta Users', value: '1.2K+', growth: 'Growing daily' },
                                        { label: 'Posts Scheduled', value: '45K+', growth: 'Since launch' },
                                        { label: 'Platforms', value: '4', growth: 'Supported' },
                                        { label: 'Uptime', value: '99.9%', growth: 'Reliability' }
                                    ].map((metric, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/50">
                                            <div>
                                                <div className="text-sm font-medium text-white">{metric.label}</div>
                                                <div className="text-xs text-zinc-400">{metric.growth}</div>
                                            </div>
                                            <div className="text-lg font-bold text-white">{metric.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-black py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-zinc-800/50 px-3 py-1.5 rounded-full border border-zinc-700/50 mb-4">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-sm font-medium text-zinc-300">Our Values</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What drives us forward</h2>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                            These core principles guide everything we build and every decision we make.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'User-Centric Design',
                                description: 'Every feature is built with user experience at the forefront. We prioritize simplicity and functionality.',
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                )
                            },
                            {
                                title: 'Innovation',
                                description: 'We constantly push boundaries to deliver cutting-edge solutions that solve real problems.',
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                )
                            },
                            {
                                title: 'Transparency',
                                description: 'Open communication and honest practices build trust with our users and community.',
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                )
                            }
                        ].map((value, i) => (
                            <div key={i} className="bg-zinc-900/50 rounded-2xl border border-zinc-700/50 p-6 hover:bg-zinc-900/80 transition-all duration-200 group backdrop-blur-sm">
                                <div className="w-12 h-12 bg-zinc-800/50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-black transition-all duration-200">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="bg-zinc-950 py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-zinc-800/50 px-3 py-1.5 rounded-full border border-zinc-700/50 mb-4">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                            <span className="text-sm font-medium text-zinc-300">Meet the Founder</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built by a solo creator</h2>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                            Scalestash is built and maintained by a passionate developer who understands the challenges of managing social media.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <div className="bg-zinc-900/50 rounded-2xl border border-zinc-700/50 shadow-sm p-8 text-center max-w-md backdrop-blur-sm">
                            <div className="w-20 h-20 bg-zinc-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-zinc-300 text-xl font-semibold">DA</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Dickson Anyaele</h3>
                            <p className="text-blue-400 font-medium mb-4">Founder & Developer</p>
                            <p className="text-zinc-400 leading-relaxed mb-6">
                                Building scalestash to solve real social media management challenges. Focused on creating simple, 
                                effective tools for creators and small businesses.
                            </p>
                            <div className="flex justify-center space-x-4">
                                <a 
                                    href="https://www.linkedin.com/in/dickson-anyaele-3375611b3/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                    <span className="text-sm">LinkedIn</span>
                                </a>
                                <a 
                                    href="mailto:dicksonanyaele1234@gmail.com"
                                    className="inline-flex items-center space-x-2 text-zinc-400 hover:text-zinc-300 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-sm">Email</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact" className="bg-black py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-zinc-800/50 px-3 py-1.5 rounded-full border border-zinc-700/50 mb-4">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <span className="text-sm font-medium text-zinc-300">Get In Touch</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact us</h2>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                            Have questions about scalestash? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <div className="bg-zinc-900/50 rounded-2xl border border-zinc-700/50 shadow-sm p-8 backdrop-blur-sm">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all rounded-lg"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all rounded-lg"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all rounded-lg"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all resize-none rounded-lg"
                                        placeholder="Tell us more about your question or feedback..."
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-zinc-200 transition-colors duration-200"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>

                            <div className="mt-8 pt-8 border-t border-zinc-700">
                                <div className="grid md:grid-cols-2 gap-6 text-center">
                                    <div>
                                        <h4 className="text-sm font-medium text-white mb-2">Email Support</h4>
                                        <p className="text-sm text-zinc-400">support@scalestash.com</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-white mb-2">Response Time</h4>
                                        <p className="text-sm text-zinc-400">Usually within 24 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;