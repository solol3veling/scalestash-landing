import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$9',
      period: 'month',
      yearlyPrice: '$90',
      description: 'Perfect for individual creators and small businesses',
      popular: false,
      features: [
        'Connect up to 5 social accounts',
        'Schedule up to 100 posts/month',
        'Basic analytics dashboard',
        'Content calendar',
        'Email support',
        'Mobile app access',
      ],
      buttonText: 'Start Free Trial',
      buttonStyle: 'bg-primary hover:bg-primary-700 text-white',
    },
    {
      name: 'Professional',
      price: '$29',
      period: 'month',
      yearlyPrice: '$290',
      description: 'Ideal for growing businesses and agencies',
      popular: true,
      features: [
        'Connect up to 25 social accounts',
        'Unlimited scheduled posts',
        'Advanced analytics & reporting',
        'Team collaboration (up to 5 users)',
        'AI content suggestions',
        'Priority support',
        'White-label reports',
        'Bulk upload & scheduling',
      ],
      buttonText: 'Start Free Trial',
      buttonStyle: 'bg-gradient-primary text-white hover:opacity-90',
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: 'month',
      yearlyPrice: '$990',
      description: 'For large teams and enterprises',
      popular: false,
      features: [
        'Unlimited social accounts',
        'Unlimited team members',
        'Custom analytics dashboards',
        'API access',
        'Advanced automation workflows',
        'Dedicated account manager',
        'Custom integrations',
        'SLA guarantee',
        'Phone support',
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100',
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular
                  ? 'border-primary scale-105 ring-4 ring-primary/10'
                  : 'border-slate-200 dark:border-slate-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-center">
                      <span className="text-5xl font-bold text-slate-900 dark:text-white">
                        {plan.price}
                      </span>
                      <span className="text-slate-600 dark:text-slate-400 ml-2">
                        /{plan.period}
                      </span>
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                      or {plan.yearlyPrice}/year (Save 17%)
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-slate-600 dark:text-slate-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 ${plan.buttonStyle}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional trust signals */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 bg-slate-50 dark:bg-slate-800 px-8 py-6 rounded-2xl">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-slate-600 dark:text-slate-300 font-medium">14-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-slate-600 dark:text-slate-300 font-medium">No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-slate-600 dark:text-slate-300 font-medium">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;