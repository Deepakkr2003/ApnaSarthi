
import React from 'react';
// import TourToRajgir from '../BiharTourism/TourToRajgir';
// import TourToBodhgaya from '../BiharTourism/TourToBodhgaya';
// import TourToValmiki from '../BiharTourism/TourToValmiki';
// import TourToRohtas from '../BiharTourism/TourToRohtas';
// import TourToKakolat from '../BiharTourism/TourToKakolat';
// import Terms from '../BiharTourism/Terms';


import { Outlet, Link } from "react-router-dom";


const TourPackageForBiharTourism = () => {
  return (
    <div>

      
      {/* <TourToRajgir/>
      <TourToBodhgaya/>
      <TourToRohtas/>
      <TourToValmiki/>
      <TourToKakolat/>
      <Terms/> */}

      <nav className='className="flex justify-center items-center py-8"'>
      <ul className="flex justify-center items-center flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <li>
            <Link
              to="tour-to-rajgir"
              className="block bg-blue-600 text-white p-4 shadow-md rounded-lg hover:bg-blue-300 transition"
            >
              Tour to Rajgir
            </Link>
          </li>
          <li>
            <Link
              to="tour-to-bodhgaya"
              className="block  bg-blue-600 text-white p-4 shadow-md rounded-lg hover:bg-blue-300 transition"
            >
              Tour to Bodhgaya
            </Link>
          </li>
          <li>
            <Link
              to="tour-to-rohtas"
              className="block  bg-blue-600 text-white p-4 shadow-md rounded-lg hover:bg-blue-300 transition"
            >
              Tour to Rohtas
            </Link>
          </li>
          <li>
            <Link
              to="tour-to-valmiki"
              className="block  bg-blue-600 text-white p-4 shadow-md rounded-lg hover:bg-blue-300 transition"
            >
              Tour to Valmiki
            </Link>
          </li>
          <li>
            <Link
              to="tour-to-kakolat"
              className="block  bg-blue-600 text-white p-4 shadow-md rounded-lg hover:bg-blue-300 transition"
            >
              Tour to Kakolat
            </Link>
          </li>
          <li>
            <Link
              to="terms"
              className="block  bg-blue-600 text-white p-4 shadow-md rounded-lg hover:bg-blue-300 transition"
            >
              Terms
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />

    </div>
  );
};

export default TourPackageForBiharTourism;