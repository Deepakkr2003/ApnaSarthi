import React from 'react'
import { IoCall , IoMail} from "react-icons/io5";

function CancelBooking() {
  return (
    <div className="py-4 bg-white border-4 border-blue-600 rounded-xl lg:mx-8 mx-2">

      <h1 className="font-bold text-4xl text-center underline mb-4">Cancellation Policy</h1>
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="w-full">
            <h3 className="text-2xl mt-4 pr-6 text-gray-900 font-semibold">Introduction</h3>
            <p className="mt-6 text-gray-800 font-bold italic hover:not-italic subpixel-antialiased ">At Apnasarthi Rental Solutions Pvt Ltd, we understand that plans can change. This Cancellation Policy outlines the terms and conditions for canceling your vehicle rental booking. By making a booking with us, you agree to comply with and be bound by this policy.
            </p>

            <h3 className="text-2xl mt-4 pr-6 text-gray-900 font-semibold">Cancellation by Customer</h3>
            <h3 className="text-2xl mt-4 pr-6 text-gray-900 font-semibold">1. Cancellation Process</h3>
            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">
            To cancel your booking, please contact us through one of the following methods: <br/>
            • Via our website or app <br/>
            • By calling our customer service at <a href='tel: +918227003612' className='pl-1 font-bold text-black'> +918227003612</a>, <a href='tel:+919798845588' className='pl-1 font-bold text-black'>+91 9798845588</a>
            </p>


            <h3 className="text-2xl mt-4 pr-6 text-gray-900 font-semibold">2. Cancellation Fees and Refunds</h3>
            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">
                • Cancellations Made 24 Hours or More Before Pickup:<br/>
                - You will receive 95 % to 100 %refund of the rental amount.<br/>
                • Cancellations Made Less Than 24 Hours Before Pickup:<br/>
                - A cancellation fee of 35% to 45% of the rental amount will be charged.<br/>
                - The remaining amount will be refunded to you.

            </p>
            <h3 className="text-2xl mt-4 pr-6 text-gray-900 font-semibold">3. No-Shows</h3>
            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">
            • If you fail to pick up the vehicle at the scheduled time without prior notice, you will be charged the full rental amount with no refund.
            </p>


            <h3 className="text-2xl mt-4 pr-6 text-gray-900 font-semibold">Cancellation by Apnasarthi Rental Solutions Pvt Ltd</h3>
            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">We reserve the right to cancel your booking under certain circumstances, including but not limited to:<br/>
            • Unavailability of the reserved vehicle due to unforeseen circumstances<br/>
            • Your failure to meet our rental requirements (e.g., valid driver's license, age restrictions)<br/>
            • Force majeure events (e.g., natural disasters, strikes, government regulations)</p>

            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">In such cases, we will:<br/>
            • Notify you as soon as possible<br/>
            • Offer you an alternative vehicle, if available<br/>
            • Provide a full refund if no suitable alternative is available</p>
           

            <h3 className="text-2xl mt-4 pr-6 text-gray-900 font-semibold">Changes to Booking</h3>
            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">
                1.Modifications by Customer 
            </p>
            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">
                • Changes Made 24 Hours or More Before Pickup:<br/>
                - You may modify your booking without any additional charges, subject to vehicle availability.<br/>
                • Changes Made Less Than 24 Hours Before Pickup:<br/>
                - Modifications are subject to vehicle availability and may incur a fee of 25%.</p>

            <h3 className="text-2xl mt-4 pr-6 text-gray-900 font-semibold">Refund Process</h3>
            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">
            • Refunds, if applicable, will be processed within 3 business days from the date of cancellation.<br/>
            • Refunds will be issued to the original payment method used at the time of booking.

            </p>


            <h3 className="text-2xl mt-4 pr-6 text-gray-900 font-semibold">Contact Us</h3>
            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">
            If you have any questions or need assistance with cancellations, please contact our customer service team at:<br/>
            Apnasarthi Rental Solutions Pvt Ltd  
            </p>
            <div className='flex pt-2 mt-2'>
              <IoCall size={20} className='text-blue-500'/>
              <a href='tel:+919798845588' className='pl-1 font-bold text-black'>+91 9798845588</a>
              <IoCall size={20} className='text-blue-500 ml-4'/>
              <a href='tel: +918227003612' className='pl-1 font-bold text-black'> +918227003612</a>
            </div>
            <div className='flex pt-2 mt-2'>
              <IoMail size={20} className='text-blue-500' />
              <a href='mailto:abhiram.mce@gmail.com' className='pl-1 font-bold text-black'>abhiram.mce@gmail.com</a>
            </div>
            <h3 className="text-2xl mt-4 pr-6 text-gray-900 font-semibold">Conclusion</h3>
            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">
            By making a booking with Apnasarthi Rental Solutions Pvt Ltd, you acknowledge that you have read, understood, and agreed to this Cancellation Policy. We recommend reviewing this policy periodically to stay informed about any updates.
            </p>
            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">Thank you for choosing Apnasarthi Rental Solutions Pvt Ltd. We look forward to serving you.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CancelBooking
