import BannerQuestion from "../components/BannerQuestion";
import Question from "../components/Question";
import "../styles/Question.css";

const History = () => {
  // const [feedback, setFeedback] = useState(0);

  return (
    <>
      <BannerQuestion />
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-full container ">
          <Question />
        </div>
      </div>
    </>
  );
};

export default History;
