import { Component, OnInit , Input} from '@angular/core';
// import { Chart } from 'angular-highcharts';
import {LeaseBasicService} from '../lease-details-tabs/lease-tab.service';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor(private ltService: LeaseBasicService) { }

  public chart:any;
  public chartData :any=[];
  public chartData1 :any=[];
  public title:any;
  public title1:any;
  ngOnInit() {     
  //   this
  //   .ltService
  //   .getGraphData()
  //   .subscribe((data) => {
  //   console.log(data);
    
  // });
  this.getChart();
   this.getChart1();
  // this.chartData = leaseChartData; 
   this.title = this.leaseChartData['daysPending'];  
   this.title1 = this.leaseChartData['daysPending'];    
  }
  
  ngAfterViewInit() {
    this.chartData = this.leaseChartData; 
    this.title = this.leaseChartData['daysPending']; 
    this.chartData = this.leaseChartData; 
    this.title1 = this.leaseChartData['daysPending']; 
    this.getChart(); 
    }
@Input() leaseChartData : JSON;

  getChart(){

  //   this.chart = new Chart({
  //     chart: {
  //       type: 'pie',
  //     },
     
  //     title: {
  //       text: this.title,
  //       align : 'center',
  //       style:{ "font-weight":1000},
  //       verticalAlign: 'middle',
  //       y: -30        
  //     },
  //     credits: {
  //       enabled: false
  //     },
  //     series: [
  //       {
  //         name: '1/10/2012',
  //         data : this.chartData.percentArray,
  //         innerSize: '63%'
  //       }
  //     ],
  //     plotOptions : {
  //       pie: {
  //         size:'70%',
  //          dataLabels: {
  //             enabled: false,
  //             distance: 1,
              
  //             style: {
  //                fontWeight: 'bold',
  //                color: 'red',
                 
  //             }
  //          },
  //          startAngle: -90,
  //          endAngle: 90,
  //          center: ['50%', '50%']
  //       }
     
  //    },
  //    colors: [
  //     '#55bf3b',
  //     '#eeeeee'    
  // ],
  //   labels:{
  //     items:[{
  //     html:this.chartData.startDate,
  //     style:{"color": "black","position": "relative", "top":"200px", "left":"70px"},
  //     },
  //     {
  //       html:this.chartData.endDate,
  //       style:{"color": "black","position": "relative", "top":"200px","left":"355px"},
  //     },
  //     ,
  //     {
  //       html:this.chartData.type,
  //       style:{"color": "black","position": "relative", "top":"30px","left":"250px"},
  //     }
  //   ],
  //     style:{"color": "#333333"}
  //   },
  //   subtitle:{
  //     align:'center',
  //     floating:false,
  //     style:{"color": "#666666"},
  //     text:'Days More...',
  //     useHTML:true,
  //     verticalAlign:'middle',      
  //     x:0,
  //     y:-10,
  //     }
      
  //   });
  }

  getChart1(){

  //   this.chart = new Chart({
  //     chart: {
  //       type: 'pie',
  //     },
     
  //     title: {
  //       text: this.title,
  //       align : 'center',
  //       style:{ "font-weight":1000},
  //       verticalAlign: 'middle',
  //       y: -30        
  //     },
  //     credits: {
  //       enabled: false
  //     },
  //     series: [
  //       {
  //         name: '1/10/2012',
  //         data : this.chartData.percentArray,
  //         innerSize: '63%'
  //       }
  //     ],
  //     plotOptions : {
  //       pie: {
  //         size:'70%',
  //          dataLabels: {
  //             enabled: false,
  //             distance: 1,
              
  //             style: {
  //                fontWeight: 'bold',
  //                color: 'red',
                 
  //             }
  //          },
  //          startAngle: -90,
  //          endAngle: 90,
  //          center: ['50%', '50%']
  //       }
     
  //    },
  //    colors: [
  //     '#55bf3b',
  //     '#eeeeee'    
  // ],
  //   labels:{
  //     items:[{
  //     html:this.chartData.startDate,
  //     style:{"color": "black","position": "relative", "top":"200px", "left":"70px"},
  //     },
  //     {
  //       html:this.chartData.endDate,
  //       style:{"color": "black","position": "relative", "top":"200px","left":"355px"},
  //     },
  //     ,
  //     {
  //       html:this.chartData.type,
  //       style:{"color": "black","position": "relative", "top":"30px","left":"250px"},
  //     }
  //   ],
  //     style:{"color": "#333333"}
  //   },
  //   subtitle:{
  //     align:'center',
  //     floating:false,
  //     style:{"color": "#666666"},
  //     text:'Days More...',
  //     useHTML:true,
  //     verticalAlign:'middle',      
  //     x:0,
  //     y:-10,
  //     }
      
  //   });




  }

}
