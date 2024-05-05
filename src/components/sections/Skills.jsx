import React, { useState, useEffect } from "react";
import Badge from "@/components/elements/Badge";
import { skills } from "@/json/skills";

const Skills = () => {
  return (
    <div className="mt-8 py-4 pb-4 border-t">
      <div className="text-[25px] text-black font-medium">
        <div className="text-[25px] text-black font-medium flex items-center gap-2">
          <div
            style={{
              backgroundImage: `url("https://i.imgur.com/qDQBmaf.png")`,
            }}
            className=" bg-contain bg-no-repeat aspect-square marker"
          ></div>
          <div>Tecnologías</div>
        </div>
        <div className="text-[14px] text-[#808186] mt-1">
          Algunos de los lenguajes de programación, herramientas y tecnologías
          que utilizo.
        </div>
        <div style={{}} className=" flex gap-4 mt-6 overflow-x-auto pb-3">
          {skills.map((item, index) => (
            <div key={index}>
              <Badge name={item.name} color={item.color} bg={item.bg} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
