import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const AllApprovedAbstracts = () => {
 const [viewAbstract, setAbstracts] = useState([]);
 const [loading, setLoading] = useState(true);
 const [currentPage, setCurrentPage] = useState(1);
 const [lastPage, setLastPage] = useState(1);
 const [searchInput, setSearchInput] = useState(''); // Step 1: Add state for search input

 useEffect(() => {
    axios.get("/sanctum/csrf-cookie").then((res) => {
      axios.get(`api/all-approved-abstracts?page=${currentPage}`).then((res) => {
        if (res.status === 200) {
          // console.log(res.data.abstracts)
          setAbstracts(res.data.abstracts);
          setLastPage(res.data.pagination.last_page);          
          setCurrentPage(res.data.pagination.current_page);
          setLoading(false);
        }
      });
    });
 }, [currentPage]);
 const nextPage = () => {
  setCurrentPage(currentPage + 1);
};

const prevPage = () => {
  setCurrentPage(currentPage - 1);
};

// Step 2: Create a search function
// const filteredAbstracts = viewAbstract.filter(item =>
//   item.abstract_title.toLowerCase().includes(searchInput.toLowerCase()),

// );
// Step 2: Create a search function
const filteredAbstracts = viewAbstract.filter(item =>
  Object.values(item).some(field =>
    typeof field === "string" && field.toLowerCase().includes(searchInput.toLowerCase())
  )
);


// Step 3: Update the display logic to use filtered results


  let display_Abstractsdata = "";
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
          <span className="sr-only">Abstracts Loading...</span>
        </div>
      </div>
    );
  } else {
    
   display_Abstractsdata = filteredAbstracts.map((item, i) => {
      return (
        <>
        <tr key={i}>
          <td className="pl-6 py-4 whitespace-nowrap text-start text-xs ">
            <div className="text-xs  text-gray-900">{i + 1}</div>
          </td>
          <td className="pl-6 py-4 whitespace-nowrap text-start text-xs ">
            <div className="text-xs  text-gray-900">NTBCAB-0{item.id}</div>
          </td>

          <td className="px-4 w-1/2 py-4   text-start text-xs ">            
            <div className="text-start text-xs">
              <div className="text-xs text-start  text-gray-900"></div>
              {item.abstract_title}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-start text-xs  ">
            
              <div className="text-start text-xs ">
                <div className="text-xs  font-medium text-start text-gray-900"></div>
                {item.orgnization}
              </div>
            
          </td>

          <td className="px-6 py-4 whitespace-nowrap text-start  text-xs  text-gray-500">
            {item.abstract_thematic}
          </td>

          <td className="px-6 py-4 whitespace-nowrap text-start text-xs">
            <div className="flex text-start text-xs">
              <div className="text-start text-xs">
                <div className="text-xs   text-start  text-gray-900">
                  {item.firstname} {item.surname}
                </div>
              </div>
            </div>
          </td>

          <td className="px-6 py-4 whitespace-nowrap text-start text-xs">
            <span
              className={`px-2 uppercase inline-flex text-xs leading-5 font-semibold rounded-full ${
                item.status === "approved" ? "bg-green-100 text-green-800" : 
                          item.status === "assigned" ? "bg-yellow-100 text-yellow-800" :
                          "bg-red-100 text-red-800"
              }`}
            >
              {item.status}
            </span>
          </td>

          <td className="justify-center items-center text-center px-6 py-4 whitespace-nowrap text-xs  font-medium">
            {/* <Link
              to={`https://api.nationaltbconference.org/${item.image}`}
              target="_blank"
              className="text-indigo-600 px-2 hover:text-indigo-900 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className=" stroke-red-700 w-6 h-6"
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
            </Link> */}
            <Link
              to={`/dashboard/view-abstract/${item.id}`}
              className="text-indigo-600 px-2 hover:text-indigo-900 "
            >
             <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className=" stroke-green-600 w-6 h-6 hover:stroke-green-800"
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
            
          </td>
        </tr>
       
        </>

      );

    });
  }

  return (
    
    <div className="flex mx-3 mt-2 flex-col">
     
      <div className="md:flex items-center justify-between mx-4 my-2 mt-4">

        <div className="flex  text-center">
          <h2 className="text-gray-600 mt-2 lg:mt-8 md:text-xl text-xs  font-semibold text-center">
          Approved Abstracts
          </h2>
        </div>
        <div className=" flex  items-end pt-2 sm:pt-4 md:pt-4 lg:pt-5 ">
          <input
            type="text"
            placeholder="Search Abstracts..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="border-2 border-gray-300 bg-white h-8 px-5 pr-16 rounded-lg text-xs  focus:outline-none"
          />
        </div>
       
      </div>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        {display_Abstractsdata.length > 0 ? (
          <div className="shadow md:overflow-hidden overflow-x-auto border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="pl-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    S/N
                  </th>
                  <th
                    scope="col"
                    className="pl-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Abstract Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Orgnization
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Thematic
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Author
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {display_Abstractsdata}
              </tbody>              
            </table>
           
            <div className="flex font-medium text-xs justify-center items-center space-x-4 m-2">
              <button onClick={prevPage} disabled={currentPage === 1} className="bg-custom-green disabled:hidden bg-custom-dark-green rounded-sm p-1 text-white" >
                Previous
              </button>
              <button onClick={nextPage} disabled={currentPage === lastPage} className="bg-custom-green disabled:hidden bg-custom-dark-green rounded-sm p-1 text-white">
                Next
              </button>
            </div>
            
             
     
          </div>
          ) : (
            <div className="flex justify-center items-center h-72">
            <p className="text-gray-500 text-lg">No abstracts available</p>
          </div>
            )}
        </div>
      </div>
      
   
    </div>
   
  );
};
