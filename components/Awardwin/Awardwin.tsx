import Image from "next/image";
import battery1 from "@/assets/battery-charge.png";
import battery2 from "@/assets/charging-battery.png";
import voice from "@/assets/voice.png";
import aheadset from "@/assets/aheadsetmain.png";
import React from "react";

const Awardwin = () => {
  return (
    <div className="md:flex  ">
      <div className="w-full items-center flex">
        <Image src={aheadset} alt="" />
      </div>
      <div className="w-full items-center flex flex-col pt-10">
        <h1 className="font-bold lg:text-5xl text-3xl md:text-3xl  pb-10 ">
          {" "}
          Award-Winning <br />
          True <span style={{ color: "red" }}>Wireless</span> <br />
          Headphone
        </h1>
        <div>
          {[
            { text: "Voice Assistant", imageSrc: voice },
            { text: "Fast Charging", imageSrc: battery2 },
            { text: "1500mAh Battery", imageSrc: battery1 },
          ].map((item, index) => (
            <div key={index} className="">
              <div className="flex items-center gap-4">
                <Image
                  src={item.imageSrc}
                  width={50}
                  height={50}
                  alt={item.text}
                />{" "}
                <h1 className="text-xl lg:text-4xl text-5xl  font-bold leading-relaxed">{item.text}</h1>
              </div>

              <p className="text-xs relative left-16 text-gray-700">
                {" "}
                Lorem ipsum dolor sit amet consectetur <br />
                adipisicing elit. Obcaecati dolorem sint <br />
                eveniet fuga veritatis debitis quod exer
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awardwin;
