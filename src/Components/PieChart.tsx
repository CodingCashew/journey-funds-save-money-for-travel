import React from "react";
import chroma from "chroma-js";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { getExpenseTotals } from "../helpers/ExpenseList";

Chart.register(ArcElement, Tooltip, Legend);

// TODO: Make this dynamic instead of duplicating code
function ExpensePieChart({ expenses }: any) {
  const expenseTotals = getExpenseTotals(expenses);
  const labels = Object.keys(expenseTotals);
  const amounts = Object.values(expenseTotals);

  const colors = chroma.scale("Set3").mode("lch").colors(labels.length);

  const data = {
    labels: labels,
    datasets: [
      {
        backgroundColor: colors,
        data: amounts,
      },
    ],
  };
  return (
    <div>
      <h4>Expenses</h4>
      <Pie data={data} />
    </div>
  );
}

export default ExpensePieChart;
