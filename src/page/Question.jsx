import { AiOutlineUpCircle } from "react-icons/ai";
import BannerQuestion from "../components/BannerQuestion";
import Question from "../components/Question";
import "../styles/Question.css";
import { useEffect, useState } from "react";

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
      <BannerQuestion />
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-full container ">
          <Question />
        </div>
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
    </>
  );
};

export default History;
