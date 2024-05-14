import React, { useState, useEffect } from "react";

import Download from "@/icons/Download";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Send from "@/icons/Send";
import Clip from "@/icons/Clip";
import Check from "@/icons/Check";
import { useAtom } from "jotai";
import { languageAtom } from "@/atom";
import { PopoverClose } from "@radix-ui/react-popover";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "sonner";
import Arrow from "@/icons/Arrow";

const Hero = () => {
  const [language, setLanguage] = useAtom(languageAtom);

  const handleToast = () => {
    toast(
      language
        ? "Correo electrónico copiado exitosamente"
        : "Email copied to clipboard",
      {
        description: "carlos.baso23@gmail.com",
        action: {
          onClick: () => console.log("Undo"),
        },
      }
    );
  };
  return (
    <main className="h-[100svh] w-full border-[#2f2f2f] border-b">
      {/*//* Hero desktop----------------------------------- */}
      <section className="lg:flex hidden h-full w-full">
        {/*//* Title */}
        <div className=" h-full w-[45%]  border-r border-[#2f2f2f] flex justify-center items-center">
          <div className="2xl:-ml-28 h-full flex items-end relative w-[385px] pb-[40px]">
            <div className="leading-none flex flex-col gap-6 absolute fixedCenterXnY -mt-14 w-[385px]">
              <h1 className=" text-3xl font-medium">
                {language ? (
                  <>Bienvenido a mi Portafolio</>
                ) : (
                  <>Welcome to My Portfolio</>
                )}
              </h1>
              <div className="text-[#bababa] ">
                <p>
                  {language ? (
                    <>Aquí encontrarás una colección diversa</>
                  ) : (
                    <>Here you will find a diverse collection</>
                  )}
                </p>
                <p className=" mt-2 leading-7">
                  {language ? (
                    <>de mis proyectos como Desarrollador de Software.</>
                  ) : (
                    <>of my projects as a Software Developer.</>
                  )}
                </p>
              </div>
              <button className="select-none w-full py-[18px] bg-white hover:bg-[#d7d7d7] transition-all text-black text-center rounded-sm font-semibold text-[15px]">
                {language ? <>Ver proyectos</> : <>See projects</>}
              </button>
              <div className="font-medium -mb-4 mt-2 border-t border-[#2f2f2f] pt-8">
                Correo Electrónico
              </div>
              <div className=" text-sm text-[#bababa] flex gap-2 ">
                <a
                  href="mailto:carlos.baso23@gmail.com"
                  className=" underline underline-offset-4 cursor-pointer select-none hover:text-white transition-all"
                >
                  {language ? <>Enviar correo</> : <>Send email</>}
                </a>
                <div> {language ? <>o</> : <>or</>}</div>
                <CopyToClipboard
                  text={"carlos.baso23@gmail.com"}
                  onCopy={() => {
                    handleToast();
                  }}
                >
                  <div className=" underline underline-offset-4 cursor-pointer select-none hover:text-white transition-all">
                    {language ? (
                      <>Copiar en portapapeles</>
                    ) : (
                      <>Copy to clipboard</>
                    )}
                  </div>
                </CopyToClipboard>
              </div>
            </div>
            {/*//* Descargar */}
            <div className="text-sm flex items-center gap-1 cursor-pointer text-[#bababa] hover:text-white transition-all -ml-1">
              <div className=" text-xl rotate-180">
                <Arrow />
              </div>
              <div>
                {language ? <>Desplazarse hacia abajo</> : <>Scroll down</>}
              </div>
            </div>
          </div>
        </div>
        {/*//* Image */}
        <div
          style={{
            backgroundImage: "url(https://i.imgur.com/sIeaTaT.png)",
          }}
          className="flex h-full w-[55%] bg-no-repeat bg-cover bg-top relative"
        >
          <div className=" absolute bottom-10 right-11 text-end text-sm">
            <div>The Kob</div>
            <div className="text-[#bababa]">Design Originals</div>
          </div>
        </div>
      </section>

      {/*//* Hero mobile----------------------------------- */}
      <section className="flex flex-col lg:hidden h-full w-full">
        {/*//* Image */}
        <div
          style={{
            backgroundImage: "url(https://i.imgur.com/sIeaTaT.png)",
          }}
          className=" flex-1 bg-no-repeat bg-cover bg-bottom relative"
        >
          <div className=" absolute bottom-5 right-5 text-end text-sm">
            <div>The Kob</div>
            <div className="text-[#bababa]">Design Originals</div>
          </div>
        </div>
        {/*//* Title */}
        <div className=" bg-[#151415] leading-none flex flex-col gap-6 px-4 py-10 h-fit">
          <h1 className=" text-[26px] font-medium">
            {language ? (
              <>Bienvenido a mi Portafolio</>
            ) : (
              <>Welcome to My Portfolio</>
            )}
          </h1>
          <div className="text-[#bababa]">
            <p>
              {language ? (
                <>Aquí encontrarás una colección diversa</>
              ) : (
                <>Here you will find a diverse collection</>
              )}
            </p>
            <p className=" mt-2 leading-7">
              {language ? (
                <>de mis proyectos como Desarrollador de Software.</>
              ) : (
                <>of my projects as a Software Developer.</>
              )}
            </p>
          </div>
          <button className="select-none w-full py-[18px] bg-white text-black text-center rounded-sm font-semibold text-[15px]">
            {language ? <>Ver proyectos</> : <>See projects</>}
          </button>
        </div>
      </section>
    </main>
  );
};

export default Hero;
