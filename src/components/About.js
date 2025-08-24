import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

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
        <div className="min-h-screen bg-white">
            <Header />
            
            {/* Hero Section */}
            <section className="relative bg-white pt-32 pb-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight" style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                            letterSpacing: '-0.02em'
                        }}>
                            About 
                            <span className="block text-gray-600">scalestash</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            We're building the future of social media management for creators, businesses, and teams worldwide.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <div className="inline-flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full border border-gray-200">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-600">Our Story</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Building better social media tools</h2>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                scalestash was founded with a simple mission: make social media management accessible, 
                                efficient, and powerful for everyone. We saw creators and businesses struggling with 
                                fragmented tools and decided to build something better.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our team combines years of experience in social media, product design, and engineering 
                                to deliver a platform that truly understands your workflow.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h4 className="text-lg font-semibold text-gray-900">Company Metrics</h4>
                                    <span className="text-xs text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">Growing</span>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { label: 'Beta Users', value: '1.2K+', growth: 'Growing daily' },
                                        { label: 'Posts Scheduled', value: '45K+', growth: 'Since launch' },
                                        { label: 'Platforms', value: '4', growth: 'Supported' },
                                        { label: 'Uptime', value: '99.9%', growth: 'Reliability' }
                                    ].map((metric, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">{metric.label}</div>
                                                <div className="text-xs text-gray-500">{metric.growth}</div>
                                            </div>
                                            <div className="text-lg font-bold text-gray-900">{metric.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-gray-100 px-3 py-1.5 rounded-full border border-gray-200 mb-4">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span className="text-sm font-medium text-gray-600">Our Values</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What drives us forward</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            These core principles guide everything we build and every decision we make.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'User-Centric Design',
                                description: 'Every feature is built with user experience at the forefront. We prioritize simplicity and functionality.',
                                icon: (
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                ),
                                gradientFrom: 'from-blue-600',
                                gradientTo: 'to-blue-800',
                                accentColor: 'blue',
                                glowColor: 'blue-500'
                            },
                            {
                                title: 'Innovation First',
                                description: 'We constantly push boundaries to deliver cutting-edge social media management solutions.',
                                icon: (
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                ),
                                gradientFrom: 'from-emerald-600',
                                gradientTo: 'to-teal-700',
                                accentColor: 'emerald',
                                glowColor: 'emerald-500'
                            },
                            {
                                title: 'Transparency',
                                description: 'Open communication with our users and clear pricing with no hidden fees or surprises.',
                                icon: (
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                ),
                                gradientFrom: 'from-orange-600',
                                gradientTo: 'to-red-700',
                                accentColor: 'orange',
                                glowColor: 'orange-500'
                            }
                        ].map((value, i) => (
                            <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-200 group">
                                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gray-900 group-hover:text-white transition-all duration-200">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full border border-gray-200 mb-4">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                            <span className="text-sm font-medium text-gray-600">Meet the Founder</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built by a solo creator</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Scalestash is built and maintained by a passionate developer who understands the challenges of managing social media.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 text-center max-w-md">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-gray-600 text-xl font-semibold">DA</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Dickson Anyaele</h3>
                            <p className="text-blue-600 font-medium mb-4">Founder & Developer</p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Building scalestash to solve real social media management challenges. Focused on creating simple, 
                                effective tools for creators and small businesses.
                            </p>
                            <div className="flex justify-center space-x-4">
                                <a 
                                    href="https://www.linkedin.com/in/dickson-anyaele-3375611b3/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                    <span className="text-sm">LinkedIn</span>
                                </a>
                                <a 
                                    href="mailto:dicksonanyaele1234@gmail.com"
                                    className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-700 transition-colors"
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
            <section id="contact" className="bg-gray-50 py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full border border-gray-200 mb-4">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <span className="text-sm font-medium text-gray-600">Get In Touch</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact us</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Have questions about scalestash? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-colors placeholder-gray-500"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-colors placeholder-gray-500"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-colors placeholder-gray-500"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-colors resize-none placeholder-gray-500"
                                        placeholder="Tell us more about your question or feedback..."
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>

                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <div className="grid md:grid-cols-2 gap-6 text-center">
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-900 mb-2">Email Support</h4>
                                        <p className="text-sm text-gray-600">support@scalestash.com</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-900 mb-2">Response Time</h4>
                                        <p className="text-sm text-gray-600">Usually within 24 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;