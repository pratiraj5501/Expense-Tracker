import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

const AreaChart = () => {
  // this data is coming from state
  const data = useSelector((state) => state.expense);

  // creating the function for date format
  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split("/");
    return new Date(`${year} ${month} ${day}`);
  };

  const groupByMonth = (data) => {
    const groupedData = data.reduce((acc, expense) => {
      const date = formatDate(expense.date);
      const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`;
      if (!acc[monthKey]) {
        acc[monthKey] = {
          month: monthKey,
          totalAmount: 0,
          transactions: [],
        };
      }
      acc[monthKey].totalAmount += parseFloat(expense.amount);
      acc[monthKey].transactions.push(expense);
      return acc;
    }, {});

    // Convert the grouped data into arrays
    const months = Object.keys(groupedData);
    const totalAmounts = months.map((month) => groupedData[month].totalAmount);
    return { months, totalAmounts };
  };

  // Get the grouped data
  const { months, totalAmounts } = groupByMonth(data);

  // Define chart options
  const options = {
    chart: {
      type: "area",
      height: 350,
      zoom: {
        enabled: false,
      },
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
    xaxis: {
      categories: months, // Use the months as x-axis categories
    },
  };

  // Define the series for the chart
  const series = [
    {
      name: "Total Amount",
      data: totalAmounts, // Use the totalAmounts for the series data
    },
  ];

  return (
    <div id="chart">
      <Chart options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default AreaChart;
