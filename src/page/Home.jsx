import React from "react";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const Home = () => {
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
    <div
      className="fixed top-0 right-0 left-0  flex items-center justify-center"
      isMoble={isMoble}
    >
      <div className="flex w-[1296px] h-[85px] items-center md:justify-evenly bg-[#22836c] xs:justify-between">
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
              {" "}
              Become Volunteer
            </span>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Home;
