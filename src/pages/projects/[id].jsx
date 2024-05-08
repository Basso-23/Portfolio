import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { originalAtom } from "@/atom";
import ArrowLeft from "@/icons/ArrowLeft";

import JS from "@/icons/skills/JS";
import React_logo from "@/icons/skills/React";
import Next from "@/icons/skills/Next";
import Tailwind from "@/icons/skills/Tailwind";
import Astro from "@/icons/skills/Astro";
import Firebase from "@/icons/skills/Firebase";
import NodeJS from "@/icons/skills/NodeJS";
import Shadcn from "@/icons/skills/Shadcn";

const ProductInfo = () => {
  const router = useRouter();
  const [originalData, setOriginalData] = useAtom(originalAtom);

  const id = router.query.id;
  //console.log(id, "ID");

  const skills = {
    Next: <Next />,
    Javascript: <JS />,
    React: <React_logo />,
    Tailwind: <Tailwind />,
    Astro: <Astro />,
    Firebase: <Firebase />,
    Node: <NodeJS />,
    Shadcn: <Shadcn />,
  };

  const TechToRender = ({ name }) => {
    const Tech = skills[name];
    return Tech ? Tech : null;
  };

  return (
    <main className="pageSize min-h-screen">
      {originalData
        .filter((item) => item.name.replace(/ /g, "-") === id)
        .map((item, index) => (
          <div key={index} className="flex my-10">
            <section className="w-[470px] border-r min-h-screen relative">
              <div className="fixed w-[470px] pr-[50px]">
                <a
                  href="https://www.carlosbaso.com/"
                  className="flex gap-[2px] items-center text-[13px] text-[#9d9d9d] hover:text-black transition-all"
                >
                  <ArrowLeft />
                  Back to Projects
                </a>
                <h1 className="text-[48px] font-bold tracking-tighter leading-none mt-10">
                  {item.name}
                </h1>
                {item.tech.map((item, index) => (
                  <div key={index} className=" flex gap-10">
                    <TechToRender name={item} />
                  </div>
                ))}
              </div>
            </section>

            <section className=" flex-1 h-full ml-[50px]">
              <div>da</div>
            </section>
          </div>
        ))}
    </main>
  );
};

export default ProductInfo;
