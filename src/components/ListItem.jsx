import { Layout, Row, Col } from 'antd';
import '../styles/ListBlog.css';
import slide1 from '../assets/slider/slider1.jpg'
import slide2 from '../assets/slider/slider2.jpg'
import slide3 from '../assets/slider/slider3.jpg'
const {  Content } = Layout;





const posts = [
  {
    imgSrc: slide1,
    category: "Explore",
    title: "The best place to explore to enjoy",
    date: "June 15, 2019"
  },
  {
    imgSrc: slide2,
    category: "Lifestyle",
    title: "How to Make list for travelling alone",
    date: "September 15, 2019"
  },
  {
    imgSrc: slide3,
    category: "Food",
    title: "5 ingredient cilantro vinaigrette",
    date: "September 15, 2019"
  },
  {
    imgSrc: slide3,
    category: "Explore",
    title: "A Simple Way to Feel Like Home When You Travel",
    date: "March 20, 2019"
  }
];

const ListBlog = () => (
  <Layout>
    <Content>
      <section className="section-padding">
        <Row gutter={[16, 16]}>
          {posts.map((post, index) => (
            <Col lg={6} md={12} sm={12} xs={24} key={index}>
              <article className="post-grid mb-5">
                <a className="post-thumb mb-4 d-block" href="blog-single.html">
                  <img src={post.imgSrc} alt="" className="img-fluid w-100" />
                </a>
                <span className="cat-name text-color font-extra text-sm text-uppercase letter-spacing-1">
                  {post.category}
                </span>
                <h3 className="post-title mt-1">
                  <a href="blog-single.html">{post.title}</a>
                </h3>
                <span className="text-muted letter-spacing text-uppercase font-sm">{post.date}</span>
              </article>
            </Col>
          ))}
        </Row>
      </section>
    </Content>
  </Layout>
);

export default ListBlog;
