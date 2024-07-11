import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
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
  ];
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
            {listLink?.map((item, key) => (
              <Link
                to={item?.link}
                key={key}
                className="text-[20px] p-5 text-white font-bold cursor-pointer hover:text-[#d8b952] focus:text-[#d8b952]"
              >
                {item.home}
              </Link>
            ))}
          </ul>
        )}
        <div className="flex flex-row items-center text-white">
          <div className="px-3 py-2 m-4">
            <IoSearch className="text-[24px] cursor-pointer" />
          </div>
          <li className="hidden md:flex items-center bg-[#d8b952] text-white font-bold rounded-md h-full px-4 cursor-pointer">
            <Link to={"/login"} className="text-lg capitalize px-2 py-3">
              Đăng nhập
            </Link>
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
