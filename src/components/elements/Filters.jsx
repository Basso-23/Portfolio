import React, { useState, useEffect } from "react";

import { useAtom } from "jotai";
import { filterAtom } from "@/atom";

import { originalAtom } from "@/atom";
import { dataAtom } from "@/atom";
import { languageAtom } from "@/atom";
import All from "@/icons/All";
import Design from "@/icons/Design";
import Stack from "@/icons/Stack";
import Toolbox from "@/icons/Toolbox";
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

  const Tab = ({ name, icon }) => {
    return (
      <div
        onClick={() => {
          setCurrentFilter(name);
          filtering(name);
        }}
        className={
          currentFilter === name
            ? "active-filter texto py-3 px-4 flex items-center gap-2"
            : "inactive-filter texto py-3 px-4 flex items-center gap-2"
        }
      >
        {icon}
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
    <div className=" flex flex-col px-4 mt-6 text-sm gap-3">
      <Tab name={language ? "todos" : "all"} icon={<All />} />
      <Tab name={language ? "diseño" : "design"} icon={<Design />} />
      <Tab name={"full-stack"} icon={<Stack />} />
      <Tab name={language ? "otros" : "other"} icon={<Toolbox />} />
    </div>
  );
};

export default Filters;
