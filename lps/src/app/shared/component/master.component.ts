import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SiteDynamicOverlayComponent } from '../../Site/site-tabs/site-dynamic-overlay.component';
import { LpsSidebarServiceService } from '../services/lps-sidebar-service.service';
import { LeasetableService } from './search-table-gen/leasetable.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
// import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
// import {Observable, Subject, merge} from 'rxjs';
// import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
declare var $: any;


@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  @ViewChild(SiteDynamicOverlayComponent) private myChild: SiteDynamicOverlayComponent;
  private _opened = false;
  private _modeNum = 0;
  private _positionNum = 0;
  private _dock = false;
  private _closeOnClickOutside = false;
  private _closeOnClickBackdrop = false;
  private _showBackdrop = false;
  private _animate = true;
  private _trapFocus = true;
  private _autoFocus = true;
  private _keyClose = false;
  private _autoCollapseHeight = null;
  private _autoCollapseWidth = null;
  Type: any;
  showFlag: boolean = true;
  private _MODES: Array<string> = ['over', 'push', 'slide'];
  private _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];
  closeResult: string;

  private _toggleOpened(): void {
    this._opened = !this._opened;
    this.showFlag = true;
    document.getElementById('search-sidebar').style.width = "70rem";
    document.getElementById('search-sidebar').style.height = "75rem";


  }

  private _toggleMode(): void {
    this._modeNum++;

    if (this._modeNum === this._MODES.length) {
      this._modeNum = 0;
    }
  }

  private _toggleAutoCollapseHeight(): void {
    this._autoCollapseHeight = this._autoCollapseHeight ? null : 500;
  }

  private _toggleAutoCollapseWidth(): void {
    this._autoCollapseWidth = this._autoCollapseWidth ? null : 500;
  }

  private _togglePosition(): void {
    this._positionNum++;

    if (this._positionNum === this._POSITIONS.length) {
      this._positionNum = 0;
    }
  }

  private _toggleDock(): void {
    this._dock = !this._dock;
  }

  private _toggleCloseOnClickOutside(): void {
    this._closeOnClickOutside = !this._closeOnClickOutside;
  }

  private _toggleCloseOnClickBackdrop(): void {
    this._closeOnClickBackdrop = !this._closeOnClickBackdrop;
  }

  private _toggleShowBackdrop(): void {
    this._showBackdrop = !this._showBackdrop;
  }

  private _toggleAnimate(): void {
    this._animate = !this._animate;
  }

  private _toggleTrapFocus(): void {
    this._trapFocus = !this._trapFocus;
  }

  private _toggleAutoFocus(): void {
    this._autoFocus = !this._autoFocus;
  }

  private _toggleKeyClose(): void {
    this._keyClose = !this._keyClose;
  }

  private _onOpenStart(): void {
    console.log('Sidebar opening');
  }

  private _onOpened(): void {
    console.log('Sidebar opened');
  }

  private _onCloseStart(): void {
    console.log('Sidebar closing');
  }

  private _onClosed(): void {
    console.log('Sidebar closed');
  }

  private _onTransitionEnd(): void {
    console.log('Transition ended');
  }

  private _onBackdropClicked(): void {
    console.log('Backdrop clicked');
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private setType(type, agreeId) {

    this.Type = type;
    this.showFlag = false;
    const url = 'assets/JSON/' + type + '.json';
    console.log("agrid", agreeId)
    this.myChild.showConfig(url, agreeId);
    //this.myChild.setAgreementID(agreeId);
    //document.getElementsByClassName('ng-sidebar-container').style.width = 
    document.getElementById('search-sidebar').style.width = '81rem';
    document.getElementById('search-sidebar').style.height = '120rem';

  }


  // setAgreementId(REM_AGREEMENT_ID){
  //   alert("master");
  //   alert(REM_AGREEMENT_ID);
  //   console.log("item.REM_AGREEMENT_ID",REM_AGREEMENT_ID);
  //   this.myChild.setAgreementID(REM_AGREEMENT_ID);
  // }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }





  public rows: Array<any> = [];
  public columns: Array<any> = [];
  public showTable = false;
  public showFilter = true;

  columnNames: any = [];
  columnsList: any;
  conditionList: any;
  savedFilterList: any = [];
  searchText: any = '';
  searchFilters: Array<any> = [];
  columnSearch: Array<any> = [];
  saveFilterName: any = '';

  public pageNo: number = 1;
  public recordsPerPage: number = 50;
  public maxSize: number = 5;
  public numPages: number = 1;
  public count: number = 0;
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
    "pageName": "lease_search",
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
    saveWith: '',
    saveType: '',
    headers: '',
    columnFilterSearch: '',
    columnSearch: '',
    globalSearch: ''
  }
  public sortBy: any;
  // private data:Array<any> = Table;

  public searchList: any;
  public tableData: any = [];

  public headerList: any = [];
  public searchFilterList: any = [];
  public headersData: any = [];

  public filterListDataRequest = {
    "userId": "123",
    "name": "lease",

  }
  public typeFilter: any= '';
  constructor(private modalService: NgbModal, private sidebar: LpsSidebarServiceService, private tservice: LeasetableService, private fb: FormBuilder) {
    this.columnFilterSearchForm = this.fb.group({
      filterSearch: this.fb.array([this.createItem()]),
      headers: this.fb.array([]),
      globalSearch: ['']
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
      "pageName": "lease_search",
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
        console.log(data);
        this.columnNames = data.columns;
        // {label: "REM_Agreement ID", key: "REM_AGREEMENT_ID"}
        // let index = this.columnNames.findIndex(x => x.key === 'this.columnNames');
        // let index = this.columnNames.map(x => x.hello).indexOf('REM_AGREEMENT_ID')
        // let index = this.columnNames.indexOf('REM_AGREEMENT_ID')

        // for (let i = 0; i < this.columnNames.length; i++) {
        //     if (this.columnNames[i].key == 'REM_AGREEMENT_ID') {
        //       console.log(i);
        //       this.headerList.push(this.columnNames[i]);
        //       this.headers.push(this.columnNames[i].key);
        //       this.headersData.push(this.columnNames[i].label);
        //       this.columnNames.splice(i, 1);
        //       console.log(this.columnNames[i]);
        //       this.searchFilters.push({
        //         name: this.columnNames[i].label,
        //         key: this.columnNames[i].key,
        //         placeholder: 'Search',
        //         value:""
        //       });
        //     }
        // }
        this.headerList.push(this.columnNames[34]);
        this.headers.push(this.columnNames[34].key);
        this.headersData.push(this.columnNames[34].label);
        this.columnNames.splice(20, 1);
        this.searchFilters.push({
          name: "REM_Agreement ID",
          key: "REM_AGREEMENT_ID",
          placeholder: 'Search',
          value: ""
        });

        console.log(this.searchFilters, 'this.searchFilters')
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

    // if(this.headerList.length < 1 && this.headers.key != "REM_AGREEMENT_ID")
    // {
    //   this.headerList.push(this.columnNames[0]);
    //   this.headers.push(this.columnNames[0].key);
    //   this.headersData.push(this.columnNames[0].label);
    //   this.columnNames.splice(0, 1);
    // }
    // if(header.key != "REM_AGREEMENT_ID")
    // {
    console.log(header, "header")
    this.headerList.push(header)
    this.headers.push(header.key);
    this.headersData.push(header.label);
    // }
    this.columnNames.splice(index, 1);
    this.searchFilters.push({
      name: header.label,
      key: header.key,
      placeholder: 'Search',
      value: ""
    });
    console.log(this.searchFilters, 'this.searchFilters')
    // this.searchFilters.push({
    //   name: this.data.headers[i].label,
    //   key: this.data.headers[i].key,
    //   placeholder: 'Search by ' + this.data.headers[i].label,
    //   value:""
    // });
  }

  removeHeader(value, index) {
    if (value.key == "REM_AGREEMENT_ID") {
      alert("You cannot remove this Header")
    } else {
      this.columnNames.push(value);
      this.headerList.splice(index, 1);
      this.headersData.splice(index, 1);
      this.headers.splice(index, 1);
      this.searchFilters.splice(index, 1);
    }
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

  globalSearch(searchText) {
    this.requestData.globalSearch = this.searchText;
    console.log(this.requestData)
    this.getDataForSearch(this.requestData);
  }
  getDataBasedOnColumnSearch() {
    this.columnSearch = [];
    this.searchFilters = this.searchFilters.sort();
    for (let i = 0; i < this.searchFilters.length; i++) {
      if (this.searchFilters[i].value !== '' && this.searchFilters[i].value !== null && this.searchFilters[i].value !== undefined)
        this.columnSearch.push({
          column: this.searchFilters[i].key,
          value: this.searchFilters[i].value,
        })
    }
    console.log(this.columnSearch, "this.columnSearch")
    this.requestData.columnSearch = this.columnSearch;
    console.log(this.requestData, " this.requestData")
    // this.getDataForColumn(this.requestData);
    this.getDataForSearch(this.requestData);
  }
  openModal() {
    this.saveFilterName = '';
    $('#saveFilterModal').modal('show');
  }

  getDataForSearch(data) {
    this.searchFilterList = this.searchFilters;
    this.searchFilterList.sort((a, b) => {
      if (a.key < b.key) {
        return -1;
      } else if (a.key > b.key) {
        return 1;
      } else {
        return 0;
      }
    })
    this.columns = [];
    this.tservice.getDataForSearch(data)
      .subscribe((data: any) => {
        console.log("count dat", data)
        this.count = data.count;
        this.data = data;
        this.columns = [];
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

  getDataForColumn(data) {
    this.searchFilterList = this.searchFilters;
    this.searchFilterList.sort((a, b) => {
      if (a.key < b.key) {
        return -1;
      } else if (a.key > b.key) {
        return 1;
      } else {
        return 0;
      }
    })
    this.columns = [];
    this.tservice.getDataForColumn(data)
      .subscribe((data: any) => {
        console.log("count dat", data)
        this.count = data.count;
        this.data = data;
        this.columns = [];
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
    let data = this.filterDataMapping(filter)
  }

  filterDataMapping(filter) {
    console.log(filter, "filter")
    this.requestData.userId = '1221';
    this.requestData.pageName = "lease_search"
    this.requestData.headers = filter.headers;
    this.headers = filter.headers;
    this.requestData.columnFilterSearch = filter.columnFilterSearch;
    if (filter.columnSearch.length > 0) {
      for (let i = 0; i < filter.columnSearch.length; i++) {
        this.requestData.columnFilterSearch.push({
          column: filter.columnSearch[i].name,
          condition: 'contains',
          value: filter.columnSearch[i].value
        })
      }

    }
    this.columnFilterSearchForm.get('filterSearch').setValue(this.requestData.columnFilterSearch);
    this.requestData.columnSearch = [];
    this.requestData.globalSearch = filter.globalSearch;
    this.requestData.sortBy = filter.sortBy;
    this.requestData.sortType = filter.sortType;
    return this.requestData;
  }
  editSaveSearch(filter) {

    this.typeFilter = "update"
    let data = this.filterDataMapping(filter)
  }
  deleteSaveSearch(filter) {
    let data ={
    userId : '1221',
    pageName : "lease_search",
    headers : filter.headers,
    columnFilterSearch : filter.columnFilterSearch,
   columnSearch : filter.columnSearch,
   globalSearch : filter.globalSearch,
    sortBy :"",
    sortType :"",
    pageNo : 1,
    recordsPerPage: 5,
  
    saveType : "delete",
    saveWith : filter.name
    }
    this.typeFilter = "delete";
    this.filterOperations(data);

  }
  getFilterList() {
    this.savedFilterList = [];
    this.tservice.getSavedFilterList(this.filterListDataRequest).subscribe((response: any) => {
      this.savedFilterList = response;
    }, (error) => {
      console.log(error, "Error")
    })
  }
  filterOperations(data) {
    console.log(data)
    this.tservice.filterOperations(data).subscribe((response: any) => {
      console.log("sucssfully saved");
      $('#updateModal').modal('show');
      this.getFilterList();
    }, (error) => {
      console.log(error, "Error")
    })
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
  save(type) {

    $('#saveFilterModal').modal('hide');
    $('body').removeClass('modal-open');

    $('.modal-backdrop').remove();
    let columnFilterSearch = this.columnFilterSearchForm.value.filterSearch;
    if (columnFilterSearch.length == 1) {
      if (columnFilterSearch[0].column == '' || columnFilterSearch[0].condition == '' ||
        columnFilterSearch[0].value == '') {
        columnFilterSearch = [];
      }
    }
    this.dataToSend.userId = '1221';
    this.dataToSend.name = 'lease';
    this.dataToSend.saveWith = this.saveFilterName;
    this.dataToSend.saveType = type;
    this.dataToSend.headers = this.headers;
    this.dataToSend.columnFilterSearch = columnFilterSearch;
    this.dataToSend.columnSearch = this.columnSearch;
    this.dataToSend.globalSearch = this.searchText;
    console.log(this.dataToSend, " this.dataToSend")
    this.filterOperations(this.dataToSend);
  }
  filterText() {
    console.log("filterText")
  }

  setPageNumber(pageNo) {
    console.log("SendpageNumber", pageNo)
    this.pageNo = pageNo;
    this.requestData.pageNo = this.pageNo;
    console.log("SendpageNumber")
    console.log(this.requestData, " this.requestData")
    this.getDataForSearch(this.requestData);
  }

  sendPerPage(recordsPerPage) {
    this.recordsPerPage = recordsPerPage;
    this.requestData.recordsPerPage = this.recordsPerPage;
    this.getDataForSearch(this.requestData);
  }


  activeTab = 'search';

  searchTab(activeTab){
    this.activeTab = activeTab;
  }

  filterTab(activeTab){
    this.activeTab = activeTab;
    console.log(this.activeTab)
  }
  

}
