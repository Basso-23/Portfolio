import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion as m, AnimatePresence } from "framer-motion";
import Arrow from "@/icons/Arrow";

const ScrollToTop = () => {
  const [scrollTop, setScrollTop] = useState(false);

  //FUNCTION: Para el botton de scroll to top
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const scrollTopButton = () => {
    if (window.scrollY >= 200) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", scrollTopButton);
  }

  return (
    <AnimatePresence>
      {scrollTop && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.25,
          }}
          onClick={() => {
            scrollToTop();
          }}
          className="rounded-[0px] p-3 fixed sm:bottom-4 sm:right-3 bottom-2 right-2 bg-[#ffffff] sm:text-[20px] text-[23px] z-[60] text-black flex justify-center items-center cursor-pointer hidden"
        >
          <Arrow />
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
