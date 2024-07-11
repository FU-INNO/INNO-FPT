import banner from "../assets/conso.jpg";
import { Carousel } from "antd";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const App = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
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
            Danh sách bài đăng
          </h2>

          <div className="sub-sm-title mt-4">
            <ul
              className="wow fadeInUp flex justify-center md:justify-start text-black space-x-2 animate-fadeInUp"
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
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
};
export default App;
