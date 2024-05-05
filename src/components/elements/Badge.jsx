import React, { useState, useEffect } from "react";

const Badge = ({ name, color, bg }) => {
  return (
    <div
      style={{ color: color, backgroundColor: bg }}
      className="py-[4px] px-[10px] text-[12px] tracking-wide min-w-[100px] text-center"
    >
      {name}
    </div>
  );
};

export default Badge;
