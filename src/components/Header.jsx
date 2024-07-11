import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import "../styles/Header.css";

const Header = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    hight: undefined,
  });
  const [openMenu, setOpenMenu] = useState(false);

  const [isMoble, setIsMoble] = useState(false);
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
    console.log(windowSize);
    if (windowSize.width < 500) {
      setIsMoble(true);
    } else {
      setIsMoble(false);
    }
  }, [windowSize]);

  return (
    <nav className="fixed top-0 right-0 left-0  flex items-center justify-center z-50">
      <div className="flex w-[1296px] h-[85px] items-center md:justify-evenly bg-[#22836c] xs:justify-between xs:p-2">
        <img
          className="cursor-pointer"
          width="80px"
          src="https://play-lh.googleusercontent.com/Fro4e_osoDhhrjgiZ_Y2C5FNXBMWvrb4rGpmkM1PDAcUPXeiAlPCq7NeaT4Q6NRUxRqo"
        />
        <div className="xs:hidden md:block">
          <ul className="flex flex-row ">
            <li className="text-[20px] p-5 text-white font-bold font-Rubik cursor-pointer hover:text-[#d8b952]">
              Home1
            </li>
            <li className="text-[20px] p-5 text-white font-bold font-Rubik cursor-pointer hover:text-[#d8b952]">
              Home2
            </li>
            <li className="text-[20px] p-5 text-white font-bold font-Rubik cursor-pointer hover:text-[#d8b952]">
              Home3
            </li>
            <li className="text-[20px] p-5 text-white font-bold font-Rubik cursor-pointer hover:text-[#d8b952]">
              Home4
            </li>
            <li className="text-[20px] p-5 text-white font-bold font-Rubik cursor-pointer hover:text-[#d8b952]">
              Home5
            </li>
          </ul>
        </div>
        <div className="flex flex-row w-[210px] h-[46px] justify-center items-center text-white xs:w-[100px]">
          <div className="px-[12px] py-[21px] font-black m-4">
            <IoSearch className=" text-[24px] font-black cursor-pointer xs:" />
          </div>
          <li className="h-full bg-[#d8b952] list-none flex justify-center items-center rounded-md text-[white] xs:hidden md:block">
            <span className="font-bold font-Rubik flex justify-center items-center w-[210px] h-full cursor-pointer">
              <a className="relative line-height-[10px] font-medium overflow-hidden text-center rounded-lg p-2  inline-block text-white text-lg capitalize bg-[#d8b952] ">
                Become Volunteer
              </a>
            </span>
          </li>
          {openMenu && isMoble ? (
            <div className="p-[10px] bg-[#d8b952] mr-8">
              <MdOutlineClose
                size={"24px"}
                onClick={() => setOpenMenu(!openMenu)}
              />
            </div>
          ) : !openMenu && isMoble ? (
            <div className="p-[10px] bg-[#d8b952] mr-8 ">
              <HiOutlineMenu
                size={"24px"}
                onClick={() => setOpenMenu(!openMenu)}
              />
            </div>
          ) : (
            <ul className="md:flex md:flex-row md:gap-10  md:hidden">
              <li className="text-[20px] p-5 text-white font-bold font-Rubik cursor-pointer hover:text-[#d8b952]">
                Home1
              </li>
              <li className="text-[20px] p-5 text-white font-bold font-Rubik cursor-pointer hover:text-[#d8b952]">
                Home2
              </li>
              <li className="text-[20px] p-5 text-white font-bold font-Rubik cursor-pointer hover:text-[#d8b952]">
                Home3
              </li>
              <li className="text-[20px] p-5 text-white font-bold font-Rubik cursor-pointer hover:text-[#d8b952]">
                Home4
              </li>
              <li className="text-[20px] p-5 text-white font-bold font-Rubik cursor-pointer hover:text-[#d8b952]">
                Home5
              </li>
            </ul>
          )}
          {openMenu && (
            <ul className="absolute xs:mr-[-40px] md:hidden px-2 top-[85px] right-10 bg-[#d8b952]  p-10 text-center z-10 w-full text-black text-13">
              <li className="text-[20px] p-5 text-black font-bold font-Rubik cursor-pointer hover:text-[#d8b952] border-b  border-[black]">
                Home1
              </li>
              <li className="text-[20px] p-5 text-black font-bold font-Rubik cursor-pointer hover:text-[#d8b952]">
                Home2
              </li>
              <li className="text-[20px] p-5 text-black font-bold font-Rubik cursor-pointer hover:text-[#d8b952]">
                Home3
              </li>
              <li className="text-[20px] p-5 text-black font-bold font-Rubik cursor-pointer hover:text-[#d8b952]">
                Home4
              </li>
              <li className="text-[20px] p-5 text-black font-bold font-Rubik cursor-pointer hover:text-[#d8b952]">
                Home5
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
