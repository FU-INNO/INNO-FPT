import {  Typography, Image, Input, Button } from 'antd';
import { FacebookOutlined, TwitterOutlined, PinterestOutlined } from '@ant-design/icons';
import "../styles/DetailBlog.css";

const { Title, Paragraph } = Typography;

const AsideBlog = () => {
    return (
        <div className="sidebar sidebar-right">
            <div className="sidebar-wrap mt-5 mt-lg-0">
                <div className="sidebar-widget about mb-5 text-center p-3">
                    <div className="about-author">
                        <Image src="images/author.jpg" alt="Author" className="img-fluid" />
                    </div>
                    <Title level={4} className="mb-0 mt-4">Liam Mason</Title>
                    <Paragraph>Travel Blogger</Paragraph>
                    <Paragraph>Im Liam, last year I decided to quit my job and travel the world. You can follow my journey on this blog!</Paragraph>
                    <Image src="images/liammason.png" alt="Liam Mason Signature" className="img-fluid" />
                </div>

                <div className="sidebar-widget follow mb-5 text-center">
                    <Title level={4} className="text-center widget-title">Follow Me</Title>
                    <div className="follow-socials">
                        <a href="#"><FacebookOutlined /></a>
                        <a href="#"><TwitterOutlined /></a>
                        <a href="#"><PinterestOutlined /></a>
                    </div>
                </div>

                <div className="sidebar-widget mb-5">
                    <Title level={4} className="text-center widget-title">Trending Posts</Title>

                    <div className="sidebar-post-item-big">
                        <a href="blog-single.html"><Image src="images/news/img-1.jpg" alt="Trending Post" className="img-fluid" /></a>
                        <div className="mt-3 media-body">
                            <span className="text-muted letter-spacing text-uppercase font-sm">September 10, 2019</span>
                            <Title level={5}><a href="blog-single.html">Meeting With Clarissa, Founder Of Purple Conversation App</a></Title>
                        </div>
                    </div>

                    <div className="media border-bottom py-3 sidebar-post-item">
                        <a href="#"><Image className="mr-4" src="images/news/thumb-1.jpg" alt="Trending Post" /></a>
                        <div className="media-body">
                            <span className="text-muted letter-spacing text-uppercase font-sm">September 10, 2019</span>
                            <Title level={5}><a href="blog-single.html">Sad fdfgs</a></Title>
                        </div>
                    </div>

                    <div className="media py-3 sidebar-post-item">
                        <a href="#"><Image className="mr-4" src="images/news/thumb-2.jpg" alt="Trending Post" /></a>
                        <div className="media-body">
                            <span className="text-muted letter-spacing text-uppercase font-sm">September 10, 2019</span>
                            <Title level={5}><a href="blog-single.html">Aerurwer.</a></Title>
                        </div>
                    </div>
                </div>

                <div className="sidebar-widget category mb-5">
                    <Title level={4} className="text-center widget-title">Categories</Title>
                    <ul className="list-unstyled">
                        <li className="align-items-center d-flex justify-content-between">
                            <a href="#">Innovation</a>
                            <span>14</span>
                        </li>
                        <li className="align-items-center d-flex justify-content-between">
                            <a href="#">Software</a>
                            <span>2</span>
                        </li>
                        <li className="align-items-center d-flex justify-content-between">
                            <a href="#">Social</a>
                            <span>10</span>
                        </li>
                        <li className="align-items-center d-flex justify-content-between">
                            <a href="#">Trends</a>
                            <span>5</span>
                        </li>
                    </ul>
                </div>

                <div className="sidebar-widget subscribe mb-5">
                    <Title level={4} className="text-center widget-title">Newsletter</Title>
                    <Input type="text" className="form-control" placeholder="Email Address" />
                    <Button type="primary" className="d-block mt-3">Sign Up</Button>
                </div>

                <div className="sidebar-widget sidebar-adv mb-5">
                    <a href="#"><Image src="images/sidebar-banner3.png" alt="Advertisement Banner" className="img-fluid w-100" /></a>
                </div>

            </div>
        </div>
    );
}

export default AsideBlog;
