"use client";
import React, { useState } from "react";

import search from "@/assets/search.png";

import heart from "@/assets/heart.png";
import basket from "@/assets/basket.png";
import Image from "next/image";
const MobNav = () => {

  function scrollToDiv(divId: string): void {
    const element = document.getElementById(divId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const [hidden, setHidden] = useState(false);

  const toggleHidden = () => setHidden(!hidden);

  return (
    <div className="lg:hidden text-center rounded-3xl   right-0  top-0 fixed z-50 overflow-hidden pointer-events-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`w-20  left-3/4 h-10 sticky  text-black pointer-events-auto  ${
          hidden ? "hidden" : "block"
        }`}
        onClick={toggleHidden}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`text-black   sticky left-3/4 z-20 right-0 w-20 h-10 pointer-events-auto ${
          hidden ? "block" : "hidden"
        }`}
        onClick={toggleHidden}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      <header
        className={`bg-white p-5 rounded-3xl flex max-md:w-[19rem] w-96 items-center justify-center h-[30rem] top-14 relative ${
          hidden ? "-translate-x-1" : "translate-x-[100%]"
        } duration-300`}
      >
        <div className="p-5">
          <nav className="pointer-events-auto ">
            <ul className="flex flex-col gap-5 text-2xl  font-bold text-black transition-all">
            <li>
              <p className="cursor-pointer" onClick={() => scrollToDiv('Home')}>Home</p>
            </li>
            <li>
              <p className="cursor-pointer" onClick={() => scrollToDiv('feature')}>Features</p>
            </li>
            <li>
              <p className="cursor-pointer" onClick={() => scrollToDiv('product')}>Product</p>
            </li>
            <li>
            <p className="cursor-pointer" onClick={() => scrollToDiv('about')}>About Us</p>
            </li>
            </ul>

            <div className="flex pt-5">
              <input
                type="text"
                className="rounded-full rounded-e-none py-1 pl-2 w-40 border-r-0 border-black border"
                placeholder="Search"
              />
              <button className="bg-white border-black border border-l-0 rounded-e-full w-10 p-1">
                <Image
                  src={search}
                  alt=""
                  className="w-full h-full object-contain pr-2"
                />
              </button>
            </div>
            {/* icon */}
            <div className="flex top-5 relative justify-center gap-2">
              {" "}
              <div className="w-8 flex items-center h-5">
                <Image src={heart} alt="" />
              </div>
              <div className="w-8 flex items-center h-5">
                <Image src={basket} alt="" />
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default MobNav;
