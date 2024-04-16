import React from "react";

export const About = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-4">
        <div className="container mx-auto flex flex-col items-center py- sm:py-4">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-2 sm:mb-0">
            <h1 className="text-2xl uppercase py-2 sm:text-3xl md:text-3xl lg:text-5xl xl:text-3xl text-center text-indigo-700 font-black leading-7 md:leading-10 mb">
              About  National TB Conference
            </h1>
           
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-black font-normal text-center text-sm sm:text-lg">
              National TB Conference is a multi-stakeholder partnership dedicated to 
              complement the efforts of the government and other stakeholders to end the
               scourge of TB in Nigeria. It fulfils its mandate by advocating for increased 
               political commitment, support and funding that such a significant challenge 
               deserves. The Partnership comprises of government, parliamentarians, 
               multilateral and bilateral organizations, development partners, private sector, 
               academia, professional associations, civil society organisations, media and 
               persons affected by TB. It is affiliated to the Global Stop TB Partnership, 
               Geneva.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
