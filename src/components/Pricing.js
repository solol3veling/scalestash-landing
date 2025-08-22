import React from 'react';

const Pricing = () => {
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

  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Simple pricing
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Start free, upgrade when ready.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-zinc-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-500 hover:bg-zinc-900/80 ${
                plan.popular
                  ? 'border-blue-500 scale-105'
                  : 'border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-zinc-400 mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span className="text-zinc-400 ml-2">/month</span>
                    )}
                  </div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-zinc-800 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-zinc-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 ${
                plan.popular 
                  ? 'bg-white text-black hover:bg-zinc-200' 
                  : 'bg-zinc-800 text-white hover:bg-zinc-700'
              }`}>
                {plan.name === 'Free' ? 'Get started free' : 'Start Pro trial'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;