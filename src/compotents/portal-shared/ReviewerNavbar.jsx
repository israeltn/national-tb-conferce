import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

export const ReviewerNavbar = () => {
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);
  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    axios.get("/sanctum/csrf-cookie").then(() => {
      axios.get(`/api/user-profile`).then((res) => {
        if (res.status === 200) {
          setUserdata(res.data.user);
        } else if (res.status === 401) {
          localStorage.removeItem("auth_token");
          localStorage.removeItem("auth_name");
          localStorage.removeItem("auth_role");
          navigate("/login");
        } else {
          // Handle other status codes if needed
        }
      });
    });
  }, [navigate]);

  const logoutSubmit = (e) => {
    e.preventDefault();

    axios.post(`/api/logout`).then((res) => {
      if (res.data.status === 200) {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_name");
        localStorage.removeItem("auth_role");
        swal("Success", res.data.message, "success");
        navigate("/login");
      }
    });
  };
  return (
    <div>
      <nav className="bg-white  border-b-4 border-gray-200 fixed z-30 w-full">
        <div className="px-3 py-1 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                onClick={() => setNavbar(!navbar)}
                id="toggleSidebarMobile"
                aria-expanded="true"
                aria-controls="sidebar"
                className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
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
              <Link
                to="/"
                className="text-xl no-underline font-bold flex items-center lg:ml-2.5"
              >
                {/* logo */}
                 <img
                  src={require("../../assets/ntbc-logo-4.png")}
                  className="mr-2 h-10 w-40"
                  alt="Windster Logo"
                />
              </Link>
              <form
                action="#"
                method="GET"
                className="hidden lg:block lg:pl-32"
              >
                <label for="topbar-search" className="sr-only">
                  Search
                </label>
                <div className="mt-1 relative lg:w-64">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="email"
                    id="topbar-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center">
              <button
                id="toggleSidebarMobileSearch"
                type="button"
                className="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg"
              >
                <span className="sr-only">Search</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              {/* <div className="hidden lg:flex items-center">
                    <span className="text-base font-normal text-gray-500 mr-5">Open source ❤️</span>
                    <div className="-mb-1">
                       <Link className="github-button no-underline" to="#" data-color-scheme="no-preference: dark; light: light; dark: light;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star themesberg/windster-tailwind-css-dashboard on GitHub">
                           Star
                      </Link>
                    </div>
                 </div> */}
              <Link
                to="#"
                className="hidden no-underline sm:inline-flex ml-5 text-black  focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3"
              >
                <span className="px-2">Welcome {userdata.firstname} </span>
                <div className="flex-shrink-0 p-1 hover:bg-custom-green rounded-full">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={`https://api.nationaltbconference.org/${userdata.avatar}`}
                    alt={userdata.firstname}
                  />
                </div>
              </Link>
              <div className="bg-custom-green rounded-sm bg-custom-dark-green cursor-pointer">
                <button
                  type="button"
                  onClick={logoutSubmit}
                  className=" py-0.5 px-2 text-white text-center font-medium text-sm"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="my-2 shadow-md">
        <aside
          id="sidebar"
          className={`fixed block z-20 h-full top-0 left-0 pt-12 md:pt-16 lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75" aria-label="Sidebar"
             ${navbar ? "block" : "hidden"}`}
        >
          <div className="relative flex-1 flex flex-col lg:min-h-0 min-h-screen border-4  border-gray-200 bg-white pt-0">
            <div className="flex-1 flex h-full flex-col pt-12 md:pt-8 pb-4 overflow-y-auto">
              {/* Admin Side bar */}
              <div className="flex-1 h-full px-3 bg-white">
                <ul className="space-y-2 pb-2">
                  <li>
                    <form action="#" method="GET" className="lg:hidden">
                      <label for="mobile-search" className="sr-only">
                        Search
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg
                            className="w-5 h-5 text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                          </svg>
                        </div>

                        <input
                          type="text"
                          name="email"
                          id="mobile-search"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 block w-full pl-10 p-2.5"
                          placeholder="Search"
                        />
                      </div>
                    </form>
                  </li>
                  <li>
                    <NavLink
                      to="/reviewerdashboard"
                      className="text-base no-underline text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                    >
                      <svg
                        className="w-6 h-6 text-gray-500 group-hover:text-red-600 transition duration-75"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                      </svg>
                      <span className="ml-3 ">Dashboard</span>
                    </NavLink>
                  </li>

                  <li>
                    <Link
                      to="asignedabstract"
                      className="text-base no-underline text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                    >
                      <svg
                        className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-red-600 transition duration-75"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                        <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                      </svg>
                      <span className="ml-3 flex-1 whitespace-nowrap">
                        Assigned Abstracts
                      </span>
                      <span className="bg-gray-200 text-gray-800 ml-3 text-sm font-medium inline-flex items-center justify-center px-2 rounded-full"></span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="approved-abstracts"
                      className="text-base no-underline text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                    >                     
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-red-600 transition duration-75"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                        />
                      </svg>

                      <span className="ml-3 flex-1 whitespace-nowrap">
                        Abstract Suggested
                      </span>
                    </Link>
                  </li>
                </ul>
                {/* <div className="space-y- pt-2">                
                 
                  <Link to="#" target="_blank" className="text-base no-underline text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
                     <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-red-600 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path>
                     </svg>
                     <span className="ml-3">Feedback to Authors</span>
                  </Link>
               </div> */}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
