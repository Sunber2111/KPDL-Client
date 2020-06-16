import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

const PieChart = () => {
  const { data } = useSelector((state) => state.student);

  let options = {
    series: [],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: [],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  const generateCluster = () => {
    if (data) {
      data.forEach((val) => {
        options.series.push(val.data.length);
        options.options.labels.push(`${val.cluster}`);
      });
    }
  };
  generateCluster();
  return (
    <div className="mx-auto">
      <Chart
        options={options.options}
        series={options.series}
        type="pie"
        width="100%"
      />
    </div>
  );
};

export default PieChart;
