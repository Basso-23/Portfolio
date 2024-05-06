import React, { useState, useEffect } from "react";

import { useAtom } from "jotai";
import { filterAtom } from "@/atom";
const Filters = () => {
  const [currentFilter, setCurrentFilter] = useAtom(filterAtom);

  const Tab = ({ name }) => {
    return (
      <div
        onClick={() => {
          setCurrentFilter(name);
        }}
        className={currentFilter === name ? "active-filter" : "inactive-filter"}
      >
        {name}
      </div>
    );
  };

  return (
    <div className=" flex bg-[#f5f5f5] gap-2 w-fit rounded-md text-[14px] font-semibold mt-5 tracking-tight   ">
      <Tab name={"all"} />
      <Tab name={"design"} />
      <Tab name={"utility"} />
      <Tab name={"other"} />
    </div>
  );
};

export default Filters;
