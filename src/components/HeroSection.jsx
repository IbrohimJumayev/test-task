import React from "react";

const HeroSection = () => {
  return (
    <div
      id="about"
      className="flex mt-10 md:mt-32 max-sm:flex-col lg:mt-[220px] items-center max-sm:gap-5"
    >
      <div className="flex-1 max-sm:text-center">
        <h1 className=" text-4xl leading-[50px]  lg:text-[58px] text-[#42446E] font-bold lg:leading-[70px]">
          Hi 👋,
          <br /> My name is <br />{" "}
          <span className=" font-bold bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] bg-clip-text text-transparent">
            Pavan MG
          </span>
          <br /> I build things for web
        </h1>
      </div>
      <div className="">
        <img src="/profile.png" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
