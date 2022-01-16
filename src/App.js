/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import RouterConfig from "./Router/Router";
import React from "react";
import { fetchProducts } from "./component/redux/action/ProductApiAction";
import { getCategorys } from "./component/redux/action/CategoryAction";
import { getDataUser } from "./component/redux/action/loginAction";
import { token } from "./constains/config";
import Footer from "./component/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(getCategorys());
    if (token) {
      dispatch(getDataUser(token));
    }
  }, []);

  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <Navbar></Navbar>
      <div className="main-content" id="panel">
        <Header />
        <RouterConfig></RouterConfig>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
