import React from "react";

export const About = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-4">
        <div className="container mx-auto flex flex-col items-center py- sm:py-4">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-2 sm:mb-0">
            <h1 className="text-2xl py-2 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-indigo-700 font-black leading-7 md:leading-10 mb">
              About
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10 mb">
              National TB Conference
            </h1>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-black font-normal text-center text-sm sm:text-lg">
              National TB Conference focuses on advancing and impacting the
              lives of women and children, creating effects that yields multiple
              benefits towards the development of the society. We contribute to
              ensuring opportunities for children to learn, decide and thrive as
              well as empowering women for maximum impact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
