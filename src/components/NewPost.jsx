import React from "react";
import Countdown from "react-countdown";

const Completionist = () => <span>Coming soon!</span>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <div className="flex space-x-4">
        <div className="text-center w-[120px] h-[100px] flex justify-center items-center borded-1 border-[white] border">
          <div className="text-[38px] font-bold text-[#FFFFFF]">{days}</div>
          <div className="text-[#FFFFFF]">Days</div>
        </div>
        <div className="text-center w-[120px] h-[100px] flex justify-center items-center borded-1 border-[white] border">
          <div className="text-[38px] font-bold text-[#FFFFFF]">{hours}</div>
          <div className="text-[#FFFFFF]">Hours</div>
        </div>
        <div className="text-center w-[120px] h-[100px] flex justify-center items-center borded-1 border-[white] border">
          <div className="text-[38px] font-bold text-[#FFFFFF]">{minutes}</div>
          <div className="text-[#FFFFFF]">Minutes</div>
        </div>
        <div className="text-center w-[120px] h-[100px] flex justify-center items-center borded-1 border-[white] border">
          <div className="text-[38px] font-bold text-[#FFFFFF]">{seconds}</div>
          <div className="text-[#FFFFFF]">Seconds</div>
        </div>
      </div>
    );
  }
};

const NewPost = () => {
  const targetDate = new Date(
    Date.now() +
      597 * 24 * 60 * 60 * 1000 +
      9 * 60 * 60 * 1000 +
      49 * 60 * 1000 +
      28 * 1000
  );

  return (
    <section
      className="bg-cover bg-center w-full flex items-center justify-center fixed inset-0 z-50"
      style={{
        backgroundImage:
          'url("https://ecology.websitelayout.net/img/bg/bg-01.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-40 border-[1px]"></div>
      <div className="w-[640px] h-[450px] flex items-center justify-center z-50 ">
        <div className="flex flex-col w-[670px] h-[600px] items-center justify-center rounded-2xl bg-custom-white bg-opacity-70 border-[1px] ">
          <h1 className="text-3xl mb-8">Coming soon</h1>
          <Countdown date={targetDate} renderer={renderer} />
        </div>
      </div>
    </section>
  );
};

export default NewPost;
