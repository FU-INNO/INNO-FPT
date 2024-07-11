// import { useState } from "react";
import { Link } from "react-router-dom";
import banner from "../assets/hue.jpg";
import "../styles/History.css";
import BouncingText from "../components/BouncingText";
// import { useSpring, animated } from "@react-spring/web";

const BannerQuestion = () => {
  //   const [visited, setVisited] = useState(60000);
  //   const [global, setGlobal] = useState(180);
  //   const [country, setCountry] = useState(40);
  //   const [change, setChange] = useState(1);

  //   const visitedProps = useSpring({
  //     from: { number: 0 },
  //     to: { number: visited },
  //     config: { duration: 1000 },
  //     reset: true,
  //   });
  //   const globalProps = useSpring({
  //     from: { number: 0 },
  //     to: { number: global },
  //     config: { duration: 1000 },
  //     reset: true,
  //   });
  //   const countryProps = useSpring({
  //     from: { number: 0 },
  //     to: { number: country },
  //     config: { duration: 1000 },
  //     reset: true,
  //   });
  //   const changeProps = useSpring({
  //     from: { number: 0 },
  //     to: { number: change },
  //     config: { duration: 1000 },
  //     reset: true,
  //   });

  return (
    <>
      {" "}
      <section
        className=" w-full bg-cover bg-center bg-gray-900 bg-opacity-75 z-0 page-title-section  top-position left-overlay-dark page-title-section page-title-section bg-img cover-background top-position left-overlay-dark me-xl-10 cover-background-history"
        data-overlay-dark="9"
        style={{
          backgroundImage: `url(${banner})`,
          minHeight: "478px",
        }}
      >
        <h2
          className=" ml-10 leading-normal mt-8 font-bold uppercase text-white "
          style={{
            display: "inline-block",
            transform: "translate3d(0px, 0px, 0px)",
          }}
        >
          <BouncingText text="Câu hỏi thường gặp" />
        </h2>

        <div className="sub-sm-title mt-4">
          <ul
            className="wow fadeInUp flex justify-center md:justify-start  space-x-2 animate-fadeInUp"
            style={{ animationDelay: "400ms" }}
            data-wow-delay="400ms"
          >
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="">Câu hỏi</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default BannerQuestion;

// <div className="container mx-auto px-4 relative z-50 grid col  ">
// <div className="grid gap-3 col  mt-n1-9 max-md:gap-y-16">
//   <div className="grid row row-history gap-3 ">
//     <div className=" col-6 col-lg-3 mt-1-9 md: col-12 w-1/4  max-md:w-full max-md:col-12">
//       <div className="counter-inner text-center  justify-center flex flex-col ">
//         <div className="counter-icon relative mb-2"></div>
//         <button
//           className="button-history "
//           onClick={() => setVisited(visited)}
//           style={{
//             padding: "10px 20px",
//             border: "none",
//             cursor: "pointer",
//           }}
//         >
//           <animated.span className="text-white text-2xl sm:text-2xl xl:text-xl">
//             {visitedProps.number.to((n) => Math.floor(n))}
//           </animated.span>
//           <p className="flex flex-col text-sm">
//             <span className="text-white text-2xl sm:text-2xl xl:text-lg">
//               Học sinh, sinh viên
//             </span>
//           </p>
//         </button>
//       </div>
//     </div>
//     <div className="col-6 col-lg-3 mt-1-9 md: col-12 w-1/4 h-9  max-md:w-full">
//       <div className="counter-inner text-center  justify-center flex flex-col">
//         <div className="counter-icon relative mb-2"></div>
//         <button
//           className="button-history"
//           onClick={() => setGlobal(global)}
//           style={{
//             padding: "10px 20px",
//             border: "none",
//             cursor: "pointer",
//           }}
//         >
//           <animated.span className="text-white text-2xl sm:text-2xl xl:text-xl">
//             {globalProps.number.to((n) => Math.floor(n))}
//           </animated.span>
//           <p className="flex flex-col text-sm">
//             <span className="text-white text-xl sm:text-2xl xl:text-lg">
//               Đối tác quốc tế ngoài nước
//             </span>
//           </p>
//         </button>
//       </div>
//     </div>{" "}
//   </div>
//   <div className="grid row row-history gap-3">
//     <div className="col-6 col-lg-3 mt-1-9  md: col-12 w-1/4    max-md:w-full">
//       <div className="counter-inner text-center  justify-center flex flex-col">
//         <div className="counter-icon relative mb-2"></div>
//         <button
//           className="button-history"
//           onClick={() => setCountry(country)}
//           style={{
//             padding: "10px 20px",
//             border: "none",
//             cursor: "pointer",
//           }}
//         >
//           <animated.span className="text-white text-2xl sm:text-2xl xl:text-xl">
//             {countryProps.number.to((n) => Math.floor(n))}
//           </animated.span>
//           <p className="flex flex-col text-sm">
//             <span className="text-white text-2xl sm:text-2xl xl:text-lg">
//               Quốc gia có hợp tác đào tạo
//             </span>
//           </p>
//         </button>
//       </div>
//     </div>{" "}
//     <div className="col-6 col-lg-3 mt-1-9  md: col-12 w-1/4  max-md:w-full">
//       <div className="counter-inner text-center  justify-center flex flex-col">
//         <div className="counter-icon relative mb-2"></div>
//         <button
//           className="button-history"
//           onClick={() => setChange(change)}
//           style={{
//             padding: "10px 20px",
//             border: "none",
//             cursor: "pointer",
//           }}
//         >
//           <animated.span className="text-white text-2xl sm:text-2xl xl:text-xl">
//             {changeProps.number.to((n) => Math.floor(n))}
//           </animated.span>
//           <p className="flex flex-col text-sm">
//             <span className="text-white text-2xl sm:text-2xl xl:text-lg">
//               Trung tâm trao đổi sinh viên
//             </span>
//           </p>
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
