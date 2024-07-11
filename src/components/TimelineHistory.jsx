const TimelineHistory = () => {
  const history = [
    {
      year: "1999",
      title: "Thành lập FPT Aptech",
      content:
        "FPT Aptech đã thành lập từ ngày 28 tháng 11 năm 1999 với mục đích đào tạo lập trình viên quốc tế, giúp các doanh nghiệp tăng trư��ng và phát triển kinh doanh.",
    },
    {
      year: "2002",
      title: "Thành lập FPT Aptech HCM",
      content:
        "FPT Aptech HCM đã thành lập từ ngày 25 tháng 12 năm 2002 với mục đích đào tạo lập trình viên quốc tế, giúp các doanh nghiệp tăng trư��ng và phát triển kinh doanh.",
    },
    {
      year: "2005",
      title: "Thành lập FPT Aptech Hà Nội",
      content:
        "FPT Aptech HCM đã thành lập từ ngày 25 tháng 12 năm 2002 với mục đích đào tạo lập trình viên quốc tế, giúp các doanh nghiệp tăng trư��ng và phát triển kinh doanh.",
    },
    {
      year: "2008",
      title: "Thành lập FPT Aptech Việt Nam",
      content:
        "FPT Aptech HCM đã thành lập từ ngày 25 tháng 12 năm 2002 với mục đích đào tạo lập trình viên quốc tế, giúp các doanh nghiệp tăng trư��ng và phát triển kinh doanh.",
    },
    {},
  ];
  return (
    <div className="container  mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div
          className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
          style={{ left: "50%" }}
        ></div>
        {history?.map((e, index) => (
          <>
            {index % 2 === 0 ? (
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-10 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">
                    {e.year}
                  </h1>
                </div>
                <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <h3 className="mb-3 font-bold text-gray-800 text-xl">
                    {e.title}
                  </h3>
                  <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                    {e.content}
                  </p>
                </div>
              </div>
            ) : (
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-10 rounded-full">
                  <h1 className="mx-auto text-white font-semibold text-lg">
                    {e.year}
                  </h1>
                </div>
                <div className="order-1 bg-orange-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <h3 className="mb-3 font-bold text-white text-xl">
                    {" "}
                    {e.title}
                  </h3>
                  <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                    {e.content}
                  </p>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default TimelineHistory;
