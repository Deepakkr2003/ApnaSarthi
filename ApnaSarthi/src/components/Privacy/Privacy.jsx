import React from 'react'
import { IoCall , IoMail} from "react-icons/io5";

function Privacy() {
  return (
    <div className="py-4 bg-white border-4 border-blue-600 rounded-xl lg:mx-8 mx-2">

      <h1 className="font-bold text-4xl text-center underline mb-4">Privacy Policy</h1>
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="w-full">
            <h3 className="text-2xl mt-4 pr-6 text-gray-900 font-semibold">Introduction</h3>
            <p className="mt-6 text-gray-800 font-bold italic hover:not-italic subpixel-antialiased ">At Apnasarthi Rental Solutions Pvt Ltd our privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website and app. By using our services, you agree to this policy.
            </p>

            <h3 className="text-2xl mt-4 pr-6 text-gray-900 font-semibold">Personal Information</h3>
            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">
            We collect the following personal information when you register and use our services:<br/>
            • Name<br/>
            • Email address<br/>
            • Phone number<br/>
            • Date of birth<br/>
            • Address<br/>
            • Driver's license details<br/>
            • Payment information<br/>
            </p>

            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">Usage Data</p>

            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">
            We collect information about your interactions with our website and app, such as:<br/>
            • IP address<br/>
            • Browser type<br/>
            • Pages visited<br/>
            • Time and date of visits</p>


            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">Vehicle Information</p>

            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">
            When you rent a vehicle, we collect information related to your rental, including:<br/>
            • Rental history<br/>
            • Vehicle location<br/>
            • Mileage<br/>
            • Fuel usage</p>

            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">How We Use Your Information</p>

            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">
            We use your information to:<br/>
            • Provide and improve our services<br/>
            • Process bookings and payments<br/>
            • Communicate with you<br/>
            • Analyze usage patterns<br/>
            • Comply with legal requirements</p>


            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">Sharing Your Information</p>

            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">
            We may share your information with:<br/>
            • Service providers (e.g., payment processors)<br/>
            • Law enforcement, if required by law<br/>
            • Parties involved in business transfers (e.g., mergers)</p>


            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">Security</p>

            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">
            We take measures to protect your personal information, system is completely secure. We guarantee the absolute security of your information.</p>
            


            <h3 className="text-2xl mt-4 pr-6 text-gray-900 font-semibold"> Your Rights</h3>
            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">
            You have the right to:<br/>
            • Access your personal information<br/>
            • Correct any inaccuracies<br/>
            • Request deletion of your information (subject to legal requirements)<br/>
            • Opt-out of promotional communications

            </p>
            <h3 className="text-2xl mt-4 pr-6 text-gray-900 font-semibold">Children's Privacy</h3>
            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">
            Our services are not for individuals under 18. We do not knowingly collect information from children under 18. If we learn we have, we will delete it.
            </p>


            <h3 className="text-2xl mt-4 pr-6 text-gray-900 font-semibold">Changes to This Policy</h3>
            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">We may update this policy occasionally. Changes will be posted on our website and app. Your continued use of our services after changes means you accept the new policy.</p>

            


            <h3 className="text-2xl mt-4 pr-6 text-gray-900 font-semibold">Contact Us</h3>
            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">
            If you have questions or concerns about this policy, contact us at:
            </p>
            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">
            Apnasarthi Rental Solutions Pvt Ltd  
            101, REETA DEVI BHAWAN, NORTH TOLA, NEAR SCHOOL, RAGHUNATHPUR, MUZAFFARPUR – 843118, BIHAR
            </p>
            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">
                <div className='flex pt-2 mt-2'>
                    <IoCall size={20} className='text-blue-500'/>
                    <a href='tel:+919798845588' className='pl-1 font-bold text-black'>+91 9798845588</a>
                    <IoCall size={20} className='text-blue-500 ml-4'/>
                    <a href='tel: +91 8227003612' className='pl-1 font-bold text-black'> +91 8227003612</a>
                    <IoCall size={20} className='text-blue-500 ml-4'/>
                    <a href='tel:  +91 76675 29818' className='pl-1 font-bold text-black'>  +91 76675 29818</a>
                </div>
            </p>
            <div className='flex pt-2 mt-2'>
              <IoMail size={20} className='text-blue-500' />
              <a href='mailto:abhiram.mce@gmail.com' className='pl-1 font-bold text-black'>abhiram.mce@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy
