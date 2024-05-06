import React, { useState, useEffect } from "react";
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
import TextTransition, { presets } from "react-text-transition";

const Header = () => {
  const [language, setLanguage] = useAtom(languageAtom);
  const [index, setIndex] = useState(0);

  const TEXTS = ["React", "Next", "Astro", "Git", "Node", "JS", "html", "ccs"];

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      5000 //* every 5 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  const handleToast = () => {
    toast(
      language
        ? "Correo electrónico copiado exitosamente"
        : "Email copied to clipboard",
      {
        description: "carlos.baso23@gmail.com",
        action: {
          label: "✔️",
          onClick: () => console.log("Undo"),
        },
      }
    );
  };

  return (
    <div className="sm:flex hidden justify-between border-b pb-7 mt-8 tracking-tighter">
      <div className="flex text-[26px] font-semibold">
        <div>
          {language ? (
            <>Bienvenido a mi portafolio</>
          ) : (
            <>Welcome to my portfolio</>
          )}
        </div>
        <div className="font-bold tracking-tighter text-[11px] uppercase top-0 bg-black text-white rounded-md px-[8px] py-[2px] h-fit ml-2">
          <TextTransition springConfig={presets.stiff}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </div>
      </div>
      <div className=" tracking-tight font-medium text-[14px] flex gap-8 uppercase items-center">
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <div className="header-tab ">
                {language ? <>correo electrónico</> : <>email</>}
              </div>
            </PopoverTrigger>
            <PopoverContent asChild>
              <div className="text-[13px] tracking-tight">
                <a
                  href="mailto:carlos.baso23@gmail.com"
                  className="flex items-center rounded-md py-3 px-2 mt-2 gap-2 bg-[#f6f6f6] text-black font-medium cursor-pointer select-none"
                >
                  <div>
                    <Send />
                  </div>
                  <div>{language ? <>Enviar correo </> : <>Send email</>}</div>
                </a>
                <CopyToClipboard
                  text={"carlos.baso23@gmail.com"}
                  onCopy={() => {
                    handleToast();
                  }}
                >
                  <div className="flex items-center rounded-md py-3 px-2 mt-2 gap-2 bg-[#f6f6f6] text-black font-medium cursor-pointer select-none">
                    <div>
                      <Clip />
                    </div>
                    <div>
                      {language ? (
                        <>Copiar al portapapeles </>
                      ) : (
                        <>Copy to clipboard</>
                      )}
                    </div>
                  </div>
                </CopyToClipboard>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <a
          target="_blank"
          href="https://github.com/Basso-23"
          className="header-tab"
        >
          github
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/carlosbaso/"
          className="header-tab"
        >
          LinkedIn
        </a>
        <a
          target="_blank"
          href={
            language
              ? "https://drive.google.com/file/d/1xK_8f4Jdlcjvw8a87wCpgfKEqfCBmR3O/view?usp=drive_link"
              : "https://drive.google.com/file/d/1O2gmqslUaGKqcvuj-d_cBgdJP1XEpCw4/view?usp=drive_link"
          }
          className="header-tab"
        >
          {language ? <>currículum</> : <>Resume</>}
        </a>
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <div className="header-tab">
                {language ? <>idioma</> : <>language</>}
              </div>
            </PopoverTrigger>
            <PopoverContent asChild>
              <div className="text-[13px] tracking-tight">
                <div
                  onClick={() => {
                    setLanguage(true);
                  }}
                  className="flex items-center rounded-md py-3 px-2 mt-2 gap-2 bg-[#f6f6f6] text-black font-medium cursor-pointer select-none"
                >
                  <div>
                    <div className={language ? " visible" : " invisible"}>
                      <Check />
                    </div>
                  </div>
                  <div>{language ? <>Español</> : <>Spanish</>}</div>
                </div>

                <div
                  onClick={() => {
                    setLanguage(false);
                  }}
                  className="flex items-center rounded-md py-3 px-2 mt-2 gap-2 bg-[#f6f6f6] text-black font-medium cursor-pointer select-none"
                >
                  <div className={!language ? " visible" : " invisible"}>
                    <Check />
                  </div>
                  <div>{language ? <>Inglés</> : <>English</>}</div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Header;
