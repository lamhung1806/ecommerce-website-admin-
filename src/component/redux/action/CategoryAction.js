import axios from "axios";
import callApi from "../../../utils/callApi";
import { token } from "../../../constains/config";
import { url } from "../../../constains/config";

export const getCategory = (data) => {
  return {
    type: "GET_CATEGORY",
    payload: data,
  };
};
export const addCategory = (data) => {
  return {
    type: "ADD_CATEGORY",
    payload: data,
  };
};
export const deleteCategory = (data) => {
  return {
    type: "DELETE_CATEGORY",
    payload: data,
  };
};
export const getACategory = (data) => {
  return {
    type: "GET_A_CATEGORY",
    payload: data,
  };
};
export const updateCategory = (data) => {
  return {
    type: "UPDATE_CATEGORY",
    payload: data,
  };
};
export const resetFormCategory = (data) => {
  return {
    type: "RESET_FORM_CATEGORY",
    payload: data,
  };
};

export const getCategorys = (data) => (dispatch) => {
  callApi("Categories/GetAll", "get", null, data, {
    headers: { authorization: `Bearer ${token}` },
  }).then((response) => {
    dispatch(getCategory(response.data));
  });
};
export const addCategorys = (data) => (dispatch) => {
  axios
    .post("https://localhost:44305/api/Categories/Create", data, {
      headers: { authorization: `Bearer ${token}` },
    })
    .then(() => {
      dispatch(addCategory());
      dispatch(getCategorys());
    })
    .catch((error) => {
      console.log(error);
    });
};
export const deleteCategorys = (id) => (dispatch) => {
  axios
    .delete(`https://localhost:44305/api/Categories/Delete/ ${id}`, {
      headers: { authorization: `Bearer ${token}` },
    })
    .then(() => {
      dispatch(deleteCategory());
      dispatch(getCategorys());
    })
    .catch((err) => console.log(err));
};
export const getACategorys = (data) => (dispatch) => {
  axios
    .get(`${url}/Categories/GetById/${data}`, {
      headers: { authorization: `Bearer ${token}` },
    })
    .then((response) => {
      dispatch(getACategory(response.data));
    })
    .catch((err) => console.log(err));
};
export const updateACategorys = (data) => (dispatch) => {
  axios
    .put(`https://localhost:44305/api/Categories/Update`, data, {
      headers: { authorization: `Bearer ${token}` },
    })
    .then(() => {
      dispatch(updateCategory());
      dispatch(getCategorys());
    })
    .catch((err) => console.log(err));
};
