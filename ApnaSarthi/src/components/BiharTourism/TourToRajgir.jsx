/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx'
import rajgir1 from '../../assets/Rajgir1.jpeg';
import rajgir2 from '../../assets/Rajgir2.jpeg';
import Wall from '../../assets/Wall.jpeg';
import Stupas from '../../assets/Stupas.jpeg';
import Nature from '../../assets/Nature.jpeg';
import nalanda from '../../assets/nalanda.jpeg';
import Ghora from '../../assets/Ghora.jpeg';
import Rope from '../../assets/Rope.jpeg';


function TourToRajgir() {

    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };
    
    const slides=[
        {
        url:rajgir1,
        alt: 'image1',
        },
        {
        url:rajgir2,
        alt: 'image1',
        },
        {
        url:Rope,
        alt: 'image1',
        },
        {
        url:Stupas,
        alt: 'image1',
        },
        {
        url:Wall,
        alt: 'image1',
        },
        {
        url:Nature,
        alt: 'image1',
        },
        {
        url:nalanda,
        alt: 'image1',
        },
        {
        url:Ghora,
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
          <h1 className='text-white text-3xl md:text-5xl font-semibold text-center underline'>Tour Of Rajgir</h1>


        <div className='flex flex-col md:flex-row'>
          
          <div className=' h-[656px] md:w-1/2  py-8 px-4 relative group '>
            <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-no-repeat bg-cover duration-500 '></div>
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

          <div className='mt-8 md:w-1/2 px-2 md:pl-8'>
                <h1 className='text-4xl text-white font-semibold '>Place to Visit</h1>
                <div className='flex flex-col md:flex-row md:space-x-8 mt-4'>
                  <ul className="list-disc pl-5 text-white text-xl font-medium">
                    <li>Zoo Safari</li>
                    <li>Glass Bridge</li>
                    <li>Braham Kund</li>
                    <li>Cyclopean Wall</li>
                    <li>Ghora Katora Lake</li>
                    
                  </ul>
                  <ul className="list-disc pl-5  text-white text-xl font-medium">
                    <li>Nature Safari</li>
                    <li>Shanti Stupas</li>
                    <li>Rajgir Ropeway</li>
                    <li>Nalanda University</li>
                    
                  </ul>
                </div>


                <div className='mt-8 w-full md:w-5/6 rounded-2xl h-12 text-center bg-white font-semibold text-xl cursor-pointer'>
                  <button className='pt-2 hover:scale-105 duration-200'>Overview</button>
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
                        <h1 className='text-4xl font-semibold'>&#8377;4999</h1>
                      </div>
                    </div>
                </div>


                <div className=' mt-8 w-full md:w-5/6 rounded-2xl h-32 bg-white mb-4'>

                    <h1 className='text-center text-xl font-medium underline'>Contact Us</h1>
                    <div className='flex justify-around pt-4'>
                      <div>
                        <h1 className='font-bold'>Call Us</h1>
                        <div className='flex pt-2'>
                          <IoCall size={20} className='text-blue-500'/>
                          <a href='tel:+919999999999' className='pl-1'>+91 9999999999</a>
                        </div>
                      </div>
                      <div>
                        <h1 className='font-bold'>Text Us</h1>
                        <div className='flex pt-2'>
                            <IoLogoWhatsapp size={20} className='text-green-600'/>
                            <a href='https://wa.me/919999999999' className='pl-1'>+91 9999999999</a>
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

export default TourToRajgir
