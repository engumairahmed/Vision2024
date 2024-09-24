import React from 'react';
import Chart from 'react-apexcharts';


export const ChartsComponent = () => {
  // Bar chart options and data
  const barOptions = {
    chart: { id: 'bar-chart' },
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] }
  };
  const barSeries = [{ name: 'Sales', data: [30, 40, 45, 50, 49] }];


  // Line chart options and data
  const lineOptions = {
    chart: { id: 'line-chart' },
    xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }
  };
  const lineSeries = [{ name: 'Visitors', data: [10, 30, 40, 20, 50] }];

  // Temperature chart options and data
  const tempOptions = {
    series: [
      { name: "High - 2013", data: [28, 29, 33, 36, 32, 32, 33] },
      { name: "Low - 2013", data: [12, 11, 14, 18, 17, 13, 13] }
    ],
    chart: {
      height: 350,
      type: 'line',
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2
      },
      zoom: { enabled: false },
      toolbar: { show: false }
    },
    colors: ['#77B6EA', '#545454'],
    dataLabels: { enabled: true },
    stroke: { curve: 'smooth' },
    title: { text: 'Average High & Low Temperature', align: 'left' },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      }
    },
    markers: { size: 1 },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      title: { text: 'Month' }
    },
    yaxis: {
      title: { text: 'Temperature' },
      min: 5,
      max: 40
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5
    }
  };
  const areaOptions = {
    series: [{
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth' },
    xaxis: {
      type: 'datetime',
      categories: [
        "2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z"
      ]
    },
    tooltip: {
      x: { format: 'dd/MM/yy HH:mm' }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 p-5">
      <div className="bg-white p-4 rounded shadow">
        <Chart options={barOptions} series={barSeries} type="bar" height={300} />
      </div>
      <div className="bg-white p-4 rounded shadow">
        <Chart options={areaOptions} series={areaOptions.series} type="area" height={350} />
      </div>
      <div className="bg-white p-4 rounded shadow">
        <Chart options={lineOptions} series={lineSeries} type="line" height={300} />
      </div>
      <div className="bg-white p-4 rounded shadow">
        <Chart options={tempOptions} series={tempOptions.series} type="line" height={350} />
      </div>
    </div>
  );
};