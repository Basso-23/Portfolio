import React, { useState, useEffect } from "react";

const Footer = () => {
  return (
    <section className="sm:py-10 py-7 flex sm:justify-between text-[#707070] sm:text-[13px] text-[14px] max-w-[1300px] px-3 sm:px-8 mx-auto flex-wrap gap-4">
      <div className=" mx-auto sm:mx-0"> © 2024 CarlosBaso</div>
      <div className="sm:flex hidden gap-6">
        <div className=" cursor-pointer">
          <div>Correo electrónico</div>
        </div>
        <a target="_blank" href="https://github.com/Basso-23">
          Github
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/carlosbaso/">
          LinkedIn
        </a>
        <a target="_blank" href={"resume.com"} className=" cursor-pointer">
          <div>Currículum</div>
        </a>
        <div className=" cursor-pointer">ES</div>
        <div className=" cursor-pointer">EN</div>
      </div>
    </section>
  );
};

export default Footer;
