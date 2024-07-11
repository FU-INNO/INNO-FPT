import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import anh1 from "../assets/cntt.webp";
import anh2 from "../assets/ngonngu.webp";
import anh3 from "../assets/qtkd.webp";
import anh4 from "../assets/mts.webp";

const AboutHistory = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const items = [
    {
      id: 1,
      img: { anh1 },
      title: "Recycle Project",
      description:
        "The point is to accomplish an economy that is as one with nature and the climate.",
    },
    {
      id: 2,
      img: { anh2 },

      title: "Save Animals",
      description:
        "The point is to accomplish an economy that is as one with nature and the climate.",
    },
    {
      id: 3,
      img: { anh3 },

      title: "Charity For Live",
      description:
        "The point is to accomplish an economy that is as one with nature and the climate.",
    },
    {
      id: 4,
      img: { anh4 },

      title: "Plant Trees",
      description:
        "The point is to accomplish an economy that is as one with nature and the climate.",
    },
  ];

  return (
    <div className="flex md:flex-row p-10 xs:flex-col">
      <div className="md:w-[25%] flex flex-col xs:w-full">
        <span className="tracking-[2px] text-[20px] text-[#d8b952] font-semibold ">
          Ngành học
        </span>
        <h2 className="tracking-[1px] font-semibold text-[45px]">FPT </h2>
        <p className="whitespace-normal opacity-50 mt-4 w-full">
          The associated press economy and climate, environmental change,
          financial and political advancements on the planet.
        </p>
        <Link href="#" className="text-[#d8b952] font-semibold">
          Learn More
        </Link>
      </div>
      <div className="w-[75%]">
        <Slider {...settings}>
          {items.map((item) => (
            <div
              key={item.id}
              className="relative min-h-[1px] w-[268px] float-left"
            >
              <div className="flex flex-col items-center text-center lg:m-2 ">
                <img
                  className="rounded-2xl text-center "
                  width="267px"
                  height="350px"
                  src={item.img}
                  alt={item.title}
                />
                <h3 className="text-[#223139] text-[1.25rem] font-semibold mt-2">
                  {item.title}
                </h3>
                <div>
                  <div className="relative py-5 mx-4 flex-grow flex-shrink basis-auto flex justify-center items-center">
                    <span className="absolute left-0 bg-[#22836c] h-[1px] w-[100%]"></span>
                    <span className="absolute top-[50%] left-[50%] w-[10px] h-[10px] bg-[#d8b952] rounded-md transform -translate-x-2 -translate-y-2"></span>
                  </div>
                </div>
                <p className="mt-10">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AboutHistory;
