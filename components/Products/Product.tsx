"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div className="p-10 font-bold">
      <div className="slider">
        <Slider ref={sliderRef} {...settings}>
          <div className="slider-content">
            <h1 className="text-3xl">
              The Market Provides <br />
              Hot<span style={{ color: "red" }}> Products</span>
            </h1>
          </div>
          <div className="slider-content">
            <h1>
              Available In <br />
              All<span style={{ color: "red" }}> Stores</span>
            </h1>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Product;
