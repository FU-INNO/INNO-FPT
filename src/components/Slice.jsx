import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slice = () => {
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
      img: "https://ecology.websitelayout.net/img/content/work-04.jpg",
      title: "Recycle Project",
      description:
        "The point is to accomplish an economy that is as one with nature and the climate.",
    },
    {
      id: 2,
      img: "https://ecology.websitelayout.net/img/content/work-04.jpg",
      title: "Save Animals",
      description:
        "The point is to accomplish an economy that is as one with nature and the climate.",
    },
    {
      id: 3,
      img: "https://ecology.websitelayout.net/img/content/work-04.jpg",
      title: "Charity For Live",
      description:
        "The point is to accomplish an economy that is as one with nature and the climate.",
    },
    {
      id: 4,
      img: "https://ecology.websitelayout.net/img/content/work-04.jpg",
      title: "Plant Trees",
      description:
        "The point is to accomplish an economy that is as one with nature and the climate.",
    },
  ];

  return (
    <div className="flex flex-row p-10">
      <div className="w-[25%] flex flex-col">
        <span className="tracking-[2px] text-[#d8b952] font-semibold text-[18px]">
          Our Services
        </span>
        <h2 className="tracking-[1px] font-semibold text-[45px]">What We Do</h2>
        <p>
          The associated press economy and climate, environmental change,
          financial and political advancements on the planet.
        </p>
        <a href="#" className="text-[#d8b952] font-semibold">
          Learn More
        </a>
      </div>
      <div className="w-[75%]">
        <Slider {...settings}>
          {items.map((item) => (
            <div
              key={item.id}
              className="relative min-h-[1px] w-[268px] float-left"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  className="rounded-2xl text-center"
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

export default Slice;
