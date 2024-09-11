import React from "react";
import Chart from "react-apexcharts";

const GraphWrapper = () => {
  const options = {
    series: [44, 55, 13, 33], // This is just a placeholder, you should adjust it as needed
    chart: {
      width: 380,
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: "right",
      offsetY: 0,
      height: 230,
    },
  };

  // Define the series here
  const series = [44, 55, 13, 33]; // Ensure this matches the data you want to display

  return (
    <div id="chart">
      <Chart options={options} series={series} type="donut" width="380" />
    </div>
  );
};

export default GraphWrapper;
