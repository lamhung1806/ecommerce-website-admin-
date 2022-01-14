const loginInitialState = {
  dataUser: [],
};
const login = (state = loginInitialState, action) => {
  switch (action.type) {
    case "GET_DATA_USER":
      return {
        ...state,
        dataUser: action.payload,
      };

    default:
      return state;
  }
};
export default login;
