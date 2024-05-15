import React, { useState, useEffect } from "react";
import Hero_Desktop from "./Hero_Desktop";
import Hero_Mobile from "./Hero_Mobile";

const Hero = () => {
  return (
    <main className="h-[100svh] w-full border-[#2f2f2f] border-b ">
      <Hero_Desktop />
      <Hero_Mobile />
    </main>
  );
};

export default Hero;
