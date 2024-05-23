import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
export const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="z-40 items-center justify-between w-auto " >
      <nav className="flex  items-center justify-center text-center pt-2 mt-8 md:px-0 px-2 text-black  mx-auto">
        {/* <div className="items-center justify-start">
          <img
            className="h-auto md:w-80 w-60 "
            src={require("../../assets/StopTBlogo.png")}
            alt=""
          />
        </div> */}
        <div className="items-center justify-center text-center w-auto ">
          <img
            className="h-auto md:w-96 w-60  items-center justify-center"
            src={require("../../assets/ntbc-logo-4.png")}
            alt=""
          />
        </div>
        {/* <div className="items-center justify-end">
          <img
            className="md:w-80 w-60  h-auto "
            src={require("../../assets/NTLCPLogo.png")}
            alt=""
          />
        </div> */}
      </nav>
      {/* <div className="flex max-w-screen-xl mx-auto py-2 justify-between items-center bg-custom-green">
        <div className="md:hidden">
          <button
            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div> */}

      {/* <div
        className={`md:flex md:h-12 pt-1  md:max-w-screen-xl mx-auto  relative  md:justify-center md:items-center bg-custom-green
          ${navbar ? "block" : "hidden"}`}
      >
        <nav className="flex  absolute items-center justify-end py-2 md:py-1 text-gray-50 ">
          <ul className="md:flex w-[40rem] md:w-auto items-center lg:space-x-4 md:space-x-1.5 text-[13px] md:text-[13px] lg:text-[20] font-bold">
            <li className="py-1.5 px-2">
              <NavLink
                to="https://nationaltbconference.org/"
                className={({ isActive }) => {
                  return (
                    "hover:text-white  hover:bg-custom-dark-green py-1.5 px-2  " +
                    (!isActive
                      ? "cursor-pointer  transition-transform duration-300 ease-out rounded-sm"
                      : "bg-custom-dark-green")
                  );
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="py-1.5 px-2">
              <NavLink
                to="https://nationaltbconference.org/about/"
                className={({ isActive }) => {
                  return (
                    "hover:text-white hover:bg-custom-dark-green py-1.5 px-2 " +
                    (!isActive
                      ? "cursor-pointer  transition-transform duration-300 ease-out rounded-sm"
                      : "bg-custom-dark-green")
                  );
                }}
              >
                About
              </NavLink>
            </li>
            <li className="py-1.5 px-2">
              <NavLink
                to="https://nationaltbconference.org/speakers/"
                className={({ isActive }) => {
                  return (
                    "hover:text-white hover:bg-custom-dark-green py-1.5 px-2 " +
                    (!isActive
                      ? "cursor-pointer  transition-transform duration-300 ease-out rounded-sm"
                      : "bg-custom-dark-green")
                  );
                }}
              >
                Speakers
              </NavLink>
            </li>
            <li className="py-1.5 px-2">
              <NavLink
                to="https://nationaltbconference.org/planning-committee/"
                className={({ isActive }) => {
                  return (
                    "hover:text-white hover:bg-custom-dark-green py-1.5 px-2 " +
                    (!isActive
                      ? "cursor-pointer  transition-transform duration-300 ease-out rounded-sm"
                      : "bg-custom-dark-green")
                  );
                }}
              >
                Planning Committees
              </NavLink>
            </li>
            <li className="hover:text-white  p-2 cursor-pointer  transition-transform duration-300 ease-out rounded-sm px-2 ">
              <NavLink
                to="/registration"
                className={({ isActive }) => {
                  return (
                    "hover:text-white hover:bg-custom-dark-green py-1.5 px-2 " +
                    (!isActive
                      ? "cursor-pointer  transition-transform duration-300 ease-out rounded-sm"
                      : "bg-custom-dark-green")
                  );
                }}
              >
                Registration
              </NavLink>
            </li>
            <li className="hover:text-white  py-2 px-2 cursor-pointer  transition-transform duration-300 ease-out rounded-sm ">
              <NavLink
                to="/login"
                target="_blank"
                className={({ isActive }) => {
                  return (
                    "hover:text-white hover:bg-custom-dark-green py-1.5 px-2 " +
                    (!isActive
                      ? "cursor-pointer  transition-transform duration-300 ease-out rounded-sm"
                      : "bg-custom-dark-green")
                  );
                }}
              >
                Abstract Submission
              </NavLink>
            </li>
            {/* <li className="hover:text-white hover:bg-custom-dark-green py-2 px-2 cursor-pointer  transition-transform duration-300 ease-out rounded-sm ">
              <NavLink
                to="/sponsorship"
                className={({ isActive }) => {
                  return (
                    "hover:text-white hover:bg-custom-dark-green py-1.5 px-2 " +
                    (!isActive
                      ? "cursor-pointer  transition-transform duration-300 ease-out rounded-sm"
                      : "bg-custom-dark-green")
                  );
                }}
              >
                Sponsorship & Advert
              </NavLink>
            </li> */}
            {/* <li
              className="relative flex cursor-pointer hover:bg-custom-dark-green z-30 py-2 px-2"
              onClick={() => setToggle(!toggle)}
            >
              <button className="rounded-lg text-white  px-2">
                Past Conferences
              </button>
              <div
                className={`absolute ml-28 lg:right-0 z-10 lg:bg-custom-green bg-custom-dark-green lg:w-20 w-14 text-center rounded-lg py-2 mt-1 lg:mt-6 text-white  ${
                  toggle ? "block" : "hidden"
                }`}
              >
                <li className="bg-custom-dark-green">2021</li>
                <li className="bg-custom-dark-green">2019</li>
                <li className="bg-custom-dark-green">2016</li>
              </div>
            </li> */}
            {/* <li className="hover:text-white  py-2 px-2 cursor-pointer transition-transform duration-400 ease-out rounded-sm">
              <NavLink
                to="https://nationaltbconference.org/contact-us/"
                className={({ isActive }) => {
                  return (
                    "hover:text-white hover:bg-custom-dark-green py-1.5 px-2 " +
                    (!isActive
                      ? "cursor-pointer  transition-transform duration-300 ease-out rounded-sm"
                      : "bg-custom-dark-green")
                  );
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>  */}


      
      {/* <!-- Mobile View Menu --> */}

      {/* <div className="flex h-[20rem] pt-1 md:hidde z-40  px-2 md:max-w-screen-xl mx-auto  relative  md:justify-center md:items-center shadow-md bg-custom-green rounded-sm">

 <nav className="flex absolute items-center justify-end pb-2 text-gray-50 ">       

   <ul className="py-2 text-sm font-bold" >
   <li className="hover:text-white hover:shadow-md  hover:bg-custom-dark-green py-1 px-2 pointer  transition-transform duration-300 ease-out rounded-sm ">
    Home
   <li className="hover:text-white hover:bg-custom-dark-green py-1 px-2 pointer  transition-transform duration-300 ease-out rounded-sm ">
     About
     </li>
   </li>
   <li className="hover:text-white hover:bg-custom-dark-green py-2 px-2 pointer  transition-transform duration-300 ease-out rounded-sm ">
    Speakers
   </li>
   <li className="hover:text-white hover:bg-custom-dark-green py-2 px-2 pointer  transition-transform duration-300 ease-out rounded-sm ">
    Planning  Committees
    </li>
   <li className="hover:text-white hover:bg-custom-dark-green py-1 px-2 pointer  transition-transform duration-300 ease-out rounded-sm ">
   Registration
   </li>
   <li className="hover:text-white hover:bg-custom-dark-green py-1 px-2 pointer  transition-transform duration-300 ease-out rounded-sm ">
    Abstract Submission
   </li>
   <li className="hover:text-white hover:bg-custom-dark-green py-2 px-2 pointer  transition-transform duration-300 ease-out rounded-sm ">
    Sponsorship & Advert
   </li>
   <li className="relative flex cursor-pointer hover:bg-custom-dark-green py-2 px-2">
       <button  className="rounded-lg  text-white ">
         Past Conferences 
       </button>
       <div v-if="showNav" className="absolute right-0 z-10 bg-custom-green rounded-lg py-2 mt-6">
        2021
         2020
         2019
        
       </div>
     </li>
     <li className="hover:text-white hover:bg-custom-dark-green py-2 px-2 pointer  transition-transform duration-300 ease-out rounded-sm ">
      Contact
      </li>
 </ul>
 <button className="sm:hidden">
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
   </svg>
</button>

   </nav>	
</div> */}
    </div>
  );
};
