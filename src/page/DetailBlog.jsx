import { Row, Col } from "antd";
import BlogDetail from "../components/BlogDetail";
import AsideBlog from "../components/AsideBlog";
import BannerHistory from "../components/BannerHistory";
import "../styles/DetailBlog.css";

const BlogPost = () => {
  return (
    <>
      <BannerHistory />
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

{
  /* <form className="mb-5 bg-gray-100 p-5" id="comment-form">
        <Title level={3} className="mb-4 text-center">
          Leave a Comment
        </Title>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <TextArea
              className="mb-3 w-full"
              name="comment"
              id="comment"
              rows={5}
              placeholder="Comment"
            />
          </Col>
          <Col span={12}>
            <Input
              className="mb-3 w-full"
              name="name"
              id="name"
              placeholder="Name"
            />
          </Col>
          <Col span={12}>
            <Input
              className="mb-3 w-full"
              name="email"
              id="email"
              placeholder="Email"
            />
          </Col>
          <Col span={24}>
            <Input
              className="mb-3 w-full"
              name="website"
              id="website"
              placeholder="Website"
            />
          </Col>
          <Col span={24}>
            <Button type="primary" htmlType="submit">
              Post Comment
            </Button>
          </Col>
        </Row>
      </form> */
}
