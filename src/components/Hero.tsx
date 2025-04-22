import React from 'react';

const Hero = () => {
  return (
    <div className="relative pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover"
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2187&q=80"
          alt="Beauty products"
        />
        <div className="absolute inset-0 bg-gray-900/30 mix-blend-multiply" />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Discover Your Perfect Beauty</h1>
        <p className="mt-6 max-w-3xl text-xl text-white">Explore our curated collection of premium beauty products for your daily routine.</p>
        <div className="mt-10">
          <a href="#" className="inline-block bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;