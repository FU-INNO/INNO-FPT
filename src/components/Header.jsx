import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import logo from "../assets/logo.png";
const Header = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [openMenu, setOpenMenu] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
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

  return (
    <nav className="fixed top-0 right-0 left-0 flex items-center justify-center z-50 bg-[#22836c] rounded-b-md ">
      <div className="flex w-full max-w-[1296px] h-[85px] items-center justify-between p-2 md:justify-evenly">
        <img
          className="cursor-pointer xs:mb-5"
          width="80px"
          src={logo}
          alt="Logo"
        />
        {!isMobile && (
          <ul className="flex flex-row justify-center items-center">
            {["Home1", "Home2", "Home3", "Home4", "Home5"].map((item) => (
              <li
                key={item}
                className="text-[20px] p-5 text-white font-bold cursor-pointer hover:text-[#d8b952]"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-row items-center text-white">
          <div className="px-3 py-2 m-4">
            <IoSearch className="text-[24px] cursor-pointer" />
          </div>
          <li className="hidden md:flex items-center bg-[#d8b952] text-white font-bold rounded-md h-full px-4 cursor-pointer">
            <a className="text-lg capitalize px-2 py-3">Become Volunteer</a>
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
