import React, { useState } from 'react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqs = [
    {
      question: "Which social media platforms do you support?",
      answer: "We support all major platforms including Facebook, Instagram, Twitter, LinkedIn, TikTok, YouTube, Pinterest, and more. We're constantly adding new platforms based on user demand."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! All plans come with a 14-day free trial. No credit card required to start. You can explore all features and see how Scale-App fits your workflow."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely. You can cancel your subscription at any time with no cancellation fees. Your account will remain active until the end of your billing period."
    },
    {
      question: "Do you offer custom integrations?",
      answer: "Yes, our Enterprise plan includes custom integrations. We can connect Scale-App to your existing tools and workflows. Contact our sales team to discuss your specific needs."
    },
    {
      question: "Is my data secure?",
      answer: "Security is our top priority. We use enterprise-grade encryption, SOC 2 compliance, and never store your social media passwords. All data is encrypted in transit and at rest."
    },
    {
      question: "Can I manage multiple brands or clients?",
      answer: "Yes! Our Professional and Enterprise plans support multiple workspaces, making it easy to manage different brands or client accounts separately with proper access controls."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Everything you need to know about Scale-App
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              >
                <span className="text-lg font-semibold text-slate-900 dark:text-white pr-8">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-6 h-6 transition-transform duration-300 ${openItems.has(index) ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-slate-500 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`transition-all duration-300 overflow-hidden ${openItems.has(index) ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                <div className="px-6">
                  <div className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Still have questions?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our team is here to help. Get in touch and we'll answer any questions you have about Scale-App.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                Contact Support
              </button>
              <button className="border-2 border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;