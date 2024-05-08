import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { languageAtom } from "@/atom";
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
import Head from "next/head";

const ProductInfo = () => {
  const router = useRouter();
  const [originalData, setOriginalData] = useAtom(originalAtom);
  const [language, setLanguage] = useAtom(languageAtom);

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
      <Head>
        {id ? (
          <title>Carlos Baso | {id.replace(/-/g, " ")}</title>
        ) : (
          <title>Carlos Baso</title>
        )}
      </Head>
      {/*//* Back (mobile) */}
      <a
        href="https://www.carlosbaso.com/"
        className="lg:hidden flex gap-[2px] items-center text-[13px] text-[#9d9d9d] hover:text-black absolute top-0 lg:left-[48px] sm:left-6"
      >
        <ArrowLeft />
        Back to Projects
      </a>
      {originalData
        .filter((item) => item.name.replace(/ /g, "-") === id)
        .map((item, index) => (
          <div
            key={index}
            className="lg:flex lg:flex-row flex flex-col lg:my-10 my-5"
          >
            {/*//* Left side */}
            <section className="xl:w-[470px] lg:w-[375px] lg:border-r lg:min-h-screen relative ">
              {/*//* Image (mobile) */}
              <div
                style={{
                  backgroundImage: `url("${item.image}")`,
                }}
                className=" aspect-video w-full bg-no-repeat bg-cover rounded-sm relative bg-top border lg:hidden flex mt-10 animate-fade-right duration-500"
              ></div>
              <div className="lg:fixed xl:w-[470px] lg:w-[375px] lg:pr-[50px] lg:pl-[25px] ">
                {/*//* Back (desktop) */}
                <a
                  href="https://www.carlosbaso.com/"
                  className="hidden lg:flex gap-[2px] items-center text-[13px] text-[#9d9d9d] hover:text-black"
                >
                  <ArrowLeft />
                  {language ? <>Voler a Proyectos</> : <>Back to Projects</>}
                </a>
                {/*//* Nombre */}
                <h1 className="lg:text-[48px] text-[32px] font-bold tracking-tighter leading-none mt-8">
                  {item.name}
                </h1>
                {/*//* Summary */}
                <h2 className="lg:mt-8 mt-6 text-[15px] text-[#585858]">
                  {item.summary}
                </h2>
                <div className=" grid grid-cols-2 gap-6 text-center mt-4 text-[13.5px]">
                  {/*//* Demo button */}
                  <a
                    target="_blank"
                    href={item.url}
                    className=" py-2 border rounded-md cursor-pointer hover:bg-[#ebebeb] transition-all"
                  >
                    Demo
                  </a>
                  {/*//* Github button */}
                  <a
                    target="_blank"
                    href={item.github}
                    className=" py-2 bg-black rounded-md text-white cursor-pointer hover:bg-[#343434] transition-all"
                  >
                    Github
                  </a>
                </div>
                {/*//* Fecha */}
                <div className=" border-b flex justify-between  text-[14px] py-2 mt-3 text-[#585858]">
                  <div className="font-semibold">
                    {language ? <>Fecha</> : <>Date</>}
                  </div>
                  <div>{item.date}</div>
                </div>
                {/*//* Category */}
                <div className=" border-b flex justify-between  text-[14px] py-2 text-[#585858] capitalize">
                  <div className="font-semibold">
                    {language ? <>Categoría</> : <>Category</>}
                  </div>
                  <div>{item.category}</div>
                </div>
                {/*//* Techs */}
                <div className=" flex gap-2 text-[25px] mt-4 justify-end">
                  {item.tech.map((item, index) => (
                    <div key={index}>
                      <TechToRender name={item} />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/*//* Right side */}
            <section className="lg:flex-1 lg:ml-[50px] lg:mt-8 mt-10">
              {/*//* Image (desktop) */}
              <div
                style={{
                  backgroundImage: `url("${item.image}")`,
                }}
                className=" aspect-video w-full bg-no-repeat bg-cover rounded-sm relative bg-top border hidden lg:flex animate-fade-right duration-500"
              ></div>

              <div className=" lg:mt-12 mt-6">Contenido</div>
            </section>
          </div>
        ))}
    </main>
  );
};

export default ProductInfo;
