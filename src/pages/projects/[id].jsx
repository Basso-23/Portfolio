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
    <main className="pageSize min-h-screen relative">
      <a
        href="https://www.carlosbaso.com/"
        className="flex gap-[2px] items-center text-[13px] text-[#9d9d9d] hover:text-black transition-all absolute top-0 lg:left-[48px] sm:left-6"
      >
        <ArrowLeft />
        Back to Projects
      </a>
      {originalData
        .filter((item) => item.name.replace(/ /g, "-") === id)
        .map((item, index) => (
          <div
            key={index}
            className="lg:flex lg:flex-row flex flex-col-reverse sm:my-10 my-5"
          >
            <section className="lg:w-[470px] lg:border-r lg:min-h-screen relative">
              <div className="lg:fixed lg:w-[470px] lg:pr-[50px] lg:pl-[25px]">
                <h1 className="lg:text-[48px] text-[32px] font-bold tracking-tighter leading-none sm:mt-16 mt-8">
                  {item.name}
                </h1>

                <h2 className="lg:mt-8 mt-6 text-[15px] text-[#585858]">
                  Get started with Next.js and React in seconds.
                </h2>

                <div className=" grid grid-cols-2 gap-6 text-center mt-4 text-[14px]">
                  <a
                    target="_blank"
                    href={item.url}
                    className=" py-2 border rounded-md cursor-pointer hover:bg-[#ebebeb] transition-all"
                  >
                    Demo
                  </a>
                  <a
                    target="_blank"
                    href={item.github}
                    className=" py-2 bg-black rounded-md text-white cursor-pointer hover:bg-[#343434] transition-all"
                  >
                    Github
                  </a>
                </div>

                <div className=" border-b flex justify-between  text-[14px] py-2 mt-3 text-[#585858]">
                  <div className="font-medium">Date</div>
                  <div>{item.date}</div>
                </div>
                <div className=" border-b flex justify-between  text-[14px] py-2 text-[#585858] capitalize">
                  <div className="font-medium">Category</div>
                  <div>{item.category}</div>
                </div>
                <div className=" flex gap-2 text-[25px] mt-4 justify-end">
                  {item.tech.map((item, index) => (
                    <div key={index}>
                      <TechToRender name={item} />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="lg:flex-1 lg:ml-[50px] sm:mt-8 mt-10">
              <div
                style={{
                  backgroundImage: `url("${item.image}")`,
                }}
                className=" aspect-video w-full bg-no-repeat bg-cover rounded-sm relative bg-top border"
              ></div>
            </section>
          </div>
        ))}
    </main>
  );
};

export default ProductInfo;
