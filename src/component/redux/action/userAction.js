import axios from "axios";
import { url } from "../../../constains/config";
import { notifyError, notifySuccess } from "../../../constains/msg";
export const getUerDataAction = (data) => {
  return {
    type: "GET_USER_DATA",
    payload: data,
  };
};
export const getIdUerDataAction = (data) => {
  return {
    type: "GET_ID_USER_DATA",
    payload: data,
  };
};
export const getRolesUerAction = (data) => {
  return {
    type: "GET_ROLES_USER",
    payload: data,
  };
};

export const getUserData = () => async (dispatch) => {
  try {
    const response = await axios.get(`${url}/Accounts/GetAllUsers`);
    dispatch(getUerDataAction(response.data));
  } catch {
    console.log("lỗi");
  }
};
export const getRolesUser = (data) => async (dispatch) => {
  try {
    const response = await axios.get(`${url}/Accounts/GetRoles/${data}`);
    dispatch(getRolesUerAction(response.data));
    dispatch(getIdUerDataAction(data));
  } catch {
    console.log("lỗi");
  }
};
export const UpdateRolesUser = (data) => (dispatch) => {
  axios
    .put(`${url}/Accounts/UpdateRoles/${data.id}`, data.role)
    .then(() => {
      notifySuccess();
      dispatch(getUserData());
    })
    .catch(() => {
      notifyError();
    });
};
