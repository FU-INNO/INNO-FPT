import { Collapse } from "antd";
import imageFpt from "../assets/fpt.jpg";
import ContactForm from "./Contact";
import "../styles/Question.css";

const FAQComponent = () => {
  const items = [
    {
      key: "1",
      label: "FPT Education là gì?",
      children: (
        <p>
          FPT Education là hệ thống giáo dục thuộc tập đoàn FPT, chuyên cung cấp
          các chương trình đào tạo từ tiểu học đến đại học và sau đại học, với
          mục tiêu đào tạo nguồn nhân lực chất lượng cao cho ngành công nghệ
          thông tin và các ngành công nghiệp khác.
        </p>
      ),
    },
    {
      key: "2",
      label: "Các trường thuộc hệ thống FPT Education?",
      children: (
        <p>
          Hệ thống FPT Education bao gồm các trường đại học như Đại học FPT, Cao
          đẳng FPT Polytechnic, và các trường phổ thông như Trường Tiểu học và
          Trung học FPT.
        </p>
      ),
    },
    {
      key: "3",
      label: "Chương trình đào tạo của FPT Education như thế nào?",
      children: (
        <p>
          Chương trình đào tạo của FPT Education được thiết kế theo chuẩn quốc
          tế, chú trọng vào thực hành và ứng dụng thực tiễn, với mục tiêu giúp
          sinh viên nhanh chóng thích nghi và phát triển trong môi trường làm
          việc thực tế.
        </p>
      ),
    },
    {
      key: "4",
      label: "Làm thế nào để đăng ký học tại FPT Education?",
      children: (
        <p>
          Để đăng ký học tại FPT Education, bạn có thể truy cập vào trang web
          chính thức của FPT Education, tìm hiểu thông tin chi tiết về các
          chương trình đào tạo và làm theo hướng dẫn đăng ký trực tuyến. Ngoài
          ra, bạn cũng có thể liên hệ trực tiếp với các trường thuộc hệ thống
          FPT Education để được hỗ trợ.
        </p>
      ),
    },
    {
      key: "5",
      label: "Học phí tại FPT Education như thế nào?",
      children: (
        <p>
          Học phí tại FPT Education tùy thuộc vào từng chương trình đào tạo và
          cấp học. Thông tin chi tiết về học phí có thể được tìm thấy trên trang
          web chính thức của FPT Education hoặc bạn có thể liên hệ trực tiếp với
          trường để biết thêm chi tiết.
        </p>
      ),
    },
  ];

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h2>Câu hỏi thường gặp về FPT Education</h2>
        <img src={imageFpt} alt="FAQ" className="faq-image" />
      </div>
      <div className="faq-body">
        <Collapse items={items} className="faq-collapse" />
        <ContactForm />
      </div>
    </div>
  );
};

export default FAQComponent;
