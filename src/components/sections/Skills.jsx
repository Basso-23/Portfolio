import React, { useState, useEffect } from "react";
import Badge from "@/components/elements/Badge";
import JS from "@/icons/skills/JS";
import React_logo from "@/icons/skills/React";
import Next from "@/icons/skills/Next";
import Tailwind from "@/icons/skills/Tailwind";
import Astro from "@/icons/skills/Astro";
import Firebase from "@/icons/skills/Firebase";
import Git from "@/icons/skills/Git";
import NodeJS from "@/icons/skills/NodeJS";
import Html from "@/icons/skills/Html";
import Css from "@/icons/skills/Css";
import Linux from "@/icons/skills/Linux";

const Skills = () => {
  return (
    <div className="mt-8">
      <div className="text-[25px] text-black font-medium">
        <div className=" flex gap-4 mt-6 overflow-x-auto pb-3">
          <Badge name={"Javascript"} logo={<JS />} />
          <Badge name={"React JS"} logo={<React_logo />} />
          <Badge name={"Next JS"} logo={<Next />} />
          <Badge name={"Tailwind CSS"} logo={<Tailwind />} />
          <Badge name={"Astro"} logo={<Astro />} />
          <Badge name={"Firebase"} logo={<Firebase />} />
          <Badge name={"Git"} logo={<Git />} />
          <Badge name={"Node JS"} logo={<NodeJS />} />
          <Badge name={"React Native"} logo={<React_logo />} />
          <Badge name={"HTML 5"} logo={<Html />} />
          <Badge name={"CSS"} logo={<Css />} />
          <Badge name={"Linux"} logo={<Linux />} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
