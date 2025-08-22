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
        <div className="min-h-screen bg-black">
            <Header />
            
            {/* Hero Section */}
            <section className="relative bg-black pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                            About 
                            <span className="block text-blue-400">scalestash</span>
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                            We're building the future of social media management for creators, businesses, and teams worldwide.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="bg-black py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <div className="inline-flex items-center space-x-2 bg-blue-600/10 px-3 py-1 rounded-md border border-blue-600/20">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span className="text-sm font-medium text-blue-400">Our Story</span>
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
                            <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="text-sm font-semibold text-gray-900">Company Metrics</h4>
                                    <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">Growing</span>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { label: 'Active Users', value: '50K+', growth: '+127%' },
                                        { label: 'Posts Managed', value: '2.4M', growth: '+89%' },
                                        { label: 'Team Members', value: '25', growth: '+67%' },
                                        { label: 'Countries', value: '45', growth: '+25%' }
                                    ].map((metric, i) => (
                                        <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">{metric.label}</div>
                                                <div className="text-xs text-gray-500">{metric.growth} this year</div>
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
            <section className="bg-black py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-purple-600/10 px-3 py-1 rounded-md border border-purple-600/20 mb-4">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-sm font-medium text-purple-400">Our Values</span>
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
                                color: 'blue'
                            },
                            {
                                title: 'Innovation First',
                                description: 'We constantly push boundaries to deliver cutting-edge social media management solutions.',
                                color: 'emerald'
                            },
                            {
                                title: 'Transparency',
                                description: 'Open communication with our users and clear pricing with no hidden fees or surprises.',
                                color: 'orange'
                            }
                        ].map((value, i) => (
                            <div key={i} className="bg-white rounded-lg shadow-xl border border-gray-200 p-6">
                                <div className={`w-12 h-12 bg-${value.color}-600 rounded-lg flex items-center justify-center mb-4`}>
                                    <div className="w-6 h-6 bg-white rounded-full"></div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-black py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-emerald-600/10 px-3 py-1 rounded-md border border-emerald-600/20 mb-4">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                            <span className="text-sm font-medium text-emerald-400">Our Team</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet the people behind scalestash</h2>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                            A diverse team of creators, engineers, and designers passionate about social media.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Sarah Chen',
                                role: 'CEO & Co-founder',
                                bio: 'Former social media manager turned entrepreneur. 8 years of experience helping brands grow online.',
                                initials: 'SC'
                            },
                            {
                                name: 'Mike Rodriguez',
                                role: 'CTO & Co-founder',
                                bio: 'Full-stack engineer with expertise in scalable systems. Previously at major tech companies.',
                                initials: 'MR'
                            },
                            {
                                name: 'Emma Thompson',
                                role: 'Head of Design',
                                bio: 'UX designer passionate about creating intuitive experiences. Award-winning design background.',
                                initials: 'ET'
                            }
                        ].map((member, i) => (
                            <div key={i} className="bg-white rounded-lg shadow-xl border border-gray-200 p-6 text-center">
                                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-lg font-bold">{member.initials}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact" className="bg-black py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-orange-600/10 px-3 py-1 rounded-md border border-orange-600/20 mb-4">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <span className="text-sm font-medium text-orange-400">Get In Touch</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact us</h2>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                            Have questions about scalestash? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-8">
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
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors"
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
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors resize-none"
                                        placeholder="Tell us more about your question or feedback..."
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
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