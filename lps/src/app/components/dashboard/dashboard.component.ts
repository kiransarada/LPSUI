
import { Component, OnInit, Input } from '@angular/core';
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
  @Input() selectedValue :any;
  constructor(private commonGraphService: GraphService, private spinner: NgxSpinnerService) { }
  ngOnInit() {
    this.spinner.show();
    // let url= environment.graphApi+'/DashboardUIService/overallleases';
    let url = 'http://localhost:3000/leaseMetrics'
    let dropDownUrl='assets/JSON/dropdown-select.json'
    this.options = {};
    
    this.dropdownSelectData=this.commonGraphService.getDropdownData(dropDownUrl);

    this.commonGraphService.getDropdownData(dropDownUrl).subscribe((dropdownData)=>{
      this.dropdownSelectData = dropdownData.dashboardStaticData;
      if(!this.selectedValue){
        this.selectedValue = this.dropdownSelectData.leaseMetrics.category.find((obj:any) => obj.key === 1);
      }
      console.log(this.selectedValue);
      var subCategory =  [];
      for(var i=0;i<this.selectedValue.subCategory.length;i++){
        subCategory.push(this.selectedValue.subCategory[i].value)
      }
      this.input = {"pageName":"dashboard",
                      'requestData':'leaseMetricsGraph',
                      "category":this.selectedValue.value,
                      "subCategory":subCategory
        };
      this.commonGraphService.getData(url,this.input,this.options).subscribe((graphData)=>{
         this.graphData = graphData.leaseMetrics;
        //this.graphData = graphData;

        this.spinner.hide();
        // console.log(this.graphData,"Final chart data");
      }, (error) => {
        this.spinner.hide();
        console.log(error, "Error")
      })
      
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
