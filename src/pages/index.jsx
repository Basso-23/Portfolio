import Projects from "@/components/sections/Projects";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Hero from "@/components/sections/Hero";
import Sidebar from "@/components/sections/Sidebar";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";

const App = () => {
  return (
    <main>
      <Head>
        <title>Carlos Baso</title>
        <meta
          name="description"
          content="Portafolio de Carlos Baso - Desarrollador de Software y Web. Soy Carlos Baso, un desarrollador especializado en JavaScript, React JS y Next JS. ¡Explora mi trabajo!"
        />
      </Head>
      <Hero />
      <div className="relative h-full">
        <Sidebar />
        <div className="sm:pl-[250px] pl-0">
          <Projects />
          <Experience />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default App;
