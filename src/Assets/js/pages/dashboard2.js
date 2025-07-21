/* eslint-disable */
//Project:	Deposito Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)

// Wait for ApexCharts to load
document.addEventListener('DOMContentLoaded', function() {
  if (typeof ApexCharts === 'undefined') {
    console.error('ApexCharts is not loaded. Please include the ApexCharts library.');
    return;
  }

  'use strict';

  // Initialize charts only if ApexCharts is available
  try {
    // Top Cities Chart
    const topCitiesOptions = {
      series: [{
        data: [48, 31, 42, 17, 41, 25, 54, 20]
      }],
      chart: {
        type: 'line',
        height: 250,
        toolbar: {
          show: false,
        }
      },
      stroke: {
        curve: 'smooth'
      },
      grid: {
        show: true,
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#6cbbfa'],
      xaxis: {
        categories: ['Mimai', 'New York', 'Washington', 'California', 'Chicago', 'Tampa', 'Orlando', 'Naples'],
        labels: {
          show: true,
        },
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
        },
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val + "%"
          }
        },
        marker: {
          show: false,
        },
      }
    };

    const topCitiesChart = new ApexCharts(document.querySelector("#topcities"), topCitiesOptions);
    topCitiesChart.render();

    // Recent Trends Chart
    const recentTrendOptions = {
      // ... (rest of the options remain the same)
    };

    const recentTrendChart = new ApexCharts(document.querySelector("#recent_trend"), recentTrendOptions);
    recentTrendChart.render();

    // Revenue Chart
    const revenueOptions = {
      // ... (rest of the options remain the same) 
    };

    const revenueChart = new ApexCharts(document.querySelector("#revenue4"), revenueOptions);
    revenueChart.render();

    // SlimScroll initialization
    if ($.fn.slimScroll) {
      $('.inner-user-div3').slimScroll({
        height: '690px'
      });
    }

    // Small Bar Chart
    if ($('#apexChart2').length) {
      const options2 = {
        // ... (rest of the options remain the same)
      };
      new ApexCharts(document.querySelector("#apexChart2"), options2).render();
    }

    // Overview Trend Chart
    const overviewTrendOptions = {
      // ... (rest of the options remain the same)
    };

    const overviewTrendChart = new ApexCharts(document.querySelector("#overview_trend"), overviewTrendOptions);
    overviewTrendChart.render();

  } catch (error) {
    console.error('Error initializing charts:', error);
  }
});
