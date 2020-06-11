import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import { Segment } from "semantic-ui-react";
import "./style.css";

const PopChart = () => {
  const { data } = useSelector((state) => state.student);
  
  const options = {
    chart: {
      height: 450,
      width: "100%",
      type: "bar",
      background: "#FFFFFF",
      foreColor: "#333",
    },
    series: [
      {
        // cluster
        data: [],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          },
        },
      },
      colors: ["#38ef7d", "#fd1d1d", "#1FA2FF","#F9D423"],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        // tên dòng x
        categories: [
        ],
        labels: {
          style: {
            colors: ["#F44336", "#E91E63", "#9C27B0"],
            fontSize: "12px",
          },
        },
      },
    },
  };
  const generateCluster = () => {
    if (data) {
      data.forEach((val) => {
        options.series[0].data.push(val.data.length);
        options.options.xaxis.categories.push(`${val.cluster}`);
      });
    }
  };
  generateCluster();
  return (
    <Segment>
      <Chart
        options={options.options}
        series={options.series}
        type="bar"
        height="450"
        width="100%"
      />
    </Segment>
  );
};

export default PopChart;
