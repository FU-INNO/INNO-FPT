import "../styles/BannerHome.css";

const BannerHome = () => {
  return (
    <>
      <header className="relative flex items-center justify-center mb-12 overflow-hidden aspect-video xs:mt-[5.25rem] ">
        <div className="md:w-4/5  xl:w-3/4 pr-4 pl-4 col-xxl-8 mx-auto py-5 px-1-6 px-md-6 px-lg-8 px-4">
          <div className="flex flex-wrap text-white  items-center min-vh-100 z-50  ">
            <div className="md:w-4/5 xl:w-3/4 pr-4 pl-4 col-xxl-8 mx-auto py-5 p-36 px-lg-8 px-4 z-auto  ">
              <h1 className=" text-banner leading-normal mt-8 mt-lg-10 font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-500 xs:text-[20px] xl:text-[50px] ">
                Kỷ niệm 25 năm <span className="block">FPT Education</span>
              </h1>
              <span className="flex bg-clip-text font-semibold text-transparent bg-gradient-to-r from-white to-white text-center align-sub justify-center">
                Trí tuệ nhân tạo - Bán dẫn - Xe điện - Chuyển đổi số - Môi
                trường Xanh
              </span>
              <div className="text-center justify-center mt-4">
                <a href="history" className="butn xs:">
                  Lịch sử FPT Education
                </a>
              </div>
              <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."></div>
            </div>
          </div>
        </div>

        <div className="video-banner absolute top-0 left-0 w-full h-full -z-10  ">
          <iframe
            className="w-full h-full "
            src="https://www.youtube.com/embed/ysEgrq3ULp0?autoplay=1&loop=1&mute=1&playlist=ysEgrq3ULp0"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="YouTube video player"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              pointerEvents: "none",
              zIndex: -1,
            }}
          ></iframe>
        </div>
      </header>
    </>
  );
};

export default BannerHome;
