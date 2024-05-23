import React from 'react'
import { NavLink } from "react-router-dom";
export const NotFound = () => {
  return (
    <>
          {/* <div>NotFound</div> */}
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-300 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-center text-red-500 font-bold text-lg">Page Not Found</p>
        <NavLink
                      to="https://nationaltbconference.org/"
                      className="inline-block text-red-700 font-medium ml-1"
                    >
                      Back to www.nationaltbconference.org
           </NavLink>
      </div>
    </div>
    </>
  
  );
};
