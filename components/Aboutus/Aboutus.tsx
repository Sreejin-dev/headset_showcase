import React from "react";
import Image from "next/image";
import insta from "@/assets/icons/instagram.png";
import pintrast from "@/assets/icons/pinterest.png";
import facebook from "@/assets/icons/facebook.png";
import twitter from "@/assets/icons/twitter.png";



const Aboutus = () => {
  return (
    <div id="about" className="md:px-10 px-2 pt-5 w-full bg-white">
      <div className="flex justify-between max-md:flex-col ">
        <h1 className="font-bold text-lg">Epic-Sound</h1>
        <nav className="flex gap-5 items-center max-md:pt-10 max-md:justify-center">
          <ul className="flex md:gap-10 gap-5 font-bold text-sm items-center  justify-center">
            <li>
              <a href="#">
                <Image width={30} src={insta} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <Image width={30} src={pintrast} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <Image width={30} src={facebook} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <Image width={30} src={twitter} alt="" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <br />
      <div className="w-full h-[0.5px] bg-black"></div>
      <p className="text-center text-sm font-medium pt-10">@copyright@2023</p>
   
      <p className="text-center text-xs font-medium py-2">created by Sreejin</p>
    </div>
  );
};

export default Aboutus;
