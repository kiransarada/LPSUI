import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SiteDynamicOverlayComponent } from '../../Site/site-tabs/site-dynamic-overlay.component';
import { LpsSidebarServiceService } from '../services/lps-sidebar-service.service';
import { LeasetableService } from './search-table-gen/leasetable.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { LeaseBasicService } from 'src/app/components/leasedatasheet/lease-details-tabs/lease-tab.service';
import { NgxSpinnerService } from 'ngx-spinner';
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
  status:string;
  statusFlag:boolean = false;
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
    pageName: "lease_search",
    saveWith: '',
    saveType: '',
    headers: '',
    columnFilterSearch: '',
    columnSearch: '',
    globalSearch: ''
  }
  public sortBy: any;
  public sortType: any;
  // private data:Array<any> = Table;

  public searchList: any;
  public tableData: any = [];

  public headerList: any = [];
  public searchFilterList: any = [];
  public headersData: any = [];
  public showIcon = false;
  public filterListDataRequest = {
    "userId": "123",
    "name": "lease",

  }
  public typeFilter: any = '';
  public searchType: any;
  public length: any;
  public remData: any;
  public headersLength: any;
  private showAsc = [];
  private showDesc = [];
  private showSort = [];

  constructor(private modalService: NgbModal, private sidebar: LpsSidebarServiceService, private leaseBasicService: LeaseBasicService, private tservice: LeasetableService,
    private fb: FormBuilder, private spinner: NgxSpinnerService) {
    this.columnFilterSearchForm = this.fb.group({
      filterSearch: this.fb.array([this.createItem()]),
      headers: this.fb.array([]),
      globalSearch: ['']
    })
    // this.length = this.data.length;

  }

  public ngOnInit(): void {
    this.getColumnListWithConditions();
    this.spinner.show()
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
      .subscribe((response: any) => {
        this.spinner.hide()
        console.log(response);
        this.columnNames = response.columns;
        let i = this.columnNames.findIndex(x =>
          x.key == "REM_AGREEMENT_ID");
        if (i > -1) {
          console.log(i, this.columnNames[i])
          this.remData = this.columnNames[i];
          this.headerList.push(this.columnNames[i]);
          this.headers.push(this.columnNames[i].key);
          this.headersData.push(this.columnNames[i].label);
          this.searchFilters.push({
            name: this.columnNames[i].label,
            key: this.columnNames[i].key,
            placeholder: 'Search',
            value: ""
          });
          this.columnNames.splice(i, 1);
        }

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
  updateItem(data): FormGroup {
    return this.fb.group({
      column: [data.column, Validators.required],
      value: [data.value, Validators.required],
      condition: [data.condition, Validators.required]
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
    this.headerList.push(header)
    this.headers.push(header.key);
    this.headersData.push(header.label);
    this.columnNames.splice(index, 1);
    if(this.columnNames.length == 0)
    {
      this.statusFlag = true;
      this.status = "All Columns are Selected";
    }
    this.searchFilters.push({
      name: header.label,
      key: header.key,
      placeholder: 'Search',
      value: ""
    });
  }

  removeHeader(value, index) {
    if(this.columnNames.length == 0)
    {
      this.statusFlag = false;
    }
    if (value.key == "REM_AGREEMENT_ID") {
      alert("You cannot remove this Header")
    } else {
      this.columnNames.push(value);
      this.headerList.splice(index, 1);
      this.headersData.splice(index, 1);
      this.headers.splice(index, 1);
      this.searchFilters.splice(index, 1);
      this.columnNames.sort((a, b) => {
        if (a.key < b.key) {
          return -1;
        } else if (a.key > b.key) {
          return 1;
        } else {
          return 0;
        }
      })
    }
  }

  search() {
    this.searchText = '';
    this.spinner.show();
    this.searchType = true;
    this.sortType = '';
    this.sortBy = '';
    this.requestData.headers = this.headers;
    let columnFilterSearch1 = this.columnFilterSearchForm.value.filterSearch;
    if (columnFilterSearch1.length == 1) {
      if (columnFilterSearch1[0].column == '' || columnFilterSearch1[0].condition == '' || columnFilterSearch1[0].value == '') {
        columnFilterSearch1 = [];
      }
    }
    this.requestData.columnFilterSearch = columnFilterSearch1;
    this.requestData.columnSearch =[];
    this.requestData.globalSearch = '';
    this.requestData.sortBy = "";
    this.requestData.sortType = "";

    this.searchFilterList = this.searchFilters;
    let index = this.searchFilterList.findIndex(x =>
      x.key == "REM_AGREEMENT_ID");
    this.searchFilterList.splice(index, 1);
    this.searchFilterList.splice(0, 0, {
      name: this.remData.label,
      key: this.remData.key,
      placeholder: 'Search',
      value: ""
    });
console.log( this.searchFilterList," this.searchFilterList")
    this.getDataForSearch(this.requestData);

  }
  filterShow() {
    this.showFilter = !this.showFilter;
    this.showTable = !this.showTable;
    // if (this.tableData.length > 0) {
    //   this.showTable = !this.showTable;
    // }
  }

  globalSearch(searchText) {
    this.showFilter = false;
    this.showTable = true;
    this.sortType = '';
    this.sortBy = '';
    this.searchType = false;
    this.requestData.globalSearch = this.searchText;
    this.getDataForSearch(this.requestData);
  }
  getDataBasedOnColumnSearch() {
    this.searchType = false;
    this.columnSearch = [];
    console.log(this.searchFilters)
    for (let i = 0; i < this.searchFilters.length; i++) {
      if (this.searchFilters[i].value !== '' && this.searchFilters[i].value !== null && this.searchFilters[i].value !== undefined)
        this.columnSearch.push({
          column: this.searchFilters[i].key,
          value: this.searchFilters[i].value,
        })
    }
    console.log(this.requestData, " this.requestData.columnSearch")
    this.requestData.columnSearch = this.columnSearch;
    this.getDataForSearch(this.requestData);
  }
  openModal() {
    // this.saveFilterName = '';
    $('#editModal').modal('hide');
    $('#saveFilterModal').modal('show');
  }

  getDataForSearch(dataToSend) {
  
  
    this.tservice.getDataForSearch(dataToSend)
      .subscribe((data: any) => {
        this.spinner.hide();
        this.showIcon = true;
        this.count = data.count;
        this.data = data;
        this.headersLength = data.headers.length;
        if (this.searchType) {
          this.columns = [];
          for (let i = 0; i < this.data.headers.length; i++) {

            this.columns.push({
              labelName: this.data.headers[i].label,
              key: this.data.headers[i].key,
              sort: "asc",
            })

            this.showSort.push({
              key: true
            })
            this.showDesc.push({
              key: false
            })

            this.showAsc.push({
              key: false
            })

          }
        }
        if (data.data[0].Message == "No Record Found") {
          this.length = 0;
          this.tableData = [];
        } else {
          this.tableData = data.data;
          this.length = data.data.length;
        }
        this.showFilter = false;
        this.showTable = true;

      });
  }

  runSaveSearch(filter) {
    this.spinner.show()
    $('#profile-tab').removeClass('active');
    $('#home-tab').addClass('active');

    let data = this.filterDataMapping(filter)
    data.pageNo = 1;
    data.recordsPerPage = 50;
    data.saveWith = filter.name;
    this.runFliter(data);
  }

  filterDataMapping(filter) {
    this.headers = [];
    this.headersData = [];
    this.headerList = [];
    this.searchFilters = [];
    this.requestData.userId = '1221';
    this.requestData.pageName = "lease_search"
    this.requestData.headers = filter.headers;

    for (let i = 0; i < filter.headers.length; i++) {
      let index = this.columnNames.findIndex(x =>
        x.key == filter.headers[i]);
      if (filter.headers[i] == "REM_AGREEMENT_ID") {
        this.headerList.push(this.remData.key)
        console.log("if headerlist", this.headerList)
        this.headers.push(this.remData.key);
        console.log("if headers", this.headers)
        this.headersData.push(this.remData.label);
        console.log("if headerdata", this.headersData);
        this.searchFilters.splice(0, 0, {
          name: this.remData.label,
          key: this.remData.key,
          placeholder: 'Search',
          value: ""
        });

      }
      else {
        this.headerList.push(filter.headers[i])
        this.headers.push(filter.headers[i]);
        this.headersData.push(filter.headers[i]);
        this.searchFilters.push({
          name: filter.headers[i],
          key: filter.headers[i],
          placeholder: 'Search',
          value: ""
        });
      }
      // else if (index !== -1) {
      //   this.headerList.push(this.columnNames[index])
      //   console.log("else if headerlist", this.headerList)
      //   this.headers.push(this.columnNames[index].key);
      //   console.log("else if headers", this.headers)
      //   this.headersData.push(this.columnNames[index].label);
      //   console.log("else if headersdata", this.headersData)
      //   this.searchFilters.push({
      //     name: this.columnNames[index].label,
      //     key: this.columnNames[index].key,
      //     placeholder: 'Search',
      //     value: ""
      //   });

      // }
      this.columnNames.splice(index, 1);
    }
    this.searchFilterList = this.searchFilters;
    this.searchFilterList.sort((a, b) => {
      if (a.key < b.key) {
        return -1;
      } else if (a.key > b.key) {
        return 1;
      } else {
        return 0;
      }
    });

    let index = this.searchFilterList.findIndex(x =>
      x.key == "REM_AGREEMENT_ID");
    this.searchFilterList.splice(index, 1);
    this.searchFilterList.splice(0, 0, {
      name: this.remData.label,
      key: this.remData.key,
      placeholder: 'Search',
      value: ""
    });

    this.filterSearch = this.columnFilterSearchForm.get('filterSearch') as FormArray;
    // this.columnFilterSearchForm.reset();
    // this.filterSearch.reset();
    console.log(filter.columnFilterSearch,"filter.columnFilterSearch")
    for (let i = this.filterSearch.length-1; i >= 0; i--) {
      this.filterSearch.removeAt(i);
    }
    console.log(this.filterSearch,"this.filterSearch")
    for (let i = 0; i < filter.columnFilterSearch.length; i++) {

      this.filterSearch.push(this.updateItem(filter.columnFilterSearch[i]));
    }

    console.log( this.filterSearch,"filter.Befirwe")
    this.requestData.columnFilterSearch = filter.columnFilterSearch;
    if (filter.columnSearch.length > 0) {
      for (let i = 0; i < filter.columnSearch.length; i++) {
        this.filterSearch.push(this.updateItem({
          column: filter.columnSearch[i].column,
          condition: 'Contains',
          value: filter.columnSearch[i].value
        }));

      }

    }
    console.log( this.filterSearch,"filter.After")
    if (this.filterSearch.length == 0) {
      this.filterSearch.push(this.createItem())
    }
    this.requestData.columnSearch = [];
    this.requestData.globalSearch = filter.globalSearch;
    this.requestData.sortBy = "";
    this.requestData.sortType = "";
    console.log(this.searchFilters,"this.searchFilters")
    return this.requestData;
  }
  editSaveSearch(filter) {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
    $('#profile-tab').removeClass('active');
    $('#home-tab').addClass('active');
    this.typeFilter = "update";
    this.showFilter = true;
    this.showTable = false;
    this.saveFilterName = filter.name;
    let data = this.filterDataMapping(filter)
  }
  filter: any;
  delete(filter) {
    this.filter = filter;
    $('#deleteModal').modal('show');
  }
  deleteSaveSearch() {
    let filter = this.filter;
    let data = {
      userId: '1221',
      pageName: "lease_search",
      headers: filter.headers,
      columnFilterSearch: filter.columnFilterSearch,
      columnSearch: filter.columnSearch,
      globalSearch: filter.globalSearch,
      sortBy: "",
      sortType: "",
      pageNo: 1,
      recordsPerPage: 5,

      saveType: "delete",
      saveWith: filter.name
    }
    console.log(data, "data")
    this.typeFilter = "deleted";
    this.filterOperations(data);
    $('#profile-tab').addClass('active');
    $('#home-tab').removeClass('active');

  }
  onSearch() {
    this.showIcon = true;
    this.showFilter = true;
 }
  getFilterList() {
    this.showIcon = false;
    this.spinner.show();
    this.savedFilterList = [];
    this.tservice.getSavedFilterList(this.filterListDataRequest).subscribe((response: any) => {
      this.savedFilterList = response;
      // this.showFilter = false;
      // this.showTable = false;
      this.spinner.hide();
    }, (error) => {
      console.log(error, "Error")
    })
  }
  filterOperations(data) {
    this.tservice.filterOperations(data).subscribe((response: any) => {
    
      if (response.message == 'Record Existing ') {
        $('#editModal').modal('show');
      } else {
        $('#updateModal').modal('show');
        this.getFilterList();
        // window.location.reload();
      }
    }, (error) => {
      console.log(error, "Error")
    })
  }
  runFliter(dataToSend) {
    this.tservice.runFliter(dataToSend).subscribe((data: any) => {
      this.searchFilters = [];
      this.spinner.hide();
      this.showIcon = true;
      this.count = data.count;
      this.data = data;
      this.columns = [];
      for (let i = 0; i < this.data.headers.length; i++) {

        this.columns.push({
          labelName: this.data.headers[i].label,
          key: this.data.headers[i].key,
          sort: "asc",
        });
        this.searchFilters.push({
          name: this.data.headers[i].label,
          key: this.data.headers[i].key,
          placeholder: 'Search',
          value: ""
        });
        this.showDesc.push({
          key: false
        })

        this.showAsc.push({
          key: false
        })

        this.showSort.push({
          key: true
        })
      }
      if (data.data[0].Message == "No Record Found") {
        this.length = 0;
        this.tableData = [];
      } else {
        this.tableData = data.data;
        this.length = data.data.length;
      }
      this.showFilter = false;
      this.showTable = true;
    }, (error) => {
      console.log(error, "Error")
    })
  }

  sort(type, sortBy, index) {
    if(type == 'first'){
      this.showSort[index].key = false;
      this.showDesc[index].key = false;
      this.showAsc[index].key = true;
      console.log(this.data.headers,"this.data.headers")
      for (let i = 0; i < this.data.headers.length; i++) {  
        if(i !== index){    
          this.showSort[i].key = true;
          this.showAsc[i].key = false;
          this.showDesc[i].key = false;
        }
      }

    }



   else if (type == 'desc') {
      this.showDesc[index].key = false;
      this.showAsc[index].key = true;
    } else if (type == 'asc') {
      this.showDesc[index].key = true;
      this.showAsc[index].key = false;
    }
    this.searchType = false;
    this.sortType = type;
    this.sortBy = sortBy
    this.columns[index]['sort'] = type;
    this.requestData.sortBy = sortBy;
    this.requestData.sortType = type;
    this.requestData.sortType = type;
    this.getDataForSearch(this.requestData);
  }
  save(type) {
    if (type == "save") {
      this.typeFilter = "saved";
    } else {
      this.typeFilter = "updated";
    }

    // this.typeFilter = type;
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
    this.filterOperations(this.dataToSend);
  }
  filterText() {
    console.log("filterText")
  }

  setPageNumber(pageNo) {
    this.searchType = false;
    this.pageNo = pageNo;
    this.requestData.pageNo = this.pageNo;
    this.getDataForSearch(this.requestData);
  }

  sendPerPage(recordsPerPage) {
    this.searchType = false;
    this.recordsPerPage = recordsPerPage;
    this.requestData.recordsPerPage = this.recordsPerPage;
    this.getDataForSearch(this.requestData);
  }


  activeTab = 'search';

  searchTab(activeTab) {
    this.activeTab = activeTab;
  }

  filterTab(activeTab) {
    this.activeTab = activeTab;
    console.log(this.activeTab)
  }

  public leaseDatasheet: any;
  getleaseDataSheetData() {
    this.leaseBasicService
      .getleasedatasheet()
      .subscribe((leaseDatasheet) => {
        this.leaseDatasheet = leaseDatasheet;
      })

  }

}
