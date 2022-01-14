const categoryInitialState = {
  dataCategory: [],
  dataUpdate: [],
};
const category = (state = categoryInitialState, action) => {
  switch (action.type) {
    case "GET_CATEGORY": {
      return {
        ...state,
        dataCategory: action.payload,
      };
    }
    case "ADD_CATEGORY": {
      return {
        ...state,
      };
    }
    case "DELETE_CATEGORY": {
      return {
        ...state,
      };
    }
    case "GET_A_CATEGORY": {
      return {
        ...state,
        dataUpdate: action.payload,
      };
    }
    case "UPDATE_CATEGORY": {
      return {
        ...state,
      };
    }
    case "RESET_FORM_CATEGORY": {
      return {
        ...state,
        dataUpdate: [],
      };
    }
    default:
      return state;
  }
};
export default category;
