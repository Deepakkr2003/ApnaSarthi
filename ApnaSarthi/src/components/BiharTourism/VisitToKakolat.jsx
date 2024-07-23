/* eslint-disable no-unused-vars */
import React from 'react'
import k1 from '../../assets/k1.jpeg';
import k2 from '../../assets/k2.jpeg';

function VisitToKakolat() {
  return (
    
       <div>
        <h1 className='lg:text-5xl text-3xl font-semibold text-center mt-4 text-gray-600'>Place To Visit In Kakolat</h1>
      <div className='mt-8 mx-4 lg:mx-8 border-4 border-blue-600 shadow-lg lg:p-4 p-1 rounded-lg lg:w-[1200px] xl:w-[1450px]'>
        
        <p className='mt-4 px-8 text-gray-500 font-medium'>Kakolat is a stunning destination located on the border of Bihar and Jharkhand, attracting numerous visitors from across India and beyond. Known for its breathtaking 160-foot waterfall, Kakolat offers a variety of tourist attractions, including Sitamarhi, Sekho Devra Ashram.. Visitors can engage in sightseeing at famous temples, enjoy the majestic waterfalls, and immerse themselves in the beautiful surroundings. The best time to visit Kakolat is from October to March. Accessible by road, rail, and air, Kakolat is a perfect getaway for nature lovers and adventure seekers alike.</p>
      </div>

      <div className='flex flex-col lg:flex-row justify-evenly mt-8'>
        <div className='border-4 border-blue-600 shadow-lg mx-4 lg:mx-0 lg:px-12  px-2 py-4 rounded-lg'>
            <img src={k2} alt="" className='lg:w-[520px] w-full  h-[520px] rounded-xl'/>
            <h1 className='text-4xl font-semibold text-gray-600 mt-4 underline'>Kakolat Waterfall</h1>
            <p className='lg:w-[520px] mt-2 text-gray-500 font-medium'>Kakolat Waterfall, located in Kakolat, Bihar, is a breathtaking natural attraction that cascades down from a height of nearly 160 feet. Nestled between the borders of Bihar and Jharkhand, this stunning waterfall is surrounded by lush greenery and offers a serene environment for visitors. It is a popular spot for tourists, especially during the monsoon season when the water flow is at its peak. The area around the waterfall provides opportunities for sightseeing, making it a must-visit destination for nature lovers and adventure seekers.</p>
        </div>
      </div>
      
    </div>
  )
}

export default VisitToKakolat
