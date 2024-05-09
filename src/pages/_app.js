import React, { useState, useEffect } from "react";
import "@/styles/globals.css";
import "@fontsource-variable/inter";
import { Toaster } from "@/components/ui/sonner";
import Head from "next/head";
import Footer from "@/components/sections/Footer";
import { useAtom } from "jotai";
import { originalAtom } from "@/atom";
import { languageAtom } from "@/atom";
import { projects_ES } from "@/json/projects_ES";
import { projects_EN } from "@/json/projects_EN";

const App = ({ Component, pageProps }) => {
  const [originalData, setOriginalData] = useAtom(originalAtom);
  const [language, setLanguage] = useAtom(languageAtom);

  useEffect(() => {
    if (language) {
      setOriginalData(projects_ES);
    } else {
      setOriginalData(projects_EN);
    }
  }, [language, setOriginalData]);

  return (
    <div style={{ fontFamily: "Inter Variable, sans-serif" }}>
      <Component {...pageProps} />
      <div className="bg-[#f7f7f7] border-t mt-20">
        <div className="pageSize">
          <Footer />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default App;
