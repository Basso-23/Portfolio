import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { languageAtom } from "@/atom";
import { Link, animateScroll as scroll } from "react-scroll";
import { imageAtom } from "@/atom";

const Hero_Mobile = () => {
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
          }, 1000);
        };
      }
    }, [img]);

    return (
      <div className="relative w-full h-full">
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
          className="w-full h-full flex-1 bg-no-repeat bg-cover bg-bottom relative"
        >
          <div className=" absolute bottom-5 right-5 text-end text-sm">
            <div>The Kob</div>
            <div className="text-[#bababa]">Design Originals</div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="flex flex-col lg:hidden h-full w-full">
      {/*//* Image */}
      <ImageRender img={"https://i.imgur.com/coYsMeS.png"} />

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
          <p className="leading-7 text-pretty">
            {language ? (
              <>
                Soy Carlos Baso, un desarrollador especializado en JavaScript,
                React JS y Next JS.
              </>
            ) : (
              <>
                I&apos;m Carlos Baso, a developer specialized in JavaScript,
                React JS and Next JS.
              </>
            )}
          </p>
        </div>
        {/*//* Ver proyectos */}
        <Link
          to="projects"
          smooth={true}
          duration={1000}
          className="select-none w-full py-[18px] bg-white text-black text-center rounded- font-semibold text-[15px] hover:bg-[#d7d7d7] transition-all cursor-pointer"
        >
          {language ? <>Ver proyectos</> : <>See projects</>}
        </Link>
      </div>
    </section>
  );
};

export default Hero_Mobile;
