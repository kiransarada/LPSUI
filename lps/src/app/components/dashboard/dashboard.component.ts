
import { Component, OnInit } from '@angular/core';
import {GraphService} from '../../services/graph.service';
import { Chart } from 'angular-highcharts';
import {environment} from '../../../environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})

export class DashboardComponent implements OnInit{
  public graphData : any;
  public url:any;
  public input:any = {};
  public options:any = {};
  public dropdownSelectData : any;
  public selectedOption: any;
  constructor(private commonGraphService: GraphService, private spinner: NgxSpinnerService) { }
  ngOnInit() {
    this.spinner.show();
    let url= environment.graphApi+'/DashboardUIService/overallleases';
    let dropDownUrl='assets/JSON/dropdown-select.json'
    this.input = {};
    this.options = {};
    this.dropdownSelectData=this.commonGraphService.getDropdownData(dropDownUrl);
    this.commonGraphService.getData(url,this.input,this.options).subscribe((graphData)=>{
      this.graphData = graphData.leaseMetrics;
      this.spinner.hide();
      // console.log(this.graphData,"Final chart data");
    }, (error) => {
      this.spinner.hide();
      console.log(error, "Error")
    })
   
  }
  receiveUpdatedOption($event) {
    this.selectedOption = $event
  }
  receiveUpdatedGraph($event) {
    console.log("updated graph data"+$event)
    this.graphData = $event
  }

}
