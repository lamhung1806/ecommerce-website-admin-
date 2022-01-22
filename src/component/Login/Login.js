/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { url } from "../../constains/config";
import { notifyError, notifySuccess } from "../../constains/msg";
import { getDataUser } from "../redux/action/loginAction";
import "./style.css";

function Login() {
  const dispatch = useDispatch();
  let history = useHistory();
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  const getToken = (data) => (dispatch) => {
    axios
      .post(`${url}/Accounts/Login`, data)
      .then((response) => {
        localStorage.setItem("adtoken", response.data);
        dispatch(getDataUser(response.data));
        notifySuccess();
        setTimeout(() => {
          history.push("/ProductManagement");
          window.location.reload();
        }, 500);
      })
      .catch(() => {
        notifyError();
      });
  };
  const handleLogin = () => {
    dispatch(getToken(dataLogin));
  };

  return (
    <div>
      {/* Page content */}
      <div className="container  form_Login">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7">
            <div className="card bg-secondary border-0 mb-0">
              <div className="card-header bg-transparent pb-5">
                <div className="text-muted text-center mt-2 mb-3">
                  <small>Sign in with</small>
                </div>
                <div className="btn-wrapper text-center">
                  <a href="#" className="btn btn-neutral btn-icon">
                    <span className="btn-inner--icon">
                      <img src="../assets/img/icons/common/github.svg" />
                    </span>
                    <span className="btn-inner--text">Github</span>
                  </a>
                  <a href="#" className="btn btn-neutral btn-icon">
                    <span className="btn-inner--icon">
                      <img src="../assets/img/icons/common/google.svg" />
                    </span>
                    <span className="btn-inner--text">Google</span>
                  </a>
                </div>
              </div>
              <div className="card-body px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Or sign in with credentials</small>
                </div>
                <form role="form">
                  <div className="form-group mb-3">
                    <div className="input-group input-group-merge input-group-alternative">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="ni ni-email-83" />
                        </span>
                      </div>
                      <input
                        className="form-control"
                        placeholder="Email"
                        type="email"
                        value={dataLogin.email}
                        onChange={(e) =>
                          setDataLogin({ ...dataLogin, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group input-group-merge input-group-alternative">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="ni ni-lock-circle-open" />
                        </span>
                      </div>
                      <input
                        className="form-control"
                        placeholder="Password"
                        type="password"
                        value={dataLogin.password}
                        onChange={(e) =>
                          setDataLogin({
                            ...dataLogin,
                            password: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id=" customCheckLogin"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor=" customCheckLogin"
                    >
                      <span className="text-muted">Remember me</span>
                    </label>
                  </div>
                  <div className="text-center">
                    <button
                      onClick={(e) => handleLogin(e)}
                      type="button"
                      className="btn btn-primary my-4"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6">
                <a href="#" className="text-light">
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="col-6 text-right">
                <a href="#" className="text-light">
                  <small>Create new account</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
