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
  status: string;
  statusFlag: boolean = false;
  showFlag: boolean = true;
  private _MODES: Array<string> = ['over', 'push', 'slide'];
  private _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];
  closeResult: string;

  private _toggleOpened(): void {
    this._opened = !this._opened;
    this.showFlag = true;
    var sidebar_width = document.getElementById("sidebar").offsetWidth;
    // alert(sidebar_width);
    if(sidebar_width == 187){
      document.getElementById("search-sidebar").style.width = "95vw";
      document.getElementById("footer-pos").style.left = "9%"; 
  }
  else{
    document.getElementById("search-sidebar").style.width = "85vw";
      document.getElementById("footer-pos").style.left = "14%"; 
  }
   
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
    // console.log('Sidebar opened');
  }

  private _onCloseStart(): void {
    // console.log('Sidebar closing');
  }

  private _onClosed(): void {
    // console.log('Sidebar closed');
  }

  private _onTransitionEnd(): void {
    // console.log('Transition ended');
  }

  private _onBackdropClicked(): void {
    // console.log('Backdrop clicked');
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
    // document.getElementById('search-sidebar').style.width = '81rem';
    // document.getElementById('search-sidebar').style.height = '120rem';

  }

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
    "userId": "1221",
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
    userId: '1221',
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
    "userId": "1221",
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
  filterSearchData: any;
  from: any = 1;
  to: any = 50;

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
      "userId": "1221",
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
    this.searchFilters =[];
    this.headerList=[];
    this.headers =[];
    this.headersData;
    this.tservice.getColumnListWithConditions(data)
      .subscribe((response: any) => {
        this.spinner.hide()

        this.columnNames = response.columns;
        let i = this.columnNames.findIndex(x =>
          x.key == "REM_AGREEMENT_ID");
        if (i > -1) {
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
    this.headerList.push(header);
    this.headers.push(header.key);
    this.headersData.push(header.label);
    this.columnNames.splice(index, 1);
    if (this.columnNames.length == 0) {
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
    console.log(value, index, "value, index")
    if (this.columnNames.length == 0) {
      this.statusFlag = false;
    }
    if (value.key == "REM_AGREEMENT_ID") {
      $("#cantremoveremid").modal("show")
      // alert("You cannot remove this Header")
    } else {
      this.columnNames.push(value);
      this.headerList.splice(index, 1);
      this.headersData.splice(index, 1);
      this.headers.splice(index, 1);
      this.searchFilters.splice(index, 1);

    }
    this.columnNames.sort((a, b) => {
      if (a.label < b.label) {
        return -1;
      } else if (a.label > b.label) {
        return 1;
      } else {
        return 0;
      }
    })

  }

  search() {
    // this.searchText = '';
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
    this.requestData.columnSearch = [];
    this.requestData.globalSearch = '';
    this.requestData.sortBy = "";
    this.requestData.sortType = "";

    this.searchFilterList = this.searchFilters;
    this.searchFilters.sort((a, b) => {
      if (a.label < b.label) {
        return -1;
      } else if (a.label > b.label) {
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

    this.getDataForSearch(this.requestData);

  }
  filterShow() {
    this.showFilter = !this.showFilter;
    this.showTable = !this.showTable;
    if (this.data.headers.length > 0) {
      console.log("Inside")
      this.searchFilters.sort((a, b) => {
        if (a.label < b.label) {
          return -1;
        } else if (a.label > b.label) {
          return 1;
        } else {
          return 0;
        }
      });

      let index = this.searchFilters.findIndex(x =>
        x.key == "REM_AGREEMENT_ID");
      this.searchFilters.splice(index, 1);
      this.searchFilters.splice(0, 0, {
        name: this.remData.label,
        key: this.remData.key,
        placeholder: 'Search',
        value: ""
      });


      for (let i = this.searchFilters.length - 1; i >= 0; i--) {
        let index = this.data.headers.findIndex(x =>
          x.key == this.searchFilters[i].key);
        if (index == -1) {
          let j = this.headers.indexOf(this.searchFilters[i].key);
          this.headers.splice(j, 1);

          let k = this.headerList.findIndex(y => y.key == this.searchFilters[i].key);
          this.headerList.splice(k, 1);

          let l = this.headersData.indexOf(this.searchFilters[i].label);
          this.headersData.splice(l, 1);
          this.columnNames.push({ label: this.searchFilters[i].name, key: this.searchFilters[i].key });

          this.searchFilters.splice(i, 1);

        }
      }

      for (let i = 0; i < this.data.headers.length; i++) {
        let index = this.searchFilters.findIndex(x =>
          x.key == this.data.headers[i].key);
        if (index == -1) {
          this.headers.push(this.data.headers[i].key);
          this.headerList.push(this.data.headers[i]);
          this.headersData.push(this.data.headers[i].label);
          let m = this.columnNames.findIndex(y => y.key == this.data.headers[i].key);
          this.columnNames.splice(m, 1);

          this.searchFilters.splice(i, 0, {
            name: this.data.headers[i].label,
            key: this.data.headers[i].key,
            placeholder: 'Search',
            value: ""
          });
        }
      }
      this.columnNames.sort((a, b) => {
        if (a.label < b.label) {
          return -1;
        } else if (a.label > b.label) {
          return 1;
        } else {
          return 0;
        }
      });

      this.filterSearch = this.columnFilterSearchForm.get('filterSearch') as FormArray;
      this.filterSearchData = this.columnFilterSearchForm.value.filterSearch;

      if (this.requestData.columnFilterSearch.length > 0) {
        for (let j = this.filterSearchData.length - 1; j >= 0; j--) {
          let q = this.requestData.columnFilterSearch.findIndex(y => y.column == this.filterSearchData[j].column && y.condition == this.filterSearchData[j].condition && y.value == this.filterSearchData[j].value);
          if (q == -1) {
            this.filterSearch.removeAt(j);
          }

        }

        for (let i = 0; i < this.requestData.columnFilterSearch.length; i++) {
          let q = this.filterSearchData.findIndex(y => y.column == this.requestData.columnFilterSearch[i].column && y.condition == this.requestData.columnFilterSearch[i].condition && y.value == this.requestData.columnFilterSearch[i].value);
          if (q == -1) {
            this.filterSearch.push(this.updateItem(this.requestData.columnFilterSearch[i]));
          }
        }


      }
    } else {
      for (let i = this.filterSearch.length - 1; i >= 0; i--) {
        this.filterSearch.removeAt(i);
      }
      this.filterSearch.push(this.createItem())
    }



  }


  // if (this.tableData.length > 0) {
  //   this.showTable = !this.showTable;
  // }
  // }

  globalSearch(searchText) {
    this.spinner.show();
    this.showFilter = false;
    this.showTable = true;
    this.sortType = '';
    this.sortBy = '';
    this.searchType = false;
    let searchTextValue = this.searchText;
    searchTextValue = searchTextValue ? searchTextValue.replace(/^\s+|\s+$/gm, '') : '';
    this.requestData.globalSearch = searchTextValue;
    this.getDataForSearch(this.requestData);
  }
  getDataBasedOnColumnSearch() {
    setTimeout(() => {
      //run code

      this.spinner.show();
      this.searchType = false;
      this.columnSearch = [];
      console.log(this.searchFilters);
      for (let i = 0; i < this.searchFilters.length; i++) {
        if (this.searchFilters[i].value !== '' && this.searchFilters[i].value !== null && this.searchFilters[i].value !== undefined) {
          let searchFilterValue = this.searchFilters[i].value;
          searchFilterValue = searchFilterValue ? searchFilterValue.replace(/^\s+|\s+$/gm, '') : '';
          this.columnSearch.push({
            column: this.searchFilters[i].key,
            value: searchFilterValue,
          });
        }
      }
      console.log(this.requestData, 'this.requestData.columnSearch');
      this.requestData.columnSearch = this.columnSearch;
      this.getDataForSearch(this.requestData);
    }, 1000);
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

          this.to = ((this.pageNo - 1) * this.recordsPerPage) + this.data.data.length;
          this.from = ((this.pageNo - 1) * this.recordsPerPage) + 1;
        }
        this.showFilter = false;
        this.showTable = true;

      });
  }

  runSaveSearch(filter) {
    this.spinner.show()
    this.showFilter = false;
    this.showTable = true;
    let data = this.filterDataMapping(filter)
    data.pageNo = 1;
    data.recordsPerPage = 50;
    data.saveWith = filter.name;
    this.runFliter(data);


  }

  filterDataMapping(filter) {
    console.log(filter, "filter")
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
      console.log(filter.headers[i], "filter.headers[i]")
      if (filter.headers[i] == "REM_AGREEMENT_ID") {
        this.headerList.push(this.remData)
        // console.log("if headerlist", this.headerList)
        this.headers.push(this.remData.key);
        // console.log("if headers", this.headers)
        this.headersData.push(this.remData.label);
        // console.log("if headerdata", this.headersData);
        this.searchFilters.splice(0, 0, {
          name: this.remData.label,
          key: this.remData.key,
          placeholder: 'Search',
          value: ""
        });

      }
      else {
        let index = this.columnNames.findIndex(x =>
          x.key == filter.headers[i]);
        this.headerList.push(this.columnNames[index])
        this.headers.push(filter.headers[i]);
        this.headersData.push(filter.headers[i]);
        this.searchFilters.push({
          name: filter.headers[i],
          key: filter.headers[i],
          placeholder: 'Search',
          value: ""
        });
      }

      this.columnNames.splice(index, 1);
    }
    this.searchFilterList = this.searchFilters;
    this.searchFilterList.sort((a, b) => {
      if (a.label < b.label) {
        return -1;
      } else if (a.label > b.label) {
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

    for (let i = this.filterSearch.length - 1; i >= 0; i--) {
      this.filterSearch.removeAt(i);
    }

    for (let i = 0; i < filter.columnFilterSearch.length; i++) {

      this.filterSearch.push(this.updateItem(filter.columnFilterSearch[i]));
    }


    this.requestData.columnFilterSearch = filter.columnFilterSearch;
    if (filter.columnSearch.length > 0) {
      for (let i = filter.columnSearch.length - 1; i >= 0; i--) {
        this.filterSearch.push(this.updateItem({
          column: filter.columnSearch[i].column,
          condition: 'Contains',
          value: filter.columnSearch[i].value
        }));

      }

    }

    if (this.filterSearch.length == 0) {
      this.filterSearch.push(this.createItem())
    }

    this.requestData.columnFilterSearch = this.filterSearch.value;
    this.requestData.columnSearch = [];
    this.requestData.globalSearch = filter.globalSearch;
    this.requestData.saveWith =
      this.requestData.sortBy = "";
    this.requestData.sortType = "";

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
    this.spinner.show()
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

    this.typeFilter = "deleted";
    this.filterOperations(data);
    $('#profile-tab').addClass('active');
    $('#home-tab').removeClass('active');

  }
  onSearch() {
    if (this.data.headers.length > 0) {
      this.showIcon = true;
    }
    this.showFilter = true;
    this.showTable = false;

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
      this.spinner.hide()
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
    this.spinner.hide();
  }
  runFliter(dataToSend) {
    this.showTable = false;
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
      $('#profile-tab').removeClass('active');
      $('#home-tab').addClass('active');

      this.showFilter = false;
      this.showTable = true;

    }, (error) => {
      console.log(error, "Error")
    })
  }

  sort(type, sortBy, index) {
    this.spinner.show()
    if (type == 'first') {
      this.showSort[index].key = false;
      this.showDesc[index].key = false;
      this.showAsc[index].key = true;

      for (let i = 0; i < this.data.headers.length; i++) {
        if (i !== index) {
          this.showSort[i].key = true;
          this.showAsc[i].key = false;
          this.showDesc[i].key = false;
        }
      }

    }



    else if (type == 'desc') {
      this.showDesc[index].key = true;
      this.showAsc[index].key = false;
    } else if (type == 'asc') {
      this.showDesc[index].key = false;
      this.showAsc[index].key = true;
    }
    this.searchType = false;
    this.sortType = type;
    this.sortBy = sortBy
    this.columns[index]['sort'] = type;
    this.requestData.sortBy = sortBy;
    if (type != 'first')
      this.requestData.sortType = type;
    else
      this.requestData.sortType = 'asc';

    // this.requestData.sortType = type;
    // this.requestData.sortType = type;
    this.getDataForSearch(this.requestData);
  }
  save(type) {
    console.log(this.saveFilterName,"this.saveFilterName")
    let saveFilterName = this.saveFilterName ? this.saveFilterName.replace(/^\s+|\s+$/gm, '') : '';
    if (saveFilterName !== '') {
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

      for (let i = 0; i < columnFilterSearch.length; i++) {
        if (columnFilterSearch[i].value !== '' && columnFilterSearch[i].value !== null && columnFilterSearch[i].value !== undefined) {
          columnFilterSearch[i].value = columnFilterSearch[i].value ? columnFilterSearch[i].value.replace(/^\s+|\s+$/gm, '') : '';

        }
      }

      if (columnFilterSearch.length == 1) {
        if (columnFilterSearch[0].column == '' || columnFilterSearch[0].condition == '' ||
          columnFilterSearch[0].value == '') {
          columnFilterSearch = [];
        }
      }
      this.dataToSend.userId = '1221';
      this.dataToSend.name = 'lease';
      this.dataToSend.saveWith = saveFilterName;
      this.dataToSend.saveType = type;
      this.dataToSend.headers = this.headers;
      this.dataToSend.columnFilterSearch = columnFilterSearch;
      this.dataToSend.columnSearch = this.columnSearch;
      this.dataToSend.globalSearch = this.searchText;
      this.spinner.show()
      this.filterOperations(this.dataToSend);
      // this.saveFilterName='';
    } else {
      alert("Name is Invalid");
    }
  }
  filterText() {
    console.log("filterText")
  }

  setPageNumber(pageNo) {
    this.spinner.show()
    this.searchType = false;
    this.pageNo = pageNo;
    this.requestData.pageNo = this.pageNo;
    this.getDataForSearch(this.requestData);
  }

  sendPerPage(recordsPerPage) {
    this.spinner.show()
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

  clearFilter(){
    this.recordsPerPage = 50;
    this.pageNo = 1;
    this.showTable = false;
    this.showFilter= true;
    this.showIcon = true;
    this.searchType = true;
    this.headerList=[];
    this.headers =[];
    this.headersData=[];
    this.filterSearch = this.columnFilterSearchForm.get('filterSearch') as FormArray;
    for (let i = this.filterSearch.length - 1; i >= 0; i--) {
      this.filterSearch.removeAt(i);
    }
    if (this.filterSearch.length == 0) {
      this.filterSearch.push(this.createItem())
    }
    this.requestData = {
      "userId": "1221",
      "pageName": "lease_search",
      "pageNo": 1,
      "recordsPerPage": 50,
      "sortBy": "",
      "sortType": "",
      "headers": [],
      "columnFilterSearch": [],
      "columnSearch": [],
      "globalSearch": ""
    };
    this.sortType = '';
    this.sortBy = '';
    this.searchText ='';
   
    this.getColumnListWithConditions();
  }
}
