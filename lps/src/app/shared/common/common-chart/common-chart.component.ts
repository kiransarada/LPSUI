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
private chartOptions: any;
public chartId: any;

  constructor() { }

  
  ngOnInit(){
    // if(typeof this.commonChartData === 'string')
    //     this.chartOptions = JSON.parse(JSON.stringify(JSON.parse(this.commonChartData)));
    // else
    //     this.chartOptions = JSON.parse(JSON.stringify(this.commonChartData));

    this.chartOptions = JSON.parse(JSON.stringify(JSON.parse(this.commonChartData)));

    this.chartOptions.title.text = '';          
    this.commonChart = this.getChart(this.chartOptions);
    // console.log("coomonChartOption",this.commonChart);
  }

  

  getChart(opt:any) {
      return new Chart(opt);
  }

  

}
