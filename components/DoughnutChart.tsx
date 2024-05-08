"use client"; //* Enforces more modern JavaScript execution on the client-side

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
//* Imports necessary components for creating charts from the 'chart.js' library

import { Doughnut } from "react-chartjs-2";
//* Imports the Doughnut chart component specifically from the 'react-chartjs-2' library

ChartJS.register(ArcElement, Tooltip, Legend); //* Registers chart elements to be used by ChartJS instances

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  //* Defines a React component
  const data = {
    //* Defines the data structure for the doughnut chart
    datasets: [
      {
        label: "Banks", //* Label for this dataset (may not be used)
        data: [1250, 2500, 3750], //* Numerical data points for each segment
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"], //* Background colors for segments
      },
    ],
    labels: ["Bank 1", "Bank 2", "Bank 3"], //* Labels for each segment of the chart
  };

  return (
    <Doughnut //* Renders a Doughnut chart component from the 'react-chartjs-2' library
      data={data} //* Provides the configured data to the chart
      options={{
        //* Configures chart display options
        cutout: "60%", //* Sets the inner hole size of the doughnut chart
        plugins: {
          legend: {
            display: false, //* Disables the display of the chart legend
          },
        },
      }}
    />
  );
};

export default DoughnutChart; //* Makes the DoughnutChart component exportable
