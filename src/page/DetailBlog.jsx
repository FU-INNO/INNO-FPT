// src/components/BlogPost.jsx
import React from "react";
import { Row, Col } from "antd";
import { useParams } from "react-router-dom";
import BlogDetail from "../components/BlogDetail";
import AsideBlog from "../components/AsideBlog";
import BannerHistory from "../components/BannerHistory";
import { BannerData } from "../Data/BannerData";
import "../styles/DetailBlog.css";

const BlogPost = () => {
  const { url } = useParams();
  const decodedUrl = decodeURIComponent(url);
  const blog = BannerData.find((item) => item.url === decodedUrl);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <BannerHistory />
      <section className="single-block-wrapper section-padding">
        <div style={{ width: "100%", padding: "0 16px" }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={16}>
              <BlogDetail blog={blog} />
            </Col>
            <Col xs={24} md={8}>
              <AsideBlog />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
