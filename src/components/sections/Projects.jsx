import Github from "@/icons/Github";
import Visit from "@/icons/Visit";
import { projects } from "@/json/projects";
import React, { useState, useEffect } from "react";

const Projects = () => {
  return (
    <div className="mt-8 py-4 pb-4 border-t  ">
      <div className="text-[25px]  font-medium flex items-center gap-2">
        <div
          style={{
            backgroundImage: `url("https://i.imgur.com/qDQBmaf.png")`,
          }}
          className=" bg-contain bg-no-repeat aspect-square marker"
        ></div>
        <div>Proyectos</div>
      </div>
      <div className="text-[14px] text-[#808186] mt-1">
        Estos son algunos de mis últimos proyectos, los cuales representan mi
        pasión y dedicación por el desarrollo de software.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9 mt-7">
        {projects
          .map((item, index) => (
            <div
              key={index}
              className="flex w-full flex-col aspect-square max-h-[325px]"
            >
              <div
                style={{
                  backgroundImage: `url("${item.image}")`,
                }}
                className={
                  "w-full aspect-square max-h-[325px] border-[1px] border-[#e2e2e2] relative mx-auto projectImage"
                }
              >
                {/* Anchor */}
                <div className="focus w-full h-full relative">
                  <a
                    target="_blank"
                    href={item.url}
                    className="w-full h-full z-50 absolute"
                  ></a>
                </div>
                {/* Tag desktop */}
                <div className="focus-content sm:flex hidden justify-center flex-col gap-0 pl-10 tracking-wide max-w-[350px]">
                  <div className="text-[18px] roboto-light">{item.name}</div>
                  <div className="text-[13px] text-[#b0b0b0]">
                    {item.category}
                  </div>
                </div>
              </div>
              <div className=" grid grid-cols-2 text-sm gap-1 mt-1">
                <div className="w-full bg-white text-[#101010] flex py-[12px] relative justify-center cursor-pointer border ">
                  <div className=" absolute left-5 fixedCenterY text-xl">
                    <Visit />
                  </div>
                  <div className="ml-1">Ver página</div>
                </div>
                <div className="w-full bg-[#101010] text-white flex py-[12px] relative justify-center cursor-pointer border ">
                  <div className=" absolute left-5 fixedCenterY text-xl">
                    <Github />
                  </div>
                  <div className="ml-1">Github</div>
                </div>
              </div>
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default Projects;
