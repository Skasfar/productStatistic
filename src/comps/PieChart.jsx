import React, { useEffect } from "react";
import Chart from "chart.js/auto";

const PieChart = () => {
  useEffect(() => {
    const dataPie = {
      labels: ["JavaScript", "Python", "Ruby"],
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100],
          backgroundColor: [
            "rgb(133, 105, 241)",
            "rgb(164, 101, 241)",
            "rgb(101, 143, 241)",
          ],
          hoverOffset: 4,
        },
      ],
    };

    const configPie = {
      type: "pie",
      data: dataPie,
      options: {},
    };

    new Chart(document.getElementById("chartPie"), configPie);
  }, []);

  return (
    <div className="overflow-hidden rounded-lg shadow-lg">
      <div className="bg-neutral-50 py-3 px-5 dark:bg-neutral-700 dark:text-neutral-200">
        Pie chart
      </div>
      <canvas className="p-10" id="chartPie"></canvas>
    </div>
  );
};

export default PieChart;
