/* eslint-disable no-undef */
import { Image } from "antd";
import VisonHome from "../components/VisonHome";
import dreamImg from "../assets/About_fptedu.jpg";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
import BannerHome from "../components/BannerHome";
import Slice from "../components/Slice";
import { AiOutlineUpCircle } from "react-icons/ai";
import { useEffect, useState } from "react";

const Home = () => {
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
    <div className="flex flex-col justify-center">
      <BannerHome />
      <VisonHome />
      <Image src={dreamImg} />
      <Slice />
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
  );
};

export default Home;
