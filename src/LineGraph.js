import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
} from "chart.js";
import "chartjs-adapter-date-fns";

// Register necessary chart components
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend
);

// Chart options
const options = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return numeral(context.parsed.y).format("+0,0");
        },
      },
    },
  },
  scales: {
    x: {
      type: "time",
      time: {
        unit:"month",
        tooltipFormat: "MMM d, yyyy",
        displayFormats:{
          month: "MMM",
        }
      },
      ticks: {
        color: "#666",
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        callback: function (value) {
          return numeral(value).format("0a");
        },
        color: "#666",
      },
    },
  },
};

// Helper function to format chart data
const buildChartData = (data, casesType = "cases") => {
  const chartData = [];
  let lastDataPoint;

  if (!data || !data[casesType]) return chartData;

  for (let date in data[casesType]) {
    if (lastDataPoint !== undefined && data[casesType][date] !== undefined) {
      
      const newDataPoint = {
         x: new Date(date),
        y: data[casesType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }

  return chartData;
};

// LineGraph Component
function LineGraph({ casesType = "cases" ,...props}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120");
      const result = await response.json();
      const chartData = buildChartData(result, casesType);
      setData(chartData);
    };

    fetchData();
  }, [casesType]);

  return (
    <div className={props.className} style={{ height: "400px" }}>
      {data?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                label: `Worldwide ${casesType}`,
                backgroundColor: "rgba(204, 16, 52, 0.5)",
                borderColor: "#CC1034",
                data: data,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
}

export default LineGraph;
