import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';


export const SubmitAbstract = () => {

const navigate  = useNavigate();
const [isSubmitting, setIsSubmitting] = useState(false);
const [loading, setLoading] = useState(false);
const [errorlist, setError] = useState([]);

const [abstractInput, setAbstract] = useState({
  
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
  abstract_title: '',
  abstract_thematic: '',
  co_author: '',
  information:'',

  error_list: [],
});
const [file, setFile] = useState()


const handleInput = (e) => {
    e.persist();
    setAbstract({...abstractInput, [e.target.name]: e.target.value})
  }
  const handleFile = (e) => {
    
    setFile(e.target.files[0])
  }
  const abstractSubmit = (e) => {
    e.preventDefault();  
    setIsSubmitting(true);  
    const formData = new FormData();
   
    formData.append('image', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    formData.append('prefex', abstractInput.prefex);     
    formData.append('surname', abstractInput.surname);
    formData.append('firstname', abstractInput.firstname);
    formData.append('gender', abstractInput.gender);
    formData.append('email', abstractInput.email);
    formData.append('phone', abstractInput.phone);
    formData.append('orgnization', abstractInput.orgnization);
    formData.append('jobtitle', abstractInput.jobtitle);
    formData.append('address', abstractInput.address);
    formData.append('city', abstractInput.city);
    formData.append('state', abstractInput.state);
    formData.append('country', abstractInput.country);
    formData.append('abstract_title', abstractInput.abstract_title);
    formData.append('abstract_thematic', abstractInput.abstract_thematic);
    formData.append('co_author', abstractInput.co_author);
    formData.append('information', abstractInput.information);

    axios.get('/sanctum/csrf-cookie').then(response => {
    setLoading(true);
     // Login...
     axios.post(`/api/store-abstract`, formData, config).then(res =>{ 
        console.log(res.data);
        if(res.data.status === 201) {
            setLoading(false); 
            setIsSubmitting(false);
           swal("Success",res.data.message, "success"); 
           navigate("/userdashboard");
           setError([]);
        }
        
        // else if(res.data.status === 409)
        // {
        //     swal("Error", res.data.message, "error");            
        // }
        
        else if(res.data.status === 401)
        {
            swal("Error", res.data.message, "error");            
        }        
        else if(res.data.status === 422)
        {
            swal("All Fields are mandetory", "", "error");
            setError(res.data.errors);
        }
        else{
            setAbstract({...abstractInput, error_list: res.data.validation_errors});
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
     <div className="bg-white justify-center items-center mx-3 mt-12 ">
    <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-32">     
        <div className="py-2 px-4 mx-auto max-w-screen-xl text-center lg:pt-4 lg:px-6">
            <h2 className="text-2xl dark:bg-gray-900 font-bold md:text-4xl">Abstract Submission</h2>
        </div>
              
               <div className="container justify-center items-center max-w-screen-xl mx-auto">
               
                <form onSubmit={abstractSubmit}  className="w-full  justify-center items-center max-w-screen-xl mx-auto ">
                    <div className="flex flex-wrap -mx-3 mb-6 justify-center items-center">
                        <div className="px-3 w-full justify-center items-center ">                       
                        <label className="uppercase tracking-wide text-red-700 text-md font-bold mb-2" for="grid-first-name">
                        Abstract Author
                        </label>
                        
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="flex px-3  flex-wrap w-[10rem] -mx-3 mb-6 justify-center items-center">
                        <div className="px-3 w-full justify-center items-center ">
                      
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-prefex">
                            Prefix
                        </label>
                        <div className="">
                            <select name="prefex" onChange={handleInput} value={abstractInput.prefex} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-prefex">
                            <option>Select</option>
                                <option value="Mr">Mr.</option>
                                <option value="Mrs">Mrs.</option>
                                <option value="Ms">Ms.</option>
                                <option value="Miss">Miss.</option>
                                <option value="Dr">Dr.</option>
                                <option value="Prof">Prof.</option>                            
                            </select>
                            <span className="pb-2 mb-2 text-sm text-red-600">{errorlist.prefex}</span>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Surname
                        </label>
                        <input type="text" name="surname"  onChange={handleInput} value={abstractInput.surname} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"  />
                        <span className="pb-2 mb-2 text-sm text-red-600">{errorlist.surname}</span>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            First Name
                        </label>
                        <input type="text" name="firstname" onChange={handleInput} value={abstractInput.firstname} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name"  />
                        <span className="pb-2 mb-2 text-sm text-red-600">{errorlist.firstname}</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-gender">
                            Sex
                        </label>
                        <div className="relative">
                            <select type="text" name="gender" onChange={handleInput} value={abstractInput.gender} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  id="grid-gender">
                            <option>Select</option>
                            <option value="Male">Male</option>
                            <option selected="selected" value="Female">Female</option>
                            </select>
                            <span className="pb-2 mb-2 text-sm text-red-600">{errorlist.gender}</span>
                        </div>
                        
                    {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-phone">
                            Phone
                        </label>
                        <input type="tel" name="phone" onChange={handleInput} value={abstractInput.phone} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-phone"  />
                        <span className="pb-2 mb-2 text-sm text-red-600">{errorlist.phone}</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Email
                        </label>
                        <input type="email" name="email" onChange={handleInput} value={abstractInput.email} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" />
                        <p className="text-gray-600 text-xs italic">Organization email or Personal email</p>
                        <span className="pb-2 mb-2 text-sm text-red-600">{errorlist.email}</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Job Title
                        </label>
                        <input type="text" name="jobtitle" onChange={handleInput} value={abstractInput.jobtitle} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"  />
                         <span className="pb-2 mb-2 text-sm text-red-600">{errorlist.jobtitle}</span>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-orgnization">
                            Organization/Institution/Company
                        </label>
                        <input type="text" name="orgnization" onChange={handleInput} value={abstractInput.orgnization} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-orgnization" />
                            <span className="pb-2 mb-2 text-sm text-red-600">{errorlist.orgnization}</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Work Address
                        </label>
                        <input type="text" name="address" onChange={handleInput} value={abstractInput.address} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password"   />
                        <span className="pb-2 mb-2 text-sm text-red-600">{errorlist.address}</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-8">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            City
                        </label>
                        <input type="text" name="city" onChange={handleInput} value={abstractInput.city} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city"   />
                            <span className="pb-2 mb-2 text-sm text-red-600">{errorlist.city}</span>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            State
                        </label>
                        <input type="text" name="state" onChange={handleInput} value={abstractInput.state} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city"  />
                        <span className="pb-2 mb-2 text-sm text-red-600">{errorlist.state}</span>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Country
                        </label>
                        <input type="text" name="country" onChange={handleInput} value={abstractInput.country} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip"   />
                        <span className="pb-2 mb-2 text-sm text-red-600">{errorlist.country}</span>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6 justify-center items-center">
                         
                    </div>                   

                    </div>

                    <div className="mt-12 mb-4  justify-center items-center">
                        <label className="uppercase tracking-wide text-red-700 text-md font-bold mb-2" for="grid-first-name">
                           Abstract Information
                        </label>
                        </div> 

                    <div className="flex flex-wrap -mx-3 mb-6">
                       
                        <div className="w-full  px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Abstract Title
                            </label>
                            <input type="text" name="abstract_title" onChange={handleInput} value={abstractInput.abstract_title} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"   />
                            <span className="pb-2 mb-2 text-sm text-red-600">{errorlist.abstract_title}</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Abstract Thematic Area
                        </label>
                        <div className="relative">
                            <select name="abstract_thematic" onChange={handleInput} value={abstractInput.abstract_thematic} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>Select</option>
                            <option  value="Track_A">Track A</option>
                            <option value="Track_B">Track B</option>
                            <option value="Track_C">Track C</option>
                            </select>
                            <span className="pb-2 mb-2 text-sm text-red-600">{errorlist.abstract_thematic}</span>
                        </div>
                        
                        
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                             <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
                            <input type="file" name="image" onChange={handleFile}  className="block w-full text-sm text-gray-900 border border-gray-500 rounded-lg cursor-pointer bg-gray-200 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500" aria-describedby="file_input_help" id="file_input"/>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">PDF, Word DOC (MAX. 800x400px).</p>
                            <span className="pb-2 mb-2 text-sm text-red-600">{errorlist.image}</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap mx-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Co-Author
                        </label>
                        <textarea name="co_author" onChange={handleInput} value={abstractInput.co_author} id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         placeholder="Prefix Surname Firstname Job Title Organization/Company/Institution Email and Phone...">
                         </textarea>
                         <span className="pb-2 mb-2 text-sm text-red-600">{errorlist.co_author}</span>
                    </div>
                    <div className="flex flex-wrap mx-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Other Information
                        </label>
                        <textarea name="information" onChange={handleInput} value={abstractInput.information} id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         placeholder="Please provide any other relevant information...">
                         </textarea>
                         <span className="pb-2 mb-2 text-sm text-red-600">{errorlist.information}</span>
                    </div>
                    {/* <div disabled={loading} className="max-w-screen-xl mb-2 mx-auto text-center w-44 justify-center py-2 px-2 items-center bg-red-800 text-white border-gray-800 rounded-md ">
                        <button type="submit" className="flex justify-center items-center text-center max-w-screen-xl mx-auto">
                        {loading ? "Submitting Data..." : "Submit"}</button>
                    </div> */}
                    <div className="item-center justify-center flex">
                    {/* disabled={loading} */}
                <button  type="submit"   disabled={isSubmitting} className="max-w-screen-xl mb-2 mx-auto text-center w-44 justify-center py-2 px-2 items-center bg-red-800 text-white border-gray-800 rounded-md">
                  <span className="inline-block mr-2"> {isSubmitting ? "Submitting Data..." : "Submit"}</span>
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
