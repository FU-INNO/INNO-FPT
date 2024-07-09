import { Route, Routes } from "react-router";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { lazy, Suspense } from "react";
import loadWithDelay from "./utils/loadWithDelay.js";
const Home = lazy(() => loadWithDelay(() => import("./page/Home"), 2000));
function App() {
  return (
    <Provider store={store}>
      <Header />
      <Suspense fallback={<p className="alert">Loading...</p>}>
        <Routes>
          <Route element={<Home></Home>} path="/"></Route>
        </Routes>
      </Suspense>
    </Provider>
  );
}

export default App;
