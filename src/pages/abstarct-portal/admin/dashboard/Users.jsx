import React from 'react'
import { Link } from 'react-router-dom';

const people = [
     {
       name: 'Jane Cooper',
       title: 'Regional Paradigm Technician',
       department: 'Optimization',
       role: 'Admin',
       email: 'jane.cooper@example.com',
       image: 'https://bit.ly/33HnjK0',
     },
     {
       name: 'John Doe',
       title: 'Regional Paradigm Technician',
       department: 'Optimization',
       role: 'Tester',
       email: 'john.doe@example.com',
       image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
     },
     {
       name: 'Veronica Lodge',
       title: 'Regional Paradigm Technician',
       department: 'Optimization',
       role: ' Software Engineer',
       email: 'veronica.lodge@example.com',
       image: 'https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
     },
     {
          name: 'Veronica Lodge',
          title: 'Regional Paradigm Technician',
          department: 'Optimization',
          role: ' Software Engineer',
          email: 'veronica.lodge@example.com',
          image: 'https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
        },
        {
          name: 'Veronica Lodge',
          title: 'Regional Paradigm Technician',
          department: 'Optimization',
          role: ' Software Engineer',
          email: 'veronica.lodge@example.com',
          image: 'https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
        },
     // More people...
   ];
export const Users = () => {
  return (
    <div className="flex mx-3 mt-2 flex-col">
          <div class="md:flex items-center justify-between mx-4 my-2 sm:mt-2">
                    <div className='flex md:justify-start md:items-start text-center'>
                         <h2 class="text-gray-600 mt-2 lg:mt-8 md:text-xl text-sm font-semibold text-center">Users</h2>
                    </div>
                              <div class="justify-end items-end pt-2 sm:pt-4 md:pt-4 lg:pt-5 ">
                                   <button class="justify-center items-center text-center bg-red-700 hover:bg-red-600 px-2 py-1 md:text-md text-sm rounded-md text-white md:font-semibold tracking-wide cursor-pointer">Add User</button>
                                   
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
                       Name
                     </th>
                     <th
                       scope="col"
                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                     >
                       Title
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
                       edit
                     </th>
                     
                   </tr>
                 </thead>
                 <tbody className="bg-white divide-y divide-gray-200">
                   {people.map(person => (
                     <tr key={person.email}>
                       <td className="px-6 py-4 whitespace-nowrap">
                         <div className="flex items-center">
                           <div className="flex-shrink-0 w-10 h-10">
                             <img className="w-full h-full rounded-full" src={person.image} alt="" />
                           </div>
                           <div className="ml-4">
                             <div className="text-sm font-medium text-gray-900">{person.name}</div>
                             <div className="text-sm text-gray-500">{person.email}</div>
                           </div>
                         </div>
                       </td>
                       <td className="px-6 py-4 whitespace-nowrap">
                         <div className="text-sm text-gray-900">{person.title}</div>
                         <div className="text-sm text-gray-500">{person.department}</div>
                       </td>
                       <td className="px-6 py-4 whitespace-nowrap">
                         <span
                           className="px-2 inline-flex text-xs leading-5
                         font-semibold rounded-full bg-green-100 text-green-800"
                         >
                           Active
                         </span>
                       </td>
                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                         {person.role}
                       </td>
                       <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                         <Link to="#" className="text-indigo-600 hover:text-indigo-900">
                           Edit
                         </Link>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
           </div>
         </div>
       </div>
  )
}
