import { combineReducers } from "redux";
import Api from "./ProductApiReducer";
import statusFormReducer from "./statusFormReducer";
import category from "./categoryDeducer";
import oder from "./oderReducer";
import login from "./loginReducer";
import userReducer from "./userReducer";
import Statistic from "./StatisticReducer";

const rootReducer = combineReducers({
  apiProductAll: Api,
  statusFormReducer: statusFormReducer,
  category: category,
  oder: oder,
  login: login,
  user: userReducer,
  Statistic: Statistic,
});

export default rootReducer;
