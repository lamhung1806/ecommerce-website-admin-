/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { token, url } from "../../constains/config";
import { notifyError, notifySuccess } from "../../constains/msg";
import { getRolesUerAction, getUserData } from "../redux/action/userAction";

function UpdateRole() {
  const idUser = useSelector((state) => state.user.idUser);
  const dispatch = useDispatch();
  const listRoles = useSelector((state) => state.user.listRoles);
  let history = useHistory();
  const [data, setdata] = useState();

  const handleChange = (item) => {
    item.selected = !item.selected;
    setdata({
      id: idUser,
      role: listRoles,
    });
  };
  useEffect(() => {
    return dispatch(getRolesUerAction([]));
  }, []);

  const handlerUpdate = () => {
    if (data) dispatch(UpdateRolesUser(data));
    else {
      history.goBack();
    }
  };
  const UpdateRolesUser = (data) => (dispatch) => {
    axios
      .put(`${url}/Accounts/UpdateRoles/${data.id}`, data.role, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then(() => {
        notifySuccess();
        dispatch(getUserData());
        history.goBack();
      })
      .catch(() => {
        notifyError();
      });
  };
  return (
    <React.Fragment>
      <div style={{ margin: "50px 0 0 0" }}></div>
      <div className=" main container mt--6">
        <div className="row">
          <div className="col">
            <div className="card">
              {/* Card header */}
              <div className="card-header border-0">
                <h3 className="mb-0 text-center">Roles</h3>
              </div>
            </div>
            <div className="form">
              {listRoles.map((item, index) => (
                <div key={index} className="form-check">
                  <input
                    onChange={() => handleChange(item)}
                    className="form-check-input"
                    type="checkbox"
                    defaultChecked={item.selected ? true : false}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    {item.roleName}
                  </label>
                </div>
              ))}
              <button
                onClick={handlerUpdate}
                className="btn btn-primary btn-sm"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*   
        {statusForm && <ProductForm />} */}
    </React.Fragment>
  );
}

export default UpdateRole;
