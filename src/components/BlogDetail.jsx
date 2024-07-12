import React, { useEffect, useState } from "react";
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
    <div className="w-full">
      <div className="mb-5 text-center">
        <Title level={2} className="mt-2">
          {blog.headline}
        </Title>
      </div>

      <div>
        <div>
          <Title level={2} className="mt-4 mb-3">
            {blog.articleSection}
          </Title>

          <div className="flex flex-row items-center mb-3">
            <Avatar
              src={blog.author.image.url}
              alt={blog.author.name}
              size={48}
            />
            <Paragraph className="ml-3">{blog.author.name}</Paragraph>
            <TextToSpeech></TextToSpeech>
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

        <div className="flex justify-between items-center border-t border-b py-3">
          <span className="flex items-center">
            <i className="fa fa-comment-o"></i> 0 comments
          </span>
          <div className="flex items-center">
            <span className="mr-2">2</span>
            <HeartOutlined className="ml-2" />
          </div>
          <div className="flex space-x-3">
            <a target="_blank" rel="nofollow" href={blog.url}>
              <FacebookOutlined />
            </a>
            <a target="_blank" rel="nofollow" href={blog.url}>
              <TwitterOutlined />
            </a>
            <a target="_blank" rel="nofollow" href={blog.url}>
              <PinterestOutlined />
            </a>
            <a target="_blank" rel="nofollow" href={blog.url}>
              <LinkedinOutlined />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
