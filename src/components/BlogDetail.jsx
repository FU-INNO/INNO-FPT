import { Row, Col, Typography, Tag, Image, Avatar, Input, Button } from "antd";
import {
  HeartOutlined,
  FacebookOutlined,
  TwitterOutlined,
  PinterestOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

const DetailBlog = () => {
  return (
    <div className="w-full">
      <div className="mb-5 text-center">
        <Title level={2} className="mt-2">
          First Look At Autumn Collection
        </Title>
      </div>

      <div>
        <div>
          {/* articleSection */}
          <Title level={2} className="mt-4 mb-3">
            {" "}
            New Arrivals
          </Title>
          {/* articleSection */}
          {/* name author */}
          <div className="flex flex-row">
            <Paragraph className="text-justify">Nguyen van a</Paragraph>
            <Row lg={12} md={12}>
              {/* anh tac gia */}
              <Image
                src="images/fashion/single-img1.png"
                alt="post-ads"
                className="w-full" //hight và width DB
              />
            </Row>
          </div>
          {/* name author */}
          {/* description */}
          <blockquote className="italic border-l-4 border-gray-500 pl-4">
            <i className="ti-quote-left mr-2"></i>
            "Fashion is the armor to survive the reality of everyday life."
            <i className="ti-quote-right ml-2"></i>
          </blockquote>
          <Row gutter={[16, 16]}>
            <Col lg={12} md={12}>
              <Image
                src="images/fashion/single-img2.png"
                alt="post-ads"
                className="w-full"
              />
            </Col>
          </Row>
        </div>

        <div className="py-4">
          <Tag>#Health</Tag>
          <Tag>#Lifestyle</Tag>
          <Tag>#Fashion</Tag>
        </div>

        <div className="flex justify-between items-center border-t border-b py-3">
          <span className="flex items-center">
            <i className="fa fa-comment-o"></i> 0 comments
          </span>
          <div className="flex items-center">
            <span className="mr-2">2</span>
            <HeartOutlined className="ml-2" />
          </div>
          <div className="flex space-x-3">
            <a target="_blank" rel="nofollow" href="#">
              <FacebookOutlined />
            </a>
            <a target="_blank" rel="nofollow" href="#">
              <TwitterOutlined />
            </a>
            <a target="_blank" rel="nofollow" href="#">
              <PinterestOutlined />
            </a>
            <a target="_blank" rel="nofollow" href="#">
              <LinkedinOutlined />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBlog;
