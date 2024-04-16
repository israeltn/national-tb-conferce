import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export const UserDashboard = () => {

    const [userdata, setUserdata] = useState([]);
    const [abstractdata, setAbstracts] = useState([]);
    const [loading, setLoading]= useState(true);
    


    useEffect(() => {
        axios.get('/sanctum/csrf-cookie').then(response => {
            setLoading(true);
            axios.get(`/api/user-profile`).then(res=>{
              if(res.status === 200) 
              {
                      //  console.log(res.data.user);
                       setUserdata(res.data.user);
                       setLoading(false);
                 
              }
            });
        }); 
        
       
       },[]);

       useEffect(() => {
          axios.get('/sanctum/csrf-cookie').then(response => {
              axios.get(`/api/author_abstracts`).then(res=>{
                if(res.status === 200) 
                {
                     console.log(res.data.abstracts);
                    setAbstracts(res.data.abstracts);
                   
                    setLoading(false);
                }
              });
          }); 

        },[]);
       if(loading)
       {
         return <div className='text-center max-w-screen-xl max-h-screen-[72] mx-auto justify-center items-center '>
             <div role="status" className="mt-[20rem]">
         <svg aria-hidden="true" className="inline w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
             <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
         </svg>
         <span class="sr-only">Loading...</span>
       </div>
         </div>
       }
       
  return (
    <div>
       <main>
            <div className="pt-6 px-4 bg-gray-100">
                <div class="md:flex items-center justify-between mx-4 my-2 sm:mt-2">
                    <div className='flex md:justify-start md:items-start text-center'>
                         <h2 class="text-gray-600 mt-2 lg:mt-8 md:text-xl text-sm font-semibold text-center">Delegate Profile</h2>
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
                        <div class="overflow-hidden h-44" >
                        <img src= {require('../../../../assets/dashboard.png')} className="mr-2  w-full" alt="Windster Logo"/>
                        </div>
                        <div class="flex justify-center px-5  -mt-12">
                            <img class="h-32 w-32 bg-white p-2 rounded-full" src={`https://api.nationaltbconference.org /${userdata.avatar}`} alt="" />

                        </div>
                        <div class=" ">
                            <div class="text-center px-14">
                                <h2 class="text-gray-800 text-3xl font-bold">{userdata.firstname} {userdata.lastname}</h2>
                                {/* <p class="text-gray-400 mt-2 hover:text-blue-500">@Abstract Author</p>
                                <p class="mt-2 text-gray-500 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}
                            </div>
                            <hr class="mt-6" />
                            <div class="flex justify-center items-center  bg-gray-50 ">
                                
                                <div class="justify-center items-center "></div>
                                <div class="text-center w-1/2 p-4 text-sm hover:bg-gray-100 cursor-pointer">
                                    <p class="font-bold text-sm"> <span class="font-bold text-sm">Email: </span >{userdata.email}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="shadow bg-white rounded-lg p-4 sm:p-6 xl:p-8 ">
                                    <div className='flex justify-around items-center '>
                                      <span className='uppercase font-bold'>latest Abstarct</span>
                                    </div>
                               {abstractdata.length > 0 ? (
                                      abstractdata.map((abstract, i) => (
                                          <div key={i} className="block items-center justify-start space-y-1 mb-4">
                                              <div className="flex-shrink-0 text-sm">
                                                  <span className="text-base leading-none font-bold text-red-700"> 
                                                  <span className='text-sm text-black'>{i + 1}.</span> 
                                                  Title: 
                                                  <span className='text-sm text-black font-normal'> {abstract.abstract_title}</span> </span>
                                                  
                                              </div>
                                              <div className="flex-shrink-0">
                                                  <span className="text-sm leading-none font-bold text-red-700 px-3">Thematic Area: <span className='text-sm text-black font-normal'>{abstract.abstract_thematic}</span> </span>
                                                  
                                              </div>
                                              {/* Add other properties you want to display */}
                                          </div>
                                      ))
                                  ) : (
                                      <div className="flex justify-around items-center mt-12">
                                          <p className="text-sm ">No abstracts found sumbit a new abstract.</p>
                                      </div>
                                  )}



                 
                  </div>
                  
               </div>            
                    
              
             
               
            </div>
   </main>
    </div>
  )
}

