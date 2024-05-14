import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import React, { useState, useEffect } from "react";
import Header from "@/components/sections/Header";
import ScrollToTop from "@/components/elements/ScrollToTop";
import Header_Mobile from "@/components/sections/Header_Mobile";
import Head from "next/head";
import Hero from "@/components/sections/Hero";

const App = () => {
  return (
    <main>
      <Head>
        <title>Carlos Baso</title>
        <meta
          name="description"
          content="Portafolio - Carlos Baso Ing. de Software, JavaScript, React JS, Next JS. ¡Echa un vistazo a mis proyectos!"
        />
      </Head>
      <Hero />
      <div className="pageSize min-h-screen">
        <div className=" hidden">
          <Header />
          <Header_Mobile />
        </div>
        <Skills />
        <Projects />
      </div>
      <ScrollToTop />
    </main>
  );
};

export default App;
