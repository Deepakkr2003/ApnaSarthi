/* eslint-disable no-unused-vars */
import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { Outlet } from 'react-router-dom';

function Home() {
  const featuresStyle = {
     backgroundColor: "#0f172a",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "spaceEvenly",
    marginLeft: "2rem",
  };

  return (
    <>
      <div style={featuresStyle}>
        <Link to="/home/bihar_tourism">
        <Card
          title="Tour Package for Bihar Tourism"
          desc="Explore the rich cultural heritage and scenic beauty of Bihar with our customized tour packages, designed to offer an unforgettable travel experience."
        />
        </Link>
        <Link to="/home/car_and_Two_wheelar_rental">
        <Card
          title="Car Renteal & Two Wheeler Rental"
          desc="Choose from a variety of cars and two-wheelers for rent to travel comfortably and conveniently at your own pace ensuring flexibility and freedom."
        />
        </Link>
        <Link to="/home/pickup_and_drop">
        <Card
          title="Pickup & Drop Service"
          desc="Enjoy hassle-free transportation with our reliable pickup and drop services, ensuring timely and safe travel to your desired locations  with professional and courteous drivers."
        />
        </Link>
        <Link to="/home/van_and_tempo_rental_service">
        <Card
          title="van & Tempo Rental services"
          desc=" Ideal for group travels or transporting goods, our van and tempo rentals provide spacious and efficient solutions for any occasion or need."
        />
        </Link>
        <Link to="/home/bus_rental_service">
        <Card
          title="Bus rental Service"
          desc="Perfect for large groups and tours, our bus rental service ensures comfortable and efficient travel for all passengers providing a smooth and enjoyable journey experience with reliable and professional drivers."
        />
        </Link>
        <Link to="/home/commercial_vehicle_service">
       
        <Card
          title="Commercial Vehicle rental services"
          desc="Rent commercial vehicles for business needs, including transportation of goods and services, with our reliable and well-maintained fleet."
        />
         </Link>
         <Link to="/home/self_driving_rental_service">
        
        <Card
          title="Self Driving Rental service"
          desc="Experience the freedom of driving on your own with our self-driving rental service, offering well-maintained vehicles for your journeys and adventures with complete peace of mind."
        />
         </Link>
         <Link to="/home/call_and_radio_taxi_rental">
        <Card
          title="Call & radio taxi rentals"
          desc="Get around easily with our call and radio taxi services, available at any time for your convenience and safety ensuring a reliable and comfortable ride every single time."
        />
        </Link>
      </div>
      <Outlet/>
    </>
  );
}

export default Home;