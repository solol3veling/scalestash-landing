import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "ScaleStash transformed how we manage our social media. We've seen 300% growth in engagement across all platforms since switching.",
      author: "Sarah Johnson",
      title: "Marketing Director at TechFlow",
      avatar: "SJ",
      company: "TechFlow",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      quote: "The analytics insights are incredible. I finally understand what content works and when to post for maximum reach.",
      author: "Mike Chen",
      title: "Content Creator & Influencer",
      avatar: "MC",
      stats: "2.1M followers",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      quote: "As an agency, ScaleStash helps us manage 50+ client accounts effortlessly. The team features are a game-changer.",
      author: "Lisa Rodriguez",
      title: "Founder of Social Growth Agency",
      avatar: "LR",
      company: "Social Growth Agency",
      gradient: "from-green-500 to-teal-500",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Active Users" },
    { number: "50M+", label: "Posts Scheduled" },
    { number: "500+", label: "Businesses Scaled" },
    { number: "99.9%", label: "Uptime" },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Trusted by 10,000+ Content Creators Worldwide
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-700"
            >
              {/* Quote */}
              <div className="mb-6">
                <svg className="w-8 h-8 text-slate-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-semibold`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 text-sm">
                    {testimonial.title}
                  </div>
                  {testimonial.company && (
                    <div className="text-primary text-sm font-medium">
                      {testimonial.company}
                    </div>
                  )}
                  {testimonial.stats && (
                    <div className="text-slate-500 dark:text-slate-400 text-sm">
                      {testimonial.stats}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Trusted by leading brands and creators
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Mock company logos */}
            <div className="bg-slate-200 dark:bg-slate-700 px-6 py-3 rounded-lg">
              <span className="text-slate-600 dark:text-slate-400 font-semibold">TechFlow</span>
            </div>
            <div className="bg-slate-200 dark:bg-slate-700 px-6 py-3 rounded-lg">
              <span className="text-slate-600 dark:text-slate-400 font-semibold">CreativeAgency</span>
            </div>
            <div className="bg-slate-200 dark:bg-slate-700 px-6 py-3 rounded-lg">
              <span className="text-slate-600 dark:text-slate-400 font-semibold">DigitalCorp</span>
            </div>
            <div className="bg-slate-200 dark:bg-slate-700 px-6 py-3 rounded-lg">
              <span className="text-slate-600 dark:text-slate-400 font-semibold">StartupLab</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;