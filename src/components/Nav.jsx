import React from "react";
import { useState } from "react";
import Menu from "./Menu";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  return (
    <>
      <nav className="flex justify-between items-center mt-5 sm:mt-10">
        <a href="#">
          <img className="cursor-pointer" src="/logo.svg" alt="" />
        </a>

        <div className="flex items-center gap-4 lg:gap-[51px]">
          <ul className="flex items-center gap-5 max-md:hidden  lg:gap-[67px] nav text-xl font-medium text-[#666666]">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#tech">Tech Stack</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <ul className="flex items-center gap-2 lg:gap-5">
            <li>
              <img src="/git.svg" alt="" />
            </li>
            <li>
              <img src="/twitter.svg" alt="" />
            </li>
            <li>
              <img src="/linkedin.svg" alt="" />
            </li>
          </ul>
          <div className="flex  items-center justify-center md:hidden">
            <button onClick={() => setIsOpen(true)}>
              <span className="material-symbols-outlined font-bold text-4xl">
                menu
              </span>
            </button>
          </div>
        </div>
      </nav>
      <Menu isOpen={isOpen} handleClose={handleClose} />
    </>
  );
};

export default Nav;
