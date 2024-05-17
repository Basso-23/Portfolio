import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { languageAtom } from "@/atom";
import Send from "@/icons/Send";
import Clip from "@/icons/Clip";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "sonner";
import Github from "@/icons/Github";
import Linkedin from "@/icons/Linkedin";
import Download from "@/icons/Download";
import Check from "@/icons/Check";

const Sidebar = () => {
  const [language, setLanguage] = useAtom(languageAtom);

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

  return (
    <main className=" sm:block hidden absolute left-0 h-full w-[250px] bg-[#161616] border-r border-[#333333] pb-6">
      <section className=" flex flex-col sticky top-0">
        <div className="p-5 font-medium border-b border-[#333333] flex">
          Menu
        </div>
        <div className=" flex flex-col px-4 mt-6 text-sm">
          <h1 className=" uppercase text-[11px] text-[#919191] font-semibold">
            {language ? <>correo electrónico</> : <>email</>}
          </h1>
          <a
            href="mailto:carlos.baso23@gmail.com"
            className="py-3 hover:bg-[#3F3E3F] flex items-center px-2 gap-2 text-[#afafaf] hover:text-white transition-all  mt-1 select-none"
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
            <div className="py-3 hover:bg-[#3F3E3F] flex items-center px-2 gap-2 text-[#afafaf] hover:text-white transition-all cursor-pointer  mt-1 select-none">
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
        <div className=" flex flex-col px-4 mt-8 text-sm">
          <h1 className=" uppercase text-[11px] text-[#919191] font-semibold">
            Links
          </h1>
          <a
            target="_blank"
            href="https://github.com/Basso-23"
            className="py-3 hover:bg-[#3F3E3F] flex items-center px-2 gap-2 text-[#afafaf] hover:text-white transition-all  mt-1 select-none"
          >
            <div>
              <Github />
            </div>
            <div>Github</div>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/carlosbaso/"
            className="py-3 hover:bg-[#3F3E3F] flex items-center px-2 gap-2 text-[#afafaf] hover:text-white transition-all  mt-1 select-none"
          >
            <div>
              <Linkedin />
            </div>
            <div>LinkedIn</div>
          </a>
        </div>
        <div className=" flex flex-col px-4 mt-8 text-sm">
          <h1 className=" uppercase text-[11px] text-[#919191] font-semibold">
            {language ? <>currículum </> : <>Resume</>}
          </h1>
          <a
            target="_blank"
            href={
              language
                ? "https://drive.google.com/file/d/1xK_8f4Jdlcjvw8a87wCpgfKEqfCBmR3O/view?usp=drive_link"
                : "https://drive.google.com/file/d/1O2gmqslUaGKqcvuj-d_cBgdJP1XEpCw4/view?usp=drive_link"
            }
            className="py-3 hover:bg-[#3F3E3F] flex items-center px-2 gap-2 text-[#afafaf] hover:text-white transition-all  mt-1 select-none"
          >
            <div>
              <Download />
            </div>
            <div> {language ? <>Descargar</> : <>Download</>}</div>
          </a>
        </div>
        <div className=" flex flex-col px-4 mt-8 text-sm">
          <h1 className=" uppercase text-[11px] text-[#919191] font-semibold">
            {language ? <>idioma</> : <>language</>}
          </h1>

          <div
            onClick={() => {
              setLanguage(true);
            }}
            style={{
              backgroundColor: language ? "#3F3E3F" : null,
              color: language ? "white" : null,
              pointerEvents: language ? "none" : null,
            }}
            className="py-3 hover:bg-[#3F3E3F] flex items-center px-2 gap-2 text-[#afafaf] hover:text-white transition-all  mt-1 select-none cursor-pointer"
          >
            <div className={language ? " visible" : " invisible"}>
              <Check />
            </div>
            <div>{language ? <>Español</> : <>Spanish</>}</div>
          </div>
          <div
            onClick={() => {
              setLanguage(false);
            }}
            style={{
              backgroundColor: !language ? "#3F3E3F" : null,
              color: !language ? "white" : null,
              pointerEvents: !language ? "none" : null,
            }}
            className="py-3 hover:bg-[#3F3E3F] flex items-center px-2 gap-2 text-[#afafaf] hover:text-white transition-all mt-1 select-none cursor-pointer"
          >
            <div className={!language ? " visible" : " invisible"}>
              <Check />
            </div>
            <div>{language ? <>Inglés</> : <>English</>}</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sidebar;
