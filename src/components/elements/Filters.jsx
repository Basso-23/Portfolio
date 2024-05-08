import React, { useState, useEffect } from "react";

import { useAtom } from "jotai";
import { filterAtom } from "@/atom";

import { originalAtom } from "@/atom";
import { dataAtom } from "@/atom";
import { languageAtom } from "@/atom";
const Filters = () => {
  const [currentFilter, setCurrentFilter] = useAtom(filterAtom);
  const [originalData, setOriginalData] = useAtom(originalAtom);
  const [data, setData] = useAtom(dataAtom);
  const [language, setLanguage] = useAtom(languageAtom);

  useEffect(() => {
    if (language) {
      setCurrentFilter("todos");
    } else {
      setCurrentFilter("all");
    }
  }, [language, setCurrentFilter]);

  const Tab = ({ name }) => {
    return (
      <div
        onClick={() => {
          setCurrentFilter(name);
          filtering(name);
        }}
        className={
          currentFilter === name
            ? "active-filter texto"
            : "inactive-filter texto"
        }
      >
        {name}
      </div>
    );
  };

  const filtering = (name) => {
    if (name === "todos" || name === "all") {
      setData(originalData);
    } else {
      const filtered = originalData.filter(
        (project) => project.category.toLowerCase() === name
      );
      setData(filtered);
    }
  };

  return (
    <div className=" flex bg-[#f5f5f5] sm:gap-2 w-fit rounded-md text-[13px] font-semibold mt-5 tracking-tight">
      <Tab name={language ? "todos" : "all"} />
      <Tab name={language ? "diseño" : "design"} />
      <Tab name={"full-stack"} />
      <Tab name={language ? "otros" : "other"} />
    </div>
  );
};

export default Filters;
