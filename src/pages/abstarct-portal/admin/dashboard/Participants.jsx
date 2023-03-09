import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Participants = () => {
  const [viewParticipants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.get(`/api/view-participants`).then((res) => {
        if (res.status === 200) {
          console.log(res.data.participants);
          setParticipants(res.data.participants);
          setLoading(false);
        }
      });
    });
  }, []);

  var display_Participantsdata = "";
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
          <span className="sr-only">Participant Loading...</span>
        </div>
      </div>
    );
  } else {
    display_Participantsdata = viewParticipants.map((item, i) => {
      return (
        <tr key={i}>
          <td className="pl-6 py-4 whitespace-nowrap text-start">
            <div className="text-sm text-gray-900">{i + 1}</div>
          </td>
          {/* <td className="px-6 py-4 whitespace-nowrap">
                                     <div className="text-sm font-medium text-gray-900">{item.id}</div>
                                </td> */}
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="">
                <div className="text-sm   text-gray-500">
                  {item.firstname} {item.surname}
                </div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div
              className="px-2 inline-flex text-center text-sm leading-5
                                      text-gray-500 rounded-sm  "
            >
              {item.email}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="px-2 inline-flex text-center text-sm    text-gray-500 rounded-sm  ">
              {item.city}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="px-2 inline-flex text-center text-sm    text-gray-500 rounded-sm  ">
              {item.country}
            </div>
          </td>

          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-center text-sm leading-5   text-gray-500 rounded-sm  ">
              {item.jobtitle}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span
              className="px-2 inline-flex text-center text-sm leading-5
                                      text-gray-500 rounded-sm  "
            >
              {item.orgnization}
            </span>
          </td>

          <td className="pr-6 py-4 whitespace-nowrap  text-sm ">
            <Link to="#" className="text-indigo-600  hover:text-indigo-900">
              {item.phone}
            </Link>
          </td>
        </tr>
      );
    });
  }

  return (
    <div className="flex mx-3 mt-2 flex-col">
      <div className="md:flex items-center justify-between mx-4 my-2 sm:mt-2">
        <div className="flex md:justify-start md:items-start text-center">
          <h2 className="text-gray-600 mt-2 lg:mt-8 md:text-xl text-sm font-bold  text-center">
            Delegates
          </h2>
        </div>
        <div className="justify-end items-end pt-2 sm:pt-4 md:pt-4 lg:pt-5 ">
          {/* <button className="justify-center items-center text-center bg-red-700 hover:bg-red-600 px-2 py-1 md:text-md text-sm rounded-md text-white md:font-semibold tracking-wide cursor-pointer">Add Abstarct</button> */}
        </div>
      </div>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow md:overflow-hidden overflow-x-auto border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    City
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Country
                  </th>

                  <th
                    scope="col"
                    className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Job Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Organization
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Phone
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {display_Participantsdata}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
