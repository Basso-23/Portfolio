import React, { useState, useEffect } from "react";
import { imageAtom } from "@/atom";
import { useAtom } from "jotai";

const Loader = () => {
  const [imageLoaded, setImageLoaded] = useAtom(imageAtom);
  return (
    <div>
      {imageLoaded && (
        <div className=" absolute fixedCenterXnY">
          <div className=" loader"></div>
        </div>
      )}
    </div>
  );
};

export default Loader;
