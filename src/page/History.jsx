import "../styles/History.css";
import BannerHistory from "../components/BannerHistory";
import TimelineHistory from "../components/TimelineHistory";
import Achievement from "../components/Achievement";

const History = () => {
  // const [feedback, setFeedback] = useState(0);

  return (
    <>
      <BannerHistory />
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-full container ">
          <TimelineHistory />
          <Achievement />
        </div>
      </div>
    </>
  );
};

export default History;
