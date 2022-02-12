import axios from "axios";
import { token, url } from "../../../constains/config";

export const getStatisticsAction = (data) => ({
  type: "GET_STATISTICS_MONTH",
  payload: data,
});
export const getQuantityWarningAction = (data) => ({
  type: "GET_QUANTITY_WARNING",
  payload: data,
});
export const getBestSoldAction = (data) => ({
  type: "GET_BEST_SOLD",
  payload: data,
});
export const getStatisticsMonth = () => async (dispatch) => {
  try {
    const response = await axios.get(`${url}/Products/Statistical`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(getStatisticsAction(response.data));
  } catch (err) {
    console.log(err);
  }
};
export const getQuantityWarning = () => async (dispatch) => {
  try {
    const response = await axios.get(`${url}/Products/GetQuantityWarning`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(getQuantityWarningAction(response.data));
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};
export const getBestSold = () => async (dispatch) => {
  try {
    const response = await axios.get(`${url}/Products/GetBestSold`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(getBestSoldAction(response.data));
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};
