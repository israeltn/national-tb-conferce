/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import OluremiTinubuImage from '../../assets/Oluremi-Tinubu.png';
import Governor_Sanwoolu  from '../../assets/Governor_Sanwoolu.jpg';
import MinisterofHealth  from '../../assets/Minister-of-Health.jpg';
import USAID_Mission_Director  from '../../assets/Melissa_Jones-USAIDNigeria-MD.jpg';
import Lucica_Ditiu  from '../../assets/Lucica-Ditiu.jpg';
import Chairman_BUA  from '../../assets/Chairman BUA.jpg';




export const Speakers = () => {
  return (
    <div>
       <div className="py-2 bg-white">
    <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-56">       
               {/* <!-- Content --> */}
               <section className="bg-white dark:bg-gray-900">
  <div className="py-2 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 uppercase text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Speakers</h2>
          {/* <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classNamees from Tailwind</p> */}
      </div> 
      <div className="grid gap-8 lg:gap-16 justify-center text-center sm:grid-cols-2 md:grid-cols-3 ">
          <div className="justify-center text-center text-gray-500 dark:text-gray-400">
                <img className="mx-auto mb-4 w-36 h-38 object-cover   object-center border-4 border-gray-400"
                    src={OluremiTinubuImage} alt="Bonnie Avatar" 
                />
                    <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">Her Excellency Senator Oluremi Tinubu</a>
                    </h3>
                    <p>The First Lady Federal Republic of Nigeria</p>
              
          </div>
          <div className="justify-center text-center text-gray-500 dark:text-gray-400">
                <img className="mx-auto mb-4 w-36 h-38 object-cover  object-center border-4 border-gray-400"
                    src={Governor_Sanwoolu} alt="Bonnie Avatar" 
                />
                    <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">His Excellency Babajide Olusola Sanwo-Olu</a>
                    </h3>
                    <p>Executive Governor of Lagos State</p>
              
          </div>
          <div className="justify-center text-center text-gray-500 dark:text-gray-400">
                <img className="mx-auto mb-4 w-36 h-38 object-cover justify-center object-center border-4 border-gray-400"
                    src={MinisterofHealth} alt="Bonnie Avatar" 
                />
                    <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">Prof. Muhammad Ali Pate</a>
                    </h3>
                    <p>Honourable Coordinating Minister Ministry of Health and Social Welfare</p>
              
          </div>
                    
      </div> 
      <div className='mt-12 grid gap-8 justify-center text-center lg:gap-16 sm:grid-cols-2 md:grid-cols-3 '>
      <div className="text-center text-gray-500 dark:text-gray-400">
                <img className="mx-auto mb-4 w-36 h-38 object-cover  object-center border-4 border-gray-400"
                    src={USAID_Mission_Director} alt="Bonnie Avatar" 
                />
                    <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">Melissa Jones</a>
                    </h3>
                    <p>USAID Mission Director</p>
              
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
                <img className="mx-auto mb-4 w-36 h-42 object-cover  object-center border-4 border-gray-400"
                    src={Lucica_Ditiu} alt="Bonnie Avatar" 
                />
                    <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">Dr. Lucica Ditiu</a>
                    </h3>
                    <p>Executive Director Global Stop TB Partnership, Geneva</p>
              
          </div>
        
          <div className="text-center text-gray-500 dark:text-gray-400">
                <img className="mx-auto mb-4 w-36 h-38 object-cover  object-center border-4 border-gray-400"
                    src={Chairman_BUA} alt="Bonnie Avatar" 
                />
                    <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">Abdul samad Rabiu</a>
                    </h3>
                    <p>⁠Chairman BUA</p>
              
          </div>
      </div> 
  </div>
</section>
    </div>
     </div>
    </div>
  )
}
