import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { images } from "../constants";
const HeaderSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <section className="mt-6">
      <div className="container">
        <div className="min-h-[400px] h-full">
          <Slider {...settings} className="h-full">
            <div className="w-full h-full relative">
              <Image
                src={images.header}
                className="absolute top-0 left-0 z-0 h-full w-full"
              />
              <div className="absolute top-0 right-0 bottom-0 w-2/4">
                <div className="flex items-center justify-center text-white h-full">xaxa</div>
              </div>
            </div>
            <div className="w-full h-full relative">
              <Image
                src={images.header}
                className="absolute top-0 left-0 z-0 h-full w-full"
              />
              <div className="absolute top-0 right-0 bottom-0 w-2/4">
                <div className="flex items-center justify-center text-white h-full">xaxa</div>
              </div>
            </div>
            <div className="w-full h-full relative">
              <Image
                src={images.header}
                className="absolute top-0 left-0 z-0 h-full w-full"
              />
              <div className="absolute top-0 right-0 bottom-0 w-2/4">
                <div className="flex items-center justify-center text-white h-full">xaxa</div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HeaderSlider;
