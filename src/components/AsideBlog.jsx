import { Typography, Image, Input, Button } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  PinterestOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const AsideBlog = () => {
  return (
    <div className="sidebar-right">
      <div className="mt-5 lg:mt-0">
        <div className="text-center p-3 mb-5">
          <div>
            <Image src="images/author.jpg" alt="Author" className="w-full" />
          </div>
          <Title level={4} className="mb-0 mt-4">
            Liam Mason
          </Title>
          <Paragraph>Travel Blogger</Paragraph>
          {/* gmail */}
          <Paragraph>
            I'm Liam, last year I decided to quit my job and travel the world.
            You can follow my journey on this blog!
          </Paragraph>
          <Image
            src="images/liammason.png"
            alt="Liam Mason Signature"
            className="w-full"
          />
        </div>

        <div className="text-center mb-5">
          <Title level={4} className="text-center">
            Follow Me
          </Title>
          <div className="flex justify-center space-x-4 mt-3">
            <a href="#">
              <FacebookOutlined />
            </a>
            <a href="#">
              <TwitterOutlined />
            </a>
            <a href="#">
              <PinterestOutlined />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsideBlog;
