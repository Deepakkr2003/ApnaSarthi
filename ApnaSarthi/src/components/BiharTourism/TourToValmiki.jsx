/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx'
import v1 from '../../assets/v1.jpeg';
import v2 from '../../assets/v2.jpeg';
import v3 from '../../assets/v3.jpeg';
import v4 from '../../assets/v4.jpeg';
import v5 from '../../assets/v5.jpeg';
import v6 from '../../assets/v6.jpeg';
import v7 from '../../assets/v7.jpeg';




function TourToValmiki() {

    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };
    
    const slides=[
        {
        url:v1,
        alt: 'image1',
        },
        {
        url:v2,
        alt: 'image1',
        },
        {
        url:v3,
        alt: 'image1',
        },
        {
        url:v4,
        alt: 'image1',
        },
        {
        url:v5,
        alt: 'image1',
        },
        {
        url:v6,
        alt: 'image1',
        },
        {
        url:v7,
        alt: 'image1',
        },
       
    ]

    const [currentIndex,setCurrentIndex]=useState(0);

    const prevSlide=()=>{
        const isFirstSlide = currentIndex===0;
        const newIndex = isFirstSlide?slides.length-1:currentIndex-1;
        setCurrentIndex(newIndex);
    }
    const nextSlide=()=>{
        const isLastSlide = currentIndex===slides.length-1;
        const newIndex = isLastSlide?0:currentIndex+1;
        setCurrentIndex(newIndex);
    }

    const gotToSlide=(slideIndex)=>{
        setCurrentIndex(slideIndex);
    }





  return (
    <div>
        <div className='bg-blue-600 mt-8 rounded-2xl md:mx-8 mx-2 '>
          <h1 className='text-white text-3xl md:text-5xl font-semibold text-center underline'>Tour Of ValmikiNagar</h1>


        <div className='flex flex-col md:flex-row'>
          
          <div className=' h-[585px] md:w-1/2  py-8 px-4 relative group '>
            <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500 '></div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
              <BsChevronCompactLeft onClick={prevSlide} size={30}/>
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
              <BsChevronCompactRight onClick={nextSlide} size={30}/>
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide,slideIndex)=>(
                  <div
                  key={slideIndex}
                  onClick={()=>gotToSlide(slideIndex)}
                  className='text-2xl cursor-pointer'>
                    <RxDotFilled/>
                  </div>
                ))}
            </div>
          </div>

          <div className='mt-8 w-full md:w-1/2 md:pl-8 px-2 mb-4'>
                <h1 className='text-4xl text-white font-semibold '>Place to Visit</h1>
                <div className='flex flex-col md:flex-row md:space-x-8 mt-4'>
                  <ul className="list-disc pl-5 text-white text-xl font-medium">
                    <li>Jata Shankar Temple</li>
                    <li>Nardevi Temple</li>
                    <li>Laxman Jhula</li>
                    <li>Shish Mahal</li>
                    <li>Eco Park</li>
                    
                  </ul>
                  <ul className="list-disc pl-5  text-white text-xl font-medium">
                    <li>Lav-Kush Janam Place</li>
                    <li>Valmiki Asharam</li>
                    <li>Jangal Safari</li>
                    <li>Triveni Ghat</li>
                    
                  </ul>
                </div>

                <div className=' mt-8 w-full md:w-5/6 rounded-2xl h-32 bg-white'>
                    <h1 className='text-center text-xl font-medium underline'>Booking Details</h1>
                    <div className='flex justify-around pt-4'>
                      <div>
                        <h1 className='font-bold'>Staying Facilities</h1>
                        <ul className='list-disc pl-5'>
                          <li>2 Day</li>
                          <li>1 Night</li>
                        </ul>
                      </div>
                      <div>
                        <h1 className='font-bold'>Price</h1>
                        <h1 className='text-4xl font-semibold'>&#8377;3499</h1>
                      </div>
                    </div>
                </div>


                <div className=' mt-8 w-full md:w-5/6 rounded-2xl h-32 bg-white'>
                    <h1 className='text-center text-xl font-medium underline'>Contact Us</h1>
                    <div className='flex justify-around pt-4'>
                      <div>
                        <h1 className='font-bold'>Call Us</h1>
                        <div className='flex pt-2'>
                          <IoCall size={20} className='text-blue-500'/>
                          <h1 className='pl-1'>+91 9999999999</h1>
                        </div>
                      </div>
                      <div>
                        <h1 className='font-bold'>Text Us</h1>
                        <div className='flex pt-2'>
                            <IoLogoWhatsapp size={20} className='text-green-600'/>
                            <h1 className='pl-1'>+91 9999999999</h1>
                        </div>
                      </div>
                    </div>
                </div>
          </div>
        </div>


        
      </div>








    </div>
  )
}

export default TourToValmiki
