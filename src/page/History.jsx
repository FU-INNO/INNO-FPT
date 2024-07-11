import { useState } from "react";
import banner from "../assets/conso.jpg";
import "../styles/History.css";
import { useSpring, animated } from "@react-spring/web";
const History = () => {
  // const [feedback, setFeedback] = useState(0);
  const [visited, setVisited] = useState(60000);
  const [global, setGlobal] = useState(180);
  const [country, setCountry] = useState(40);
  const [change, setChange] = useState(1);

  const visitedProps = useSpring({
    from: { number: 1 },
    to: { number: visited },
    config: { duration: 1000 },
    reset: true,
  });
  const globalProps = useSpring({
    from: { number: 1 },
    to: { number: global },
    config: { duration: 1000 },
    reset: true,
  });
  const countryProps = useSpring({
    from: { number: 1 },
    to: { number: country },
    config: { duration: 1000 },
    reset: true,
  });
  const changeProps = useSpring({
    from: { number: 1 },
    to: { number: change },
    config: { duration: 1000 },
    reset: true,
  });

  return (
    <>
      <section
        className="relative bg-cover bg-center bg-gray-900 bg-opacity-75 z-0 page-title-section  top-position left-overlay-dark page-title-section page-title-section bg-img cover-background top-position left-overlay-dark me-xl-10 cover-background-history"
        data-overlay-dark="9"
        style={{ backgroundImage: `url(${banner})`, minHeight: "478px" }}
      >
        <div className="container mx-auto px-4 relative z-50  ">
          <div className="row row-history mt-n1-9">
            <div className="col-6 col-lg-3 mt-1-9">
              <div className="counter-inner text-center  justify-center flex flex-col">
                <div className="counter-icon relative mb-2">
                  <img src="img/icons/icon-12.png" alt="..." />
                </div>
                <button
                  onClick={() => setVisited(visited)}
                  style={{
                    padding: "10px 20px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <animated.span className="text-white text-2xl sm:text-2xl xl:text-xl">
                    {visitedProps.number.to((n) => Math.floor(n))}
                  </animated.span>
                  <p className="flex flex-col text-sm">
                    <span className="text-white text-2xl sm:text-2xl xl:text-xl">
                      Học sinh, sinh viên
                    </span>
                  </p>
                </button>
              </div>
            </div>
            <div className="col-6 col-lg-3 mt-1-9">
              <div className="counter-inner text-center  justify-center flex flex-col">
                <div className="counter-icon relative mb-2">
                  <img src="img/icons/icon-12.png" alt="..." />
                </div>
                <button
                  onClick={() => setGlobal(global)}
                  style={{
                    padding: "10px 20px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <animated.span className="text-white text-2xl sm:text-2xl xl:text-xl">
                    {globalProps.number.to((n) => Math.floor(n))}
                  </animated.span>
                  <p className="flex flex-col text-sm">
                    <span className="text-white text-2xl sm:text-2xl xl:text-xl">
                      Đối tác quốc tế
                    </span>
                  </p>
                </button>
              </div>
            </div>{" "}
            <div className="col-6 col-lg-3 mt-1-9">
              <div className="counter-inner text-center  justify-center flex flex-col">
                <div className="counter-icon relative mb-2">
                  <img src="img/icons/icon-12.png" alt="..." />
                </div>
                <button
                  onClick={() => setCountry(country)}
                  style={{
                    padding: "10px 20px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <animated.span className="text-white text-2xl sm:text-2xl xl:text-xl">
                    {countryProps.number.to((n) => Math.floor(n))}
                  </animated.span>
                  <p className="flex flex-col text-sm">
                    <span className="text-white text-2xl sm:text-2xl xl:text-xl">
                      Quốc gia có hợp tác đào tạo
                    </span>
                  </p>
                </button>
              </div>
            </div>{" "}
            <div className="col-6 col-lg-3 mt-1-9">
              <div className="counter-inner text-center  justify-center flex flex-col">
                <div className="counter-icon relative mb-2">
                  <img src="img/icons/icon-12.png" alt="..." />
                </div>
                <button
                  onClick={() => setChange(change)}
                  style={{
                    padding: "10px 20px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <animated.span className="text-white text-2xl sm:text-2xl xl:text-xl">
                    {changeProps.number.to((n) => Math.floor(n))}
                  </animated.span>
                  <p className="flex flex-col text-sm">
                    <span className="text-white text-2xl sm:text-2xl xl:text-xl">
                      Trung tâm trao đổi & phát triển sinh viên quốc tế
                    </span>
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="sub-sm-title mt-4">
          <ul
            className="wow fadeInUp flex justify-center md:justify-start text-white space-x-2 animate-fadeInUp"
            style={{ animationDelay: "400ms" }}
            data-wow-delay="400ms"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="">Our Events</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default History;
// {/* <div className="mb-6 mb-sm-8 mb-xl-15 pb-1-9 pb-sm-5 border-b border-light-white  border-color-light-white">
//             <div className="row row-history">
//               <div className="col-lg-12">
//                 <div className="lg-heading text-center  ">
//                   {/* <h2 className="mb-0 text-xl md:text-2xl lg:text-3xl text-white z-50 ">
//                     FPT VÀ NHỮNG CON SỐ
//                   </h2> */}
//                 </div>
//               </div>
//             </div>
//           </div> */}
