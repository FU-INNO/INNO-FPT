import { Image } from "antd";
import Banner from "../components/Banner";
import VisonHome from "../components/VisonHome";
import dreamImg from "../assets/About_fptedu.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PostShare from "../components/PostShare";

const Home = () => {
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <Banner />
      <VisonHome />
      <Image src={dreamImg} />
      <Footer />
      <PostShare />
    </div>
  );
};

export default Home;
