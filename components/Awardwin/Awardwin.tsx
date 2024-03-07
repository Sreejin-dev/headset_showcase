"use client";
import Image from "next/image";
import battery1 from "@/assets/battery-charge.png";
import battery2 from "@/assets/charging-battery.png";
import voice from "@/assets/voice.png";
import aheadset from "@/assets/aheadsetmain.png";
import { motion } from "framer-motion";

import React from "react";

const Awardwin = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      id="feature"
      className="md:flex  pt-10"
    >
      <motion.div
        whileInView={{ x: 0 }}
        initial={{ x: -100 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="w-full p-1 items-center flex"
      >
        <Image src={aheadset} alt="" />
      </motion.div>
      <motion.div
        whileInView={{ x: 0 }}
        initial={{ x: 100 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="w-full  items-center flex flex-col pt-10"
      >
        <h1 className="font-bold lg:text-5xl text-5xl md:text-4xl  pb-10 ">
          {" "}
          Award-Winning <br />
          True <span style={{ color: "red" }}>Wireless</span> <br />
          Headphone
        </h1>
        <div className="flex flex-col gap-4">
          {[
            { text: "Voice Assistant", imageSrc: voice },
            { text: "Fast Charging", imageSrc: battery2 },
            { text: "1500mAh Battery", imageSrc: battery1 },
          ].map((item, index) => (
            <div key={index} className="w-full  flex flex-col gap-3">
              <div className="flex items-center  gap-4">
                <Image
                  src={item.imageSrc}
                  width={50}
                  height={50}
                  alt={item.text}
                />{" "}
                <h1 className="text-4xl lg:text-4xl   font-bold leading-relaxed">
                  {item.text}
                </h1>
              </div>

              <p className="md:text-xs text-base text-center  w-full left-16 text-gray-700">
                {" "}
                Lorem ipsum dolor sit amet consectetur <br />
                adipisicing elit. Obcaecati dolorem sint <br />
                eveniet fuga veritatis debitis quod exer
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Awardwin;
