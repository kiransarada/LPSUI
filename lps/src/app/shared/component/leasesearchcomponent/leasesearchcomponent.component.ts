import { Component, OnInit } from '@angular/core';
import { LeasetableService } from '../search-table-gen/leasetable.service';
import { FormBuilder, FormGroup, FormArray ,Validators} from '@angular/forms';


@Component({
  selector: 'app-leasesearchcomponent',
  templateUrl: './leasesearchcomponent.component.html',
  styleUrls: ['./leasesearchcomponent.component.css']
})
export class LeasesearchcomponentComponent implements OnInit {

  
  public rows:Array<any> = []; 
  public columns:Array<any> = [];
  
  columnsName:any = [];
  columnsList:any = [];
  conditionList:any = [];
  savedFilterList:any = [];
  searchText:any ='';
  searchFilters:Array<any> =[];
  columnSearch:Array<any> =[];
  saveFilterName:any='';

  public page:number = 1;
  public itemsPerPage:number = 50;
  public maxSize:number = 5;
  public numPages:number = 1;
  public length:number = 0;
  columnFilterSearchForm: FormGroup;
  filterSearch: FormArray;
  headers: any=[];
  columnNames:any =["Col1","col2"];
  consitionList: any =["cond1","cond2"]
  sortKey:any='';
  reverse:true;
  dataList: any={
    headers:[],
    data:[]
  };
  public data: any={
    headers:[],
    data:[]
  };
  public requestData:any;
  public dataToSend:any={
    userId:'',
  name:'',
    SaveWith :'',
   headers:'',
    columnFilterSearch:'',
    columnSearch :'',
   globalSearch:''
  }
  // private data:Array<any> = Table;

  constructor(private tservice: LeasetableService,private fb:FormBuilder){
    this.columnFilterSearchForm= this.fb.group({
      filterSearch: this.fb.array([ this.createItem() ]),
      headers: this.fb.array(["data","data2"])
    })
    this.length = this.data.length;

  }

  public ngOnInit():void {
    this.tservice.getCharacters()
          .subscribe((data:any) => {
            this.data = data;
            for(let i=0;i<this.data.headers.length;i++){
              this.searchFilters.push({
                name: this.data.headers[i].labelName, 
                key: this.data.headers[i].key, 
                placeholder: 'Search by '+ this.data.headers[i].labelName
              });
              this.columns.push({
                labelName: this.data.headers[i].labelName,
                key: this.data.headers[i].key, 
                sort:"asc"
              })
            } 
            // this.dataList = data;
            console.log(this.columns,"cols")
           
        });
        console.log( this.columns," this.columns")

   }
 
  createItem(): FormGroup {
    return this.fb.group({
      column:['',Validators.required],
      value:['',Validators.required],
      condition:['',Validators.required]
    }) 
   }
 
 
   addItem(): void {
     this.filterSearch = this.columnFilterSearchForm.get('filterSearch') as FormArray;
     this.filterSearch.push(this.createItem());
   }

   removeItem(index) {
    this.filterSearch = this.columnFilterSearchForm.get('filterSearch') as FormArray;
    this.filterSearch.removeAt(index);
   }

   addHeader(value,index): void {
    this.headers.push(value);
    this.columnsList.splice(index,1);
  }

  removeHeader(value,index) {
   this.headers.splice(index,1);
   this.columnsList.push(value)
  }

  search(){
    console.log(this.columnFilterSearchForm.get('filterSearch'),"this.columnFilterSearchForm.get('filterSearch')")
    this.requestData.headers = this.headers;
    this.requestData.columnFilterSearch= this.columnFilterSearchForm.value.filterSearch;
    this.requestData.columnSearch= this.columnSearch;
    this.requestData.globalSearch= this.searchText;
    
  }
 
  globalSearch(){
    this.columnFilterSearchForm.get('globalSearch').setValue(this.searchText)
  }
  getDataBasedOnColumnSearch(){
    this.columnSearch=[];
    for(let i=0;i<this.searchFilters.length;i++){
      if(this.searchFilters[i].value!==''&&this.searchFilters[i].value!==null&&this.searchFilters[i].value!==undefined)
      this.columnSearch.push({
        name: this.searchFilters[i].name, 
        value:this.searchFilters[i].value, 
      })
    }
    console.log( this.columnSearch," this.columnSearch")
    // this.search();
  }
  runSaveSearch(filter){

  }
  editSaveSearch(filter){

  }
  deleteSaveSearch(filter){

  }

  sort(type,sortBy,index){
    this.columns[index]['sort']= type;
    this.requestData.sortBy= sortBy;
    this.requestData.sortType = type;
    this.search();
  }
  save(){
    
    let columnFilterSearch= this.columnFilterSearchForm.value.filterSearch;
    if(columnFilterSearch.length){
      let length=columnFilterSearch.length;
      if(columnFilterSearch[length-1].column !==''&&columnFilterSearch[length-1].condition !=='' &&columnFilterSearch[length-1].value ==''){
        columnFilterSearch(columnFilterSearch[length-1],1)
        this.removeItem(length-1)
      }
    }
    this.dataToSend.userId='1221';
    this.dataToSend.name='lease';
    this.dataToSend.SaveWith = this.saveFilterName;
    this.dataToSend.headers = this.headers;
    this.dataToSend.columnFilterSearch= columnFilterSearch;
    this.dataToSend.columnSearch= this.columnSearch;
    this.dataToSend.globalSearch= this.searchText;
    console.log( this.dataToSend," this.dataToSend")
  }

  
  
 
}
