import React from 'react';
import Trip from './Trip';
import Footer from './Footer';

const Service = () => {
  return (
    <div className="relative bg-cover bg-center h-screen bg-[url('/assets/service.avif')]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex justify-center items-center h-full">
        <div className='text-center'>
          <h1 className="text-4xl font-bold text-white">Service</h1>
        </div>
      </div>
      <Trip />
      <Footer />
    </div>
  );
};

export default Service;