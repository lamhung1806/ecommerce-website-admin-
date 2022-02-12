import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./Statiscial.css";
import {
  getBestSold,
  getQuantityWarning,
  getStatisticsMonth,
} from "../redux/action/StatisticAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import QuantityWarning from "./QuantityWarning";
import TopBestSold from "./TopBestSold";
import { getUserData } from "../redux/action/userAction";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Statistial() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Statistics by month",
        fontSize: 50,
      },
    },
  };

  const dispatch = useDispatch();
  let newsales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const statistialList = useSelector((state) => state.Statistic.statisticList);
  statistialList.length = 12;

  if (statistialList) {
    statistialList.forEach((statistialList) => {
      if (statistialList.month) {
        newsales[statistialList.month - 1] = statistialList.sales;
      }
    });
  }
  const quantityWarningList = useSelector(
    (state) => state.Statistic.quantityWarningList
  );
  const bestSoldList = useSelector((state) => state.Statistic.bestSoldList);
  const listUser = useSelector((state) => state.user.listUser);

  useEffect(() => {
    dispatch(getStatisticsMonth());
    dispatch(getQuantityWarning());
    dispatch(getBestSold());
    dispatch(getUserData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Total Sales",
        data: newsales,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(154, 209, 245, 0.479)",
      },
    ],
  };
  return (
    <div className="statistial container   ">
      <div className="d-flex flex-row row">
        <div className="statistial_month col col-8">
          <Line options={options} data={data} />
        </div>
        <QuantityWarning quantityWarningList={quantityWarningList} />
        <TopBestSold bestSoldList={bestSoldList} />
        <h2 className="text-primary mt-3 ml-8">
          Total User: <span className="ml-2">{listUser.length}</span>
        </h2>
      </div>
    </div>
  );
}
export default Statistial;
