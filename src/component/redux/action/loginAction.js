import { viewToken } from "../../../constains/config";

export const getDataAction = (data) => {
  return {
    type: "GET_DATA_USER",
    payload: data,
  };
};
export const getDataUser = (data) => (dispatch) => {
  let dataUser = {};
  const decoded = JSON.parse(window.atob(data.split(".")[1]));
  dataUser.id = decoded[viewToken.Id];
  dataUser.email = decoded[viewToken.email];
  dataUser.role = decoded[viewToken.role];
  dataUser.userName = decoded[viewToken.username];
  dispatch(getDataAction(dataUser));
  localStorage.setItem("userAdmin", JSON.stringify(dataUser));
};
