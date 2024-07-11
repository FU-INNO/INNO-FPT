import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Provider } from "react-redux";
import store from "./redux/store.js";
import { lazy, Suspense } from "react";
import loadWithDelay from "./utils/loadWithDelay.js";
import { Spin } from "antd";
import ChatBox from "./components/ChatBox.jsx";
import History from "./page/History.jsx";
import Question from "./page/Question.jsx";
import ListBlog from "./page/ListBlog.jsx";
import BlogDetail from "./page/DetailBlog.jsx";
import Game from "./components/GameSaveEnviroment.jsx";

const Home = lazy(() => loadWithDelay(() => import("./page/Home.jsx"), 2000));
function App() {
  return (
    <Provider store={store}>
      <Header />
      <Suspense fallback={<Spin tip="Loading..."></Spin>}>
        <Routes>
          <Route element={<Home></Home>} path="/"></Route>
          <Route element={<History></History>} path="/history"></Route>
          <Route element={<Question></Question>} path="/question"></Route>
          <Route element={<ListBlog></ListBlog>} path="/listBlog"></Route>
          <Route element={<BlogDetail></BlogDetail>} path="/blogDetail"></Route>
          <Route element={<Game></Game>} path="/game"></Route>
        </Routes>
        <ChatBox />
      </Suspense>
      <Footer />
    </Provider>
  );
}

export default App;

//use reactjs and antdesign to dev component like this image