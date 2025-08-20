import React, { useState } from 'react';

const Waitlist = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log(`Email submitted: ${email}`);
    setEmail('');
  };

  return (
    <section id="waitlist" className="py-20 bg-primary-light">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-text-primary-light">Join the Waitlist for Early Access</h2>
        <p className="text-lg text-text-secondary-light mt-4">Be among the first to experience the future of social media management. Get exclusive early access and special pricing.</p>
        <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-border-light focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button type="submit" className="bg-primary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary-hover">Join Waitlist</button>
          </div>
          <p className="text-sm text-text-secondary-light mt-4">Join 2,500+ others on the waitlist</p>
        </form>
      </div>
    </section>
  );
};

export default Waitlist;