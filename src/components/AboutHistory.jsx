import aboutImg from "../assets/about.jpg";
import "../styles/AboutHistory.css";
const AboutHistory = () => {
  return (
    <>
      <div className="row grid gap-32 mt-5 ">
        <div className="col-start-1 relative">
          <div className="">
            <img src={aboutImg} alt="..." className="border-radius-10 "></img>
            <div className="lg-text ani-left-right  ">
              <h4 className="mb-0 text-white z-10">About</h4>
            </div>
          </div>
        </div>
        <div className="col-start-2">
          Đại học FPT Đại học FPT được thành lập ngày 8/9/2006 theo Quyết định
          số 208/2006/QĐ-TTg của Thủ tướng Chính phủ và hoạt động theo Quy chế
          tổ chức và hoạt động của Trường Đại học tư thục theo Quyết định số
          61/2009/QĐ-TTg ban hành ngày 17/4/2009 của Chính phủ. Sứ mệnh của Đại
          học FPT là đào tạo nguồn nhân lực chất lượng cao trong giai đoạn hội
          nhập, cung cấp năng lực cạnh tranh toàn cầu cho người học, góp phần mở
          mang bờ cõi trí tuệ đất nước. Khác biệt trong phương pháp đào tạo của
          Đại học FPT là gắn kết chặt chẽ với các doanh nghiệp, đào tạo theo
          chương trình chuẩn công nghệ quốc tế, thành thạo hai ngoại ngữ, rèn
          luyện kỹ năng mềm, chú trọng phát triển con người toàn diện, hài hòa.
          Mục tiêu trước mắt của Trường Đại học FPT là đào tạo và cung cấp nguồn
          nhân lực chất lượng cao chuyên ngành CNTT, Kinh tế, Mỹ thuật và các
          nhóm ngành khác cho các doanh nghiệp trong nước cũng như các tập đoàn
          thế giới. 98% sinh viên ra trường có việc làm với mức lương trung bình
          là 8,3 triệu đồng; 19% cựu sinh viên làm việc tại nước ngoài; 100%
          sinh viên có cơ hội làm việc tại Tập đoàn FPT.
        </div>
      </div>
    </>
  );
};

export default AboutHistory;
