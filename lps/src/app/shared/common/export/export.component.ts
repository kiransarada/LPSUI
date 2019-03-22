import { Component, OnInit, Input } from '@angular/core';
import {ExportService} from '../../../services/export.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {

  constructor(public exportService:ExportService, private spinner: NgxSpinnerService) { }
  @Input() type : any;
  @Input() dropDownData : any;
  @Input() selectedValue :any;
  @Input() selectedSubcatOpt : any = [];

  subCategory : any;
  category : any;

  ngOnInit() {
  }

  ngAfterViewInit(){
    // alert(this.selectedValue);
    // console.log(this.dropDownData);
    
    // if(this.dropDownData == undefined){
    // this.subCategory = ["5 STAR COMM", "ATC"]
    // }else{
    //   this.subCategory = ["5 STAR COMM", "ATC"]
    // }

    // if(this.category == undefined){
    //   this.category = "Management Company";
    //   }else{
    //     this.category =this.selectedValue;
    //   }
  }

  public exportFile(charttype){
    console.log(this.selectedSubcatOpt);
    if(!this.selectedValue){
      this.category = this.dropDownData.leaseMetrics.category.find((obj:any) => obj.key === 1);
    }else{
      this.category = this.dropDownData.leaseMetrics.category.find((obj:any) => obj.value === this.selectedValue);
    }
    console.log(this.category);
    // let input = {"pageName":"dashboard",
    //                 'requestData':'exportGraph',
    //                 "category":this.selectedValue.value,
    //                 "subCategory":subCategory,
    //                 'graphName': charttype,
    //                 "userName":"LPSUser"
    //               };

    let input =  {"pageName":"dashboard",
    "requestData":"exportGraph",
    "category":this.category.value,
    "subCategory":this.selectedSubcatOpt, 
    "graphName": charttype, 
    "userName":"LPSUser"};
    this.spinner.show();
    this.exportService.getExportGraphFile(input).subscribe((graphData)=> {
      if(graphData.status.toLowerCase() == 'error') {
        alert(graphData.errorMessage);
      }else{
      window.location = graphData.location; 
      this.spinner.hide();
      }
    }) 
  }

}
