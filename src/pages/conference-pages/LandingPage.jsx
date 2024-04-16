import React from "react";
import { useState, useEffect } from "react";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Autoplay } from "swiper";
// import Swiper styles
import "swiper/css";
import { Countdown } from "../../compotents/landing-page/Countdown";

export const LandingPage = () => {
  SwiperCore.use([Autoplay]);
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("December 10,2024");

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        // update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });
  return (
    <div>
      <div class="lg:flex justify-between z-30 items-center px-2 max-w-screen-xl max-h-screen-[72] mx-auto mb-0 ">
        <div class="w-full  justify-center items-center">
          <div class="flex  w-full lg:py-2 pt-2 ">
            <span class="flex items-center justify-start bg-green-900 lg:h-14 h-9 text-xl shadow-lg">
              <h1 class="font-bold px-2 tracking-tighter leading-tight lg:text-4xl text-xl text-white">
                National TB Conference 2024{" "}
              </h1>
              <img src="" alt="" />
            </span>
          </div>
          <div class="w-full lg:py-2">
            <span class="flex justify-start text-xl">
              <h1 class="font-bold tracking-tighter leading-tight text-xl text-red-700">
                THEME:{" "}
              </h1>
              <img src="" alt="" />
            </span>
          </div>
          <div class="py-0">
            <span class="lg:text-2xl uppercase font-semibold ">
            Public-Private Partnership and Integrated Service Delivery: 
            </span>
          </div>
          <span class="font-semibold uppercase lg:text-2xl text-red-600">
          Panacea to end TB in Nigeria
          </span>
          <div class="flex pt-2 space-x-2 justify-start items-center">
            <span class="font-bold text-2xl uppercase text-black">Venue:</span>
          </div>
          <div class="flex justify-start items-start font-semibold text-md">
            <span>
              <p class="text-start">
              International Conference Centre, Abuja

              </p>
            </span>
          </div>
          <div class="flex space-x-2 py-2 justify-start items-center">
            <span class="font-bold text-2xl uppercase text-black">Date:</span>
            <span className="font-medium">10th - 12th December 2024</span>
          </div>
        </div>

        <Countdown
          timerDays={timerDays}
          timerHours={timerHours}
          timerMinutes={timerMinutes}
          timerSeconds={timerSeconds}
        />
      </div>
      <h2 class="text-md px-4 py-2 mt-3 text-red-700 font-bold lg:text-md max-w-screen-xl mx-auto">
        Sponsors & Partners
      </h2>
      <div class="justify-center max-w-[97%] mx-auto items-center ml-10 md:ml-24 pt-1 ">
        {/* Slide  */}
        <Swiper
          className="flex justify-between md:max-w-[80%] lg:w-[84%] mx-auto items-center cursor-pointer"
          spaceBetween={5}
          slidesPerView={1}
          loop={true}
          scrollbar={{ draggable: true }}
          speed={4000}
          autoplay={{ delay: 3500 }}
        >
          <SwiperSlide> {Slide1()}</SwiperSlide>
          <SwiperSlide> {Slide2()}</SwiperSlide>
          <SwiperSlide> {Slide3()}</SwiperSlide>
          <SwiperSlide> {Slide4()}</SwiperSlide>
          <SwiperSlide> {Slide5()}</SwiperSlide>
          <SwiperSlide> {Slide6()}</SwiperSlide>
          <SwiperSlide> {Slide7()}</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

function Slide1() {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-3 grid-cols-3 gap-2 hover:cursor-pointer">
      <div>
        <img
          class="py-2 md:w-60 w-20"
          src={require("../../assets/USAID.png")}
          alt=""
        />
      </div>
      <div>
        <img
          class="py-2 md:w-60 w-20"
          src={require("../../assets/who.png")}
          alt=""
        />
      </div>
      <div>
        <img
          class="py-2 md:w-60 w-20"
          src={require("../../assets/StopTB+UNOPS.png")}
          alt=""
        />
      </div>
    </div>
  );
}

function Slide2() {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-3 grid-cols-3 gap-3 hover:cursor-pointer">
      <div class="py-2 md:w-60 w-20">
        <img src={require("../../assets/ncdc.png")} alt="" />
      </div>
      <div class="py-2 md:w-60 w-20">
        <img src={require("../../assets/agbamipng.png")} alt="" />
      </div>
      <div class="py-2 md:w-60 w-20">
        <img src={require("../../assets/kncv.png")} alt="" />
      </div>
    </div>
  );
}


function Slide3() {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-3 grid-cols-3 gap-2 hover:cursor-pointer">
      <div>
        <img
          class="py-2 md:w-60 w-20"
          
          src={require("../../assets/NigeriaTBCaucus.png")}
          // src={require("../../assets/TBNetwork.png")}
          alt=""
        />
      </div>
      <div>
        <img
          class="py-2 md:w-60 w-20"
          src={require("../../assets/TBPeopleNigeria.jpg")}
          alt=""
        />
      </div>
      <div>
        <img
          class="py-2 md:w-60 w-20"
          src={require("../../assets/NTCF.png")}
          alt=""
        />
      </div>
    </div>
  );
}


function Slide4() {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-3 grid-cols-4 gap-2 hover:cursor-pointer">
      <div>
        <img
          class="py-2 md:w-60 w-20"
          src={require("../../assets/qiagen.png")}
          alt=""
        />
      </div>
      <div>
        <img
          class="py-2 md:w-60 w-20"
          src={require("../../assets/ARFH.png")}
          alt=""
        />
      </div>
      <div>
        <img
          class="py-2 md:w-60 w-20"
          src={require("../../assets/zankli.png")}
          alt=""
        />
      </div>
    </div>
  );
}

function Slide5() {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-3 grid-cols-4 gap-2 hover:cursor-pointer">
      <div>
        <img
          class="py-2 md:w-60 w-20"
          src={require("../../assets/ZankliRes.png")}
          alt=""
        />
      </div>
      <div>
        <img
          class="py-2 md:w-60 w-20"
          src={require("../../assets/BA.png")}
          alt=""
        />
      </div>
      <div>
        <img
          class="py-2 md:w-60 w-20"
          src={require("../../assets/IHVN.png")}
          alt=""
        />
      </div>
    </div>
  );
}

function Slide6() {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-3 grid-cols-4 gap-2 hover:cursor-pointer">
      <div class="py-2 md:w-60 w-20">
        <img src={require("../../assets/fhi360.png")} alt="" />
      </div>

      <div>
        <img
          class="py-2 md:w-60 w-20"
          src={require("../../assets/DevComs.png")}
          alt=""
        />
      </div>
      <div>
        <img
          class="py-2 md:w-60 w-20"
          src={require("../../assets/DFB.png")}
          alt=""
        />
      </div>
    </div>
  );
}

function Slide7() {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-3 grid-cols-3 gap-2 hover:cursor-pointer">
      <div>
        <img
          class="py-2 md:w-60 w-20"
          src={require("../../assets/cmdc.png")}
          alt=""
        />
      </div>
      <div>
        <img
          class="py-2 md:w-60 w-20"
          src={require("../../assets/IHVN.png")}
          alt=""
        />
      </div>
      <div>
        <img
          class="py-2 md:w-60 w-20"
          src={require("../../assets/TBNetwork.png")}
          alt=""
        />
      </div>
    </div>
  );
}
