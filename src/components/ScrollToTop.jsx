import React, { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showScrollButton, setShowScrollButton] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showScrollButton && (
        <FaAngleDoubleUp
          className="top-btn-position top-btn-style"
          onClick={scrollTop}
        />
      )}
    </div>
  );
};

export default ScrollToTop;
