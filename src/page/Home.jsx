import { Image } from "antd";
import VisonHome from "../components/VisonHome";
import dreamImg from "../assets/About_fptedu.jpg";
import BannerHome from "../components/BannerHome";
const Home = () => {
  return (
    <div className="flex flex-col justify-center">
      <BannerHome />
      <VisonHome />
      <Image src={dreamImg} />
    </div>
  );
};

export default Home;
