/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaCarSide } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import logo from '../../assets/Apnasarthi_logo.jpeg';
// import { Link } from 'react-router-dom';

function Header() {


  

    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };


  return (
    <div>
      <div className="bg-blue-600  w-full h-16 flex justify-between items-center">
        <div className="text-white mt-4 ml-2 md:ml-8">+91 9798845588 | info@apnasarthi.com</div>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="search cab, package, hotel etc..."
            className="w-full mr-2 md:w-96 h-10 pl-10 md:pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <IoSearch className="absolute left-3 text-gray-400" />
        </div>
        <div className='hidden md:block'>
          <div className="text-white mt-4 mr-8 flex items-center  ">
            <FaCarSide size={30} className="mr-2" />
            <div className="text-xl font-semibold">Book My Trip</div>
          </div>
        </div>
      </div>


      

      <div className="flex justify-between  border-b-4 border-blue-500">
        <div className="relative flex  cursor-pointer lg:ml-6 ml-2 ">
            <div className="text-2xl  font-bold mt-4 ">APNA</div>
            <img src={logo} className="w-20 h-20" alt="Logo" />
            <div className="text-2xl  font-bold mt-4">SARTHI</div>
        </div>


        <div className='hidden md:block'>
        <div className="flex mt-6 mr-2 lg:mr-8 lg:space-x-6 space-x-3">
        <div 
          className="relative inline-block"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          >
            <div className="font-semibold cursor-pointer flex items-center">
              <div>DESTINATION</div>
              {/* <Link to="/place-to-visit-in-rajgir" className="text-white">Place to visit in Rajgir</Link> */}
              <IoIosArrowDown size={20} className="mt-1 ml-1" />
            </div>
            {isOpen && (
              <ul className="absolute bg-white border border-gray-300 mt-2 py-2 w-64 z-10">
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href="#">Place to visit in Rajgir</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href="#">Place to visit in Bodhgaya</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href="#">Place to visit in Rohtas</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href="#">Place to visit in Valmiki Nagar</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href="#">Place to visit in Kakolat</a>
                </li>
              </ul>
            )}
          </div>
          <div className="font-semibold cursor-pointer">BUS BOOKING</div>
          <div className="font-semibold cursor-pointer">CAB BOOKING</div>
          <div className="font-semibold cursor-pointer">TOUR PACKAGE</div>
          {/* <div className="font-semibold cursor-pointer">LUXURY CAR</div> */}
        </div>
        </div>



        
      </div>



      



    </div>
  )
}

export default Header
