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

  public daysPending: any;
  public endDate: any;
  public startDate: any;
  public percentArray: any = [];
  public type: any;

  public daysPending1: any;
  public endDate1: any;
  public startDate1: any;
  public percentArray1: any = [];
  public type1: any;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes, "chabges")
    if (changes.leaseChartData || changes.leaseChartData1) {
      console.log(this.leaseChartData, "this.leaseChartData")
      this.chartData = this.leaseChartData;

      this.chartData1 = this.leaseChartData1;
      // this.title1 = this.leaseChartData1['daysPending'];

      this.daysPending = this.leaseChartData['daysPending'];
      this.endDate = this.leaseChartData['endDate'];
      this.startDate = this.leaseChartData['startDate'];
      this.percentArray = this.leaseChartData['percentArray'];
      this.type = this.leaseChartData['type'];


      this.daysPending1 = this.leaseChartData1['daysPending'];
      this.endDate1 = this.leaseChartData1['endDate'];
      this.startDate1 = this.leaseChartData1['startDate'];
      this.percentArray1 = this.leaseChartData1['percentArray'];
      this.type1 = this.leaseChartData1['type'];
     
      if (this.leaseChartData && !this.leaseChartData1) {
        
        if(this.leaseChartData['startDate'] && this.leaseChartData['endDate']){
          this.getChart(this.leaseChartData);
          }
          if(!this.leaseChartData1){
            this.getChart2();
            }
        
        
      }
      if (this.leaseChartData1 && !this.leaseChartData) {
        console.log(this.leaseChartData1)
        if(this.leaseChartData1['startDate'] && this.leaseChartData1['endDate']){
          this.getChart1(this.leaseChartData1);
          }
          if(!this.leaseChartData){
            this.getChart2();
            }
        // this.getChart1(this.leaseChartData1);
      }
      if (this.leaseChartData && this.leaseChartData1 ) {
        console.log(this.leaseChartData1)
        if(this.leaseChartData['startDate'] && this.leaseChartData['endDate']){
          this.getChart(this.leaseChartData);
          }
        if(this.leaseChartData1['startDate'] && this.leaseChartData1['endDate']){
          this.getChart1(this.leaseChartData1);
          }
        // this.getChart1(this.leaseChartData1);
      }

    }
  }
  ngOnInit() {
    console.log(this.leaseChartData, "this.leaseChartData")
 
  }

  ngAfterViewInit() {
    console.log(this.leaseChartData, "this.leaseChartData")

    this.chartData = this.leaseChartData;

    this.chartData1 = this.leaseChartData1;
    // this.title1 = this.leaseChartData1['daysPending'];

    this.daysPending = this.leaseChartData['daysPending'];
    this.endDate = this.leaseChartData['endDate'];
    this.startDate = this.leaseChartData['startDate'];
    this.percentArray = this.leaseChartData['percentArray'];
    this.type = this.leaseChartData['type'];


    this.daysPending1 = this.leaseChartData1['daysPending'];
    this.endDate1 = this.leaseChartData1['endDate'];
    this.startDate1 = this.leaseChartData1['startDate'];
    this.percentArray1 = this.leaseChartData1['percentArray'];
    this.type1 = this.leaseChartData1['type'];
    // this.getChart(); 
    // this.getChart1(); 
  }



  getChart1(data) {
    this.chart1 = this.getDataForChart1(data)
    console.log(this.chart1, "this.chartData1")
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
        enabled: false
      },
      tooltip: {
         enabled: false
      },
      series: [
        {
          // name: '1/10/2012',
          // data:[10,5],
          data:data.percentArray,
          innerSize: '63%'
        },
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
        },
        series: {
          states: {
              hover: {
                  enabled: false
              }
          }
      }

      },
      colors: [
        '#55bf3b',
        '#eeeeee'
      ],
      labels: {
        items: [{
          html: data.startDate,
          style: { "color": "black", "position": "relative", "top": "200px", "left": "150px" },
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
  getDataForChart1(data) {
    
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
        enabled: false
      },
      tooltip: {
        enabled: false
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
        },
        series: {
          states: {
              hover: {
                  enabled: false
              }
          }
      }

      },
      colors: [
        '#55bf3b',
        '#eeeeee'
      ],
      labels: {
        items: [{
          html: data.startDate,
          style: { "color": "black", "position": "relative", "top": "200px", "left": "150px" },
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

  getChart2() {
    
    return new Chart({
      chart: {
        type: 'pie',
      },

      title: {
        // data.daysPending
       
      },
      credits: {
        enabled: false
      },
      tooltip: {
        enabled: false
      },
      series: [
        {
       
        }
      ],
      plotOptions: {
        pie: {
          size: '70%',
          dataLabels: {
         
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '50%']
        },
        series: {
          states: {
              hover: {
                  enabled: false
              }
          }
      }

      },
      colors: [
        '#55bf3b',
        '#eeeeee'
      ],
      labels: {
      },
      subtitle: {
     
      }

    });
   
  }
}
