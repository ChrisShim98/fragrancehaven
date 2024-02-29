import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
); 

const BarChartAnalytics = ({
  values = [],
  label,
  periodLabel,
  backgroundColor,
}) => {
  const [dataset, setDataset] = useState([]);

  let options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
    },
  };

  let labels = periodLabel;

  useEffect(() => {
    let datasetHold = [];

    for (let i = 0; i < values.length; i++) {
      datasetHold.push({
        label: label[i],
        data: values[i].map((value, index) => values[i][index]),
        backgroundColor: backgroundColor[i],
      });
    }
    setDataset(datasetHold);
  }, [values]);

  let data = {
    labels,
    datasets: dataset,
  };
  return dataset.length !== 0 && <div className="w-3/4 flex justify-center"><Bar options={options} data={data} /></div>;
};

export default BarChartAnalytics;
