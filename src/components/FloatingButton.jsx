import React, { useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";

const FloatingButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <button
        title="Up"
        style={{ display: visible ? "inline" : "none" }}
        class="fixed z-90 bottom-4 right-4 md:bottom-8 md:right-8 bg-cyan-500 w-14 h-14 rounded-full shadow-md flex justify-center items-center text-white text-4xl hover:bg-cyan-600 animate-bounce duration-300"
      >
        <RiArrowUpSLine onClick={scrollToTop} className="mx-auto" />
      </button>
    </>
  );
};

export default FloatingButton;
