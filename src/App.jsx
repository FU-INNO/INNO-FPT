import { Route, Routes } from "react-router";
import Header from "./components/Header.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { lazy, Suspense } from "react";
import loadWithDelay from "./utils/loadWithDelay.js";
import { Spin } from "antd";
import Error from "./components/403.jsx";
import Footer from "./components/Footer.jsx";
import ChatBox from "./components/ChatBox.jsx";
import History from "./page/History.jsx";
import Location from "./Location.jsx";
import Login from "./components/Login.jsx";
import Question from "./page/Question.jsx";
import ListBlog from "./page/ListBlog.jsx";
import BlogPost from "./page/DetailBlog.jsx"; // Ensure the correct path
import Spinner from "./components/Spinner.jsx";
import TextToSpeech from "./components/TextToSpeech.jsx";
import PostShare from "./components/PostShare.jsx";
import Project from "./page/Project.jsx";

const Home = lazy(() => loadWithDelay(() => import("./page/Home.jsx"), 2000));

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Suspense fallback={<Spin tip="Loading..."></Spin>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/login" element={<Login />} />
          <Route path="/location" element={<Location />} />
          <Route path="/*" element={<Error />} />
          <Route path="/question" element={<Question />} />
          <Route path="/listBlog" element={<ListBlog />} />
          <Route path="/blog/:url" element={<BlogPost />} />{" "}
          <Route path="/blogDetail" element={<BlogPost />} />{" "}
          <Route path="/coming-soon" element={<PostShare />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <ChatBox />
        <Footer />
      </Suspense>
    </Provider>
  );
}

export default App;
