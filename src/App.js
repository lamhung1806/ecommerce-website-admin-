/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter as Router, useHistory } from "react-router-dom";
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

function App() {
  let history = useHistory();

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
      <Navbar></Navbar>
      <div className="main-content" id="panel">
        <Header />
        <RouterConfig></RouterConfig>
      </div>
    </Router>
  );
}

export default App;
