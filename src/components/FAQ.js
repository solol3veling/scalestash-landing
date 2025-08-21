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
    <section className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Common questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
              >
                <span className="text-lg font-medium text-white pr-8">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-6 h-6 transition-transform duration-300 ${openItems.has(index) ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`transition-all duration-300 overflow-hidden ${openItems.has(index) ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                <div className="px-8">
                  <div className="text-zinc-300 leading-relaxed">
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