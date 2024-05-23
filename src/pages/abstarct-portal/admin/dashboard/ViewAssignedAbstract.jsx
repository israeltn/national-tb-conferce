/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { baseURL } from "../../../../baseulr";

export const ViewAssignedAbstract = (props) => {
  const url= baseURL;
  const navigate = useNavigate();  
 const [abstractInput, setAbstract] = useState();
  const [loading, setLoading] = useState(true);
 
//   const [errorlist, setError] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/api/view-single-approved-abstract/${id}`).then((res) => {
      if (res.data.status === 200) {
            console.log(res.data.abstract);
        setAbstract(res.data.abstract);
      }
      else if(res.data.status === 404)                 
      {
      swal("Error",res.data.message, "error"); 
      // toast.error(res.data.message);
      navigate("/dashboard/abstracts"); 
      }
      setLoading(false);
    });
  }, [id, navigate]);
  
              

  if (loading) {
    return (
      <div className="text-center max-w-screen-xl max-h-screen-[72] mx-auto justify-center items-center ">
        <div role="status" className="mt-[20rem]">
          <svg
            aria-hidden="true"
            className="inline w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white justify-center items-center mx-3 mt-12 ">
      <div className="container m-auto px-6 space-y-4 md:px-12 lg:px-32">
        <div className="py-2 px-4 mx-auto max-w-screen-xl text-center lg:pt-4 lg:px-6">
          <h2 className="text-2xl dark:bg-gray-900 font-bold md:text-xl">
            Abstract Details
          </h2>
        </div>

        <div className="flex w-full justify-end">
          
          <div className="items-end  ">
            <label
              className="flex space-x-2 tracking-wide text-red-700 text-md font-bold"
              for="grid-first-name"
            >
              <Link
                to={`${url}/${abstractInput.abstractpost.image}`}
                target="_blank"
                 className=" stroke-red-700 w-6 h-6 hover:stroke-green-700"
              >
                <span>View Uploaded File</span>
              </Link>
              <Link
                to={`${url}/${abstractInput.abstractpost.image}`}
                target="_blank"
                className="text-indigo-600 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className=" stroke-red-700 w-6 h-6 hover:stroke-green-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </Link>
            </label>
          </div>
        </div>

        <div className="container justify-center items-center ">
          <form            
            className="w-full  justify-center items-center max-w-screen-xl mx-auto "
          >
          <div className="mb-2  justify-center items-center">
              <label
                className="uppercase tracking-wide text-red-700 text-sm font-bold mb-2"
                for="grid-first-name"
              >
                Abstract Information
              </label>
          </div>
            <div className="flex w-auto mb-4 "></div>
            <div className="full bg-slate-300 h-[0.1rem]"></div>
            <div className="flex flex-wrap mt-2 -mx-3 mb-4">
              <div className="flex px-3  flex-wrap w-[10rem] -mx-3 justify-center items-center">
                <div className="px-3  w-full justify-center items-center ">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-prefex"
                  >
                    Prefix
                  </label>
                  <div className="">
                    <p className=" w-full font-medium text-sm text-gray-900  focus:ring-blue-500 focus:border-blue-500    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  
                      {abstractInput.abstractpost.prefex}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3  md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Surname
                </label>
                <p className=" w-full font-medium text-sm text-gray-900  focus:ring-blue-500 focus:border-blue-500    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  
                  {abstractInput.abstractpost.surname}
                </p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  First Name
                </label>
                <p className=" w-full font-medium text-sm text-gray-900  focus:ring-blue-500 focus:border-blue-500    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  {" "}
                  {abstractInput.abstractpost.firstname}{" "}
                </p>
              </div>
            </div>

            <div className="full bg-slate-300 h-[0.1rem]"></div>

            <div className="flex flex-wrap mt-2  -mx-3 mb-4">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-gender"
                >
                  Sex
                </label>
                <p className=" w-full font-medium text-sm text-gray-900  focus:ring-blue-500 focus:border-blue-500    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  {" "}
                  {abstractInput.abstractpost.gender}{" "}
                </p>

                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-phone"
                >
                  Phone
                </label>
                <p className=" w-full font-medium text-sm text-gray-900  focus:ring-blue-500 focus:border-blue-500    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  {" "}
                  {abstractInput.abstractpost.phone}{" "}
                </p>
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Email
                </label>
                <p className=" w-full font-medium text-sm text-gray-900  focus:ring-blue-500 focus:border-blue-500    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  {" "}
                  {abstractInput.abstractpost.email}{" "}
                </p>
              </div>
            </div>

            <div className="full bg-slate-300 h-[0.1rem]"></div>

            <div className="flex flex-wrap mt-2  -mx-3 mb-4">
              <div className="w-full md:w-1/3 px-3 mb-4 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Job Title
                </label>
                <p className=" w-full font-medium text-sm text-gray-900  focus:ring-blue-500 focus:border-blue-500    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  {" "}
                  {abstractInput.abstractpost.jobtitle}{" "}
                </p>
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-orgnization"
                >
                  Organization/Institution/Company
                </label>
                <p className=" w-full font-medium text-sm text-gray-900  focus:ring-blue-500 focus:border-blue-500    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  {" "}
                  {abstractInput.abstractpost.orgnization}{" "}
                </p>
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Work Address
                </label>
                <p className=" w-full font-medium text-sm text-gray-900  focus:ring-blue-500 focus:border-blue-500    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  {" "}
                  {abstractInput.abstractpost.address}{" "}
                </p>
              </div>
            </div>

            <div className="full bg-slate-300 h-[0.1rem]"></div>

            <div className="flex flex-wrap mt-2  -mx-3 mb-4">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-city"
                >
                  City
                </label>
                <p className=" w-full font-medium text-sm text-gray-900  focus:ring-blue-500 focus:border-blue-500    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  {" "}
                  {abstractInput.abstractpost.city}{" "}
                </p>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-city"
                >
                  State
                </label>
                <p className=" w-full font-medium text-sm text-gray-900  focus:ring-blue-500 focus:border-blue-500    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  {" "}
                  {abstractInput.abstractpost.state}{" "}
                </p>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  Country
                </label>
                <p className=" w-full font-medium text-sm text-gray-900  focus:ring-blue-500 focus:border-blue-500    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  {" "}
                  {abstractInput.abstractpost.country}{" "}
                </p>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6 justify-center items-center"></div>
            </div>

            <div className="full bg-slate-300 h-[0.1rem]"></div>

            <div className="mt-12 mb-4  justify-center items-center">
              <label
                className="uppercase tracking-wide text-red-700 text-sm font-bold mb-2"
                for="grid-first-name"
              >
                Abstract Information
              </label>
            </div>
            <div className="full bg-slate-300 h-[0.1rem]"></div>
            <div className="flex flex-wrap -mx-3 mt-2 mb-4">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Abstract Title
                </label>
                <p className=" w-full font-medium text-sm text-gray-900  focus:ring-blue-500 focus:border-blue-500    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  {" "}
                  {abstractInput.abstractpost.abstract_title}{" "}
                </p>
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Abstract Thematic Area
                </label>
                <p className=" w-full font-medium text-sm text-gray-900  focus:ring-blue-500 focus:border-blue-500    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  {" "}
                  {abstractInput.abstractpost.abstract_thematic}{" "}
                </p>
              </div>
            </div>
            <div className="full bg-slate-300 h-[0.1rem]"></div>

            <div className="flex flex-wrap -mx-3 mt-2 mb-4">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                  for="grid-last-name"
                >
                  Co-Author
                </label>
                <p className=" w-full font-medium text-sm text-gray-900  focus:ring-blue-500 focus:border-blue-500    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  {" "}
                  {abstractInput.abstractpost.co_author}{" "}
                </p>
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Other Information
                </label>
                <p className=" w-full font-medium text-sm text-gray-900  focus:ring-blue-500 focus:border-blue-500    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  {" "}
                  {abstractInput.abstractpost.information}{" "}
                </p>
              </div>
            </div>           
             
          </form>
        </div>
      </div>
    </div>
  );
};
