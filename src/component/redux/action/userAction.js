import axios from "axios";
import { token, url } from "../../../constains/config";
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
export const searchUserAction = (data) => {
  return {
    type: "SEARCH_USER",
    payload: data,
  };
};

export const getUserData = () => (dispatch) => {
  axios
    .get(`${url}/Accounts/GetAllUsers`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      dispatch(getUerDataAction(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getRolesUser = (data) => async (dispatch) => {
  try {
    const response = await axios.get(`${url}/Accounts/GetRoles/${data}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(getRolesUerAction(response.data));
    dispatch(getIdUerDataAction(data));
  } catch {
    console.log("lỗi");
  }
};
