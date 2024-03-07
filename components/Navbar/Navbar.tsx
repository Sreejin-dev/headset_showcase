"use client";
import React from "react";
import search from "@/assets/search.png";
import heart from "@/assets/heart.png";
import basket from "@/assets/basket.png";
import Image from "next/image";
import MobNav from "./MobNav";

const Navbar = () => {
  return (
    <div className="md:px-10 px-2 pt-5 w-full">
      <div className="flex justify-between">
        <h1 className="font-bold text-lg">Epic-Sound</h1>
        <nav className="flex gap-5 max-lg:hidden items-center">
          <ul className="flex gap-10 font-bold text-sm items-center">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#feature">Features</a>
            </li>
            <li>
              <a href="#product">Product</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
          </ul>

          <div className="flex">
            <input
              type="text"
              className="rounded-full rounded-e-none py-1 pl-2 w-40 outline-gray-300"
              placeholder="Search"
            />
            <button className="bg-white rounded-e-full w-10 p-1">
              <Image
                src={search}
                alt=""
                className="w-full h-full object-contain pr-2"
              />
            </button>
          </div>
          {/* icon */}
          <div className="w-8 flex items-center h-5">
            <Image src={heart} alt="" className="cursor-pointer" />
          </div>
          <div className="w-8 flex items-center h-5">
            <Image src={basket} alt="" className="cursor-pointer" />
          </div>
        </nav>
      </div>
      <MobNav />
    </div>
  );
};

export default Navbar;
