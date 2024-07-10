import { Route, Routes } from "react-router";
import Header from "./page/Home.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { lazy, Suspense } from "react";
import loadWithDelay from "./utils/loadWithDelay.js";
import { Spin } from "antd";
import Slice from "./components/Slice.jsx";

const Home = lazy(() => loadWithDelay(() => import("./page/Home.jsx"), 2000));
function App() {
  return (
    <Provider store={store}>
      <Header />
      {/* <Slice /> */}
      {/* <Suspense fallback={<Spin tip="Loading..."></Spin>}>
        <Routes>
          <Route element={<Home></Home>} path="/"></Route>
        </Routes>
      </Suspense> */}
    </Provider>
  );
}

export default App;
