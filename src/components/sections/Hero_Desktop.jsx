import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "sonner";
import { Link, animateScroll as scroll } from "react-scroll";
import { useAtom } from "jotai";
import { languageAtom } from "@/atom";
import { imageAtom } from "@/atom";
import Arrow from "@/icons/Arrow";
import TextTransition, { presets } from "react-text-transition";
import Check from "@/icons/Check";

const Hero_Desktop = () => {
  const [language, setLanguage] = useAtom(languageAtom);
  const [imageLoaded, setImageLoaded] = useAtom(imageAtom);
  const [index, setIndex] = useState(0);

  const TEXTS = language
    ? [
        "Software developer",
        "Programador",
        "Diseñador front-end",
        "desarrollador web",
      ]
    : [
        "Software developer",
        "Programmer",
        "Front-end Designer",
        "Web developer",
      ];

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      5000 //* every 5 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  const handleToast = () => {
    toast(
      language ? "Correo electrónico copiado" : "Email copied to clipboard",
      {
        description: "carlos.baso23@gmail.com",

        action: {
          label: (
            <div className=" text-xl">
              <Check />
            </div>
          ),
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
    <section className="lg:flex hidden h-full w-full">
      {/*//* LEFT */}
      <div className=" h-full w-[45%] border-r border-[#2f2f2f] flex justify-center items-center">
        <div className="2xl:-ml-28 h-full flex items-end relative w-[390px] pb-[40px] font-medium">
          <div className="leading-none flex flex-col gap-6 absolute fixedCenterXnY -mt-14 w-[390px]">
            {/*//* Badges */}
            <div className="flex pt-[6px] min-w-c w-fit font-bold text-[11px] uppercase bg-white text-black rounded- px-[8px] py-[2px] min-h-[20px]">
              <TextTransition springConfig={presets.stiff}>
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </div>
            {/*//* Title */}
            <h1 className="text-3xl">
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
            <div className="text-sm text-[#bababa] flex gap-2">
              <div>{language ? <>Ponte en contacto</> : <>Get in touch</>}</div>
              <CopyToClipboard
                text={"carlos.baso23@gmail.com"}
                onCopy={() => {
                  handleToast();
                }}
              >
                <div className=" underline underline-offset-4 cursor-pointer select-none hover:text-white transition-all">
                  {language ? <>Correo electrónico</> : <>Email</>}
                </div>
              </CopyToClipboard>
            </div>
          </div>

          {/*//* Scroll down */}
          <div className="text-sm flex items-center gap-1 cursor-pointer text-[#bababa] hover:text-white transition-all -ml-1">
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
