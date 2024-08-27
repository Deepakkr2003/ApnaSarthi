import React from "react";
import { IoCall, IoMail } from "react-icons/io5";
import companyLogo from "../../assets/ApnaSarthi.jpeg";
function About() {
  return (
    <div className="py-4 bg-white border-4 border-blue-600 rounded-xl lg:mx-8 mx-2">
      <h1 className="font-bold text-4xl text-center underline mb-4">About</h1>
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img src={companyLogo} alt="image" className="w-full rounded-lg" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-semibold md:text-3xl">
              Your Gateway to Bihar – Tours, Rentals, and Transport Solutions
            </h2>
            <h3 className="text-2xl mt-4 pr-6 text-gray-900 font-semibold">
              About Us
            </h3>
            <p className="mt-6 text-gray-800 font-bold italic hover:not-italic subpixel-antialiased ">
              Welcome to Apnasarthi Rental Solutions Pvt Ltd
            </p>
            <p className="mt-6 text-gray-800 font-bold italic hover:not-italic subpixel-antialiased ">
              At <strong>Apnasarthi</strong> Rental Solutions Pvt Ltd, we are
              passionate about providing reliable and affordable vehicle rental
              services to meet all your transportation needs. Founded with the
              vision of revolutionizing the vehicle rental industry, we strive
              to offer a seamless and hassle-free experience for our customers.
            </p>
            <h3 className="text-2xl mt-4 pr-6 text-gray-900 font-semibold">
              Our Mission
            </h3>
            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">
              Our mission is to offer top-notch rental services that combine
              convenience, flexibility, and excellent customer service. Whether
              you need a car for a business trip, a family vacation, or just a
              day out, we are here to ensure you have a smooth and enjoyable
              journey.
            </p>
            <h3 className="text-2xl mt-4 pr-6 text-gray-900 font-semibold">
              What We Offer
            </h3>
            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">
              • <strong>Wide Range of Vehicles:</strong> From compact cars to
              luxury sedans, SUVs to vans, we offer a diverse fleet of
              well-maintained vehicles.
              <br />• <strong>Competitive Pricing:</strong> Transparent pricing
              with no hidden fees, ensuring you get the best value for your
              money.
              <br />• <strong>Flexible Rental Plans:</strong> Rental options
              available for a few hours, a day, a week, or longer, tailored to
              fit your schedule.
              <br />• <strong>24/7 Roadside Assistance:</strong> Ensuring your
              safety and peace of mind with round-the-clock roadside assistance
              services.
            </p>
            <h3 className="text-2xl mt-4 pr-6 text-gray-900 font-semibold">
              Why Choose Us?
            </h3>
            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">
              • <strong>Customer-Centric Approach:</strong> We put our customers
              at the heart of everything we do, providing personalized services
              and dedicated support to ensure your complete satisfaction.
              <br />• <strong>Easy Booking Process:</strong> Our user-friendly
              website and app make it easy to browse, book, and manage your
              rentals with just a few clicks.
              <br />• <strong>Reliable and Well-Maintained Vehicles:</strong> We
              pride ourselves on maintaining a high standard of vehicle quality
              and reliability, with regular servicing and inspections.
              <br />• <strong>Professional and Friendly Staff:</strong> Our team
              of experienced professionals is always ready to assist you with
              any queries or concerns, ensuring a smooth and pleasant rental
              experience.
            </p>
            <h3 className="text-2xl mt-4 pr-6 text-gray-900 font-semibold">
              Our Commitment
            </h3>
            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">
              If you have any questions or need assistance, please don't
              hesitate to reach out to us:
            </p>
            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">
              Apnasarthi Rental Solutions Pvt Ltd 101, REETA DEVI BHAWAN, NORTH
              TOLA, NEAR SCHOOL, RAGHUNATHPUR, MUZAFFARPUR – 843118, BIHAR
            </p>
            <h3 className="text-2xl mt-4 pr-6 text-gray-900 font-semibold">
              Contact Us
            </h3>
            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">
              At Apnasarthi Rental Solutions Pvt Ltd, we are committed to
              delivering excellence in every aspect of our service. We
              continuously strive to improve our offerings and exceed customer
              expectations by embracing innovation and maintaining the highest
              standards of integrity and professionalism.
            </p>
            <div className="flex pt-2 mt-2">
              <IoCall size={20} className="text-blue-500" />
              <a href="tel:+919798845588" className="pl-1 font-bold text-black">
                +91 9798845588
              </a>
            </div>
            <div className="flex pt-2 mt-2">
              <IoMail size={20} className="text-blue-500" />
              <a
                href="mailto:abhiram.mce@gmail.com"
                className="pl-1 font-bold text-black"
              >
                abhiram.mce@gmail.com
              </a>
            </div>
            <h3 className="text-2xl mt-4 pr-6 text-gray-900 font-semibold">
              Funding & Support
            </h3>
            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">
              ApnaSarthi Pvt. ltd have been selected for seed funding under
              Bihar Startup Policy-2022, under Department of industries,
              Goverment of Bihar.
            </p>
            <p className="mt-4 text-gray-800 font-bold italic hover:not-italic leading-5">
              Thank you for choosing Apnasarthi Rental Solutions Pvt Ltd. We
              look forward to serving you and becoming your trusted partner for
              all your vehicle rental needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
