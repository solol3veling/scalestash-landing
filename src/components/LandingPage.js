import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;
