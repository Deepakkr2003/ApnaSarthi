import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Signup from "./Components/Signup/Signup.jsx";
import Login from "./Components/Login/Login.jsx";
import Review from "./Components/Review/Review.jsx";
import Support from "./Components/Support/Support.jsx";
import TourToRajgir from './Components/BiharTourism/TourToRajgir.jsx';
import TourToBodhgaya from './Components/BiharTourism/TourToBodhgaya.jsx';
import TourToRohtas from './Components/BiharTourism/TourToRohtas.jsx';
import TourToValmiki from './Components/BiharTourism/TourToValmiki.jsx';
import TourToKakolat from './Components/BiharTourism/TourToKakolat.jsx';
import Terms from './Components/BiharTourism/Terms.jsx';
import CommercialVehicleService from "./Components/CommercialVehicleService/CommercialVehicleService.jsx";
import PickupAndDrop from "./Components/PickupAndDrop/PickupAndDrop.jsx";
import SelfDrivingRentalService from "./Components/SelfDrivingRentalService/SelfDrivingRentalService.jsx";
import VanAndTempoRentalService from "./Components/VanAndTempoRentalService/VanAndTempoRentalService.jsx";
import BusRentalService from "./Components/BusRentalService/BusRentalService.jsx";
import CallAndRadioTaxiRental from "./Components/CallAndRadioTaxiRental/CallAndRadioTaxiRental.jsx";
import CarAndTwoWheelarRental from "./Components/CarAndTwoWheelarRental/CarAndTwoWheelarRental.jsx";
import TourPackageForBiharTourism from "./Components/TourPackageForBiharTourism/TourPackageForBiharTourism.jsx";
import HomeLayout from "./Components/HomeLayout/HomeLayout.jsx";
import CancelBooking from "./Components/CancelBooking/CancelBooking.jsx";
import Privacy from "./Components/Privacy/Privacy.jsx";
import Term_Cond from "./Components/Term&Cond/Term_Cond.jsx";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage.jsx";
import LoginContextProvider from "./Context/LoginContextProvider.jsx";
import VisitToRajgir from "./Components/BiharTourism/VisitToRajgir.jsx";
import VisitToBodhgaya from "./Components/BiharTourism/VisitToBodhgaya.jsx";
import VisitToRohtas from "./Components/BiharTourism/VisitToRohtas.jsx";
import VisitToValmiki from "./Components/BiharTourism/VisitToValmiki.jsx";
import VisitToKakolat from "./Components/BiharTourism/VisitToKakolat.jsx";
import Query from "./Components/Query/Query.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<HomeLayout />}>
        <Route path="commercial_vehicle_service" element={<CommercialVehicleService />} />
        <Route path="pickup_and_drop" element={<PickupAndDrop />} />
        <Route path="self_driving_rental_service" element={<SelfDrivingRentalService />} />
        <Route path="van_and_tempo_rental_service" element={<VanAndTempoRentalService />} />
        <Route path="bus_rental_service" element={<BusRentalService />} />
        <Route path="call_and_radio_taxi_rental" element={<CallAndRadioTaxiRental />} />
        <Route path="car_and_two_wheelar_rental" element={<CarAndTwoWheelarRental />} />
        <Route path="tour_package_for_bihar_tourism" element={<TourPackageForBiharTourism />}>
          <Route path="tour-to-rajgir" element={<TourToRajgir />}>
            <Route path="visit-to-rajgir" element={<VisitToRajgir />} />
          </Route>
          <Route path="tour-to-bodhgaya" element={<TourToBodhgaya />}>
            <Route path="visit-to-bodhgaya" element={<VisitToBodhgaya />} />
          </Route>
          <Route path="tour-to-rohtas" element={<TourToRohtas />}>
            <Route path="visit-to-rohtas" element={<VisitToRohtas />} />
          </Route>
          <Route path="tour-to-valmiki" element={<TourToValmiki />}>
            <Route path="visit-to-valmiki" element={<VisitToValmiki />} />
          </Route>
          <Route path="tour-to-kakolat" element={<TourToKakolat />}>
            <Route path="visit-to-kakolat" element={<VisitToKakolat />} />
          </Route>
          <Route path="terms" element={<Terms />} />
        </Route>
      </Route>
      <Route path="about" element={<About />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="support" element={<Support />} />
      <Route path="query" element={<Query/> } />
      <Route path="review" element={<Review />} />
      <Route path="cancel" element={<CancelBooking />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="term" element={<Term_Cond />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <LoginContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </LoginContextProvider>
);
