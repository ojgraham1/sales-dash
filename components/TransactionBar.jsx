import React from 'react';
import { Bar } from 'react-chartjs-2';

const RecentSalesChart = ({ salesData }) => {

  const labels = salesData.map(sale => sale.date);
  const salesAmounts = salesData.map(sale => sale.amount);


  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Sales Amount',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: salesAmounts,
      },
    ],
  };


  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Recent Sales Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RecentSalesChart;
