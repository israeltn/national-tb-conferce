import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { FaRegEdit } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

export const AuthorAbstracts = () => {
 const [viewAbstract, setAbstracts] = useState([]);
 const [loading, setLoading] = useState(true);
 const [currentPage, setCurrentPage] = useState(1);
 const [lastPage, setLastPage] = useState(1);
 const [searchInput, setSearchInput] = useState(''); // Step 1: Add state for search input

 useEffect(() => {
  axios.get("/sanctum/csrf-cookie").then((res) => {
    axios.get(`/api/all_author_abstracts?page=${currentPage}`).then(res=>{
      if (res.status === 200) {
        setAbstracts(res.data.abstracts);
        setLastPage(res.data.pagination.last_page);          
        setCurrentPage(res.data.pagination.current_page);
        setLoading(false);
      }
    });
  });
}, [currentPage, searchInput]);


 const nextPage = () => {
  setCurrentPage(currentPage + 1);
};

const prevPage = () => {
  setCurrentPage(currentPage - 1);
};


// Step 2: Create a search function

const filteredAbstracts = viewAbstract.filter(item =>
  
  Object.values(item).some(field =>
    typeof field === "string" && field.toLowerCase().includes(searchInput.toLowerCase())
  )
);

const handleDelete = (id) => {
  if (window.confirm("Are you sure you want to delete this abstract?")) {
    // Perform deletion logic, for example, send a DELETE request to the server
    axios.delete(`/api/delete-abstract/${id}`)
      .then((res) => {
        // Handle successful deletion, for example, update state or show a success message
        console.log("Abstract deleted successfully");
        setLoading(false);       
        swal("Success", res.data.message, "success");
        
        setAbstracts(prevState => prevState.filter(item => item.id !== id));
        // You may want to refresh the abstract list after deletion
        // You can do this by fetching the updated list from the server or updating state directly
      })
      .catch((error) => {
        // Handle error, for example, show an error message
        console.error("Error deleting abstract:", error);
      });
  }
};

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
          <td className="pl-6 py-4 whitespace-nowrap text-start text-sm">
            <div className="text-sm text-gray-900">{i + 1}</div>
          </td>
          <td className="pl-6 py-4 whitespace-nowrap text-start text-sm">
            <div className="text-sm text-gray-900">NTBC-0{item.id}</div>
          </td>

          <td className="px-4 w-1/2 py-4   text-start text-sm">            
            <div className="text-start text-xs">
              <div className="text-xs text-start  text-gray-900"></div>
              {item.abstract_title}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-start text-sm ">
            
              <div className="text-start text-sm">
                <div className="text-xs font-medium text-start text-gray-900"></div>
                {item.orgnization}
              </div>
            
          </td>

          <td className="px-6 py-4 whitespace-nowrap text-start  text-sm text-gray-500">
            {item.abstract_thematic}
          </td>

          <td className="px-6 py-4 whitespace-nowrap text-start text-xs">
            <div className="flex text-start text-xs">
              <div className="text-start text-xs">
                <div className="text-sm  text-start  text-gray-900">
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

          <td className="flex justify-center space-x-0 items-center text-center px-1 py-4 whitespace-nowrap text-sm font-medium">
                      
            <Link
                to={`/userdashboard/view-abstract/${item.id}`}
                className="text-green-600 px-1 hover:text-green-900 ml-2"
              >
                 <FiEye className="w-5 h-5"  />
              
            </Link>
            <Link
                to={`/userdashboard/edit-abstract/${item.id}`}
                className="text-yellow-600 px-2 hover:text-yellow-900 ml-2"
              >
                  <FaRegEdit className="w-5 h-5" />
              
            </Link>

            <button
              onClick={() => handleDelete(item.id)}
              className="text-red-600 px-2 hover:text-red-900 ml-2"
            >
              <RiDeleteBin6Line className="w-5 h-5"  />
            </button>
            
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
          <h2 className="text-gray-600 mt-2 lg:mt-8 md:text-xl text-sm font-semibold text-center">
            All Abstracts
          </h2>
        </div>
        <div className=" flex  items-end pt-2 sm:pt-4 md:pt-4 lg:pt-5 ">
          <input
            type="text"
            placeholder="Search Abstracts..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="border-2 border-gray-300 bg-white h-8 px-5 pr-16 rounded-lg text-sm focus:outline-none"
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
