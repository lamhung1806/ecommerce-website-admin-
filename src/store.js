import { applyMiddleware, createStore } from "redux";
import rootReducer from "./component/redux/reducer/rootReducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
