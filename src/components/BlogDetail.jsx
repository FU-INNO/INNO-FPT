import { Row, Col, Typography, Tag, Image, Avatar, Input, Button } from 'antd';
import { HeartOutlined, FacebookOutlined, TwitterOutlined, PinterestOutlined, LinkedinOutlined } from '@ant-design/icons';
import "../styles/DetailBlog.css";

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

const DetailBlog = () => {
    return (
        <div className="single-post" style={{ width: '100%' }}>
            <div className="post-header mb-5 text-center">
                <div className="meta-cat">
                    <Tag className="font-extra text-color text-uppercase font-sm letter-spacing-1">Health</Tag>
                    <Tag className="font-extra text-color text-uppercase font-sm letter-spacing-1">Lifestyle</Tag>
                </div>
                <Title level={2} className="post-title mt-2">First Look At Autumn Collection</Title>
                <div className="post-meta">
                    <Text className="text-uppercase font-sm letter-spacing-1 mr-3">by Liam</Text>
                    <Text className="text-uppercase font-sm letter-spacing-1">January 17, 2019</Text>
                </div>
                <div className="post-featured-image mt-5">
                    <Image src="images/fashion/bg-banner.jpg" alt="featured-image" style={{ width: '100%' }} />
                </div>
            </div>

            <div className="post-body">
                <div className="entry-content">
                    <Paragraph>dssfsfddsfsdsdf.</Paragraph>
                    <Title level={2} className="mt-4 mb-3">sfdsdkfsdfl</Title>
                    <Paragraph>fdsjhdfgjgdbnvdbvb</Paragraph>
                    <blockquote>
                        <i className="ti-quote-left mr-2"></i>sfgjdgsfnfng.<i className="ti-quote-right ml-2"></i>
                    </blockquote>
                    <Row gutter={[16, 16]}>
                        <Col lg={12} md={12}>
                            <Image src="images/fashion/single-img1.png" alt="post-ads" style={{ width: '100%' }} />
                        </Col>
                        <Col lg={12} md={12}>
                            <Image src="images/fashion/single-img2.png" alt="post-ads" style={{ width: '100%' }} />
                        </Col>
                    </Row>
                    <Title level={3} className="mt-5 mb-3">dfksfgesoriroi</Title>
                    <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cum delectus exercitationem natus quidem enim error suscipit. Iure cupiditate nobis quaerat consectetur! Vero aliquam, amet ipsum ullam reiciendis nostrum voluptate accusantium provident ut blanditiis incidunt.</Paragraph>
                    <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ab ratione animi nobis in et consequatur earum modi repellendus, qui, non debitis pariatur tempora consequuntur!</Paragraph>
                </div>

                <div className="post-tags py-4">
                    <Tag>#Health</Tag>
                    <Tag>#Game</Tag>
                    <Tag>#Tour</Tag>
                </div>

                <div className="tags-share-box center-box d-flex text-center justify-content-between border-top border-bottom py-3">
                    <span className="single-comment-o"><i className="fa fa-comment-o"></i>0 comment</span>
                    <div className="post-share">
                        <span className="count-number-like">2</span>
                        <HeartOutlined className="single-like-button" />
                    </div>
                    <div className="list-posts-share">
                        <a target="_blank" rel="nofollow" href="#"><FacebookOutlined /></a>
                        <a target="_blank" rel="nofollow" href="#"><TwitterOutlined /></a>
                        <a target="_blank" rel="nofollow" href="#"><PinterestOutlined /></a>
                        <a target="_blank" rel="nofollow" href="#"><LinkedinOutlined /></a>
                    </div>
                </div>
            </div>

            <div className="post-author d-flex my-5">
                <div className="author-img">
                    <Avatar src="images/author.jpg" size={100} />
                </div>
                <div className="author-content pl-4">
                    <Title level={4} className="mb-3">
                        <a href="#" title="" rel="author" className="text-capitalize">Themefisher</a>
                    </Title>
                    <Paragraph>erbrtgj34p</Paragraph>
                    <div className="author-social">
                        <a target="_blank" href="#"><FacebookOutlined /></a>
                        <a target="_blank" href="#"><TwitterOutlined /></a>
                        <a target="_blank" href="#"><PinterestOutlined /></a>
                        <a target="_blank" href="#"><LinkedinOutlined /></a>
                    </div>
                </div>
            </div>

            <nav className="post-pagination clearfix border-top border-bottom py-4">
                <div className="prev-post">
                    <a href="blog-single.html">
                        <span className="text-uppercase font-sm letter-spacing">Next</span>
                        <Title level={4} className="mt-3">rtgnjrstrt</Title>
                    </a>
                </div>
                <div className="next-post">
                    <a href="blog-single.html">
                        <span className="text-uppercase font-sm letter-spacing">Previous</span>
                        <Title level={4} className="mt-3">fsgdosgjo</Title>
                    </a>
                </div>
            </nav>

            <div className="related-posts-block mt-5">
                <Title level={3} className="news-title mb-4 text-center">You May Also Like</Title>
                <Row gutter={[16, 16]}>
                    <Col lg={8} md={12} sm={24}>
                        <div className="post-block-wrapper mb-4 mb-lg-0">
                            <a href="blog-single.html">
                                <Image src="images/fashion/img-1.jpg" alt="post-thumbnail" style={{ width: '100%' }} />
                            </a>
                            <div className="post-content mt-3">
                                <Title level={5}>
                                    <a href="blog-single.html">rausueotgsjb</a>
                                </Title>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8} md={12} sm={24}>
                        <div className="post-block-wrapper mb-4 mb-lg-0">
                            <a href="blog-single.html">
                                <Image src="images/fashion/img-2.jpg" alt="post-thumbnail" style={{ width: '100%' }} />
                            </a>
                            <div className="post-content mt-3">
                                <Title level={5}>
                                    <a href="blog-single.html">dsnfgesorjgtort</a>
                                </Title>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8} md={12} sm={24}>
                        <div className="post-block-wrapper">
                            <a href="blog-single.html">
                                <Image src="images/fashion/img-3.jpg" alt="post-thumbnail" style={{ width: '100%' }} />
                            </a>
                            <div className="post-content mt-3">
                                <Title level={5}>
                                    <a href="blog-single.html">dgjsogjettrg</a>
                                </Title>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <form className="comment-form mb-5 gray-bg p-5" id="comment-form">
                <Title level={3} className="mb-4 text-center">Leave a comment</Title>
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <TextArea className="form-control mb-3" name="comment" id="comment" rows={5} placeholder="Comment" />
                    </Col>
                    <Col span={12}>
                        <Input className="form-control mb-3" name="name" id="name" placeholder="Name" />
                    </Col>
                    <Col span={12}>
                        <Input className="form-control mb-3" name="email" id="email" placeholder="Email" />
                    </Col>
                    <Col span={24}>
                        <Input className="form-control mb-3" name="website" id="website" placeholder="Website" />
                    </Col>
                    <Col span={24}>
                        <Button type="primary" htmlType="submit">Post Comment</Button>
                    </Col>
                </Row>
            </form>
        </div>
    );
};

export default DetailBlog;
