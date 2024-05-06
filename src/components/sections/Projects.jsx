import React, { useState, useEffect } from "react";
import { projects } from "@/json/projects";
import Filters from "../elements/Filters";
import Github from "@/icons/Github";

const Projects = () => {
  return (
    <div className="mt-4 py-4 pb-4">
      <div className="tracking-tighter text-[25px] font-semibold leading-tighter">
        All projects
      </div>
      <Filters />

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10 mt-8">
        {projects
          .map((item, index) => (
            <div>
              <div
                style={{
                  backgroundImage: `url("${item.image}")`,
                }}
                className=" aspect-video w-full bg-no-repeat bg-cover rounded-sm shadow-sm"
                key={index}
              ></div>
              <div className=" flex justify-between items-center mt-4">
                <div className="font-bold tracking-tighter text-[14px]">
                  {item.name}
                </div>
                <div className="text-[30px] cursor-pointer hover:scale-110 transition-all hidden">
                  <Github />
                </div>
              </div>
              <div className="text-[#5b5b5b] flex gap-2 leading-none font-medium tracking-tighter text-[13px] mt-[2px]">
                <div className="border-r pr-2"> {item.category}</div>
                <div>{item.date}</div>
              </div>
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default Projects;
