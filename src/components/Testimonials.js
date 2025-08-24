import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "scalestash completely transformed our social strategy. 300% growth in 6 months.",
      author: "Sarah Chen",
      title: "Head of Growth",
      company: "Vertex",
      avatar: "SC"
    },
    {
      quote: "Finally, analytics that actually make sense. Game-changing insights.",
      author: "Marcus Rivera",
      title: "Creator",
      followers: "2.1M",
      avatar: "MR"
    },
    {
      quote: "Managing 50+ accounts has never been easier. Our team loves it.",
      author: "Emma Thompson",
      title: "Agency Founder",
      company: "Scale Digital",
      avatar: "ET"
    }
  ];

  const stats = [
    { number: "12K+", label: "creators" },
    { number: "50M+", label: "posts scheduled" },
    { number: "99.9%", label: "uptime" },
    { number: "24/7", label: "support" }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-gray-200 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-600">Social Proof</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight" style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            letterSpacing: '-0.02em'
          }}>
            Loved by creators worldwide
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-200"
            >
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-medium text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.title}
                    {testimonial.company && ` at ${testimonial.company}`}
                    {testimonial.followers && ` • ${testimonial.followers} followers`}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;