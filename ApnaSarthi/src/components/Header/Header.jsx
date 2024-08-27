import React, { useContext, useEffect, useState } from "react";
import companyLogo from "../../assets/ApnaSarthi.jpeg";
import LoginContext from "../../Context/LoginContext";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const { userStatus, setUserStatus } = useContext(LoginContext);
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setUserStatus(user === "true");
  }, []);

  const handleLogout = () => {
    localStorage.setItem("user", "false");
    setUserStatus(false);
    navigate("/login");
  };

  return (
    <>
      <header className="shadow sticky z-50 top-0">
      <nav className="bg-blue-600 rounded-xl border-gray-600 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            {/* Hamburger Menu Icon for Mobile */}
            <div
              className="cursor-pointer  z-10 text-white lg:hidden flex items-center"
              onClick={() => setNav(!nav)}
            >
              {nav ? <FaTimes size={30} /> : <FaBars size={30} />}

              <Link to="/" className="flex items-center">
              <img
                src={companyLogo}
                className="ml-2 h-12 sm:w-24 w-20 rounded-xl"
                alt="Logo"
              />
            </Link>
            </div>

            <Link to="/" className=" items-center hidden lg:block">
              <img
                src={companyLogo}
                className="ml-2 h-12 sm:w-24 w-20 rounded-xl"
                alt="Logo"
              />
            </Link>

            

            {/* Desktop Menu */}
            <div
              className={`${
                nav ? "flex" : "hidden"
              } flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-blue-600 lg:flex lg:flex-row lg:static lg:bg-transparent lg:w-auto lg:h-auto lg:space-x-8`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 lg:space-x-8 font-medium lg:flex-row lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                    onClick={() => setNav(false)} // Close menu after click
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                    onClick={() => setNav(false)} // Close menu after click
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/review"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                    onClick={() => setNav(false)} // Close menu after click
                  >
                    Review
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/support"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                    onClick={() => setNav(false)} // Close menu after click
                  >
                    Support
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/query"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                    onClick={() => setNav(false)} // Close menu after click
                  >
                    Query
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* User Auth Buttons (Login/Signup/Logout) */}
            <div className="flex items-center lg:order-2 mt-0">
              {userStatus ? (
                <button
                  onClick={handleLogout}
                  className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-white hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/signup"
                    className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
