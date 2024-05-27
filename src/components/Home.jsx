// src/components/Home.js
import React from 'react';
import Footer from './Footer';
import Destination from './Destination';
import Trip from './Trip';

const Home = () => {
  return (
    <div className="relative bg-cover bg-center h-screen bg-[url('/assets/12.jpg')]" >
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      <div className="relative z-10 flex justify-center items-center h-full mt">
        <div className="text-center ml-2 mr-2 sm:mt-20 mt-12">
          <h1 className="text-5xl font-bold leading-tight text-white">Your Journey Your Story</h1>
          <p className="text-white mt-4">Choose Your Favourite Destination.</p>
          <button className="mt-8 px-4 py-2 bg-white hover:bg-green-500 hover:text-white hover:font-bold text-black font-semibold rounded-md">Travel Plan</button>
        </div>
      </div>

      <Destination />
      <Trip />

      {/* footer */}
      <Footer />
    </div>

    
  );
};

export default Home;
