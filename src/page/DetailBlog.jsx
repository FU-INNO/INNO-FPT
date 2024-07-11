import { Row, Col } from 'antd';
import BlogDetail from "../components/BlogDetail";
import AsideBlog from "../components/AsideBlog";
import BannerHistory from "../components/BannerHistory";
import "../styles/DetailBlog.css";

const BlogPost = () => {
    return (
        <>
         <BannerHistory />
        <section className="single-block-wrapper section-padding" >
            <div style={{ width: '100%', padding: '0 16px' }}>
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
}

export default BlogPost;
