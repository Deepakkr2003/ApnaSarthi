import React from 'react'
import { IoCall , IoMail} from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import bus1 from "../../assets/Bus1.jpeg"

function BusRentalService() {
    
     
  return (
    <div className="mx-2 md:mx-8 bg-gray-200 border-4 border-blue-600 rounded-xl shadow-md overflow-hidden  my-4">
    <h1 className='text-center text-indigo-700 uppercase text-2xl font-semibold '>Bus Rental</h1>
    <div className='flex justify-around mt-4'>
      <div>
        <h1 className='text-xl font-medium'>Location</h1>
        <h1 className='mt-4'>Motihari</h1>
        <h1 className='mt-1'>Muzzafarpur</h1>
        <h1 className='mt-1'>West Champaran</h1>
        <h1 className='mt-1'>Sheohar</h1>
        <h1 className='mt-1'>Vaishali</h1>
        <h1 className='mt-1'>Patna</h1>
        <h1 className='mt-1'>Nalanda(Rajgir)</h1>
        <h1 className='mt-1'>Gaya(Bodhgaya)</h1>
        <h1 className='mt-1'>Nawada</h1>
        <h1 className='mt-1'>Rohtas</h1>
      </div>
      <div>
        <h1 className='text-xl font-medium'>Vehicle</h1>
        <h1 className='mt-4'>• Bus</h1>
        <h1 className='mt-1'>• etc...</h1>
        <img src={bus1} alt="" className="w-48 h-48 mt-4 rounded-xl border-4 border-blue-600"/>
           
      </div>
    </div>

    <div className='mt-4 ml-6 mb-4 text-center'>
      <h1 className='text-xl font-semibold '>For Booking</h1>
      <div className='flex pt-2 mt-2 justify-center items-center'>
          <h1 className='font-semibold text-xl'>Call us :</h1>
          <IoCall size={20} className='text-blue-500 mt-2 ml-2'/>
          <a href='tel:+919798845588' className='pl-1 font-semibold text-black mt-1'>+91 9798845588</a>
      </div>
      <div className='flex pt-2 mt-2 justify-center items-center'>
          <h1 className='font-semibold text-xl'>Call us :</h1>
          <IoCall size={20} className='text-blue-500 mt-2 ml-2'/>
          <a href='tel:+91 82270 03612' className='pl-1 font-semibold text-black mt-1'>+91 82270 03612</a>
      </div>
      <div className='flex pt-2 mt-2 justify-center items-center'>
          <h1 className='font-semibold text-xl'>Call us :</h1>
          <IoCall size={20} className='text-blue-500 mt-2 ml-2'/>
          <a href='tel:+91 76675 29818' className='pl-1 font-semibold text-black mt-1'>+91 76675 29818</a>
      </div>

      <div className='flex pt-2 justify-center items-center mt-1'>
          <h1 className='font-semibold text-xl'>Text us :</h1>
          <IoLogoWhatsapp size={20} className='text-green-600 ml-2'/>
          <a href='https://wa.me/919798845588' className='pl-1 font-semibold'>+91 9798845588</a>
      </div>
      
      <div className='flex pt-1 mt-1 justify-center items-center'>
        <h1 className='font-semibold text-xl'>Mail us :</h1>
        <IoMail size={20} className='text-blue-500 mt-2 ml-2' />
        <a href='mailto:apnasarthitech@gmail.com' className='pl-1 font-bold text-black mt-1'>apnasarthitech@gmail.com</a>
      </div>
    </div>
  </div>
  )
}

export default BusRentalService