import React from 'react'

const Destination = () => {
  return (
    <div className=''>
        <h1 className='text-5xl text-center font-bold leading-tight sm:mt-10 mt-12'>
          Popular Destination
        </h1>
        <p className='text-xl text-center'>Tours give you the opportunity to see a lot, within a time frame.</p>
        <div>
          <div className='sm:flex sm:flex-row-reverse grid sm:mt-12 mt-12'>
            <div className='flex sm:mr-20 mr-6 ml-6 sm:ml-16 sm:gap-6 gap-4'>
              <div className='w-1/2 sm:mt-8 mt-6'>
                <img className='rounded-lg w-full' src='/assets/1.jpg'/>
              </div>
              <div className='w-1/2'>
                <img className='rounded-lg w-full' src='/assets/2.jpg'/>
              </div>
            </div>
            <div className='sm:ml-20 sm:mr-16 ml-6 mr-6'>
              <h2 className='text-3xl font-bold sm:mt-0 mt-6'>Taal Volcano, Batangas</h2>
              <p className='sm:mt-0 mt-4'>
              One of the most iconic views in Luzon, Mt. Taal boosts a volcano inside a lake inside on island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!
              </p>
            </div>
          </div>
          <div className='sm:flex grid sm:mt-12 mt-12 sm:ml-16'>
            <div className='flex sm:mr-20 mr-6 ml-6 sm:gap-6 gap-4'>
              <div className='w-1/2 sm:mt-8 mt-6'>
                <img className='rounded-lg w-full' src='/assets/5.jpg'/>
              </div>
              <div className='w-1/2'>
                <img className='rounded-lg w-full' src='/assets/2.jpg'/>
              </div>
            </div>
            <div className='sm:ml-20 sm:mr-20 ml-6 mr-6'>
              <h2 className='text-3xl font-bold sm:mt-0 mt-6'>Taal Volcano, Batangas</h2>
              <p className='sm:mt-0 mt-4'>
              One of the most iconic views in Luzon, Mt. Taal boosts a volcano inside a lake inside on island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Destination