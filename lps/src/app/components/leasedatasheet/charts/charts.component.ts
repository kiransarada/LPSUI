import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { LeaseBasicService } from '../lease-details-tabs/lease-tab.service';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  @Input() leaseChartData: JSON;
  @Input() leaseChartData1: JSON;

  constructor(private ltService: LeaseBasicService) { }

  public chart: any;
  public chart1: any;

  public chartData: any = [];
  public chartData1: any = [];
  public title: any;
  public title1: any;

  public daysPending; any;
  public endDate: any;
  public startDate: any;
  public percentArray: any = [];
  public type: any;
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes, "chabges")
    if (changes.leaseChartData || changes.leaseChartData1) {
      console.log(this.leaseChartData, "this.leaseChartData")
      this.chartData = this.leaseChartData;

      this.chartData1 = this.leaseChartData;
      // this.title1 = this.leaseChartData1['daysPending'];

      this.daysPending = this.leaseChartData['daysPending'];
      this.endDate = this.leaseChartData['endDate'];
      this.startDate = this.leaseChartData['startDate'];
      this.percentArray = this.leaseChartData['percentArray'];
      this.type = this.leaseChartData['type'];
      // this.getChart1();
      // if(this.leaseChartData['type'] == "Expiration"){
      //   this.getChart(this.leaseChartData); 
      // }
      // if(this.leaseChartData1['type'] == "Termination"){ 
      //   this.getChart1(this.leaseChartData1); 
      // }
      if (this.leaseChartData) {
        this.getChart(this.leaseChartData);
      }
      if (this.leaseChartData1) {
        this.getChart1(this.leaseChartData1);
      }

    }
  }
  ngOnInit() {
    console.log(this.leaseChartData, "this.leaseChartData")
    //   this
    //   .ltService
    //   .getGraphData()
    //   .subscribe((data) => {
    //   console.log(data);

    // });

    // this.getChart();
    //  this.getChart1();
    // this.chartData = leaseChartData; 
    //  this.title = this.leaseChartData['daysPending'];  
    //  this.title1 = this.leaseChartData['daysPending'];    
  }

  ngAfterViewInit() {
    console.log(this.leaseChartData, "this.leaseChartData")

    this.chartData = this.leaseChartData;

    this.chartData1 = this.leaseChartData;
    // this.title1 = this.leaseChartData1['daysPending'];

    this.daysPending = this.leaseChartData['daysPending'];
    this.endDate = this.leaseChartData['endDate'];
    this.startDate = this.leaseChartData['startDate'];
    this.percentArray = this.leaseChartData['percentArray'];
    this.type = this.leaseChartData['type'];
    // this.getChart(); 
    // this.getChart1(); 
  }



  getChart1(data) {
    this.chart1 = this.getDataForChart(data)
    console.log(this.chart1, "this.chartData")
    //   this.chart1 = new Chart({
    //     chart: {
    //       type: 'pie',
    //     },

    //     title: {
    //       text: this.chartData.daysPending,
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

  getChart(data) {
    this.chart = this.getDataForChart(data)
    console.log(this.chart, "this.chart")
  }
  getDataForChart(data) {
    return new Chart({
      chart: {
        type: 'pie',
      },

      title: {
        // data.daysPending
        text: data.daysPending,
        align: 'center',
        style: { "font-weight": 1000 },
        verticalAlign: 'middle',
        y: -30
      },
      credits: {
        enabled: true
      },
      series: [
        {
          // name: '1/10/2012',
          // data:[10,5],
          data:data.percentArray,
          innerSize: '63%'
        }
      ],
      plotOptions: {
        pie: {
          size: '70%',
          dataLabels: {
            enabled: false,
            distance: 1,

            style: {
              fontWeight: 'bold',
              color: 'red',

            }
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '50%']
        }

      },
      colors: [
        '#55bf3b',
        '#eeeeee'
      ],
      labels: {
        items: [{
          html: data.startDate,
          style: { "color": "black", "position": "relative", "top": "200px", "left": "70px" },
        },
        {
          html: data.endDate,
          style: { "color": "black", "position": "relative", "top": "200px", "left": "355px" },
        },
          ,
        {
          html: data.type,
          style: { "color": "black", "position": "relative", "top": "30px", "left": "250px" },
        }
        ],
        style: { "color": "#333333" }
      },
      subtitle: {
        align: 'center',
        floating: false,
        style: { "color": "#666666" },
        text: 'Days More...',
        useHTML: true,
        verticalAlign: 'middle',
        x: 0,
        y: -10,
      }

    });
  }

}
