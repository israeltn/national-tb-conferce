import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Dashboard = () => {
  const [viewParticipants, setParticipants] = useState(null);
  const [totalabstracts, setTotalabstracts] = useState(null);
  const [totalauthors, setTotalauthors] = useState(null);
  const [totalparticipant, setTotalparticipant] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.get(`/api/total-count`).then((res) => {
        if (res.status === 200) {
          console.log(res.data.totals);
          // 'users' => User::count(),
          setTotalabstracts(res.data.abstracts);
          setTotalauthors(res.data.authors);
          setTotalparticipant(res.data.participant);
        }
      });
    });
  }, []);

  useEffect(() => {
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.get(`/api/view-participants`).then((res) => {
        if (res.status === 200) {
          //  console.log(res.data.participants);
          setParticipants(res.data.participants.data);
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
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm font-medium text-gray-900">{i + 1}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
                                     <div className="text-sm font-medium text-gray-900">00{item.id}</div>
                                </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="items-center">
                <div className="text-sm font-medium text-gray-900">
                  {item.firstname} {item.surname}
                </div>
                <div className="text-sm text-gray-500">{item.email}</div>
              </div>
            </div>
          </td>

          <td className="px-6 py-4 whitespace-nowrap">
            <span
              className="px-2 inline-flex text-xs leading-5
                                    font-semibold rounded-sm bg-red-100 text-red-800"
            >
              {item.city}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.jobtitle}</div>
            <div className="text-sm text-gray-500">{item.orgnization}</div>
          </td>

          <td className="pr-6 py-4 whitespace-nowrap  text-sm font-medium">
            <Link to="#" className="text-indigo-600  hover:text-indigo-900">
              {item.phone}
            </Link>
          </td>
        </tr>
      );
    });
  }

  return (
    <div>
      <main>
        <div className="pt-10 px-10 bg-gray-100">
          <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <div className=" h-[90px] shadow bg-white rounded-lg p-4">
              <div className="flex justify-between space-x-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-14 h-14 stroke-red-900"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>

                <div className="flex-shrink-0">
                  <span className=" text-sm leading-none font-bold text-black">
                    {totalauthors}
                  </span>
                  <h3 className="text-sm font-normal text-gray-400">
                    Total Abstract Authors{" "}
                  </h3>
                </div>
                <div className="ml-1 w-auto flex items-center justify-end flex-1 text-red-500 text-sm font-bold">
                  {totalauthors === 0 ? (
                    <>0% </>
                  ) : <>0%</> || totalauthors > 0 ? (
                    <>0.1% </>
                  ) : <>0.1%</> || totalauthors > 20 ? (
                    <>1% </>
                  ) : <>1%</> || totalauthors > 40 ? (
                    <>6% </>
                  ) : <>6%</> || totalauthors > 60 ? (
                    <>10% </>
                  ) : <>10%</> || totalauthors > 100 ? (
                    <>20% </>
                  ) : (
                    <>20%</>
                  )}
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="h-[90px] shadow bg-white rounded-lg p-4 sm:p-6 xl:p-8 ">
              <div className="flex items-center justify-between space-x-4">
                <svg
                  class="w-14 h-14 stroke-yellow-400 text-gray-500 flex-shrink-0 group-hover:text-red-600 transition duration-75"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
                <div className="flex-shrink-0">
                  <span className=" text-sm leading-none font-bold text-black">
                    {totalabstracts}
                  </span>
                  <h3 className="text-sm font-normal text-gray-400">
                    {" "}
                    Total Abstract Submitted
                  </h3>
                </div>
                <div className="ml-5 w-0 flex items-center justify-end flex-1 text-pink-500 text-sm font-bold ">
                  {totalabstracts === 0 ? (
                    <>0% </>
                  ) : <>0%</> || totalabstracts > 0 ? (
                    <>0.1% </>
                  ) : <>0.1%</> || totalabstracts > 20 ? (
                    <>1% </>
                  ) : <>1%</> || totalabstracts > 40 ? (
                    <>6% </>
                  ) : <>6%</> || totalabstracts > 60 ? (
                    <>10% </>
                  ) : <>10%</> || totalabstracts > 100 ? (
                    <>20% </>
                  ) : (
                    <>20%</>
                  )}

                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="h-[90px] shadow bg-white  rounded-lg p-4 sm:p-6 xl:p-4 ">
              <div className="flex items-cente justify-between space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.2"
                  stroke="currentColor"
                  class="w-14 h-14 stroke-violet-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                </svg>

                <div className="flex-shrink-0">
                  <span className=" text-sm leading-none font-bold text-black">
                    {totalparticipant}
                  </span>
                  <h3 className="text-sm font-normal text-gray-400">
                    Total Conference Delegates
                  </h3>
                </div>
                <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-600 text-sm font-bold">
                  {totalparticipant === 0 ? (
                    <>0% </>
                  ) : <>0%</> || totalparticipant > 0 ? (
                    <>0.1% </>
                  ) : <>0.1%</> || totalparticipant > 20 ? (
                    <>1% </>
                  ) : <>1%</> || totalparticipant > 40 ? (
                    <>6% </>
                  ) : <>6%</> || totalparticipant > 60 ? (
                    <>10% </>
                  ) : <>10%</> || totalparticipant > 100 ? (
                    <>20% </>
                  ) : (
                    <>20%</>
                  )}
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 ">
            <div className="my-1">
              <div className="flex mx-3 flex-col">
                <div class="md:flex items-center justify-between mx-4 mt-2">
                  <div className="flex md:justify-start md:items-start text-center">
                    <h2 class="text-gray-600 mt-2 my-4 md:text-xl text-sm font-semibold text-center">
                      Latest Delegates
                    </h2>
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
                              City
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
            </div>
            
          </div>

            {/* <div className="flex mx-3 flex-col">
              <div class="md:flex items-center justify-between mx-4 mt-2">
                <div className="flex md:justify-start md:items-start text-center">
                  <h2 class="text-gray-600 mt-2 my-4 md:text-xl text-sm font-semibold text-center">
                    Abstracts Overview
                  </h2>
                </div>
              </div>
              <div className="bg-white shadow rounded-lg p-2 sm:p-6 ">
                <div className="block w-full overflow-x-auto">
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                      <tr>
                        <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                          Top Channels
                        </th>
                        <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                          Users
                        </th>
                        <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px">
                          Percentage
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="text-gray-500">
                        <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                          Organic Search
                        </th>
                        <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                          5,649
                        </td>
                        <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2 text-xs font-medium">
                              30%
                            </span>
                            <div className="relative w-full">
                              <div className="w-full bg-gray-200 rounded-sm h-2">
                                <div
                                  className="bg-cyan-600 h-2 rounded-sm"
                                  style={{ width: 300 }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="text-gray-500">
                        <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                          Referral
                        </th>
                        <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                          4,025
                        </td>
                        <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2 text-xs font-medium">
                              24%
                            </span>
                            <div className="relative w-full">
                              <div className="w-full bg-gray-200 rounded-sm h-2">
                                <div
                                  className="bg-orange-300 h-2 rounded-sm"
                                  style={{ width: 240 }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="text-gray-500">
                        <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                          Direct
                        </th>
                        <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                          3,105
                        </td>
                        <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2 text-xs font-medium">
                              18%
                            </span>
                            <div className="relative w-full">
                              <div className="w-full bg-gray-200 rounded-sm h-2">
                                <div
                                  className="bg-teal-400 h-2 rounded-sm"
                                  style={{ width: 18 }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="text-gray-500">
                        <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                          Social
                        </th>
                        <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                          1251
                        </td>
                        <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2 text-xs font-medium">
                              12%
                            </span>
                            <div className="relative w-full">
                              <div className="w-full bg-gray-200 rounded-sm h-2">
                                <div
                                  className="bg-pink-600 h-2 rounded-sm"
                                  style={{ width: 12 }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="text-gray-500">
                        <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                          Other
                        </th>
                        <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                          734
                        </td>
                        <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2 text-xs font-medium">9%</span>
                            <div className="relative w-full">
                              <div className="w-full bg-gray-200 rounded-sm h-2">
                                <div
                                  className="bg-indigo-600 h-2 rounded-sm"
                                  style={{ width: 9 }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="text-gray-500">
                        <th className="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">
                          Email
                        </th>
                        <td className="border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0">
                          456
                        </td>
                        <td className="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                          <div className="flex items-center">
                            <span className="mr-2 text-xs font-medium">7%</span>
                            <div className="relative w-full">
                              <div className="w-full bg-gray-200 rounded-sm h-2">
                                <div
                                  className="bg-purple-500 h-2 rounded-sm"
                                  style={{ width: 7 }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div> */}
        </div>
      </main>
    </div>
  );
};
