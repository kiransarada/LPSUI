import { Component, OnInit, Input } from '@angular/core';
import {ExportService} from '../../../services/export.service';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {

  constructor(public exportService:ExportService) { }
  @Input() type : any;
  @Input() dropDownData : any;
  @Input() selectedValue :any;

  ngOnInit() {
  }

  ngAfterViewInit(){
  }

  public exportFile(charttype){
    if(!this.selectedValue){
      this.selectedValue = this.dropDownData.leaseMetrics.category.find((obj:any) => obj.key === 1);
    }
    console.log(this.selectedValue);
    var subCategory =  [];
    for(var i=0;i<this.selectedValue.subCategory.length;i++){
      subCategory.push(this.selectedValue.subCategory[i].value)
    }
    let input = {"pageName":"dashboard",
                    'requestData':'exportGraph',
                    "category":this.selectedValue.value,
                    "subCategory":subCategory,
                    'graphName': charttype,
                    "userName":"LPSUser"
                  };
    this.exportService.getExportGraphFile(input).subscribe((graphData)=> {
      window.location = graphData.location; 
    }) 
  }

}
