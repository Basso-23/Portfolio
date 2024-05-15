import React, { useState, useEffect } from "react";

import { useAtom } from "jotai";
import { languageAtom } from "@/atom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "sonner";
import Arrow from "@/icons/Arrow";
import { Link, animateScroll as scroll } from "react-scroll";
import { imageAtom } from "@/atom";

const Hero = () => {
  const [language, setLanguage] = useAtom(languageAtom);
  const [imageLoaded, setImageLoaded] = useAtom(imageAtom);

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

  const ImageRender = ({ img }) => {
    useEffect(() => {
      if (imageLoaded) {
        const imagen = new Image();
        imagen.src = img;
        imagen.onload = () => {
          setTimeout(() => {
            setImageLoaded(false);
          }, 1000);
        };
      }
    }, [img]);

    return (
      <div className="relative w-[55%]">
        {imageLoaded && (
          <div className=" absolute fixedCenterXnY">
            <div className=" loader"></div>
          </div>
        )}
        <div
          style={{
            backgroundImage: `url(${img})`,
            visibility: imageLoaded ? "hidden" : "visible",
          }}
          className="flex h-full w-full bg-no-repeat bg-cover bg-top relative"
        >
          <div className=" absolute bottom-10 right-11 text-end text-sm">
            <div>The Kob</div>
            <div className="text-[#bababa]">Design Originals</div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <main className="h-[100svh] w-full border-[#2f2f2f] border-b ">
      {/*//* Hero desktop----------------------------------- */}
      <section className="lg:flex hidden h-full w-full">
        <div className=" h-full w-[45%]  border-r border-[#2f2f2f] flex justify-center items-center">
          <div className="2xl:-ml-28 h-full flex items-end relative w-[385px] pb-[40px]">
            <div className="leading-none flex flex-col gap-6 absolute fixedCenterXnY -mt-14 w-[385px]">
              {/*//* Title */}
              <h1 className=" text-3xl font-medium">
                {language ? (
                  <>Bienvenido a mi Portafolio</>
                ) : (
                  <>Welcome to My Portfolio</>
                )}
              </h1>
              {/*//* Subitle */}
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
              {/*//* Ver proyectos */}
              <Link
                to="projects"
                smooth={true}
                duration={1000}
                className="select-none w-full py-[18px] bg-white hover:bg-[#d7d7d7] transition-all text-black text-center rounded-sm font-semibold text-[15px] cursor-pointer"
              >
                {language ? <>Ver proyectos</> : <>See projects</>}
              </Link>

              {/*//* Correo Electrónico */}
              <div className="font-medium -mb-4 mt-2 border-t border-[#2f2f2f] pt-8">
                Correo Electrónico
              </div>
              <div className=" text-sm text-[#bababa] flex gap-2 ">
                {/*//* Enviar correo */}
                <a
                  href="mailto:carlos.baso23@gmail.com"
                  className=" underline underline-offset-4 cursor-pointer select-none hover:text-white transition-all"
                >
                  {language ? <>Enviar correo</> : <>Send email</>}
                </a>
                <div> {language ? <>o</> : <>or</>}</div>
                {/*//* Copy */}
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
            {/*//* Scroll down */}
            <div className="text-sm flex items-center gap-1 cursor-pointer text-[#bababa] hover:text-white transition-all -ml-1">
              <div className=" text-xl rotate-180">
                <Arrow />
              </div>
              <Link to="projects" smooth={true} duration={1000}>
                {language ? <>Desplazarse hacia abajo</> : <>Scroll down</>}
              </Link>
            </div>
          </div>
        </div>
        {/*//* Image */}
        <ImageRender img={"https://i.imgur.com/sIeaTaT.png"} />
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

        <div className=" bg-[#151415] leading-none flex flex-col gap-6 px-4 py-10 h-fit">
          {/*//* Title */}
          <h1 className=" text-[26px] font-medium">
            {language ? (
              <>Bienvenido a mi Portafolio</>
            ) : (
              <>Welcome to My Portfolio</>
            )}
          </h1>
          {/*//* Subitle */}
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
          {/*//* Ver proyectos */}
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            className="select-none w-full py-[18px] bg-white text-black text-center rounded-sm font-semibold text-[15px] hover:bg-[#d7d7d7] transition-all cursor-pointer"
          >
            {language ? <>Ver proyectos</> : <>See projects</>}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Hero;
