import React, { useState, useEffect } from "react";
import Slider from "react-infinite-logo-slider";

const Experience = () => {
  return (
    <div className="mt-8 py-4 pb-4 border-t">
      <div className="text-[25px] font-medium ">Experience</div>
      <div className="text-[14px] text-[#808080]">
        <div>Algunas de las empresas con las que he podido trabajar.</div>
      </div>
      <Slider
        width="300px"
        duration={40}
        pauseOnHover={false}
        blurBorders={true}
        blurBoderColor={"#fff"}
      >
        <Slider.Slide>
          <div className="card">
            <div
              style={{
                backgroundImage: `url("https://i.imgur.com/Dxcvtil.png")`,
              }}
              className="w-[200px] saturate-0 cardImage"
            ></div>
          </div>
        </Slider.Slide>
        <Slider.Slide>
          <div className="card">
            <div
              style={{
                backgroundImage: `url("https://i.imgur.com/MAZ0Sya.png")`,
              }}
              className="w-[200px] saturate-0 cardImage"
            ></div>
          </div>
        </Slider.Slide>
        <Slider.Slide>
          <div className="card">
            <div
              style={{
                backgroundImage: `url("https://i.imgur.com/G4N2p9E.png")`,
              }}
              className="w-[70px] saturate-0 cardImage"
            ></div>
          </div>
        </Slider.Slide>
        <Slider.Slide>
          <div className="card">
            <div
              style={{
                backgroundImage: `url("https://i.imgur.com/IXPI0qS.png")`,
              }}
              className="w-[80px] saturate-0 cardImage"
            ></div>
          </div>
        </Slider.Slide>
      </Slider>
    </div>
  );
};

export default Experience;
