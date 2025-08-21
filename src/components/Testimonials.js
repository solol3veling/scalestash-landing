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
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Loved by creators
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-900/80 transition-all duration-500"
            >
              <div className="mb-8">
                <p className="text-zinc-100 text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-medium text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-zinc-400 text-sm">
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
        <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-zinc-400">
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