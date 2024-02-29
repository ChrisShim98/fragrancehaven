import React, { useState, useEffect }  from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChartAnalytics = ({
  values = [],
  label,
  periodLabel,
  backgroundColor,
}) => {
  let labels = periodLabel;

  let data = {
    labels: periodLabel,
    datasets: [{
        label: label,
        data: values,
        backgroundColor: backgroundColor,
      }]
  };

  let options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
      },
    },
  };
  return values.length > 0 && <div className="w-1/2 flex justify-center"><Doughnut data={data} options={options} /></div>;
};

export default DoughnutChartAnalytics;
