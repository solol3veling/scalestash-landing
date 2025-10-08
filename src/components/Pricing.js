import React, { useEffect, useRef, useState } from 'react';

const Pricing = () => {
  const [visibleCards, setVisibleCards] = useState(new Set([0, 1])); // Start with cards visible
  const observerRef = useRef(null);

  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for getting started',
      features: [
        '2 social accounts',
        '10 posts/month',
        'Basic scheduling',
        'Content calendar',
        'Email support'
      ]
    },
    {
      name: 'Pro',
      price: '$19',
      description: 'For serious content creators',
      popular: true,
      features: [
        'Unlimited social accounts',
        'Unlimited posts',
        'Advanced analytics',
        'Calendar drag & drop',
        'Bulk scheduling',
        'Priority support'
      ]
    }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, index]));
          } else {
            setVisibleCards((prev) => {
              const newSet = new Set(prev);
              newSet.delete(index);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = document.querySelectorAll('[data-pricing-card]');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section id="pricing" className="py-32 bg-zinc-950 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black opacity-50"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight" style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            letterSpacing: '-0.02em'
          }}>
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Start free and scale with your growth. No hidden fees or surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const isVisible = visibleCards.has(index);
            return (
              <div
                key={index}
                data-pricing-card
                data-index={index}
                className={`relative bg-zinc-900/50 border rounded-3xl p-10 backdrop-blur-sm transition-all duration-1000 ${
                  plan.popular
                    ? 'border-white/30'
                    : 'border-zinc-700/50'
                } ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most popular
                    </span>
                  </div>
                )}

                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-white mb-3" style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    letterSpacing: '-0.02em'
                  }}>
                    {plan.name}
                  </h3>
                  <p className="text-zinc-400 text-base mb-8">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-white" style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      letterSpacing: '-0.02em'
                    }}>
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span className="text-zinc-400 ml-2 text-lg">/month</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-5 mb-10">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5 bg-white/10 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-zinc-300 text-base leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a href="https://app.scalestash.com" className="block">
                  <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-white text-black hover:bg-zinc-200'
                      : 'bg-zinc-800/50 text-white hover:bg-zinc-700/50 border border-zinc-700/50'
                  }`}>
                    {plan.name === 'Free' ? 'Get started free' : 'Start Pro trial'}
                  </button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;