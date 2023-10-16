/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

/* ====== Index ======
1. SPLINA AREA CHART 01
2. SPLINA AREA CHART 02
3. SPLINA AREA CHART 03
4. SPLINA AREA CHART 04
5. MIXED CHART 01
6. RADIAL BAR CHART 01
7.1 HORIZONTAL BAR CHART
7.2 HORIZONTAL BAR CHART2
8.1 TABLE SMALL BAR CHART 01
8.2 TABLE SMALL BAR CHART 02
8.3 TABLE SMALL BAR CHART 03
8.4 TABLE SMALL BAR CHART 04
8.5 TABLE SMALL BAR CHART 05
8.6 TABLE SMALL BAR CHART 06
8.7 TABLE SMALL BAR CHART 07
8.8 TABLE SMALL BAR CHART 08
8.9 TABLE SMALL BAR CHART 09
8.10 TABLE SMALL BAR CHART 10
8.11 TABLE SMALL BAR CHART 11
8.12 TABLE SMALL BAR CHART 12
8.13 TABLE SMALL BAR CHART 13
8.14 TABLE SMALL BAR CHART 14
8.15 TABLE SMALL BAR CHART 15
9.1 STATUS SMALL BAR CHART 01
9.2 STATUS SMALL BAR CHART 02
9.3 STATUS SMALL BAR CHART 03
10.1 LINE CHART 01
10.2 LINE CHART 02
10.3 LINE CHART 03
10.4 LINE CHART 04
11.1 BAR CHART LARGE 01
11.2 BAR CHART LARGE 02
12.1 DONUT CHART 01
12.2 DONUT CHART 02
13. PIE CHART
14. RADER CHART
15.1 ARIA CHART 01

====== End ======*/

"use strict";


// 11-10-2023 
//   /*======== 5. MIXED CHART 01  Primer grafico========*/
var mixedChart1 = document.querySelector("#mixed-chart-1");
if (mixedChart1 !== null) {
  var mixedOptions1 = {
    chart: {
      height: 370,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    colors: ["#9e6de0", "#faafca", "#f2e052"],
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
      markers: {
        width: 20,
        height: 5,
        radius: 0,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        barHeight: "10%",
        distributed: false,
      },
    },
    dataLabels: {
      enabled: false,
    },

    stroke: {
      show: true,
      width: 2,
      curve: "smooth",
    },

    series: [
      {
        name: "Ingreso",
        type: "column",
        data: [76, 85, 101, 98, 87, 100, 91, 70, 94, 50, 47, 85],

      },
      {
        name: "Gastos",
        type: "column",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 55, 47, 67],
      },
      {
        name: "Ganancia",
        data: [32, 30, 44, 42, 26, 42, 28, 10, 28, -5, 0, 18],
        type: "line",
      },
    ],

    xaxis: {
      categories: [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
      ],

      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        width: 40,
      },
    },

    fill: {
      opacity: 1,
    },

    tooltip: {
      shared: true,
      intersect: false,
      followCursor: true,
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return seriesName;
          },
        },
      },
    },
  };

  var randerMixedChart1 = new ApexCharts(mixedChart1, mixedOptions1);
  randerMixedChart1.render();
}

/*======== 13. PIE CHART  grafico de torta ========*/
var SimplePieChart = document.querySelector("#simple-pie-chart");
if (SimplePieChart !== null) {
  var simplePieChartOptions = {
    chart: {
      width: 350,
      type: "pie",
    },
    colors: ["#5f545c", "#eb7072", "#f5ba90", "#f5e2b8", "#a2caa5"],

    labels: ["Voley", "Aprende Programacion", "Estudia un Idioma", "Futbol", "Otras Actividades"],
    legend: {
      position: "top",
      horizontalAlign: "left",
      markers: {
        radius: 0,
      },
    },
    series: [15, 10, 15, 40, 20],
  };

  var simpleplePieChartRander = new ApexCharts(
    SimplePieChart,
    simplePieChartOptions
  );

  simpleplePieChartRander.render();
}


/*======== 10.1 LINE CHART 01 grafico de frecuencia  TEMPERATURAS MINIMAS Y MAXIMAS EN UNA SEMANA ========*/
var lineChart1 = document.querySelector("#line-chart-1");
if (lineChart1 !== null) {
  var lineChartOption1 = {
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: [2, 3],
      curve: "smooth",
      dashArray: [0, 5],
    },
    plotOptions: {
      horizontal: false,
    },
    colors: ["#9e6de0", "#fec400"],
    series: [
      {
        data: [6, 10, 8, 12, 10, 6, 10],
      },
      {
        data: [25, 28, 32, 26, 28, 29, 32],
      },
    ],
    labels: [
      "04 Ene",
      "05 Ene",
      "06 Ene",
      "07 Ene",
      "08 Ene",
      "09 Ene",
      "10 Ene",
    ],
    markers: {
      size: [5, 0],
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: (labels) => labels,
        },
      },
      marker: {
        show: true,
      },
    },
    legend: {
      show: false,
    },
  };
  var randerLineChart1 = new ApexCharts(lineChart1, lineChartOption1);
  randerLineChart1.render();
}


// diagrama de dispersion

var dispercion1 = document.querySelector("#dispercion");
if (dispercion1 !== null) {
  alert(5);
  // Datos

  // Configuración del gráfico de dispersión
  var options = {
    series: [{
      name: "Altura y Peso",
      data: [
        [1.78, 63], [1.60, 50], [1.75, 66], [1.85, 65], [1.52, 55], [1.70, 68], [1.65, 53], [1.73, 70], [1.80, 82], [1.85, 80], [1.74, 95], [1.58, 57], [1.63, 75], [1.69, 53], [1.73, 67.5], [1.81, 78], [1.83, 90], [1.84, 69]]
    }],
    chart: {
      height: 350,
      type: 'scatter',
      zoom: {
        enabled: true,
        type: 'xy'
      }
    },
    xaxis: {
      tickAmount: 10,
      labels: {
        formatter: function (val) {
          return parseFloat(val).toFixed(1)
        }
      }
    },
    yaxis: {
      tickAmount: 7
    }
  };

  // Crear el gráfico de dispersión
  var graficoDispercion = new ApexCharts(dispercion1, options);
  graficoDispercion.render();
}

