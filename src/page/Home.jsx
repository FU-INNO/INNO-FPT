import { Image } from "antd";
import Banner from "../components/Banner";
import VisonHome from "../components/VisonHome";
import dreamImg from "../assets/About_fptedu.jpg";
import Header from "../components/Header";
import Slice from "../components/Slice";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <Banner />
      <Slice />
      <Footer />
      {/* <VisonHome /> */}
      {/* <Image src={dreamImg} /> */}
    </div>
  );
};

export default Home;
