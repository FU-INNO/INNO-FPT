import BannerHistory from "../components/BannerHistory";
import Question from "../components/Question";
import "../styles/Question.css";

const History = () => {
  // const [feedback, setFeedback] = useState(0);

  return (
    <>
      <BannerHistory />
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-full container ">
          <Question />
          
        </div>
      </div>
    </>
  );
};

export default History;
