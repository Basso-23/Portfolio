import React, { useState, useEffect } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Send from "@/icons/Send";
import Clip from "@/icons/Clip";
import Check from "@/icons/Check";

const Header = () => {
  return (
    <div className="sm:flex hidden justify-between border-b pb-7 mt-8 tracking-tighter">
      <div className="   text-[26px] font-semibold ">
        Welcome to my portfolio
      </div>
      <div className=" tracking-tight font-medium text-[14px] flex gap-8 uppercase items-center">
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <div className="header-tab ">correo electrónico</div>
            </PopoverTrigger>
            <PopoverContent asChild>
              <div className="text-[13px] tracking-tight">
                <div className="flex items-center rounded-md py-3 px-2 mt-2 gap-2 bg-[#f6f6f6] text-black font-medium">
                  <div>
                    <Send />
                  </div>
                  <div>Enviar correo</div>
                </div>
                <div className="flex items-center rounded-md py-3 px-2 mt-2 gap-2 bg-[#f6f6f6] text-black font-medium">
                  <div>
                    <Clip />
                  </div>
                  <div>Copiar al portapapeles</div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="header-tab">github</div>
        <div className="header-tab">LinkedIn</div>
        <div className="header-tab">currículum</div>
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <div className="header-tab">idioma</div>
            </PopoverTrigger>
            <PopoverContent asChild>
              <div className="text-[13px] tracking-tight">
                <div className="flex items-center rounded-md py-3 px-2 mt-2 gap-2 bg-[#f6f6f6] text-black font-medium">
                  <div>
                    <Check />
                  </div>
                  <div>Español</div>
                </div>
                <div className="flex items-center rounded-md py-3 px-2 mt-2 gap-2 bg-[#f6f6f6] text-black font-medium">
                  <div>
                    <Check />
                  </div>
                  <div>Inglés</div>
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
