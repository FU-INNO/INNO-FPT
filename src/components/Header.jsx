import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import useDarkMode from "./useDarkMode";

const Header = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if (windowSize.width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowSize]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center ${
        scrollY > 85 ? "bg-white shadow-md" : "bg-[#22836c]"
      }`}
      style={{
        transform: scrollY > 85 ? "translateY(0)" : "translateY(0)",
        height: scrollY > 85 ? "85px" : "85px",
      }}
    >
      <div className="flex w-full max-w-[1296px] h-[85px] items-center justify-between p-2 md:justify-evenly transition-transform duration-300 ease-in-out">
        <img
          className="cursor-pointer xs:mb-5"
          width="80px"
          src="https://play-lh.googleusercontent.com/Fro4e_osoDhhrjgiZ_Y2C5FNXBMWvrb4rGpmkM1PDAcUPXeiAlPCq7NeaT4Q6NRUxRqo"
          alt="Logo"
        />
        {!isMobile && (
          <ul className="flex flex-row justify-center items-center">
            {["Home1", "Home2", "Home3", "Home4", "Home5"].map((item) => (
              <li
                key={item}
                className={`text-[20px] p-5 font-bold cursor-pointer hover:text-[#d8b952] ${
                  scrollY > 85 ? "text-black" : "text-white"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-row items-center">
          <div className="px-3 py-2 m-4">
            {isDarkMode ? (
              <BsSunFill
                size={"24px"}
                color="#e9c46a"
                className="cursor-pointer"
                onClick={() => toggleDarkMode(!isDarkMode)}
              />
            ) : (
              <FaMoon
                size={"24px"}
                color="#e9c46a"
                className="cursor-pointer"
                onClick={() => toggleDarkMode(!isDarkMode)}
              />
            )}
          </div>
          <li
            className={`hidden md:flex items-center ${
              scrollY > 85 ? "bg-[#22836c]" : "bg-[#d8b952]"
            } text-white font-bold rounded-md h-full px-4 cursor-pointer`}
          >
            <a
              className={`text-lg capitalize px-2 py-3 ${
                scrollY > 85 ? "text-white" : "text-white"
              }`}
            >
              Become Volunteer
            </a>
          </li>
          {isMobile ? (
            openMenu ? (
              <div className="p-2 bg-[#d8b952] cursor-pointer">
                <MdOutlineClose
                  size={"24px"}
                  onClick={() => setOpenMenu(!openMenu)}
                />
              </div>
            ) : (
              <div className="p-2 bg-[#d8b952] cursor-pointer">
                <HiOutlineMenu
                  size={"24px"}
                  onClick={() => setOpenMenu(!openMenu)}
                />
              </div>
            )
          ) : null}
        </div>
        {openMenu && isMobile && (
          <ul className="absolute top-[85px] right-0 bg-[#d8b952] text-center z-10 w-full text-black text-[20px]">
            {["Home1", "Home2", "Home3", "Home4", "Home5"].map((item) => (
              <li
                key={item}
                className="p-3 font-bold cursor-pointer border-b border-black border-opacity-5"
                onClick={() => setOpenMenu(false)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;
