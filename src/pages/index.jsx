import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import React, { useState, useEffect } from "react";
import Header from "@/components/sections/Header";
import ScrollToTop from "@/components/elements/ScrollToTop";
import Header_Mobile from "@/components/sections/Header_Mobile";

const App = () => {
  return (
    <main>
      <div className="pageSize min-h-screen">
        <Header />
        <Header_Mobile />
        <Skills />
        <Projects />
      </div>
      <ScrollToTop />
    </main>
  );
};

export default App;
