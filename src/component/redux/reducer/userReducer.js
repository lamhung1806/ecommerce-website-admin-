const userInitialState = {
  listUser: [],
  idUser: "",
  listRoles: [],
};
const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case "GET_USER_DATA":
      return {
        ...state,
        listUser: action.payload,
      };
    case "GET_ID_USER_DATA":
      return {
        ...state,
        idUser: action.payload,
      };
    case "GET_ROLES_USER":
      return {
        ...state,
        listRoles: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
