import { Button } from "antd";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./scroll.scss"
function Scroll() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility); 
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    
  };
  return (
    <>
      <Button
        onClick={scrollToTop}     
        className={`scroll ${scroll ? "block" : ""}`}
      >
        <FaArrowUp size={20} />
      </Button>
    </>
  );
}

export default Scroll;
