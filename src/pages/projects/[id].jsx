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
import Link from "next/link";
import Html from "@/icons/skills/Html";
import Css from "@/icons/skills/Css";
import Related from "@/components/sections/Related";

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
    HTML: <Html />,
    CSS: <Css />,
  };

  const TechToRender = ({ name }) => {
    const Tech = skills[name];
    return Tech ? Tech : null;
  };

  return (
    <main className="relative">
      <Head>
        {id ? (
          <title>Carlos Baso | {id.replace(/-/g, " ")}</title>
        ) : (
          <title>Carlos Baso</title>
        )}
      </Head>
      {/*//* Back (mobile) */}
      <Link
        href={{
          pathname: "/",
        }}
        className="z-40 w-fit lg:hidden flex gap-[2px] items-center text-[13px] text-[#9d9d9d] hover:text-black absolute top-0 lg:left-[48px] sm:left-6 cursor-pointer pageSize"
      >
        <ArrowLeft />
        {language ? <>Voler a Proyectos</> : <>Back to Projects</>}
      </Link>

      <section className="pageSize ">
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
                  className=" aspect-video w-full bg-no-repeat bg-cover rounded-sm relative bg-top border lg:hidden flex mt-10 "
                ></div>
                <div className="lg:sticky top-10 xl:w-[470px] lg:w-[375px] lg:pr-[50px] lg:pl-[25px] ">
                  {/*//* Back (desktop) */}
                  <Link
                    href={{
                      pathname: "/",
                    }}
                    className="w-fit hidden lg:flex gap-[2px] items-center text-[13px] text-[#9d9d9d] hover:text-black cursor-pointer"
                  >
                    <ArrowLeft />
                    {language ? <>Voler a Proyectos</> : <>Back to Projects</>}
                  </Link>
                  {/*//* Nombre */}
                  <h1 className="lg:text-[48px] text-[32px] font-bold tracking-tighter leading-none mt-8">
                    {item.name}
                  </h1>
                  {/*//* Summary */}
                  <h2 className="lg:mt-8 mt-6 text-[16px] text-[#585858] tracking-tight">
                    {item.summary}
                  </h2>
                  <div className=" grid grid-cols-2 gap-6 text-center mt-4 text-[13.5px]">
                    {/*//* Demo button */}
                    <a
                      target="_blank"
                      href={item.url}
                      className=" py-[10px] border rounded-md cursor-pointer hover:bg-[#ebebeb] transition-all"
                    >
                      Demo
                    </a>
                    {/*//* Github button */}
                    <a
                      target="_blank"
                      href={item.github}
                      className=" py-[10px] bg-black rounded-md text-white cursor-pointer hover:bg-[#343434] transition-all"
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
              <section className="lg:flex-1 lg:ml-[50px] lg:mt-8 mt-10 mb-10">
                {/*//* Image (desktop) */}
                <div
                  style={{
                    backgroundImage: `url("${item.image}")`,
                  }}
                  className=" aspect-video w-full bg-no-repeat bg-cover rounded-sm relative bg-top border hidden lg:flex lg:mb-10 mb-0"
                ></div>
                <div
                  dangerouslySetInnerHTML={{ __html: item.h1 }}
                  className="h1-content"
                ></div>
                <div
                  dangerouslySetInnerHTML={{ __html: item.h2 }}
                  className="mt-6 h2-content"
                ></div>
              </section>
            </div>
          ))}
      </section>

      <Related />

      <section className=" w-full sm:py-20 py-12 pageSize -mb-16">
        <div className="bg-[#F7F7F7] w-full rounded-lg border tracking-tighter flex flex-col justify-center lg:px-15 lg:pt-14 lg:pb-16 p-14 lg:text-start text-center relative">
          <h1 className=" font-bold lg:text-[48px] text-[32px] leading-none">
            {language ? (
              <>Conoce un poco más de mi </>
            ) : (
              <>Get to know a little more about me</>
            )}
          </h1>
          <h2 className="text-[20px] mt-5 leading-tight text-[#5f5f5f]">
            {language ? (
              <>
                Echa un vistazo a mi experiencia previa y a mis diversas
                habilidades
              </>
            ) : (
              <>Take a look at my previous experience and my various skills</>
            )}
          </h2>
          {/*//* Download CV (desktop) */}
          <a
            target="_blank"
            href={
              language
                ? "https://drive.google.com/file/d/1xK_8f4Jdlcjvw8a87wCpgfKEqfCBmR3O/view?usp=drive_link"
                : "https://drive.google.com/file/d/1O2gmqslUaGKqcvuj-d_cBgdJP1XEpCw4/view?usp=drive_link"
            }
            className="text-[14px] lg:flex hidden absolute right-16 fixedCenterY py-3 px-9 bg-black rounded-md text-white hover:bg-[#343434] transition-all"
          >
            {language ? <>Descargar CV</> : <>Download CV</>}
          </a>
          {/*//* Download CV (mobile) */}
          <a
            target="_blank"
            href={
              language
                ? "https://drive.google.com/file/d/1xK_8f4Jdlcjvw8a87wCpgfKEqfCBmR3O/view?usp=drive_link"
                : "https://drive.google.com/file/d/1O2gmqslUaGKqcvuj-d_cBgdJP1XEpCw4/view?usp=drive_link"
            }
            className="text-[14px] flex lg:hidden py-3 px-9 bg-black rounded-md text-white hover:bg-[#343434] transition-all w-fit mx-auto mt-7"
          >
            {language ? <>Descargar CV</> : <>Download CV</>}
          </a>
        </div>
      </section>
    </main>
  );
};

export default ProductInfo;
