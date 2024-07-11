import { Route, Routes } from "react-router";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { lazy, Suspense } from "react";
import loadWithDelay from "./utils/loadWithDelay.js";
import { Spin } from "antd";
import Error from "./components/403.jsx";

const Home = lazy(() => loadWithDelay(() => import("./page/Home.jsx"), 2000));
function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Spin tip="Loading..."></Spin>}>
        <Routes>
          <Route element={<Home></Home>} path="/"></Route>
          <Route element={<Error></Error>} path="/*"></Route>
        </Routes>
      </Suspense>
    </Provider>
  );
}

export default App;
