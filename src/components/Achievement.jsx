import logo1 from "../assets/qr2012.png";
import logo2 from "../assets/eduver.png";
import logo3 from "../assets/cdio.png";
import logo4 from "../assets/acb.png";
import logo5 from "../assets/twbf.png";
import logo6 from "../assets/asocio.webp";
import logo7 from "../assets/aun.png";
import logo8 from "../assets/api.png";
import logo9 from "../assets/rank.png";

const Achievement = () => {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
  ];

  return (
    <div className="container group overflow-hidden whitespace-nowrap [mask-image:_linear-gradient(to_right,_transparent_0,_white_20px,white_calc(100%-20px),_transparent_100%)] pt-10 lg:pt-28 md:pt-14 sm:pt-12 w-full">
      <div className="w-full flex justify-center items-center whitespace-nowrap animate-infinite-scroll  hover:animation-pause">
        {logos.map((logo, index) => (
          <button
            key={index}
            className="box flex-shrink-0 mx-4 inline duration-200"
          >
            <img
              alt={`Logo ${index + 1}`}
              loading="lazy"
              width="64"
              height="64"
              decoding="async"
              className="lg:w-20 lg:h-20 bg-white rounded-2xl"
              src={`${logo}`}
              style={{ color: "transparent" }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Achievement;
