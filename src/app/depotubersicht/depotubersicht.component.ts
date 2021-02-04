import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'app-depotubersicht',
  templateUrl: './depotubersicht.component.html',
  styleUrls: ['./depotubersicht.component.scss']
})
export class DepotubersichtComponent implements OnInit {
  date = ['Jan 20', 'Feb 20', 'Mar 20', 'Apr 20', 'May 20', 'Jun 20', 'Lul 20', 'Aug 20', 'Sep 20', 'Nov 20', 'Oct 20', 'Dec 20', ];
  chartData =  [
    [1250, 1235, 1238, 2258, 1578, 1290, 2450, 1650, 1558, 1348, 2045, 1000],
    [2450, 1650, 1558, 2258, 1578, 1290, 2450, 1650, 1558, 1348, 2045, 1500],
    [1250, 1235, 1238, 2258, 1578, 1290, 2450, 1650, 1558, 1348, 2045, 1800],
    [1250, 1235, 1250, 1235, 1238, 1290, 2450, 1650, 1558, 2450, 1650, 1558],
    [1250, 1235, 1238, 2258, 1578, 1290, 2450, 1650, 1558, 1250, 1235, 1238],
    [1250, 1235, 1238, 2258, 1578, 1290, 2450, 1250, 1235, 1238, 1000, 2345],
    [1250, 1235, 1238, 2258, 1250, 1235, 1238, 1650, 1558, 1348, 2045, 2135],
    [1250, 1235, 1238, 2258, 1578, 1290, 2450, 1650, 1558, 1348, 2045, 1000],
    [2450, 1650, 1558, 1235, 1238, 1290, 2450, 1650, 1558, 1348, 2045, 2314]
  ];
  public lineChartData: ChartDataSets[] = [
    { data: this.chartData[0], fill: false, },
  ];

  public lineChartLabels: Label[] = this.date;
  public lineChartOptions = {
    legend: {
      display: false
  },
  tooltips: {
      callbacks: {
         label(tooltipItem) {
                return tooltipItem.yLabel;
         }
      }
  },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{
        ticks: {
        autoSkip: true,
        maxTicksLimit: 6
        },
        gridLines: {
          display: false,
        },
     }],
           yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgb(226, 132, 8)',
      borderColor: 'rgb(226, 132, 8)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;


  constructor() { }

  ngOnInit(): void {
  }

  chartDataHandler = (id) => {
    this.lineChartData[0].data = id;
  }
}
