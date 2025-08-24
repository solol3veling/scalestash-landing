import React, { useState } from 'react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0]));

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
      question: "Which platforms do you support?",
      answer: "Instagram, Twitter, LinkedIn, Facebook, TikTok, YouTube, and Pinterest. More platforms added regularly."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, 14 days completely free. No credit card required."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. Cancel with one click, no questions asked."
    },
    {
      question: "Do you offer custom integrations?",
      answer: "Enterprise plans include custom API integrations with your existing tools and workflows."
    },
    {
      question: "How secure is my data?",
      answer: "Bank-level encryption, SOC 2 certified, and we never store your social passwords."
    },
    {
      question: "Can I manage multiple brands?",
      answer: "Yes, Pro and Enterprise plans support unlimited brand accounts with separate access controls."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full border border-gray-200 mb-6">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-600">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight" style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            letterSpacing: '-0.02em'
          }}>
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-sm transition-all duration-200"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-base font-medium text-gray-900 pr-8">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-5 h-5 transition-transform duration-200 ${openItems.has(index) ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`transition-all duration-200 overflow-hidden ${openItems.has(index) ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                <div className="px-6">
                  <div className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;