import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Bihartourism from "../../assets/Bihar_tourism.jpeg";
import carntwo from "../../assets/carntwo.jpeg";
import pickndrop from "../../assets/pickndrop.jpeg";
import van from "../../assets/van.jpeg";
import bus from "../../assets/bus.jpeg";
import commerical from "../../assets/commerical.jpeg";
import self from "../../assets/self.jpeg";
import taxi from "../../assets/taxi.jpeg";

function Card({ title, desc, imageSrc }) {
  return (
    <div className="border-4 border-blue-600 rounded-md shadow-md shadow-gray-500 flex flex-col justify-between items-center lg:w-96   xl:w-72 h-[650px] lg:mr-12 mr-2 mt-5 text-center text-black font-times">
      <div className="border-2 border-black rounded w-full h-[300px] object-cover">
        <img
          src={imageSrc}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }} // Ensure the image fits well
        />
      </div>
      <div className="card-bottom">
        <h2 className="text-xl font-semibold border-2 border-gray-500 rounded-full bg-gray-200 text-black m-1 font-lucida p-1 ">
          {title}
        </h2>
        <p className="mt-8  mx-4 font-semibold">{desc}</p>
      </div>
      <button className="border-2 border-red-500 rounded-full flex justify-center items-center px-8 py-2 mb-2  cursor-pointer text-xl font-bold transform transition-transform duration-300 hover:scale-110">
        Booking
      </button>
    </div>
  );
}

function Home() {
  return (
    <>
      <div className="flex flex-wrap justify-evenly lg:ml-12 ml-2">
        <Link to="/home/tour_package_for_bihar_tourism">
          <Card
            title="Tour Package for Bihar Tourism"
            desc="Explore the rich cultural heritage and scenic beauty of Bihar with our customized tour packages, designed to offer an unforgettable travel experience."
            imageSrc={Bihartourism}
          />
        </Link>
        <Link to="/home/car_and_Two_wheelar_rental">
          <Card
            title="Car Rental & Two Wheeler Rental"
            desc="Choose from a variety of cars and two-wheelers for rent to travel comfortably and conveniently at your own pace ensuring flexibility and freedom."
            imageSrc={carntwo}
          />
        </Link>
        <Link to="/home/pickup_and_drop">
          <Card
            title="Pickup & Drop Service"
            desc="Enjoy hassle-free transportation with our reliable pickup and drop services, ensuring timely and safe travel to your desired locations  with professional and courteous drivers."
            imageSrc={pickndrop}
          />
        </Link>
        <Link to="/home/van_and_tempo_rental_service">
          <Card
            title="Van & Tempo Rental Services"
            desc="Ideal for group travels or transporting goods, our van and tempo rentals provide spacious and efficient solutions for any occasion or need."
            imageSrc={van}
          />
        </Link>
        <Link to="/home/bus_rental_service">
          <Card
            title="Bus Rental Service"
            desc="Perfect for large groups and tours, our bus rental service ensures comfortable and efficient travel for all passengers providing a smooth and enjoyable journey experience with reliable and professional drivers."
            imageSrc={bus}
          />
        </Link>
        <Link to="/home/commercial_vehicle_service">
          <Card
            title="Commercial Vehicle Rental Services"
            desc="Rent commercial vehicles for business needs, including transportation of goods and services, with our reliable and well-maintained fleet."
            imageSrc={commerical}
          />
        </Link>
        <Link to="/home/self_driving_rental_service">
          <Card
            title="Self Driving Rental Service"
            desc="Experience the freedom of driving on your own with our self-driving rental service, offering well-maintained vehicles for your journeys and adventures with complete peace of mind."
            imageSrc={self}
          />
        </Link>
        <Link to="/home/call_and_radio_taxi_rental">
          <Card
            title="Call & Radio Taxi Rentals"
            desc="Get around easily with our call and radio taxi services, available at any time for your convenience and safety ensuring a reliable and comfortable ride every single time."
            imageSrc={taxi}
          />
        </Link>
      </div>

      <Outlet />
    </>
  );
}

export default Home;
