import React from "react";
import compass from "@/assets/compass.png";
import miniheadset from "@/assets/miniheadphone.png";
import demo2 from '@/assets/demo2.webp'
import demo1 from '@/assets/demo1.webp'
import mainhead from '@/assets/mainhead.png'
import Image from "next/image";
const Hero = () => {
  return (
    <div className="px-10 flex">
      <div className="flex  flex-col justify-center gap-10 w-full ">
        <h1 className="gap-1 flex flex-col text-xl md:text-3xl lg:text-5xl xl:text-6xl font-bold relative top-5">
          <div className="md:gap-5 gap-2 flex ">
            Unveiling <span className="text-red-500">Headphone</span>
          </div>
          Wonders
        </h1>
        <p className="text-gray-500 md:text-xs text-xs xl:text-xl font-semibold">
          {" "}
          Epix-Sound Presents A Meticulously Curated Collection <br /> of
          Headphones That Redefine Your Audio Experience. <br />
          Immerse Yourself in Rich.{" "}
        </p>
        <div className="flex">
          <div className="flex  items-center">
            {" "}
            <button className="text-center w-36 h-[60px] rounded-3xl bg-[#fd6412] font-bold text-lg rounded-e-none text-white">
              Explore More
            </button>
            <button className="p-2 w-14 h-[60px] flex items-center rounded-3xl rounded-s-none bg-[#fd6412] ">
              <Image src={compass} alt="" />
            </button>
            <div className="relative left-2 bottom-5">
              {" "}
              <Image src={miniheadset} width={70} alt="" />
              <span className="font-sans font-bold flex transition-transform -rotate-6 relative bottom-1">
                30% Off
              </span>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="w-[20rem] bg-[#fcd690] p-5   items-center flex flex-col" style={{borderRadius:"5rem 10px "}}>
          <div className="font-bold bg-red-600 text-white  rounded-3xl p-2">Demo</div>
          <div className="flex gap-20">
            <div >
              {" "}
              <Image src={demo1} width={120} alt="" />
            </div>

            <div>
              {" "}
              <Image src={demo2} width={120} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* right section */}
      <div className=" w-full  justify-center items-center h-full flex">
        <Image src={mainhead} alt="" className="object-contain md:block hidden+" />
      </div>
    </div>
  );
};

export default Hero;
