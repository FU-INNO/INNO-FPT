import "../styles/History.css";
import BannerHistory from "../components/BannerHistory";
import TimelineHistory from "../components/TimelineHistory";
import Achievement from "../components/Achievement";
import AboutHistory from "../components/AboutHistory";
import { useEffect, useState } from "react";
import { AiOutlineUpCircle } from "react-icons/ai";

const History = () => {
  // const [feedback, setFeedback] = useState(0);
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <BannerHistory />
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-full container ">
          <AboutHistory />
          <TimelineHistory />
          <Achievement />
          {showGoToTop && (
            <button
              style={{
                position: "fixed",
                right: 20,
                bottom: 20,
              }}
              onClick={scrollToTop}
            >
              <AiOutlineUpCircle className="text-[40px] text-[#22836c]" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default History;
