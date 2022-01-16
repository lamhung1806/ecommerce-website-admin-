import axios from "axios";
import { token, url } from "../../../constains/config";
import { notifyError, notifySuccess } from "../../../constains/msg";

export const getOderAction = (data) => {
  return {
    type: "GET_ODER",
    payload: data,
  };
};
export const getOderByIdAction = (data) => {
  return {
    type: "GET_ODER_BY_ID",
    payload: data,
  };
};
export const oderConfirmAction = (data) => {
  return {
    type: "ODER_CONFIRM",
    payload: data,
  };
};
export const oderCancelAction = (data) => {
  return {
    type: "ODER_CANCEL",
    payload: data,
  };
};

export const getOder = () => (dispatch) => {
  axios
    .get(`${url}/Orders/GetAll`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      dispatch(getOderAction(response.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getOderById = (data) => (dispatch) => {
  axios
    .get(`${url}/Orders/GetById/${data}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      dispatch(getOderByIdAction(response.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
export const oderConfirm = (data) => (dispatch) => {
  axios
    .put(`${url}/Orders/Update/${data}`, null, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(() => {
      notifySuccess();
      dispatch(oderConfirmAction());
      dispatch(getOderById(JSON.parse(localStorage.getItem("idOder"))));
      dispatch(getOderAction());
    })
    .catch(() => {
      notifyError();
    });
};
export const oderCancel = (data) => (dispatch) => {
  axios
    .put(`${url}/Orders/Reject/${data}`, null, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(() => {
      notifySuccess();
      dispatch(oderCancelAction());
      dispatch(getOderById(JSON.parse(localStorage.getItem("idOder"))));
      dispatch(getOderAction());
    })
    .catch((err) => {
      console.log(err);
    });
};
