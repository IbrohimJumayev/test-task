import React from "react";

const Footer = () => {
  return (
    <div id="contact" className="sm:mt-[203px] mt-10">
      <div className="flex gap-3 max-md:flex-col justify-between items-center border-b-2 border-[#666666] pb-5 sm:pb-[42px]">
        <div>
          <img src="/footerlogo.svg" alt="" />
        </div>
        <div className="flex max-sm:flex-col gap-3 sm:gap-8 items-center text-lg text-[#42446E]">
          <p>+91 12345 09876</p>
          <p>info@example.com</p>
          <ul className="flex gap-5 items-center">
            <li>
              <img src="/gitblue.svg" alt="" />
            </li>
            <li>
              <img src="/twitter2.svg" alt="" />
            </li>
            <li>
              <img src="/linkedinBlue.svg" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex max-lg:flex-col gap-5 justify-between items-center my-5 sm:my-[60px]">
        <ul className="flex flex-wrap max-sm:flex-col gap-[52px] max-xl:gap-5 max-lg:text-base items-center text-[#42446E] text-lg">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Technologies</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <p className="text-lg max-lg:text-base max-sm:text-center">
          Designed and built by{" "}
          <span className="bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] bg-clip-text text-transparent">
            Pavan MG
          </span>{" "}
          with{" "}
          <span className="bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] bg-clip-text text-transparent">
            Love
          </span>{" "}
          &
          <span className="bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] bg-clip-text text-transparent">
            Coffee
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
