import axios from "axios";
import { token, url } from "../../../constains/config";
import { notifyError, notifySuccess } from "../../../constains/msg";
import callApi from "../../../utils/callApi";

export const getData = (data) => {
  return {
    type: "GET_API",
    payload: data,
  };
};
export const addProduct = (data) => {
  return {
    type: "ADD_PRODUCT",
    payload: data,
  };
};
export const deleteProduct = (data) => {
  return {
    type: "PRODUCT_DELETE",
    payload: data,
  };
};
export const updateProduct = () => {
  return {
    type: "UPDATE_PRODUCT",
  };
};
export const getAProduct = (data) => {
  return {
    type: "GET_A_PRODUCT",
    payload: data,
  };
};
export const resetForm = (data) => {
  return {
    type: "RESET_FORM",
    payload: data,
  };
};

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await callApi("Products/GetAll", "get", null);
    dispatch(getData(response.data));
  } catch (err) {
    console.log(err);
    dispatch({ type: "ERRO", message: err });
  }
};
export const deleteProducts = (id) => (dispatch) => {
  axios
    .delete(`${url}/Products/Delete/${id}`, {
      headers: { authorization: `Bearer ${token}` },
    })
    .then(() => {
      dispatch(deleteProduct());
      dispatch(fetchProducts());
      notifySuccess();
    })

    .catch(() => {
      notifyError();
    });
};
export const searchProductAction = (data) => {
  return {
    type: "SEARCH_PRODUCT",
    payload: data,
  };
};

export const addProducts = (data) => (dispatch) => {
  axios
    .post(`${url}/Products/Create`, data, {
      headers: { authorization: `Bearer ${token}` },
    })
    .then(() => {
      dispatch(addProduct());
      dispatch(fetchProducts());
      notifySuccess();
    })

    .catch(() => {
      notifyError();
    });
};

export const getAProducts = (id) => (dispatch) => {
  axios
    .get(`${url}/Products/GetById/${id}`, null)
    .then((response) => {
      dispatch(getAProduct(response.data));
    })

    .catch((err) => console.log(err));
};
export const updateProducts = (dataProduct) => (dispatch) => {
  axios
    .put(`${url}/Products/Update`, dataProduct, {
      headers: { authorization: `Bearer ${token}` },
    })
    .then(() => {
      dispatch(updateProduct());
      dispatch(fetchProducts());
      notifySuccess();
    })

    .catch(() => {
      notifyError();
    });
};
export const searchProducts = (data) => (dispatch) => {
  axios
    .get(`${url}/Products/SearchByName/${data}`, null, {
      headers: { authorization: `Bearer ${token}` },
    })
    .then((response) => {
      dispatch(searchProductAction(response.data));
    })

    .catch((err) => {
      console.log(err);
    });
};
