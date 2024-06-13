import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Chart = () => {
  const [series] = useState([
    {
      name: "Cash Flow",
      data: [
        -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, 3.88, 13.07, 5.8, 2, 7.37,
        8.1, 13.57, 15.75, 17.1, 19.8,
      ],
    },
  ]);

  const [options] = useState({
    chart: {
      type: "bar",
      height: 350,
    },
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: [
            {
              from: -100,
              to: -46,
              color: "#F15B46",
            },
            {
              from: -45,
              to: 0,
              color: "#FEB019",
            },
          ],
        },
        columnWidth: "80%",
      },
    },
    dataLabels: {
      enabled: false,
    },

    yaxis: {
      labels: {
        show: false, // if true, grid lines appears
      },
      title: {
        text: "",
      },
      labels: {
        formatter: function (y) {
          return y.toFixed(0) + "%";
        },
      },
    },
    grid: {
      show: false, // you can either change hear to disable all grids
      xaxis: {
        lines: {
          show: false, //or just here to disable only x axis grids
        },
      },
      yaxis: {
        lines: {
          show: false, //or just here to disable only y axis
        },
      },
    },
    xaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      type: "datetime",

      categories: [
        "2012-09-01",
        "2012-10-01",
        "2012-11-01",
        "2012-12-01",
        "2013-01-01",
        "2013-02-01",
        "2013-03-01",
        "2013-04-01",
        "2013-05-01",
        "2013-06-01",
        "2013-07-01",
        "2013-08-01",
        "2013-09-01",
      ],
      labels: {
        rotate: -90,
      },
    },
  });

  return (
    <div>
      <div>
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Chart;
