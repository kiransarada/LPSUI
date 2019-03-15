import { Component, OnInit,Input } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'lps-common-chart',
  templateUrl: './common-chart.component.html',
  styleUrls: ['./common-chart.component.css']
})
export class commonChartComponent implements OnInit {
@Input() commonChartData : any;
commonChart: any;
private chartOptions: any

  constructor() { }

  
  ngOnInit(){
    this.chartOptions = JSON.parse(JSON.stringify(JSON.parse(this.commonChartData)));
    this.chartOptions.title.text = '';   
    // if(this.chartOptions.chart.type.indexOf('column','line')>-1){
    //   this.chartOptions.legend.labelFormatter = function () {
    //     return this.name + ' - ';
    //   };    
         
    this.commonChart = this.getChart(this.chartOptions);
  }

  

  getChart(opt:any) {
      return new Chart(opt);
  }

  

}
