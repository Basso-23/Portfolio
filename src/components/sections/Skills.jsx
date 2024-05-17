import React, { useState, useEffect } from "react";
import Card from "@/components/elements/Card";
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
import Shadcn from "@/icons/skills/Shadcn";

const Skills = () => {
  return (
    <main className="pageSize pt-10 relative">
      <section className="text-[25px] text-black font-medium">
        <div className=" flex gap-4 overflow-x-auto pb-3">
          <Card name={"Javascript"} logo={<JS />} />
          <Card name={"React JS"} logo={<React_logo />} />
          <Card name={"Next JS"} logo={<Next />} />
          <Card name={"Tailwind CSS"} logo={<Tailwind />} />
          <Card name={"Shadcn/ui"} logo={<Shadcn />} />
          <Card name={"Astro"} logo={<Astro />} />
          <Card name={"Firebase"} logo={<Firebase />} />
          <Card name={"Git"} logo={<Git />} />
          <Card name={"Node JS"} logo={<NodeJS />} />
          <Card name={"React Native"} logo={<React_logo />} />
          <Card name={"HTML 5"} logo={<Html />} />
          <Card name={"CSS"} logo={<Css />} />
          <Card name={"Linux"} logo={<Linux />} />
        </div>
      </section>
    </main>
  );
};

export default Skills;
