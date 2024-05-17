import React, { useState, useEffect } from "react";

const Card = ({ name, logo }) => {
  return (
    <div className="border border-[#333333] bg-[#161616] py-[15px] px-[20px] min-w-[200px] flex flex-col gap-4 text-[#808080] ">
      <div className=" text-[25px]">{logo}</div>
      <div className="text-[13px]">{name}</div>
    </div>
  );
};

export default Card;
