import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Segment } from "semantic-ui-react";
import { useSelector } from "react-redux";
import _ from "underscore";
import "./style.css";

const StackChart = () => {
  const { data } = useSelector((s) => s.student);

  let arr = [];
  for (let x in data) {
    data[x].data.map((val) => arr.push(val.value));
  }

  let finalData = {};

  for (let index = 0; index <= 10; index++) {
    finalData[index] = 0;
  }

  arr.map((val) => {
    for (let index = 0; index <= 10; index++) {
      if (val <= index + 1 && val >= index) {
        finalData[index] += 1;
        break;
      }
    }
  });
  arr = [];
  for (let x in finalData) {
    arr.push(finalData[x]);
  }
  const state = {
    series: [
      {
        name: "a",
        data: arr,
      }
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
        ],
      },
    },
  };

  return (
    <Segment className="nd">
      <Chart
        width="100%"
        options={state.options}
        series={state.series}
        type="area"
        height="90%"
      />
    </Segment>
  );
};

export default StackChart;
