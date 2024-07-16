import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

export const AbstractReviewers = () => {
  const [reviewers, setReviewers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios.get("/sanctum/csrf-cookie").then(() => {
      axios.get(`/api/view-reviewers`).then((res) => {
        if (res.status === 200) {
          setReviewers(res.data.reviewers);
          setLoading(false);
        }
      });
    });
  }, []);

  const filteredReviewers = reviewers.filter((item) =>
    Object.values(item).some(
      (field) =>
        typeof field === "string" &&
        field.toLowerCase().includes(searchInput.toLowerCase())
    )
  );


  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this abstract?")) {
      axios.delete(`/api/delete-user/${id}`)
        .then((res) => {
          console.log("Abstract deleted successfully");
          setLoading(false);
          swal("Success", res.data.message, "success");
          setReviewers((prevState) =>
            prevState.filter((item) => item.id !== id)
          );
        })
        .catch((error) => {
          console.error("Error deleting abstract:", error);
        });
    }
  };

  if (loading) {
    return (
      <div className="text-center max-w-screen-xl max-h-screen-[72] mx-auto justify-center items-center">
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
  }

  return (
    <div className="flex mx-3 mt-2 flex-col">
      <div className="md:flex justify-start w-[85%]   my-2 sm:mt-2">
        <div className="flex w-1/2 md:justify-start md:items-start text-center">
          <h2 className="text-gray-600 mt-2 lg:mt-8 md:text-xl text-sm font-semibold text-center">
            Abstract Users
          </h2>
        </div>
        <div className="flex justify-end w-1/2 space-x-2 items-center  pt-2 sm:pt-4 md:pt-4 lg:pt-5">
        
          <button className="h-8 items-center text-center bg-green-500 hover:bg-green-600 px-2 py-1 md:text-md text-sm rounded-md text-white md:font-semibold tracking-wide cursor-pointer">
            <Link to="/dashboard/adduser">Add User</Link>
          </button>
          <div className=" flex  items-center w-[20px] ">
          <input
            type="text"
            placeholder="Search User..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="border-2 border-gray-300 bg-white h-8 w-[150px] text-center rounded-lg text-sm focus:outline-none"
          />
        </div>
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
                    S/N
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Firstname
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Lastname
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
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredReviewers.map((item, i) => (
                  <tr key={i}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {i + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {item.firstname} 
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                         {item.lastname}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{item.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                      >
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm uppercase text-gray-500">
                    
                      {
                      item.role === 'user' ? 'Abstract Author' : 
                      item.role === 'admin' ? 'Abstract Super Admin' : 
                      item.role === 'reviewer' ? 'Abstract Reviewer' : 
                      item.role=== 'board' ? 'Abstract Committee' : item.role}
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap text-sm uppercase text-gray-500">
                      {item.role}
                    </td> */}
                    
                    <td className="flex justify-center space-x-0 items-center text-center px-1 py-4 whitespace-nowrap text-sm font-medium">
                    <Link
                       to={`/dashboard/update-user/${item.id}`}
                        className="text-yellow-600 px-2 hover:text-yellow-900 ml-2"
                      >
                          <FaRegEdit className="w-5 h-5" />
                      
                    </Link>
                      {/* <Link
                        to={`/dashboard/update-user/${item.id}`}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </Link> */}
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-600 px-2 hover:text-red-900 ml-2"
                      >
                        <RiDeleteBin6Line className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
