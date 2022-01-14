export const statusForm = (data) => {
  return {
    type: "GET_STATUS",
    payload: data,
  };
};
export const changeStatusForm = (data) => {
  return {
    type: "CHANGE_STATUS",
  };
};
