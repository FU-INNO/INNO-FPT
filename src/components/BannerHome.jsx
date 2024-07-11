import { Link } from "react-router-dom";
import "../styles/BannerHome.css";
import video from "../assets/videoHome.mp4";
const BannerHome = () => {
  return (
    <>
      <header className="relative flex items-center justify-center mb-12 overflow-hidden aspect-video ">
        <div className="md:w-4/5  xl:w-3/4 pr-4 pl-4 col-xxl-8 mx-auto py-5 px-1-6 px-md-6 px-lg-8 px-4">
          <div className="flex flex-wrap text-white  items-center min-vh-100 z-50 ">
            <div className="md:w-4/5 xl:w-3/4 pr-4 pl-4 col-xxl-8 mx-auto py-5 p-36 px-lg-8 px-4 z-auto ">
              <h1 className=" text-banner leading-normal mt-8 mt-lg-10 font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-500 ">
                Kỷ niệm 25 năm <span className="block">FPT Education</span>
              </h1>
              <span className="flex bg-clip-text font-semibold text-transparent bg-gradient-to-r from-white to-white text-center align-sub justify-center">
                Trí tuệ nhân tạo - Bán dẫn - Xe điện - Chuyển đổi số - Môi
                trường Xanh
              </span>
              <div className="text-center justify-center mt-4">
                <Link to="/history" className="butn">
                  Lịch sử FPT Education
                </Link>
              </div>
              <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."></div>
            </div>
          </div>
        </div>

        <div className="video-banner absolute top-0 left-0 w-full h-full -z-10  ">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </header>
    </>
  );
};

export default BannerHome;
