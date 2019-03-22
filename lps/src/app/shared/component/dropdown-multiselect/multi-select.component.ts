import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import {GraphService} from '../../../services/graph.service';
import {environment} from '../../../../environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent implements OnInit {
  @Input() dropDownData : any;
  @Input() selectedValue:any;
  @Output() emitData = new EventEmitter<any>();
  subCategory = [];
  selectedObj : any;
  selectedFirst : any;
  selectedItems = [];
  selectAllOptions = false;
  selectAllChecked : Boolean = false;
  // Change
  selectedAll = false;
  constructor(private commonGraphService: GraphService, private spinner: NgxSpinnerService) { };
  dropDowncheckboxValue:false;
  ngOnChanges(changes: SimpleChanges) {
    this.subCategory=[];
    this.selectedItems=[];
    this.selectAllOptions = false;
    this.selectAllChecked = false;
    if(changes.selectedValue.currentValue){
    this.filterSubcategory(changes.selectedValue.currentValue);
    }
    // Change
    this.selectedAll = false;
}
  ngOnInit() {
    console.log("selected::"+this.selectedValue);
    //event.stopPropagation();
    this.selectedObj = this.dropDownData.leaseMetrics.category.find((obj:any) => obj.key === 1);
    this.subCategory = JSON.parse(JSON.stringify(this.selectedObj.subCategory));
  }
  filterSubcategory(selected:any){
    this.selectedObj = this.dropDownData.leaseMetrics.category.find((obj:any) => obj.value === selected);
    this.subCategory = JSON.parse(JSON.stringify(this.selectedObj.subCategory));
  }
  selectItem(category: any,event:any){
    // Change
    setTimeout(()=>{
      this.selectedAll = this.subCategory.every((item:any) => {
        return item.selected == true;
      })
    });
    if(event.target.checked){
      this.selectedItems.push(category);
      this.selectedFirst=this.selectedItems[0];
    }else{
      const index: number = this.selectedItems.findIndex(status => status.key === category.key);
      if (index!=-1) {
        this.selectedItems.splice(index, 1);
        this.selectedFirst=this.selectedItems[0];
        this.selectAllChecked = false;
    }  
    }
  }
  selectAll(category:any,$event:any) {
     // Change
   for (var i = 0; i < this.subCategory.length; i++) {
    this.subCategory[i].selected = $event.target.checked;
  }
    if($event.target.checked){
      this.selectAllOptions = true;
      this.selectAllChecked = true;
      this.selectedItems=JSON.parse(JSON.stringify(this.subCategory));
      this.selectedFirst=this.selectedItems[0];
      
    }else{
      this.selectedItems=[];
      this.selectAllOptions = false;
      this.selectAllChecked = false;
    }
  }
  clearAll() {
    this.selectedItems=[];
    this.selectAllOptions = false;
    this.selectedAll = false;
    for (var i = 0; i < this.subCategory.length; i++) {
      this.subCategory[i].selected = false;
    }
  }
  onSearchChange(searchValue : string ) {  
    console.log(searchValue);
    let results= [];
    if(searchValue.trim()!=""){
    // let results = this.subCategory.filter(s => s.value.includes(searchValue));
    this.subCategory.filter(function (category) {
      return category.value.toLowerCase().indexOf(searchValue.toLowerCase()) > -1? results.push(category) : '';
 });
 this.subCategory = results;
}else{
  this.subCategory=this.subCategory = JSON.parse(JSON.stringify(this.selectedObj.subCategory));
}
  }
  getGraphDetails(){
    var input = JSON.parse(JSON.stringify(this.selectedObj));
    input.subCategory = JSON.parse(JSON.stringify(this.selectedItems));
    var subCategory =  [];
    for(var i=0;i<input.subCategory.length;i++){
      subCategory.push(input.subCategory[i].value)
    }
    // for (var i = 0; i < this.selectedItems.length; i++) {
    //   this.selectedItems[i].selected = false;
    // }
    var requestPayload={"pageName":"dashboard","requestData":"leaseMetricsGraph","category":input.value, "subCategory":subCategory}
    // let graphURL= environment.graphApi+'/DashboardUIService/overallleases';
    let graphURL='assets/JSON/chartGraph.json';
    let options = {};
    //this.selectedItems=[];
    //this.selectAllOptions = false;
    // this.selectAllChecked = false;
    // this.spinner.show();
    this.commonGraphService.getData(graphURL,requestPayload,options).subscribe((graphData)=>{
      // this.spinner.hide();
      var data = {
        "graphData": graphData.leaseMetrics,
        "subCategoryOptions" : subCategory
      }
      this.emitData.emit(data);
    })

  }
}
