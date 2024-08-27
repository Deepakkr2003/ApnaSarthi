import React from 'react'
import { IoCall , IoMail} from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import car1 from "../../assets/car1.jpeg"
import bike1 from "../../assets/bike1.jpeg"

function CarAndTwoWheelarRental() {
  

  return (
    <div className="mx-2 md:mx-8 bg-gray-200 border-4 border-blue-600 rounded-xl shadow-md overflow-hidden  my-4">
    <h1 className='text-center text-indigo-700 uppercase text-2xl font-semibold '>Car And Two Wheelar Rental</h1>
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
        <div className='flex justify-between md:space-x-16 mt-4'>
          <div >
            <h1 className='font-semibold underline'>Car</h1>
            <h1>• Swift</h1>
            <h1>• Toyota Fortuner</h1>
            <h1>• Hyundai Creta</h1>
            <h1>• Maruti Suzuki Dzire</h1>
            <h1>• Mahindra XUV500</h1>
            <h1>• etc...</h1>
            <img src={car1} alt="" className="w-48 h-48 mt-4 rounded-xl border-4 border-blue-600"/>
          </div>
          <div >
            <h1 className='font-semibold underline'>Bike</h1>
            <h1>• Bajaj Pulsar</h1>
            <h1>• Hero Glamour</h1>
            <h1>• Yamaha Xabre</h1>
            <h1>• Splendor</h1>
            <h1>• Honda SP 125</h1>
            <h1>• etc...</h1>
            <img src={bike1} alt="" className="w-48 h-48 mt-4 rounded-xl border-4 border-blue-600"/>
          </div>
        </div>
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

export default CarAndTwoWheelarRental