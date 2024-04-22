import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export const ReviewerDashboard = () => {
  //  const [total, setTotal]= useState(null);
  const [userdata, setUserdata] = useState([]);
  //   const [loading, setLoading]= useState(true);

  //   useEffect(() => {
  //      axios.get('/sanctum/csrf-cookie').then(response => {

  //          axios.get(`/api/total-count`).then(res =>{

  //            if(res.status === 200)
  //            {
  //                console.log(res.data.total);
  //                setTotal(res.data.total);

  //            }
  //          });
  //      });

  //     },[]);

  useEffect(() => {
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.get(`/api/user-profile`).then((res) => {
        if (res.status === 200) {
          // // console.log(res.data.user);
          setUserdata(res.data.user);
        }
      });
    });
  }, []);

  return (
    <div>
      <main>
        <div className="pt-6 px-4 bg-gray-100">
          <div class="md:flex items-center justify-between mx-4 my-2 sm:mt-2">
            <div className="flex md:justify-start md:items-start text-center">
              <h2 class="text-gray-600 mt-2 lg:mt-8 md:text-xl text-sm font-semibold text-center">
                Abstract Reviewer Profile
              </h2>
            </div>
            <div class="justify-end items-end pt-2 sm:pt-4 md:pt-4 lg:pt-5 ">
              <button class="justify-center items-center text-center bg-red-700 hover:bg-red-600 px-2 py-1 md:text-md text-sm rounded-md text-white md:font-semibold tracking-wide cursor-pointer">
                <NavLink to="/userdashboard/submitabstract">
                  Edit Profile
                </NavLink>
              </button>
            </div>
          </div>
          <div className="mt-1 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-2">
            <div class="shadow bg-white rounded-lg p-1 sm:p-3  flex flex-wrap ">
              <div class="container lg:w-full sm:w-full md:w-2/3 bg-white  shadow-lg    transform   duration-200 easy-in-out">
                <div class=" h-32 overflow-hidden">
                  <img
                    src={require("../../../../assets/logo.jpg")}
                    className="mr-2  w-full"
                    alt="Windster Logo"
                  />
                </div>
                <div class="flex justify-center px-5  -mt-12">
                  <img
                    class="h-32 w-32 bg-white p-2 rounded-full"
                    src={`https://api.nationaltbconference.org/${userdata.avatar}`}
                    alt=""
                  />
                </div>
                <div class=" ">
                  <div class="text-center px-14">
                    <h2 class="text-gray-800 text-3xl font-bold">
                      {userdata.firstname} {userdata.lastname}
                    </h2>
                    <p class="text-gray-400 mt-2 hover:text-blue-500">
                      @Delegate
                    </p>
                    <p class="mt-2 text-gray-500 text-sm">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>
                  <hr class="mt-6" />
                  <div class="flex justify-center items-center  bg-gray-50 ">
                    <div class="justify-center items-center "></div>
                    <div class="text-center w-1/2 p-4 text-sm hover:bg-gray-100 cursor-pointer">
                      <p class="font-bold text-sm">
                        {" "}
                        <span class="font-bold text-sm">Email: </span>
                        {userdata.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="shadow bg-white rounded-lg p-4 sm:p-6 xl:p-8 ">
              <div className="block items-center justify-start space-y-4">
                <div className="flex-shrink-0">
                  <span className="text-2xl sm:text-xl leading-none font-bold text-red-700">
                    Job Title:
                  </span>
                  <p className="text-sm font-normal text-gray-600">
                    Total Conference Participants
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-2xl sm:text-lg leading-none font-bold text-red-700">
                    Oganisation
                  </span>
                  <p className=" font-normal text-sm text-gray-600">
                    Stop TB Partnership Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
