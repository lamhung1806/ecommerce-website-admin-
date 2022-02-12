const StatisticInitialState = {
  statisticList: [],
  quantityWarningList: [],
  bestSoldList: [],
};
const Statistic = (state = StatisticInitialState, action) => {
  switch (action.type) {
    case "GET_STATISTICS_MONTH":
      return {
        ...state,
        statisticList: action.payload,
      };
    case "GET_QUANTITY_WARNING":
      return {
        ...state,
        quantityWarningList: action.payload,
      };
    case "GET_BEST_SOLD":
      return {
        ...state,
        bestSoldList: action.payload,
      };

    default:
      return state;
  }
};
export default Statistic;
