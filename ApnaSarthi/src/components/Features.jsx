/* eslint-disable no-unused-vars */
import React from "react";
import Card from "./Card";

function Features() {
  const featuresStyle = {
    backgroundColor: "#0f172a",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "spaceEvenly",
    marginLeft: "2rem"
};
  return (
    <>
      <div style={featuresStyle}>
        <Card
          title="Tour Package for Bihar Tourism"
          desc="Explore the rich cultural heritage and scenic beauty of Bihar with our customized tour packages, designed to offer an unforgettable travel experience."
        />
        <Card
          title="Car Renteal & Two Wheeler Rental"
          desc="Choose from a variety of cars and two-wheelers for rent to travel comfortably and conveniently at your own pace ensuring flexibility and freedom."
        />
        <Card
          title="Pickup & Drop Service"
          desc="Enjoy hassle-free transportation with our reliable pickup and drop services, ensuring timely and safe travel to your desired locations  with professional and courteous drivers."
        />
        <Card
          title="van & Tempo Rental services"
          desc=" Ideal for group travels or transporting goods, our van and tempo rentals provide spacious and efficient solutions for any occasion or need."
        />
        <Card
          title="Bus rental Service"
          desc="Perfect for large groups and tours, our bus rental service ensures comfortable and efficient travel for all passengers providing a smooth and enjoyable journey experience with reliable and professional drivers."
        />
        <Card
          title="Commercial Vehicle rental services"
          desc="Rent commercial vehicles for business needs, including transportation of goods and services, with our reliable and well-maintained fleet."
        />
        <Card
          title="Self Driving Rental service"
          desc="Experience the freedom of driving on your own with our self-driving rental service, offering well-maintained vehicles for your journeys and adventures with complete peace of mind."
        />
        <Card
          title="Call & radio taxi rentals"
          desc="Get around easily with our call and radio taxi services, available at any time for your convenience and safety ensuring a reliable and comfortable ride every single time."
        />
      </div>
    </>
  );
}

export default Features;