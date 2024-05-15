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

  return (
    <main className="sticky top-0 z-[60]">
      <section className=" h-14 w-full border-b border-[#2f2f2f] bg-[#151415]">
        <div></div>
      </section>
    </main>
  );
};

export default Navbar;
