import React, { useState, useEffect } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Menu from "@/icons/Menu";
import "@fontsource-variable/inter";
import Close from "@/icons/Close";
import Send from "@/icons/Send";
import Clip from "@/icons/Clip";
import Check from "@/icons/Check";
import Github from "@/icons/Github";
import Download from "@/icons/Download";
import Linkedin from "@/icons/Linkedin";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "sonner";
import { useAtom } from "jotai";
import { languageAtom } from "@/atom";

const Navbar = () => {
  const [language, setLanguage] = useAtom(languageAtom);

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
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <div className="text-[40px] cursor-pointer">
            <Menu />
          </div>
        </SheetTrigger>
        <SheetContent
          style={{
            fontFamily: "Inter Variable, sans-serif",
          }}
        >
          <SheetHeader>
            <SheetTitle asChild>
              <div className=" flex justify-between items-center mb-4">
                <div
                  style={{
                    fontSize: 17,
                  }}
                  className=" tracking-tighter"
                >
                  Menu
                </div>
                <SheetClose asChild>
                  <div className=" cursor-pointer bg-[#f8f8f8] p-[10px] rounded-full text-[20px] hover:scale-110 transition-all">
                    <Close />
                  </div>
                </SheetClose>
              </div>
            </SheetTitle>
            <SheetDescription asChild>
              <div className=" flex flex-col">
                <div className=" border-b border-t border-[#ececec] pt-3 pb-5 ">
                  <h1 className=" uppercase text-[11px] text-[#4f4f4f] font-semibold">
                    {language ? <>correo electrónico</> : <>email</>}
                  </h1>
                  <a
                    href="mailto:carlos.baso23@gmail.com"
                    className="flex items-center rounded-md py-3 px-2 mt-2 gap-2 bg-[#f6f6f6] text-black font-medium"
                  >
                    <div>
                      <Send />
                    </div>
                    <div>
                      {language ? <>Enviar correo </> : <>Send email</>}
                    </div>
                  </a>
                  <CopyToClipboard
                    text={"carlos.baso23@gmail.com"}
                    onCopy={() => {
                      handleToast();
                    }}
                  >
                    <div className="flex items-center rounded-md py-3 px-2 mt-3 gap-2 bg-[#f6f6f6] text-black font-medium cursor-pointer">
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
                <div className=" border-b border-t border-t-transparent border-[#ececec] pt-3 pb-5 ">
                  <h1 className=" uppercase text-[11px] text-[#4f4f4f] font-semibold">
                    links
                  </h1>
                  <a
                    target="_blank"
                    href="https://github.com/Basso-23"
                    className="flex items-center rounded-md py-3 px-2 mt-2 gap-2 bg-[#f6f6f6] text-black font-medium"
                  >
                    <div>
                      <Github />
                    </div>
                    <div>Github</div>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/carlosbaso/"
                    className="flex items-center rounded-md py-3 px-2 mt-3 gap-2 bg-[#f6f6f6] text-black font-medium"
                  >
                    <div>
                      <Linkedin />
                    </div>
                    <div>LinkedIn</div>
                  </a>
                </div>
                <div className=" border-b border-t border-t-transparent border-[#ececec] pt-3 pb-5 ">
                  <h1 className=" uppercase text-[11px] text-[#4f4f4f] font-semibold">
                    cv
                  </h1>
                  <a
                    target="_blank"
                    href={
                      language
                        ? "https://drive.google.com/file/d/1xK_8f4Jdlcjvw8a87wCpgfKEqfCBmR3O/view?usp=drive_link"
                        : "https://drive.google.com/file/d/1O2gmqslUaGKqcvuj-d_cBgdJP1XEpCw4/view?usp=drive_link"
                    }
                    className="flex items-center rounded-md py-3 px-2 mt-2 gap-2 bg-[#f6f6f6] text-black font-medium"
                  >
                    <div>
                      <Download />
                    </div>
                    <div> {language ? <>Descargar</> : <>Download</>}</div>
                  </a>
                </div>
                <div className=" border-t border-t-transparent border-[#ececec] pt-3 pb-5 ">
                  <h1 className=" uppercase text-[11px] text-[#4f4f4f] font-semibold">
                    {language ? <>idioma</> : <>language</>}
                  </h1>
                  <div
                    onClick={() => {
                      setLanguage(true);
                    }}
                    className="flex items-center rounded-md py-3 px-2 mt-2 gap-2 bg-[#f6f6f6] text-black font-medium cursor-pointer select-none"
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
                    className="flex items-center rounded-md py-3 px-2 mt-3 gap-2 bg-[#f6f6f6] text-black font-medium cursor-pointer select-none"
                  >
                    <div className={!language ? " visible" : " invisible"}>
                      <Check />
                    </div>
                    <div>{language ? <>Inglés</> : <>English</>}</div>
                  </div>
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
          <div></div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
