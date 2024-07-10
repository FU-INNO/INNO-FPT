import { Image } from "antd";
import Banner from "../components/Banner";
import VisonHome from "../components/VisonHome";
import dreamImg from "../assets/About_fptedu.jpg";
const Home = () => {
  return (
    <div className="flex flex-col justify-center">
      <Banner />
      <VisonHome />
      <Image src={dreamImg} />
    </div>
  );
};

export default Home;
