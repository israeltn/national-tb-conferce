import React from 'react'

export const Sponsorship = () => {
  return (
    <div>
         <div className="py-12 bg-white">
    <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
        <div className="m-auto text-center lg:w-7/12">
            <h2 className="text-2xl uppercase text-gray-700 font-bold md:text-4xl">Sponsorship & Advert</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 items-center">
                <div className="">
                    <img className="py-8 w-60"  src={require('../../assets/USAID.png')}  alt=""/>						
                </div>
                <div className="">
                    <img className="py-8 w-60"  src={require('../../assets/who.png')} alt=""/>						
                </div>
                <div className="">
                    <img className="py-8 w-60"  src={require('../../assets/StopTB+UNOPS.png')} alt=""/>						
                </div>
                
                <div className="">
                     <img className="py-8  px-2 w-60"  src={require('../../assets/kncv.png')} alt=""/>						
                </div>
                {/* <!-- Four --> */}
                <div className="">
                    <img className="py-8 w-60"  src={require('../../assets/fhi360.png')}  alt=""/>						
                </div>
                <div className="">
                    <img className="py-8 w-60"  src={require('../../assets/DevComs.png')} alt=""/>						
                </div>
                <div className="">
                    <img className="py-8 w-60"  src={require('../../assets/DFB.png')}  alt="" />						
                </div>
                <div className="">
                     <img className="py-8  px-2 w-60"  src={require('../../assets/TBPeopleNigeria.jpg')} alt=""/>						
                </div>
                {/* <!-- Four --> */}
                <div className="">
                    <img className="py-8 w-60"  src={require('../../assets/StopTB+UNOPS.png')} alt=""/>						
                </div>
                <div className="">
                    <img className="py-8 w-60"  src={require('../../assets/NigeriaTBCaucus.png')} alt=""/>						
                </div>
                <div className="">
                    <img className="py-8 w-60"  src={require('../../assets/NTCF.png')} alt="" />						
                </div>
                <div className="">
                     <img className="py-8  px-2 w-60"  src={require('../../assets/CfDCLogo.jpg')} alt=""/>						
                </div>
                 
                
        </div>
    </div>
    </div>
    </div>
  )
}
