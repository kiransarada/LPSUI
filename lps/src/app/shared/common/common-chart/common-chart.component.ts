import { Component, OnInit,Input } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'lps-common-chart',
  templateUrl: './common-chart.component.html',
  styleUrls: ['./common-chart.component.css']
})
export class commonChartComponent implements OnInit {
@Input() barChartData : any;
barChart: any;
private chartOptions: any

  constructor() { }

  
  ngOnInit(){
    this.chartOptions = JSON.parse(JSON.stringify(this.barChartData));
    this.chartOptions.title.text = '';   
    // if(this.chartOptions.chart.type.indexOf('column','line')>-1){
    //   this.chartOptions.legend.labelFormatter = function () {
    //     return this.name + ' - ';
    //   }; 
    if(this.chartOptions.chart.type.indexOf('column')>-1){
      this.chartOptions.legend.labelFormatter = function () {
        return this.name + ' - ';
      };
      
    }
    else if(this.chartOptions.chart.type.indexOf('line')>-1){
      this.chartOptions.legend.labelFormatter = function () {
        return this.name + ' - ';
      }; 
    }
    else if(this.chartOptions.chart.type == 'pie') {
      this.chartOptions.legend.labelFormatter = function () {
        return this.name + ' - ';
      };   
    }
         
    this.barChart = this.getChart(this.chartOptions);
    
    console.log(this.barChart);
  }

  

  getChart(opt:any) {
      return new Chart(opt);
  }

  

}
