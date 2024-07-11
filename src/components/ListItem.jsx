// src/components/ListBlog.jsx
import React from "react";
import { Layout, Row, Col } from "antd";
import { Link } from "react-router-dom";
import "../styles/ListBlog.css";
import { BannerData } from "../Data/BannerData";
const { Content } = Layout;

const ListBlog = () => (
  <Layout>
    <Content>
      <section className="section-padding">
        <Row gutter={[16, 16]}>
          {BannerData.map((post, index) => (
            <Col lg={6} md={12} sm={12} xs={24} key={index}>
              <article className="post-grid mb-5">
                <Link
                  className="post-thumb mb-4 d-block"
                  to={`/blog/${encodeURIComponent(post.url)}`}
                >
                  <img
                    src={post.image.url}
                    alt=""
                    className="img-fluid w-100"
                  />
                </Link>
                <span className="cat-name text-color font-extra text-sm text-uppercase letter-spacing-1">
                  {post.articleSection}
                </span>
                <h3 className="post-title mt-1">
                  <Link to={`/blog/${encodeURIComponent(post.url)}`}>
                    {post.headline}
                  </Link>
                </h3>
                <span className="text-muted letter-spacing text-uppercase font-sm">
                  {new Date(post.datePublished).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </article>
            </Col>
          ))}
        </Row>
      </section>
    </Content>
  </Layout>
);

export default ListBlog;
