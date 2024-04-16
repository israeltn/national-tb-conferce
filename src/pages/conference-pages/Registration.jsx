import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { toast } from "react-toastify";
import swal from 'sweetalert';


export const Registration = () => {

const navigate  = useNavigate();
const [loading, setLoading] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);

const [participantInput, setRegister] = useState({
  
prefex: '',
  firstname: '',
  surname: '',
  email: '',
  gender:'',
  phone: '',
  jobtitle:'',
  orgnization:'',
  address: '',
  city: '',
  state: '',
  country: '',
  error_list: [],
});

const handleInput = (e) => {
    e.persist();
    setRegister({...participantInput, [e.target.name]: e.target.value})
  }
  const participantSubmit = async(e) => {
    e.preventDefault();  
    setIsSubmitting(true);   
    const data = {
      prefex: participantInput.prefex,
      surname: participantInput.surname,
      firstname: participantInput.firstname,
      gender: participantInput.gender,
      email: participantInput.email,
      phone: participantInput.phone,
      orgnization: participantInput.orgnization,
      jobtitle: participantInput.jobtitle,
      address: participantInput.address,
      city: participantInput.city,
      state: participantInput.state,
      country: participantInput.country

    }
    setLoading(true);
      // Login...
      axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post(`/api/participant`, data).then(res =>{ 
            if(res.data.status === 200) {
           
            swal("Success",res.data.message, "success");
                setLoading(false);             
                navigate("/");
            }
            else if(res.data.status === 401)                 
            {
            swal("Warning",res.data.message, "warning"); 
            // toast.error(res.data.message);
            navigate("/registration"); 
            }
            else if(res.data.status === 500)
            {
             swal("Warning","Server or Network failure", "warning"); 
             // toast.error(res.data.message);
             navigate("/registration"); 
            }
            else{
                setRegister({...participantInput, error_list: res.data.validation_errors});
            }
            setLoading(false);  
            setIsSubmitting(false); 
        });
        
        });

}

if(loading)
{
  return <div className='text-center max-w-screen-xl max-h-screen-[72] mx-auto justify-center items-center '>
      <div role="status" className="mt-[20rem]">
  <svg aria-hidden="true" className="inline w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
  </svg>
  <span className="sr-only">Loading...</span>
</div>
  </div>
}

  return (
     <div className="bg-white justify-center items-center max-w-screen-xl mx-auto">
    <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-56">     
        <div className="py-2 px-4 mx-auto max-w-screen-xl text-center lg:pt-12 lg:px-6">
            <h2 className="text-2xl uppercase dark:bg-gray-900 font-bold md:text-4xl">Conference Registration</h2>
        </div>
              
               <div className="container justify-center items-center max-w-screen-xl mx-auto">
               
                <form onSubmit={participantSubmit}  className="w-full  justify-center items-center max-w-screen-xl mx-auto ">
                    <div className="flex flex-wrap w-[10rem] -mx-3 mb-6 justify-center items-center">
                        <div className="px-3 w-full justify-center items-center ">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-prefex">
                            Prefix
                        </label>
                        <div className="">
                            <select name="prefex" onChange={handleInput} value={participantInput.prefex} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-prefex">
                            <option>Select</option>
                                <option value="Mr">Mr.</option>
                                <option value="Mrs">Mrs.</option>
                                <option value="Ms">Ms.</option>
                                <option value="Miss">Miss.</option>
                                <option value="Dr">Dr.</option>
                                <option value="Prof">Prof.</option>                            
                            </select>
                            <span className="pb-2 mb-2 text-sm text-red-600">{participantInput.error_list.prefex}</span>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Surname
                        </label>
                        <input type="text" name="surname"  onChange={handleInput} value={participantInput.surname} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" required/>
                        <span className="pb-2 mb-2 text-sm text-red-600">{participantInput.error_list.surname}</span>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            First Name
                        </label>
                        <input type="text" name="firstname" onChange={handleInput} value={participantInput.firstname} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" required />
                        <span className="pb-2 mb-2 text-sm text-red-600">{participantInput.error_list.firstname}</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-gender">
                            Sex
                        </label>
                        <div className="relative">
                            <select type="text" name="gender" onChange={handleInput} value={participantInput.gender} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required id="grid-gender">
                            <option>Select</option>
                            <option value="Male">Male</option>
                            <option selected="selected" value="Female">Female</option>
                            </select>
                            <span className="pb-2 mb-2 text-sm text-red-600">{participantInput.error_list.gender}</span>
                        </div>
                        
                    {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-phone">
                            Phone
                        </label>
                        <input type="tel" name="phone" onChange={handleInput} value={participantInput.phone} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-phone" required />
                        <span className="pb-2 mb-2 text-sm text-red-600">{participantInput.error_list.phone}</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Email
                        </label>
                        <input type="email" name="email" onChange={handleInput} value={participantInput.email} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" required  />
                        <p className="text-gray-600 text-xs italic">Organization email or Personal email</p>
                                <span className="pb-2 mb-2 text-sm text-red-600">{participantInput.error_list.email}</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Job Title
                        </label>
                        <input type="text" name="jobtitle" onChange={handleInput} value={participantInput.jobtitle} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" required  />
                         {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-orgnization">
                            Organization/Institution/Company
                        </label>
                        <input type="text" name="orgnization" onChange={handleInput} value={participantInput.orgnization} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-orgnization" required  />
                        <span className="pb-2 mb-2 text-sm text-red-600">{participantInput.error_list.orgnization}</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Work Address
                        </label>
                        <input type="text" name="address" onChange={handleInput} value={participantInput.address} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" required  />
                        <span className="pb-2 mb-2 text-sm text-red-600">{participantInput.error_list.address}</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-8">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            City
                        </label>
                        <input type="text" name="city" onChange={handleInput} value={participantInput.city} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" required  />
                        <span className="pb-2 mb-2 text-sm text-red-600">{participantInput.error_list.city}</span>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            State
                        </label>
                        <input type="text" name="state" onChange={handleInput} value={participantInput.state} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city"required  />
                        <span className="pb-2 mb-2 text-sm text-red-600">{participantInput.error_list.state}</span>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Country
                        </label>
                        <input type="text" name="country" onChange={handleInput} value={participantInput.country} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" required  />
                        <span className="pb-2 mb-2 text-sm text-red-600">{participantInput.error_list.country}</span>
                        </div>
                    </div>
                    {/* <div disabled={loading} className="max-w-screen-xl mb-2 mx-auto text-center w-44 justify-center py-2 px-2 items-center bg-red-800 text-white border-gray-800 rounded-md ">
                        <button type="submit" className="flex justify-center items-center text-center max-w-screen-xl mx-auto">
                        {loading ? "Submitting Data..." : "Submit"}</button>
                    </div> */}
                    <div className="item-center justify-center flex">
                <button  type="submit" disabled={isSubmitting} className="max-w-screen-xl mb-2 mx-auto text-center w-44 justify-center py-2 px-2 items-center bg-red-800 text-white border-gray-800 rounded-md">
                  <span className="inline-block mr-2"> {isSubmitting ? "Submitting Data..." : "Submit"} </span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
              </button>
              </div>
                </form>
               </div>
               
    </div>
    </div>
  )
}
