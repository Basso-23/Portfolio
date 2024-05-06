import React, { useState, useEffect } from "react";

const Badge = ({ name, logo }) => {
  return (
    <div className="bg-white border-[#efefef] border-[1px] rounded-lg py-[15px] px-[20px] min-w-[200px] flex flex-col gap-4 ">
      <div className=" text-[25px]">{logo}</div>
      <div className=" font-bold text-[13px] tracking-tighter">{name}</div>
    </div>
  );
};

export default Badge;
