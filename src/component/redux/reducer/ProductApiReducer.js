const ApiInitialState = {
  dataProductAll: [],
  dataAProduct: [],
};
const Api = (state = ApiInitialState, action) => {
  switch (action.type) {
    case "GET_API":
      return {
        ...state,
        dataProductAll: action.payload,
      };
    case "ADD_PRODUCT":
      return {
        ...state,
      };
    case "PRODUCT_DELETE":
      return {
        ...state,
      };
    case "GET_A_PRODUCT":
      return {
        ...state,
        dataAProduct: action.payload,
      };
    case "UPDATE_PRODUCT":
      return {
        ...state,
      };
    case "RESET_FORM":
      return {
        ...state,
        dataAProduct: [],
      };
    default:
      return state;
  }
};
export default Api;
