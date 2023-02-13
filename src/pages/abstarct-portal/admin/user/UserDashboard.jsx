import React from 'react'
import { NavLink } from 'react-router-dom';
export const UserDashboard = () => {
  return (
    <div>
       <main>
            <div className="pt-6 px-4 bg-gray-100">
                <div class="md:flex items-center justify-between mx-4 my-2 sm:mt-2">
                    <div className='flex md:justify-start md:items-start text-center'>
                         <h2 class="text-gray-600 mt-2 lg:mt-8 md:text-xl text-sm font-semibold text-center">Participant Profile</h2>
                    </div>
                              <div class="justify-end items-end pt-2 sm:pt-4 md:pt-4 lg:pt-5 ">
                                   <button class="justify-center items-center text-center bg-red-700 hover:bg-red-600 px-2 py-1 md:text-md text-sm rounded-md text-white md:font-semibold tracking-wide cursor-pointer">
                                    <NavLink to="/userdashboard/submitabstract">Submit Abstarct</NavLink> 
                                    </button>
                                   
                              </div>
               </div>
               <div className="mt-1 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-2">
                  <div class="shadow bg-white rounded-lg p-1 sm:p-3  flex flex-wrap ">
                    <div class="container lg:w-full sm:w-full md:w-2/3 bg-white  shadow-lg    transform   duration-200 easy-in-out">
                        <div class=" h-32 overflow-hidden" >
                            <img class="w-full" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
                        </div>
                        <div class="flex justify-center px-5  -mt-12">
                            <img class="h-32 w-32 bg-white p-2 rounded-full   " src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />

                        </div>
                        <div class=" ">
                            <div class="text-center px-14">
                                <h2 class="text-gray-800 text-3xl font-bold">Mohit Dhiman</h2>
                                <a class="text-gray-400 mt-2 hover:text-blue-500" href="https://www.instagram.com/immohitdhiman/" target="BLANK()">@immohitdhiman</a>
                                <p class="mt-2 text-gray-500 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                            <hr class="mt-6" />
                            <div class="flex  bg-gray-50 ">
                                <div class="text-center w-1/2 p-4 text-sm hover:bg-gray-100 cursor-pointer">
                                    <p><span class="font-semibold">Mobile: </span>+2347056346465</p>
                                </div>
                                <div class="border"></div>
                                <div class="text-center w-1/2 p-4 text-sm hover:bg-gray-100 cursor-pointer">
                                    <p> <span class="font-semibold">Email: </span>israel@stoptbnigeria.org</p>
                                </div>

                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="shadow bg-white rounded-lg p-4 sm:p-6 xl:p-8 ">
                     <div className="block items-center justify-start space-y-4">
                        <div className="flex-shrink-0">
                           <span className="text-2xl sm:text-xl leading-none font-bold text-red-700">Abstract Title:</span>
                           <p className="text-sm font-normal text-gray-600">Total Conference Participants</p>
                        </div>
                        <div className="flex-shrink-0">
                           <span className="text-2xl sm:text-lg leading-none font-bold text-red-700">Abstract Thematic Area:</span>
                           <p className=" font-normal text-sm text-gray-600">Patient Advocacy and Community Engagement in TB Control</p>
                        </div>
                       
                     </div>
                  </div>
                  
               </div>            
                    
              
             
               
            </div>
   </main>
    </div>
  )
}

