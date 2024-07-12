import React from "react";
import { Row, Col, Typography, Tag, Image, Avatar } from "antd";
import {
  HeartOutlined,
  FacebookOutlined,
  TwitterOutlined,
  PinterestOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import TextToSpeech from "../components/TextToSpeech";

const { Title, Paragraph } = Typography;

const BlogDetail = ({ blog }) => {
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="w-full p-4">
      <div className="mb-5 text-center">
        <h2 className="text-2xl font-bold mt-2">{blog.headline}</h2>
      </div>

      <div>
        <div>
          <h2 className="text-xl font-semibold mt-4 mb-3">
            {blog.articleSection}
          </h2>

          <div className="flex items-center mb-3">
            <Avatar
              src={blog.author.image.url}
              alt={blog.author.name}
              size={48}
            />
            <Paragraph className="ml-3">{blog.author.name}</Paragraph>
            <TextToSpeech />
          </div>

          <blockquote className="italic border-l-4 border-gray-500 pl-4 mb-3">
            {blog.description}
          </blockquote>

          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Image
                src={blog.image.url}
                alt={blog.headline}
                className="w-full"
              />
            </Col>
          </Row>
        </div>

        <div className="py-4">
          <Tag>{blog.articleSection}</Tag>
          {blog.keywords &&
            blog.keywords
              .split(", ")
              .map((keyword) => <Tag key={keyword}>#{keyword}</Tag>)}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
