import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { originalAtom } from "@/atom";

const ProductInfo = () => {
  const router = useRouter();
  const [originalData, setOriginalData] = useAtom(originalAtom);

  const id = router.query.id;
  console.log(id, "ID");

  return (
    <div className=" flex">
      <div className="m-auto text-sm flex flex-col gap-6">
        {originalData
          .filter((item) => item.name.replace(/ /g, "-") === id)
          .map((item, index) => (
            <div key={index} className="mt-10">
              {item.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductInfo;
