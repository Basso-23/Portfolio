import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Cross as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="sm:hidden flex w-full h-[60px] border-b border-[#333333] items-center justify-end">
      <Sheet>
        <SheetTrigger asChild>
          <div className="mx-1">
            <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription asChild>
              <div className="mobile relative">
                <Sidebar />
                <SheetClose asChild>
                  <div className=" absolute top-[6px] right-[3px] cursor-pointer text-white">
                    <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
                  </div>
                </SheetClose>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default Navbar;
