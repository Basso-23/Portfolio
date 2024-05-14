import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { languageAtom } from "@/atom";

const Hero = () => {
  return (
    <main className="h-[100svh] w-full border-[#2f2f2f] border-b">
      <section className="h-full flex w-full">
        {/*//* Message */}
        <div className=" h-full w-[45%] border-r border-[#2f2f2f] flex justify-center items-center ">
          <div className="leading-none flex flex-col gap-6 2xl:-ml-28 -mt-20">
            <div className=" w-10 aspect-square bg-gray-200"></div>
            <h1 className=" text-3xl">Welcome to My Portfolio</h1>
            <div className="text-[#bababa] font-medium">
              <p>Aquí encontrarás una colección diversa </p>
              <p className=" mt-2">
                de mis proyectos como Desarrollador de Software.
              </p>
            </div>
            <button className=" w-full py-[18px] bg-blue-500 text-center rounded-sm font-medium text-[15px]">
              See projects
            </button>
            <div className=" text-sm text-[#bababa] font-medium">
              Get in touch?
              <span className=" underline underline-offset-8 ml-3">
                Send email
              </span>
            </div>
          </div>
        </div>
        {/*//* Image */}
        <div
          style={{
            backgroundImage: "url(https://i.imgur.com/sIeaTaT.png)",
          }}
          className=" h-full w-[55%] bg-no-repeat bg-cover bg-top"
        ></div>
      </section>
    </main>
  );
};

export default Hero;
