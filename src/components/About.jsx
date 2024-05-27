import React from 'react';
import Footer from './Footer';

const About = () => {
  return (
    <div className="relative bg-cover bg-center h-screen bg-[url('/assets/night.jpg')]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex justify-center items-center h-full">
        <div className='text-center'>
          <h1 className="text-4xl font-bold text-white">About</h1>
        </div>
      </div>
      <div className='max-w-full ml-8 mr-8 sm:ml-28 sm:mr-28 mb-12'>
        <div className='mt-12'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-4'>Our History</h1>
          <p className='sm:text-lg'>Trippy is owned and managed by Trippy.In Pvt. Ltd., a leading brand in web designing services and e-commerce solutions. Trippy.In Pvt. Ltd. is counted for its expertise in web solutions and its top ranking business portals. Our invincible expertise and rich experience has raised our spirit to reach ahead from our client's expectation. Commendable success rate of other portals managed by Trippy is a live paradigm of our work excellence.</p>
        </div>
        <div className='mt-12'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-4'>Our Mission</h1>
          <p className='sm:text-lg'>Our Mission is to touch the horizon where our capabilities may successfully meet with the requirements of our clients, that too with ultimate transparency and cost-effectiveness.</p>
        </div>
        <div className='mt-12'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-4'>Our Vision</h1>
          <p className='sm:text-lg'>To show the seeds of par-excellence services with customer centric approach and reap the trust of worldwide clients.</p>
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default About;