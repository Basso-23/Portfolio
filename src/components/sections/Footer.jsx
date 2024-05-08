import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { languageAtom } from "@/atom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "sonner";

const Footer = () => {
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
    <section className=" py-7 flex 2xl:justify-between text-[#696969] text-[13px] flex-wrap gap-4 tracking-tight font-normal">
      <div className=" mx-auto sm:mx-0">©2024 CarlosBaso</div>
      <div className="sm:flex hidden gap-6 pl-4 sm:border-l">
        <CopyToClipboard
          text={"carlos.baso23@gmail.com"}
          onCopy={() => {
            handleToast();
          }}
        >
          <div className=" cursor-pointer">
            {language ? <>Correo electrónico</> : <>Email</>}
          </div>
        </CopyToClipboard>
        <a target="_blank" href="https://github.com/Basso-23">
          Github
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/carlosbaso/">
          LinkedIn
        </a>
        <a
          target="_blank"
          href={
            language
              ? "https://drive.google.com/file/d/1xK_8f4Jdlcjvw8a87wCpgfKEqfCBmR3O/view?usp=drive_link"
              : "https://drive.google.com/file/d/1O2gmqslUaGKqcvuj-d_cBgdJP1XEpCw4/view?usp=drive_link"
          }
          className=" cursor-pointer"
        >
          {language ? <>Currículum</> : <>Resume</>}
        </a>
        <div
          onClick={() => {
            setLanguage(true);
          }}
          className=" cursor-pointer"
        >
          ES
        </div>
        <div
          onClick={() => {
            setLanguage(false);
          }}
          className=" cursor-pointer"
        >
          EN
        </div>
      </div>
    </section>
  );
};

export default Footer;
