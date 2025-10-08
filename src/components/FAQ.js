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
      answer: "We currently support Facebook, Instagram, LinkedIn, and Twitter. More platforms are being added regularly based on user demand."
    },
    {
      question: "What's included in the free trial?",
      answer: "The free trial allows you to connect up to 3 social accounts and create a maximum of 15 posts. However, scheduling posts and viewing analytics are not available in the free trial. Upgrade to Pro to unlock all features."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. You can cancel your subscription at any time with one click. No questions asked, no cancellation fees."
    },
    {
      question: "Do you offer custom integrations?",
      answer: "Custom integrations are not currently available. We're focused on perfecting our core platform integrations (Facebook, Instagram, LinkedIn, Twitter) to provide the best experience possible."
    },
    {
      question: "How secure is my data?",
      answer: "We use industry-standard encryption for both data at rest in our database and data in transit. Your information is protected with the same security standards used by leading tech companies."
    },
    {
      question: "Can I manage multiple brands?",
      answer: "Multiple brand management is not currently available. Each account is designed to manage a single brand's social media presence. This feature is on our roadmap for future releases."
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight" style={{
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
              className="bg-zinc-900/50 border border-zinc-700/50 rounded-2xl overflow-hidden hover:bg-zinc-900/80 transition-all duration-200 backdrop-blur-sm"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none hover:bg-zinc-800/50 transition-colors duration-200"
              >
                <span className="text-base font-medium text-white pr-8">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-5 h-5 transition-transform duration-200 ${openItems.has(index) ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`transition-all duration-200 overflow-hidden ${openItems.has(index) ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                <div className="px-6">
                  <div className="text-zinc-400 leading-relaxed">
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