import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { LeasetableService } from '../search-table-gen/leasetable.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
// import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
// import {Observable, Subject, merge} from 'rxjs';
// import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
declare var $: any;



@Component({ 
  selector: 'app-leasesearchcomponent',
  templateUrl: './leasesearchcomponent.component.html',
  styleUrls: ['./leasesearchcomponent.component.css']
})
export class LeasesearchcomponentComponent implements OnInit {

  // @Output()
  // sendPageNo = new
  //     EventEmitter();

  // @Output()
  // recordsPerPageChange = new
  //     EventEmitter();


  public rows: Array<any> = [];
  public columns: Array<any> = [];
  public showTable = false;
  public showFilter = true;

  columnNames: any= [];
  columnsList: any;
  conditionList: any;
  savedFilterList: any = [];
  searchText: any = '';
  searchFilters: Array<any> = [];
  columnSearch: Array<any> = [];
  saveFilterName: any = '';

  public pageNo: number = 1;
  public recordsPerPage: number = 10;
  public maxSize: number = 5;
  public numPages: number = 1;
  public count: number = 100;
  columnFilterSearchForm: FormGroup;
  filterSearch: FormArray;
  headers: any = [];
  sortKey: any = '';
  reverse: true;
  dataList: any = {
    headers: [],
    data: []
  };
  public data: any = {
    headers: [],
    data: []
  };
  public requestData: any = {
    "userId": "111",
    "pageName": "lease",
    "pageNo": 1,
    "recordsPerPage": 50,
    "sortBy": "",
    "sortType": "",
    "headers": [],
    "columnFilterSearch": [],
    "columnSearch": [],
    "globalSearch": ""
  }
  public dataToSend: any = {
    userId: '',
    name: '',
    SaveWith: '',
    headers: '',
    columnFilterSearch: '',
    columnSearch: '',
    globalSearch: ''
  }
  public sortBy: any;
  // private data:Array<any> = Table;

  public searchList: any;
  public tableData: any = [];

public headerList :any=[];
public searchFilterList:any=[];
  // @ViewChild('instance') instance: NgbTypeahead;
  // focus$ = new Subject<string>();
  // click$ = new Subject<string>();





  constructor(private tservice: LeasetableService, private fb: FormBuilder) {
    this.columnFilterSearchForm = this.fb.group({
      filterSearch: this.fb.array([this.createItem()]),
      headers: this.fb.array([]),
      globalSearch:['']
    })
    // this.length = this.data.length;

  }

