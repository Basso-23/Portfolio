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

const Navbar = () => {
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
                <div className=" border-b border-t border-[#ececec] pt-6 pb-7 ">
                  <h1 className=" uppercase text-[11px] text-[#4f4f4f] font-semibold">
                    correo electrónico
                  </h1>
                  <div className="flex items-center rounded-md py-3 px-2 mt-2 gap-2 bg-[#f6f6f6] text-black font-medium">
                    <div>
                      <Send />
                    </div>
                    <div>Enviar correo</div>
                  </div>
                  <div className="flex items-center rounded-md py-3 px-2 mt-3 gap-2 bg-[#f6f6f6] text-black font-medium">
                    <div>
                      <Clip />
                    </div>
                    <div>Copiar al portapapeles</div>
                  </div>
                </div>
                <div className=" border-b border-t border-t-transparent border-[#ececec] pt-5 pb-7 ">
                  <h1 className=" uppercase text-[11px] text-[#4f4f4f] font-semibold">
                    links
                  </h1>
                  <div className="flex items-center rounded-md py-3 px-2 mt-2 gap-2 bg-[#f6f6f6] text-black font-medium">
                    <div>
                      <Github />
                    </div>
                    <div>Github</div>
                  </div>
                  <div className="flex items-center rounded-md py-3 px-2 mt-3 gap-2 bg-[#f6f6f6] text-black font-medium">
                    <div>
                      <Linkedin />
                    </div>
                    <div>LinkedIn</div>
                  </div>
                </div>
                <div className=" border-b border-t border-t-transparent border-[#ececec] pt-5 pb-7 ">
                  <h1 className=" uppercase text-[11px] text-[#4f4f4f] font-semibold">
                    cv
                  </h1>
                  <div className="flex items-center rounded-md py-3 px-2 mt-2 gap-2 bg-[#f6f6f6] text-black font-medium">
                    <div>
                      <Download />
                    </div>
                    <div>Descargar</div>
                  </div>
                </div>
                <div className=" border-t border-t-transparent border-[#ececec] pt-5 pb-7 ">
                  <h1 className=" uppercase text-[11px] text-[#4f4f4f] font-semibold">
                    idioma
                  </h1>
                  <div className="flex items-center rounded-md py-3 px-2 mt-2 gap-2 bg-[#f6f6f6] text-black font-medium">
                    <div>
                      <Check />
                    </div>
                    <div>Español</div>
                  </div>
                  <div className="flex items-center rounded-md py-3 px-2 mt-3 gap-2 bg-[#f6f6f6] text-black font-medium">
                    <div>
                      <Check />
                    </div>
                    <div>Inglés</div>
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
