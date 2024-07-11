import { Route, Routes } from "react-router";
import { useState } from "react";
import Header from "./components/Header.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { lazy, Suspense } from "react";
import loadWithDelay from "./utils/loadWithDelay.js";
import { Spin } from "antd";
import Slice from "./components/Slice.jsx";
import Error from "./components/403.jsx";
import Footer from "./components/Footer.jsx";
import ChatBox from "./components/ChatBox.jsx";
import History from "./page/History.jsx";
import Login from "./components/Login.jsx";

const Home = lazy(() => loadWithDelay(() => import("./page/Home.jsx"), 2000));
function App() {
  return (
    <Provider store={store}>
      <Header />
      <Suspense fallback={<Spin tip="Loading..."></Spin>}>
        <Routes>
          <Route element={<Home></Home>} path="/"></Route>
          <Route element={<History></History>} path="/history"></Route>
          <Route element={<Login></Login>} path="/login"></Route>
          <Route element={<Error></Error>} path="/*"></Route>
        </Routes>
        <ChatBox />
        <Footer />
      </Suspense>
    </Provider>
  );
}

export default App;
