import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "sonner";
import { Link, animateScroll as scroll } from "react-scroll";
import { useAtom } from "jotai";
import { languageAtom } from "@/atom";
import { imageAtom } from "@/atom";
import Arrow from "@/icons/Arrow";

const Hero_Desktop = () => {
  const [language, setLanguage] = useAtom(languageAtom);
  const [imageLoaded, setImageLoaded] = useAtom(imageAtom);

  const ImageRender = ({ img }) => {
    useEffect(() => {
      if (imageLoaded) {
        const imagen = new Image();
        imagen.src = img;
        imagen.onload = () => {
          setTimeout(() => {
            setImageLoaded(false);
          }, 1300);
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
          className=" h-full w-full bg-no-repeat bg-cover bg-top relative hidden"
        >
          <div className=" absolute bottom-10 right-11 text-end text-sm">
            <div>The Kob</div>
            <div className="text-[#bababa]">Design Originals</div>
          </div>
        </div>
        <video width="600" loop muted autoPlay>
          <source src="/landing.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
    );
  };

  return (
    <section className="lg:flex hidden h-full w-full">
      {/*//* LEFT */}
      <div className=" h-full w-[45%] border-r border-[#2f2f2f] flex justify-center items-center relative">
        <div className="h-full flex flex-col justify-center relative w-fit pb-[40px] font-medium">
          <div className="leading-none flex flex-col gap-6 relative -mt-16">
            {/*//* Title */}
            <h1 className="text-[30px]">
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
                  <>Soy Carlos Baso, un desarrollador especializado</>
                ) : (
                  <>I&apos;m Carlos Baso, a developer specialized</>
                )}
              </p>
              <p className="mt-2 leading-7">
                {language ? (
                  <>en JavaScript, React JS y Next JS.</>
                ) : (
                  <>in JavaScript, React JS and Next JS.</>
                )}
              </p>
            </div>
            {/*//* Ver proyectos */}
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              className="select-none w-full py-[18px] bg-white hover:bg-[#d7d7d7] transition-all text-black text-center rounded- font-semibold text-[15px] cursor-pointer"
            >
              {language ? <>Ver proyectos</> : <>See projects</>}
            </Link>

            {/*//* Message */}
            <div className="text-sm text-[#bababa] flex gap-[5px] ">
              <div>{language ? <>Ir a </> : <>Go to</>}</div>
              <Link
                to="experience"
                smooth={true}
                duration={1000}
                className=" underline underline-offset-4 cursor-pointer select-none hover:text-white transition-all"
              >
                {language ? <>Experiencia</> : <>Experience</>}
              </Link>
            </div>
            <div className="xl:block hidden w-12 aspect-square absolute -top-20 -left-14 border-l border-t"></div>
            <div className="xl:block hidden w-12 aspect-square absolute -top-20 -right-12 border-t border-r"></div>
            <div className="xl:block hidden w-12 aspect-square absolute -bottom-20 -left-14 border-b border-l"></div>
            <div className="xl:block hidden w-12 aspect-square absolute -bottom-20 -right-12 border-b border-r"></div>
          </div>
          {/*//* Scroll down */}
          <div className=" absolute bottom-10 xl:left-[-55px] text-sm flex items-center gap-1 cursor-pointer text-[#bababa] hover:text-white transition-all -ml-1">
            <div className="text-xl rotate-180">
              <Arrow />
            </div>
            <Link to="projects" smooth={true} duration={1000}>
              {language ? <>Desplazarse hacia abajo</> : <>Scroll down</>}
            </Link>
          </div>
        </div>
      </div>

      {/*//* RIGHT */}
      <ImageRender img={"https://i.imgur.com/coYsMeS.png"} />
    </section>
  );
};

export default Hero_Desktop;
