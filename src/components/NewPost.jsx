import { Button } from "antd";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { FacebookShareButton, FacebookIcon } from "react-share";

const Completionist = () => <span>Sự kiện sắp tới</span>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <div className="flex space-x-4">
        <div className="text-center w-[120px] h-[100px] flex justify-center items-center border-[white] border">
          <div className="text-[38px] font-bold text-[#FFFFFF]">{days}</div>
          <div className="text-[#FFFFFF]">Days</div>
        </div>
        <div className="text-center w-[120px] h-[100px] flex justify-center items-center border-[white] border">
          <div className="text-[38px] font-bold text-[#FFFFFF]">{hours}</div>
          <div className="text-[#FFFFFF]">Hours</div>
        </div>
        <div className="text-center w-[120px] h-[100px] flex justify-center items-center border-[white] border">
          <div className="text-[38px] font-bold text-[#FFFFFF]">{minutes}</div>
          <div className="text-[#FFFFFF]">Minutes</div>
        </div>
        <div className="text-center w-[120px] h-[100px] flex justify-center items-center border-[white] border">
          <div className="text-[38px] font-bold text-[#FFFFFF]">{seconds}</div>
          <div className="text-[#FFFFFF]">Seconds</div>
        </div>
      </div>
    );
  }
};

const NewPost = () => {
  const [currentPageUrl, setCurrentPageUrl] = useState("");

  useEffect(() => {
    setCurrentPageUrl(window.location.href);
  }, []);

  const targetDate = new Date(
    Date.now() +
      2 * 24 * 60 * 60 * 1000 +
      9 * 60 * 60 * 1000 +
      49 * 60 * 1000 +
      28 * 1000
  );
  return (
    <section
      className="bg-cover bg-center w-full flex flex-col items-center justify-center fixed inset-0 z-50"
      style={{
        backgroundImage:
          'url("https://ecology.websitelayout.net/img/bg/bg-01.jpg")',
      }}
    >
      <div
        style={{ position: "absolute", zIndex: "1000", top: "0", left: "0" }}
      >
        <Button onClick={() => window.history.back()}>Back</Button>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-40 border-[1px]"></div>
      <div className="w-[640px] h-[450px] flex items-center justify-center z-50 ">
        <div className="flex flex-col w-[670px] h-[600px] items-center justify-center rounded-2xl bg-custom-white bg-opacity-70 border-[1px] ">
          <h1 className="text-[45px] mb-8 text-[#d8b952] font-semibold">
            Dọn rác tại Sơn Trà - Đà Nẵng
          </h1>
          <p className="text-[20px] text-gray-200 mb-4">
            FABRIS (FSCHOLL ĐÀ NẴNG) + F2K (FPT EDUCATION ĐÀ NẴNG)
          </p>
          <div className="flex items-center justify-center w-[300px] h-[60px] rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white">
            <h1 className="mx-auto font-bold text-lg">
              {new Date(targetDate).toLocaleString("vi-VN", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </h1>
          </div>
          <Countdown date={targetDate} renderer={renderer} />
        </div>
      </div>
      <p>Thông tin chi tiết</p>
      <FacebookShareButton
        url={currentPageUrl}
        className="cursor-pointer flex z-50"
        quote="Please share this post"
        hashtag="#POST-A-TREE"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </section>
  );
};

export default NewPost;
