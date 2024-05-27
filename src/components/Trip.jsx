import React from 'react'

const Trip = () => {
  return (
    <div className='mt-12 sm:ml-14 sm:mr-14'>
        <h3 className='text-2xl font-extrabold text-center'>Recent Trips</h3>
        <p className='text-center
        ml-10 mr-10'>You can discover unique destinations using Google Maps.</p>
        <div className='sm:flex grid mt-8 p-6 gap-6 '>
          <div className='px-4 py-4 bg-white pb-0 bg-opacity-50 rounded-lg border border-gray-200 shadow-lg'>
            <img className='rounded-lg h-1/2 w-full' src='/assets/9.jpg' />
            <h2 className='mt-4 text-xl font-bold'>Trip in Indonesia</h2>
            <p>Indonesia, officially the Republic of Indonesia, is a country in southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea.</p>
          </div>
          <div className='px-4 py-4 bg-white pb-0 bg-opacity-50 rounded-lg border border-gray-200 shadow-lg'>
            <img className='rounded-lg h-1/2 w-full' src='/assets/9.jpg' />
            <h2 className='mt-4 text-xl font-bold'>Trip in Indonesia</h2>
            <p>Indonesia, officially the Republic of Indonesia, is a country in southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea.</p>
          </div>
          <div className='px-4 py-4 bg-white pb-0 bg-opacity-50 rounded-lg border border-gray-200 shadow-lg'>
            <img className='rounded-lg h-1/2 w-full' src='/assets/9.jpg' />
            <h2 className='mt-4 text-xl font-bold'>Trip in Indonesia</h2>
            <p>Indonesia, officially the Republic of Indonesia, is a country in southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea.</p>
          </div>
        </div>
      </div>
  )
}

export default Trip