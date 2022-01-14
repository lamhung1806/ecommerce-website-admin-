const oderInitialState = {
  oderData: [],
  oderDetailData: [],
};
const oder = (state = oderInitialState, action) => {
  switch (action.type) {
    case "GET_ODER":
      return {
        ...state,
        oderData: action.payload,
      };
    case "GET_ODER_BY_ID":
      return {
        ...state,
        oderDetailData: action.payload,
      };
    case "ODER_CONFIRM":
      return {
        ...state,
      };
    case "ODER_CANCEL":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default oder;
