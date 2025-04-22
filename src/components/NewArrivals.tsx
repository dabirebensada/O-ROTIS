import React from 'react';

const NewArrivals = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="New collection"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="mt-10 lg:mt-0 lg:pl-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">New Arrivals</h2>
          <p className="text-lg text-gray-600 mb-6">
            Discover our latest collection of premium beauty products, carefully selected to enhance your natural beauty.
          </p>
          <a
            href="#"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            View Collection
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;