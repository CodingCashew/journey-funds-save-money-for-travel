import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { getIncomeTotals } from '../helpers/IncomeList';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const IncomeBarChart = ({ income }: any) => {
  console.log('income in bar chart: ', income);
  const incomeTotals = getIncomeTotals(income);
  const labels = Object.keys(incomeTotals);
  const amounts = Object.keys(incomeTotals);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Income',
        data: amounts,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Income Bar Chart',
        font: {
          size: 20
        }
      },
      legend: {
        display: true,
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default IncomeBarChart;