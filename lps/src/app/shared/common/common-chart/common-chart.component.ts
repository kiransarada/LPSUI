import { Component, OnInit,Input } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'lps-common-chart',
  templateUrl: './common-chart.component.html',
  styleUrls: ['./common-chart.component.css']
})
export class CommonChartComponent implements OnInit {

@Input() commonChartData : any;
commonChart: any;
private chartOptions: any;
public chartId: any;

constructor() { }

  ngOnInit(){
    this.chartOptions = this.commonChartData;
    this.chartOptions.title.text = '';          
    this.commonChart = this.getChart(this.chartOptions);
    // console.log("coomonChartOption",this.commonChart);
  }

    getChart(opt:any) {
      return new Chart(opt);
  }

  public updateGraph() {
    //   chart.update({
    //     chart: {
    //         inverted: false,
    //         polar: false
    //     },
    //     subtitle: {
    //         text: 'Plain'
    //     }
    // });
    }
}
