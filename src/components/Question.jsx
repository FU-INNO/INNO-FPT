import { Collapse } from "antd";
import imageFpt from "../assets/fpt.jpg";
import ContactForm from "./Contact";
import "../styles/Question.css";

const FAQComponent = () => {
  const items = [
    {
      key: "1",
      label:
        "Chuyển đổi số ảnh hưởng đến hiệu suất và tốc độ tải trang web như thế nào?",
      children: (
        <p>
          Câu hỏi này nhằm tìm hiểu cách mà các công nghệ mới và phương pháp tối
          ưu hóa được áp dụng trong quá trình chuyển đổi số có thể cải thiện
          hoặc ảnh hưởng đến tốc độ và hiệu suất của trang web.
        </p>
      ),
    },
    {
      key: "2",
      label:
        "Làm thế nào để chuyển đổi số giúp nâng cao trải nghiệm người dùng trên trang web?",
      children: (
        <p>
          Câu hỏi này khám phá cách mà các công nghệ số như trí tuệ nhân tạo,
          học máy và phân tích dữ liệu có thể được sử dụng để cá nhân hóa và cải
          thiện trải nghiệm người dùng
        </p>
      ),
    },
    {
      key: "3",
      label:
        "Những thách thức phổ biến trong quá trình chuyển đổi số của một trang web là gì và làm thế nào để vượt qua chúng?",
      children: (
        <p>
          Câu hỏi này tập trung vào việc xác định những khó khăn thường gặp khi
          thực hiện chuyển đổi số và các chiến lược hoặc giải pháp để giải quyết
          những thách thức đó.
        </p>
      ),
    },
  ];
  return (
    <div className="faq-container">
      <div className="faq-header w-[40%]">
        <h2>Frequently Asked Questions</h2>
        <img src={imageFpt} alt="FAQ" className="faq-image" />
      </div>
      <div className="faq-body w-[60%]">
        <Collapse items={items} className="faq-collapse" />
        <ContactForm />
      </div>
    </div>
  );
};

export default FAQComponent;
