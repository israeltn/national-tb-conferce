import React from "react";

export const Contact = () => {
  return (
    <div>
      <div className="bg-white justify-center items-center max-w-screen-xl mx-auto">
        <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
          <div className="py-2 px-4 mx-auto max-w-screen-xl text-center lg:pt-12 lg:px-6">
            <h2 className="text-2xl uppercase dark:bg-gray-900 font-bold md:text-4xl">
              Contact Us
            </h2>
          </div>
          {/* content */}
        

          <div className="container justify-center items-center text-center text-lg max-w-screen-xl mx-auto mb-8">
          <h1 className="items-center font-medium uppercase">For general enquiry about the conference, you can call these phone numbers:</h1>

              <div className="justify-center items-center text-center ">+234 805 243 2172; +234 706 144 7349</div>
              <div>or</div>
              <div className="justify-center items-center text-center ">Send email to: <span className="font-medium text-red-700">info@nationaltbconference.org</span></div>



              <h1 className="items-center font-medium pt-4 pb-3 uppercase">For specific enquiries, please send email to:</h1>
              <div className="mb-3">Abstracts related issues - <span className="font-medium text-red-700">abstracts@nationaltbconference.org</span></div>

              <div className="mb-3">Sponsorship, Exhibition and advert - <span className="font-medium text-red-700">sponsorship@nationaltbconference.org</span></div>
              
              <div className="mb-3">TB Affected Community and Civil Society Engagement - <span className="font-medium text-red-700">community@nationaltbconference.org</span></div>

              <div className="mb-3">Media Publicity and Accreditation - <span className="font-medium text-red-700">media@nationaltbconference.org</span></div>

          </div>
        </div>
      </div>
    </div>
  );
};
