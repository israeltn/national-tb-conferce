import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

export const Changepassword = () => {
  const location = useLocation();

  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    token: "",
    error_list: [],
    success: false
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get("token");
    const email = searchParams.get("email");

    if (token && email) {
      setData(prevData => ({
        ...prevData,
        email: decodeURIComponent(email),
        token: token
      }));
    }
  }, [location.search]);

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await axios.get("/sanctum/csrf-cookie");
      const response = await axios.post('/api/password/reset', data);
      console.log(response.data);
      setData(prevData => ({
        ...prevData,
        success: true,
        error_list: [] // Clear error list on success
       
      }));
      swal("Success", "Password reset successfully", "success");
    } catch (error) {
      console.error(error);
      setData(prevData => ({
        ...prevData,
        error_list: error.response.data.errors || []
      }));
    }
  };

  return (
    <div className="flex justify-between items-center">
      <div className="pt-12 justify-center items-center mx-auto w-auto md:w-full lg:max-w-md  md:max-w-md">
        <Link
          to="#"
          className="text-xl font-bold justify-center flex items-center px-3"
        >
          <img
            src={require("../../../assets/NationalTBLogo.jpg")}
            className="justify-center flex items-center mb-2"
            alt="Windster Logo"
          />
        </Link>
        <div className="justify-center uppercase mb-3 items-center text-gray-600 text-2xl text-center w-auto font-bold">
          Abstract Portal
        </div>

        <div className="justify-center items-center text-center text-red-600 w-auto font-bold">
          Registration
        </div>
        <div className="bg-white shadow w-full rounded-md">
          {data.success ? (
            <div>Password reset successfully</div>
          ) : (
            <form onSubmit={handleResetPassword}>
              <div className="px-5 py-7 justify-center item-center">
                <label className="font-semibold text-sm text-gray-600 block">
                  New Password
                </label>
                <input  
                  type="password"
                  name="password"
                  value={data.password} 
                  onChange={handleInputChange} 
                  required 
                  className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"
                />
                <span className="pb-2 mb-2 text-xs text-red-600">
                  {data.error_list && data.error_list.password && <p>{data.error_list.password}</p>}
                </span>
              </div>
              <div className="px-5 py-7 justify-center item-center">
                <label className="font-semibold text-sm text-gray-600 block">
                  Confirm Password
                </label>
                <input  
                  type="password"
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleInputChange} 
                  required 
                  className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"
                />
                <span className="pb-2 mb-2 text-xs text-red-600">
                  {data.error_list && data.error_list.confirmPassword && <p>{data.error_list.confirmPassword}</p>}
                </span>
              </div>
              <div className="item-center justify-center flex">
                <button 
                  type="submit"
                  className="transition w-full duration-200 bg-red-700 hover:bg-red-600  focus:ring-opacity-50 text-white py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                >
                  Reset Password
                </button>
              </div>
            </form>
          )}

          <div className="text-center hover:text-red-700">
            <NavLink to="/login">Have an account sign in</NavLink>
          </div>

          <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap">
                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 inline-block align-text-top"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  <span className="inline-block ml-1">Forgot Password</span>
                </button>
              </div>
              <div className="text-center sm:text-right whitespace-nowrap">
                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 inline-block align-text-bottom	"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <span className="inline-block ml-1">Help</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className="grid grid-cols-2 gap-1">
            <div className="text-center sm:text-left whitespace-nowrap">
              <button className="transition duration-200 mx-5 px-5 py-2 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 inline-block align-text-top"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <NavLink
                  to="/"
                  className="inline-block text-red-700 font-medium ml-1"
                >
                  Back to www.nationaltbconference.org
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
