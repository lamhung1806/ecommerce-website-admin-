const statusFormReducerInitialState = {
  status: false,
};
const statusFormReducer = (state = statusFormReducerInitialState, action) => {
  switch (action.type) {
    case "GET_STATUS":
      return state;
    case "CHANGE_STATUS":
      return {
        ...state,
        status: !state.status,
      };
    default:
      return state;
  }
};
export default statusFormReducer;