  public ngOnInit(): void {
    this.getColumnListWithConditions();
  }
  getColumnListWithConditions() {
    console.log("data")
    let data: any = {
      "userId": "111",
      "pageName": "lease",
      "pageNo": 1,
      "recordsPerPage": 5,
      "sortBy": "",
      "sortType": "",
      "headers": [],
      "columnFilterSearch": [],
      "columnSearch": [],
      "globalSearch": ""
    }
    this.tservice.getColumnListWithConditions(data)
      .subscribe((data: any) => {
        this.columnNames = data.columns;
        // this.columnsList = data.columns;
        // this.conditionList = data.conditions;
      }, (error) => {
        console.log(error, "Error")
      })
    this.tservice.getColumnListWithConditions(data)
      .subscribe((res: any) => {
        this.columnsList = res.columns;
        this.conditionList = res.conditions;
      }, (error) => {
        console.log(error, "Error")
      })
  }
  createItem(): FormGroup {
    return this.fb.group({
      column: ['', Validators.required],
      value: ['', Validators.required],
      condition: ['', Validators.required]
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

  addHeader(header, index): void {
    console.log(header)
    this.headerList.push(header)
    this.headers.push(header.key);
    this.columnNames.splice(index, 1);
    this.searchFilters.push({
      name: header.label,
      key: header.key,
      placeholder: 'Search by ' + header.label,
      value:""
    });
    // this.searchFilters.push({
    //   name: this.data.headers[i].label,
    //   key: this.data.headers[i].key,
    //   placeholder: 'Search by ' + this.data.headers[i].label,
    //   value:""
    // });
  }

  removeHeader(value, index) {
    this.columnNames.push(value);
    this.headerList.splice(index,1);
    this.headers.splice(index, 1);
    this.searchFilters.splice(index,1);
  }

  search() {
    this.requestData.headers = this.headers;
    let columnFilterSearch1 = this.columnFilterSearchForm.value.filterSearch;
    if (columnFilterSearch1.length == 1) {
      if (columnFilterSearch1[0].column == '' || columnFilterSearch1[0].condition == '' || columnFilterSearch1[0].value == '') {
        columnFilterSearch1 = [];
      }
    }
    this.requestData.columnFilterSearch = columnFilterSearch1;
    this.requestData.columnSearch = this.columnSearch;
    this.requestData.globalSearch = this.searchText;
    this.requestData.sortBy = "";
    this.requestData.sortType = "";
    this.getDataForSearch(this.requestData);

  }
  filterShow() {
    this.showFilter = !this.showFilter;
  }

  globalSearch() {
    
    console.log("dfhywfgyih",this.columnFilterSearchForm.get('globalSearch'),this.searchText)
 
    this.requestData.searchText = this.searchText;
    console.log(this.requestData)
    this.getDataForSearch(this.requestData);
    // this.columnFilterSearchForm.get('globalSearch').setValue(this.searchText)
  }
  getDataBasedOnColumnSearch() {
    this.columnSearch = [];
    for (let i = 0; i < this.searchFilters.length; i++) {
      if (this.searchFilters[i].value !== '' && this.searchFilters[i].value !== null && this.searchFilters[i].value !== undefined)
        this.columnSearch.push({
          name: this.searchFilters[i].key,
          value: this.searchFilters[i].value,
        })
    }
    console.log(this.columnSearch, "this.columnSearch")
    this.requestData.columnSearch = this.columnSearch;
    this.getDataForSearch(this.requestData);
  }
  openModal(){
    
    $('#saveFilterModal').modal('show');
  }

  getDataForSearch(data) {
    this.searchFilterList =  this.searchFilters;
      this.searchFilterList.sort((a, b) => {
        if (a.key < b.key) {
            return -1;
        } else if (a.key > b.key) {
            return 1;
        } else {
            return 0;
        }
    })
    console.log(this.searchFilterList);
    console.log(this.searchFilters,"this.searchFilters")
    this.columns = [];
    this.tservice.getDataForSearch(data)
      .subscribe((data: any) => {
        this.count = data.count;
        this.data = data;

        for (let i = 0; i < this.data.headers.length; i++) {
          
          this.columns.push({
            labelName: this.data.headers[i].label,
            key: this.data.headers[i].key,
            sort: "asc",
          })
        }
        this.tableData = data.data;
        this.showFilter = false;
        this.showTable = true;

      });
  }
  runSaveSearch(filter) {

  }
  editSaveSearch(filter) {

  }
  deleteSaveSearch(filter) {

  }

  sort(type, sortBy, index) {
    console.log("wdf")
    this.sortBy = sortBy
    this.columns[index]['sort'] = type;
    this.requestData.sortBy = sortBy;
    this.requestData.sortType = type;
    this.requestData.sortType = type;
    console.log(this.requestData, "this.requestData");
    this.getDataForSearch(this.requestData);
  }
  save() {

    $('#saveFilterModal').modal('hide');
    $('body').removeClass('modal-open');

    $('.modal-backdrop').remove();
    let columnFilterSearch = this.columnFilterSearchForm.value.filterSearch;
    if (columnFilterSearch.length == 1) {
      if (columnFilterSearch[0].column == '' || columnFilterSearch[0].condition == '' || columnFilterSearch[0].value == '') {
        columnFilterSearch = [];
      }
    }
    this.dataToSend.userId = '1221';
    this.dataToSend.name = 'lease';
    this.dataToSend.SaveWith = this.saveFilterName;
    this.dataToSend.headers = this.headers;
    this.dataToSend.columnFilterSearch = columnFilterSearch;
    this.dataToSend.columnSearch = this.columnSearch;
    this.dataToSend.globalSearch = this.searchText;
    console.log(this.dataToSend, " this.dataToSend")
  }
  filterText() {
    console.log("filterText")
  }

  setPageNumber(pageNo) {
    console.log("SendpageNumber",pageNo)
    this.pageNo = pageNo;
    this.requestData.pageNo = this.pageNo;
    console.log("SendpageNumber")
    console.log(this.requestData, " this.requestData")
    this.getDataForSearch(this.requestData);
  }

  sendPerPage(recordsPerPage){
    this.recordsPerPage = recordsPerPage;
    this.requestData.recordsPerPage = this.recordsPerPage;
    this.getDataForSearch(this.requestData);
  }


  // myFunction() {
  //   document.getElementById("myDropdown").classList.toggle("show");
  // }

  // filterFunction() {
  //   var input, filter, ul, li, a, i,div,txtValue;
  //   input = document.getElementById("myInput");
  //   filter = input.value.toUpperCase();
  //   div = document.getElementById("myDropdown");
  //   a = div.getElementsByTagName("a");
  //   for (i = 0; i < a.length; i++) {
  //     txtValue = a[i].textContent || a[i].innerText;
  //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //       a[i].style.display = "";
  //     } else {
  //       a[i].style.display = "none";
  //     }
  //   }
  // } 

  openSideNav(){
    
  }
}
