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

const Navbar = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <div className="text-3xl cursor-pointer">
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
                    fontSize: 15,
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
                <div className=" border-b-[2px] border-t-[2px] border-[#ececec]  py-6  ">
                  <h1 className=" uppercase text-[11px] text-[#4f4f4f] font-semibold">
                    contacto
                  </h1>
                </div>
                <div className=" border-b-[2px] border-t-[2px] border-[#ececec] border-t-transparent   py-6  ">
                  <h1 className=" uppercase text-[11px] text-[#4f4f4f] font-semibold">
                    links
                  </h1>
                </div>
                <div className=" border-b-[2px] border-t-[2px] border-[#ececec] border-t-transparent  py-6 ">
                  <h1 className=" uppercase text-[11px] text-[#4f4f4f] font-semibold">
                    descargas
                  </h1>
                </div>
                <div className=" border-b-[2px] border-t-[2px] border-[#ececec] border-t-transparent  py-6 ">
                  <h1 className=" uppercase text-[11px] text-[#4f4f4f] font-semibold">
                    idioma
                  </h1>
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
