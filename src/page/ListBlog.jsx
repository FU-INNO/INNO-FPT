import "../styles/History.css";
import ListItem from "../components/ListItem";
import CarouselBlog from "../components/CarouselBlog";
import { useEffect, useState } from "react";
import { AiOutlineUpCircle } from "react-icons/ai";

const ListBlog = () => {
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
      <CarouselBlog />
      <ListItem />
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
    </>
  );
};

export default ListBlog;
