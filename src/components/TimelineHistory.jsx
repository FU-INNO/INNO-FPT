const TimelineHistory = () => {
  const history = [
    {
      year: "1999",
      title: "Thành lập FPT Aptech",
      content:
        "FPT Aptech đã thành lập từ ngày 28 tháng 11 năm 1999 với mục đích đào tạo lập trình viên quốc tế, giúp các doanh nghiệp tăng trưởng và phát triển kinh doanh.",
    },
    {
      year: "2002",
      title: "Thành lập FPT Aptech HCM",
      content:
        "FPT Aptech HCM đã thành lập từ ngày 25 tháng 12 năm 2002 với mục đích đào tạo lập trình viên quốc tế, giúp các doanh nghiệp tăng trư��ng và phát triển kinh doanh.",
    },
    {
      year: "2006",
      title: "Thành lập Đại học FPT ",
      content:
        "Đào tạo Kỹ sư, Cử nhân Đại học. Bước tiến quan trọng của Tập đoàn FPT trong lĩnh vực giáo dục",
    },
    {
      year: "2009",
      title: "Thành lập FPT Greenwich nay là ĐH Greenwich (Việt Nam)",
      content:
        "Đào tạo Kỹ sư, Cử nhân lấy bằng do Đại học Greenwich (Anh Quốc) cấp",
    },

    {
      year: "2009",
      title: "Thành lập Viện Quản trị và Công nghệ FSB",
      content: " Đào tạo Thạc sĩ Quản trị Kinh doanh và Công nghệ thông tin",
    },
    {
      year: "2010",
      title: "Thành lập Cao đẳng Thực hành FPT Polytechnic",
      content:
        "Đào tạo Kỹ sư, Cử nhân Cao đẳng Thực hành. Bước tiến quan trọng trong việc mở rộng hệ đào tạo lập Viện Quản trị và Công nghệ FSB",
    },
    {
      year: "2010",
      title: "Thành lập FPT Jetking",
      content: "Đào tạo Phần cứng máy tính và Hệ thống mạng",
    },
    {
      year: "2015",
      title: "Thành lập FUNix",
      content: "Đào tạo Kỹ sư CNTT theo hình thức trực tuyến",
    },
    {
      year: "2016",
      title: "Thành lập Poly K-Beauty thuộc FPT Polytechnic",
      content: "Đào tạo ngành Thẩm mỹ & Làm đẹp",
    },
    {
      year: "2017",
      title: "Thành lập BTEC FPT",
      content: "Cao đẳng Anh Quốc BTEC FPT",
    },
    {
      year: "2017",
      title: "Thành lập Tiểu học & THCS FPT Cầu Giấy",
      content: "Trường Tiếu học & THCS đầu tiên của FPT Education",
    },
    {
      year: "2018",
      title: "Thành lập FPT Skilling",
      content:
        "Đào tạo chuyên sâu và cấp chứng chỉ quốc tế về Digital Marketing",
    },
    {
      year: "2019",
      title: "Thành lập Tiểu học - THCS - THPT FPT Đà Nẵng",
      content: "Đào tạo bậc phổ thông từ lớp 1 đến lớp 12",
    },
    {
      year: "2019",
      title: "Thành lập Swinburne Việt Nam",
      content:
        "Đào tạo kỹ sư, Cử nhân lấy bằng do Đại học Công nghệ Swinburne (Australia) cấp",
    },
    {
      year: "2019",
      title: "Thành lập chương trình Phổ thông Cao đẳng thuộc FPT Polytechnic",
      content:
        "Đào tạo nghề cho học sinh tốt nghiệp THCS trở lên, lấy bằng Cao đẳng chính quy",
    },

    {
      year: "2021",
      title: "Thành lập THPT FPT Quy Nhơn",
      content: "Đào tạo bậc phổ thông từ lớp 10 đến lớp 12",
    },
    {
      year: "2022",
      title: "Thành lập Fschool Bắc Ninh & Fschool Hải Phòng",
      content:
        "Trường Phổ thông Liên cấp FPT Bắc Ninh: Đào tạo bậc phổ thông từ lớp 1 đến lớp 12. Trường THCS & THPT FPT Hải Phòng: Đào tạo bậc phổ thông từ lớp 6 đến lớp 12",
    },
    {
      year: "2023",
      title: "Thành lập Fschool Bắc Giang & Fschool Hà Nam",
      content:
        "Thành lập Trường Phổ thông Liên cấp FPT tại Bắc Giang, Hà Nam đào tạo từ lớp 1 đến lớp 12.",
    },
  ];
  return (
    <div className="  mx-auto w-full h-full m-md:container">
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
                <div className="z-20 flex items-center order-1 bg-green-800 shadow-xl w-12 h-10 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">
                    {e.year}
                  </h1>
                </div>
                <div className="order-1 bg-gray-300 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <h3 className="mb-3 font-bold text-orange-800 text-xl">
                    {e.title}
                  </h3>
                  <p className="text-sm leading-snug tracking-wide text-orange-800 text-opacity-100">
                    {e.content}
                  </p>
                </div>
              </div>
            ) : (
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-blue-900 shadow-xl w-12 h-10 rounded-full">
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
