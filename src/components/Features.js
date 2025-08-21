import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Multi-platform management',
      description: 'Connect and manage all your social accounts from one unified dashboard.',
      icon: '🔗'
    },
    {
      title: 'Smart scheduling',
      description: 'AI-powered posting times and content calendar optimization.',
      icon: '⏰'
    },
    {
      title: 'Content creation',
      description: 'Built-in editor with templates and platform-specific previews.',
      icon: '✨'
    },
    {
      title: 'Analytics & insights',
      description: 'Comprehensive performance tracking and audience analytics.',
      icon: '📊'
    },
    {
      title: 'Team collaboration',
      description: 'Invite team members, assign roles, and maintain brand consistency.',
      icon: '👥'
    },
    {
      title: 'Smart automation',
      description: 'Auto-repost high-performing content and intelligent responses.',
      icon: '🤖'
    }
  ];

  return (
    <section id="features" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Everything you need
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Powerful tools designed for modern social media management
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-900/80 transition-all duration-500 hover:border-zinc-700"
            >
              <div className="text-3xl mb-6">{feature.icon}</div>
              
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-12 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 px-8 py-6 rounded-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-zinc-300 text-sm">14-day free trial</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-zinc-300 text-sm">No credit card required</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-zinc-300 text-sm">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
