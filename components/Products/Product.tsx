"use client";
import React, { useRef } from "react";
import productmid from "@/assets/productmid.png";
import black from "@/assets/blackheadphone.png";
import yellohead from "@/assets/yellowheadphone.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { motion } from "framer-motion";



const Product = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: undefined, // Remove the previous button
    nextArrow: undefined, // Remove the next button
  };
  return (
    <motion.div
    whileInView={{ opacity:1 }}
    initial={{ opacity:0 }}
    transition={{
      duration: 0.8,
      ease: "easeInOut",
    }}

    id="product"

     className="md:p-10 p-2 pb-20 font-bold w-screen">
      <motion.div
    whileInView={{ x:0 }}
    initial={{ x:200 }}
    transition={{
      duration: 0.8,
      ease: "easeInOut",
    }}
     className="px-10  ">
        <Slider ref={sliderRef} {...settings}>
          <div className="slider-content p-5 ">
            <h1 className="md:text-5xl text-xl">
              The Market Provides <br />
              Hot<span style={{ color: "red" }}> Products</span>
            </h1>
          </div>
          <div className="slider-content p-5">
            <h1 className="md:text-5xl text-xl">
              Available In <br />
              All<span style={{ color: "red" }}> Stores</span>
            </h1>
          </div>
        </Slider>
      </motion.div>

      <div className="px-2 grid grid-cols-1 md:grid-cols-3  w-full gap-10  xl:grid-cols-3 md:gap-5  pt-20 ">
        {[
          { text: "Colored Headphones", imageSrc: productmid },
          { text: "Unique Headphone", imageSrc: yellohead },
          { text: "Modern Headphones", imageSrc: black },
        ].map((item, index) => (
          <motion.div
          whileInView={{ x:0 }}
          initial={{ x:200 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
            key={index}
            className=" md:h-80 border w-full border-none bg-white  rounded-3xl p-5 flex items-center flex-col justify-center text-center "
          >
            <div className="flex items-center gap-4">
              <Image
                src={item.imageSrc}
                width={130}
                height={100}
                alt={item.text}
              />{" "}
            </div>{" "}
            <h1 className="text-lg  lg:text-4xl pt-5  font-bold leading-relaxed">
              {item.text}
            </h1>
            <div className="flex text-center items-center justify-between mt-4 w-full ">
              <span className="text-lg font-bold">$126</span>
              <button className="text-lg text-white  font-semibold bg-orange-600 rounded-3xl h-7 flex items-center p-2">Add to cart</button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Product;
