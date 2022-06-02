import { Provider } from "react-redux";
import store from "./data/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./router";
import Loader from "./components/common/Loader";
import Navbar from "./components/Navbar";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
        <Loader />
        <Navbar />
          <Routes>
            {routes.map(({ Component, link }) => (
              <Route key={link} exact path={link} element={<Component />} />
            ))}
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
