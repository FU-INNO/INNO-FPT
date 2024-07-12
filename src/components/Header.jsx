import { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import useDarkMode from "./useDarkMode";
import { useUser } from "../hooks/useUser";

const Header = () => {
  const { user } = useUser();
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [openMenu, setOpenMenu] = useState(false);
  const listLink = [
    {
      home: "Giới thiệu",
      link: "/",
    },
    {
      home: "Lịch sử",
      link: "/history",
    },
    {
      home: "Sự kiện sắp tới",
      link: "/comming-soon",
    },
    {
      home: "Bài đăng",
      link: "/listBlog",
    },
    {
      home: "Câu hỏi",
      link: "/question",
    },
    {
      home: "Đề xuất dự án",
      link: "/location",
    },
  ];
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

  useEffect(() => {}, [user]);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center ${
        scrollY > 85 ? "bg-white shadow-md " : "bg-[#22836c]"
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
          src={logo}
          alt="Logo"
        />
        {!isMobile && (
          <ul className="flex flex-row justify-center items-center">
            {listLink?.map((item, key) => (
              <Link
                to={item?.link}
                key={key}
                className={`text-[10px] xl:text-[20px] p-5 font-bold cursor-pointer hover:text-[#d8b952] focus:text-[#d8b952] ${
                  scrollY > 85 ? "text-black" : "text-white"
                }`}
              >
                {item.home}
              </Link>
            ))}
          </ul>
        )}
        <div className="flex flex-row items-center">
          <div className="px-3 py-2 m-4 xs:hidden 2xl:hidden">
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
          <li className="hidden md:flex items-center bg-[#d8b952] text-white font-bold rounded-md h-full px-4 cursor-pointer">
            {user === null ? (
              <Link to={"/loginAuth"} className="text-lg capitalize px-2 py-3">
                Đăng Nhập
              </Link>
            ) : (
              <span>{user?.name}</span>
            )}
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
          <ul className="absolute top-[85px] right-0 bg-[#d8b952] text-center z-10 w-full text-black text-[20px] flex-col flex">
            {listLink?.map((item, key) => (
              <Link
                to={item?.link}
                key={key}
                className="text-[20px] p-5 text-white font-bold cursor-pointer hover:text-[#cd331f] focus:text-[#cd331f]"
                onClick={() => setOpenMenu(false)}
              >
                {item.home}
              </Link>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;
