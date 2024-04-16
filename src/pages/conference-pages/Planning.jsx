

import React from 'react'
import { Link } from "react-router-dom";
import DrQueen from '../../assets/queen.jpg';
import udome  from '../../assets/udome.jpg';
import lawal  from '../../assets/lawa.jpg';
import Ibrahim  from '../../assets/Ibrahim.jpg';


export const Planning = () => {

  return (
    <div>
     <div className="py-2 bg-white">
    <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-56">       
               {/* <!-- Content --> */}
               <section className="bg-white dark:bg-gray-900">
  <div className="py-2 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 uppercase text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Planning Committees</h2>
          {/* <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classNamees from Tailwind</p> */}
      </div> 
      <div className="grid gap-8 lg:gap-16 justify-center text-center sm:grid-cols-2 md:grid-cols-3 ">
          <div className="justify-center text-center text-gray-500 dark:text-gray-400">
                <img className="mx-auto mb-4 w-36 h-38 object-cover   object-center border-4 border-gray-400"
                    src={DrQueen} alt="Bonnie Avatar" 
                />
                    <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">Dr. Queen Ogbuji</a>
                    </h3>
                    <p>Acting Board Chair, Stop TB Partnership Nigeria Association for Reproductive and Family Health (ARFH) Nigeria</p>
                    

          </div>
          <div className="justify-center text-center text-gray-500 dark:text-gray-400">
                <img className="mx-auto mb-4 w-36 h-38 object-cover  object-center border-4 border-gray-400"
                    src={udome} alt="Bonnie Avatar" 
                />
                    <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">Dr. Bethrand Odume</a>
                    </h3>
                    <p>Chair, Central Planning Committee 2024 National TB Conference Board Vice-Chair (1st), Stop TB Partnership Nigeria
KNCV Foundation Nigeria</p>
                    

              
          </div>
          <div className="justify-center text-center text-gray-500 dark:text-gray-400">
                <img className="mx-auto mb-4 w-36 h-38 object-cover justify-center object-center border-4 border-gray-400"
                    src={lawal} alt="Bonnie Avatar" 
                />
                    <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">Prof. Umar Lawal</a>
                    </h3>
                    <p>Chair, Scientific Committee 2024 National TB Conference Board Vice-Chair (2nd), Stop TB Partnership Nigeria
Ahmadu Bello University, Zaria</p>
              
          </div>
          <div className="justify-center text-center text-gray-500 dark:text-gray-400">
                <img className="mx-auto mb-4 w-36 h-38 object-cover justify-center object-center border-4 border-gray-400"
                    src={Ibrahim} alt="Bonnie Avatar" 
                />
                    <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">Ibrahim Umoru</a>
                    </h3>
                    <p>Chair, Community Connect Board Member, Stop TB Partnership Nigeria Africa Coalition on Tuberculosis (ACT) Nigeria</p>
              
          </div>
                    
      </div>

  </div>
</section>
    </div>
     </div>
    </div>
  )
}
