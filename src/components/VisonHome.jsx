import { Card } from "antd";
import "../styles/VisonHome.css";
import v1 from "../assets/ivison.png";
import v2 from "../assets/gvison.png";
import v3 from "../assets/svison.png";
import v4 from "../assets/mvison.png";

const VisonHome = () => {
  return (
    <section className="pb-0 bg-light overflow-visible flex justify-center">
      <div className="container">
        <div className="section-title-vison text-center mb-5 gap-5 flex flex-col">
          <h2 className=" font-bold uppercase bg-clip-text text-transparent bg-gradient-to-tr from-yellow-500 to-orange-700">
            Tầm nhìn
          </h2>
          <span>
            Trở thành một hệ thống giáo dụ mang tính quốc tế, đáp ứng nhu cầu
            của xã hội và dựa trên các công nghệ đào tạo tiên tiến nhất
          </span>
        </div>
        <div className="flex gap-3 flex-col max-w-md:flex-row xl:flex-row md:flex-col">
          <Card className=" card card-style4 bg-light border-radius-10 mt-5 mb-10 xl:mt-0 xl:w-1/4">
            <div className="card-body flex flex-col items-center  text-center ">
              <div className="features-icon mb-4">
                <img src={v1} alt="..." />
              </div>
              <h3 className="text-lg font-medium">I - Industry Relevant</h3>
              <p className="text-sm mt-2">
                Cung cấp các chương trình đào tạo được thiết kế để đáp ứng trực
                tiếp nhu cầu của thị trường lao động và doanh nghiệp.
              </p>
            </div>
          </Card>
          <Card className=" card card-style4 bg-light border-radius-10 mt-5 mb-5 xl:mt-10 xl:w-1/4">
            <div className="card-body flex flex-col items-center  text-center ">
              <div className="features-icon mb-4">
                <img src={v2} alt="..." />
              </div>
              <h3 className="text-lg font-medium">G - Global</h3>
              <p className="text-sm mt-2">
                Hướng tới việc nâng cao tính toàn cầu hóa của giáo dục bằng cách
                cung cấp các chương trình học tập phù hợp với tiêu chuẩn quốc tế
                và cơ hội học tập đa quốc gia.
              </p>
            </div>
          </Card>{" "}
          <Card className=" card card-style4 bg-light border-radius-10 mt-5 mb-10 xl:mt-0 xl:w-1/4">
            <div className="card-body flex flex-col items-center  text-center ">
              <div className="features-icon mb-4">
                <img src={v3} alt="..." />
              </div>
              <h3 className="text-lg font-medium">S - Smart Education</h3>
              <p className="text-sm mt-2">
                Sử dụng và áp dụng các công nghệ tiên tiến trong quá trình giảng
                dạy và học tập, nhằm tối ưu hóa trải nghiệm học tập của sinh
                viên.
              </p>
            </div>
          </Card>
          <Card className=" card card-style4 bg-light border-radius-10 mt-5  mb-5 xl:mt-10 xl:w-1/4">
            <div className="card-body flex flex-col items-center  text-center ">
              <div className="features-icon mb-4">
                <img src={v4} alt="..." />
              </div>
              <h3 className="text-lg font-medium">M - Mega</h3>
              <p className="text-sm mt-2">
                Đặt mục tiêu trở thành một tổ chức giáo dục có quy mô lớn, cung
                cấp một loạt các dịch vụ giáo dục từ trình độ đại học đến sau
                đại học.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisonHome;
