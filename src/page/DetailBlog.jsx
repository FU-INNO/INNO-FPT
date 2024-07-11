import { Row, Col } from "antd";
import BlogDetail from "../components/BlogDetail";
import AsideBlog from "../components/AsideBlog";
import "../styles/DetailBlog.css";
import BannerPost from "../components/BannerPost";

const BlogPost = () => {
  return (
    <>
      <BannerPost />
      <section className="single-block-wrapper section-padding">
        <div style={{ width: "100%", padding: "0 16px" }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={16}>
              <BlogDetail />
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
