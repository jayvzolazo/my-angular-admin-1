import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

import {
  faUsers,
  faCodeBranch,
  faTasks
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  colChart: Chart;
  lineChart: Chart;

  title = 'Angular Admin';

  icon = {
    users: faUsers,
    codeBranch: faCodeBranch,
    tasks: faTasks
  };

  constructor() { }

  ngOnInit() {
    this.init();
    this.addSerie();
  }

  addSerie() {
    this.lineChart.addSerie({
      name: 'Line ' + Math.floor(Math.random() * 5),
      data: [
        Math.floor(Math.random() * 5),
        Math.floor(Math.random() * 5),
        Math.floor(Math.random() * 5),
        Math.floor(Math.random() * 5),
        Math.floor(Math.random() * 5),
        Math.floor(Math.random() * 5),
        Math.floor(Math.random() * 5),
        Math.floor(Math.random() * 5),
        Math.floor(Math.random() * 5)
      ]
    });
  }

  init() {
    const chart = new Chart(<any>{
      chart: {
        type: 'column'
      },
      title: {
        text: 'Column Chart'
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: 'Total percent market share'
        }
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%'
          }
        }
      },
      series: [{
        name: 'Browser Usage Statistics',
        colorByPoint: true,
        data: [
          {
            name: 'Chrome',
            y: 62.74,
            drilldown: 'Chrome'
          },
          {
            name: 'Firefox',
            y: 10.57,
            drilldown: 'Firefox'
          },
          {
            name: 'Internet Explorer',
            y: 7.23,
            drilldown: 'Internet Explorer'
          },
          {
            name: 'Safari',
            y: 5.58,
            drilldown: 'Safari'
          },
          {
            name: 'Edge',
            y: 4.02,
            drilldown: 'Edge'
          },
          {
            name: 'Opera',
            y: 1.92,
            drilldown: 'Opera'
          },
          {
            name: 'Other',
            y: 7.62,
            drilldown: null
          }
        ]
      }]
    });

    const linechart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Line Chart'
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Line 1',
        data: [1, 2, 3]
      }]
    });

    linechart.addPoint(4);
    // chart.addPoint(4);

    this.colChart = chart;
    this.lineChart = linechart;

    // chart.addPoint(5);
    // setTimeout(() => {
    //   chart.addPoint(6);
    // }, 2000);

    chart.ref$.subscribe(console.log);

    // this.addSerie();
    this.addSerie();
  }

}
