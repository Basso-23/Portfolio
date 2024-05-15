import React, { useState, useEffect } from "react";

const Badge = ({ focus, logo }) => {
  return (
    <div
      className={`flex justify-center items-center h-[125px] ${
        focus ? "bg-[#0A0A0A]" : "bg-[#010001]"
      }`}
    >
      <div className="text-[25px]">{logo}</div>
    </div>
  );
};

export default Badge;
