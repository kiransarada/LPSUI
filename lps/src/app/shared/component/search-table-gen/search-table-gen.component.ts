import { Component, OnInit } from '@angular/core';
import { Table } from './table';
import { LeasetableService } from './leasetable.service';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// import { Ng2TableModule } from 'ng2-table/ng2-table';

@Component({
  selector: 'app-search-table-gen',
  templateUrl: './search-table-gen.component.html',
  styleUrls: ['./search-table-gen.component.css']
})
export class SearchTableGenComponent implements OnInit {

  public rows:Array<any> = [];
  public columns:Array<any> = [
    {
      title: 'Agreement ID', 
      name: 'agreementId', 
      sort: 'asc',
      filtering: {filterString: '', placeholder: 'Search by Agreement ID'}
    },
    {
      title: 'FA Number',
      name: 'faNo',
      sort: 'asc',
      filtering: {filterString: '', placeholder: 'Search by FA Number'}
    },
    {
      title: 'Site Name', 
      className: '', 
      name: 'siteName', 
      sort: 'asc', 
      filtering: {filterString: '', placeholder: 'Search by Site Name'}
    },
    {
      title: 'Site USID',
      name: 'siteUsid',
      sort: 'asc',
      filtering: {filterString: '', placeholder: 'Search by Site USID'}
    },
    {
      title: 'Market', 
      className: '',
      name: 'market', 
      sort: 'asc',
      filtering: {filterString: '', placeholder: 'Search by Market'}
    },
    {
      title: 'Lease Status', 
      name: 'leaseStatus', 
      sort: 'asc',
      filtering: {filterString: '', placeholder: 'Search by Lease Status'}
    }
  ];
  columnsName:any = ["SiteName","Site USID","AggreementId"];
  conditionList:any = ["equal","contains","greaterthan"];
  savedFilterList:any = ["Lease Status Active","Site USID 63"];
  recordsPerPageList:any =[8,10,15]
  public page:number = 1;
  public itemsPerPage:number = 4;
  public maxSize:number = 5;
  public numPages:number = 1;
  public length:number = 0;

  public config:any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: ''},
    className: ['table-striped', 'table-bordered']
  };
  public data: Table[]=[];

  // private data:Array<any> = Table;

  constructor(private tservice: LeasetableService) {
    this.length = this.data.length;

  }

  public ngOnInit():void {
    this.onChangeTable(this.config);
    this.tservice.getCharacters()
          .subscribe((data: Table[]) => {
            this.data = data;
            console.log("character", this.data);
        });

     
  }

  public changePage(page:any, data:Array<any> = this.data):Array<any> {
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data:any, config:any):any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName:string = void 0;
    let sort:string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        console.log("insideif ",columnName)
        sort = columns[i].sort;
      }
    }
    console.log("sort",!columnName,columnName,sort)


    if (columnName === ''|| columnName === null|| columnName=== undefined) {
      console.log('inside colnamececheck')
      return data;
    }
    console.log('outide colnamececheck')
//     data.sort((a,b) =>{
// return  a[columnName] - b[columnName]
//     })
    
    // simple sorting
     data.sort((previous:any, current:any) => {
      console.log(previous[columnName],current[columnName],previous[columnName] > current[columnName])
      if (previous[columnName] > current[columnName]) {
        console.log("chek sort",sort == 'desc' ? -1 : 1);
        return sort == 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort == 'asc' ? 1 : -1;
      }
      return 0;
    });
    console.log("dataaa",data)
    return data;
  }

  public changeFilter(data:any, config:any):any {
    let filteredData:Array<any> = data;
    this.columns.forEach((column:any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item:any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item:any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    let tempArray:Array<any> = [];
    filteredData.forEach((item:any) => {
      let flag = false;
      this.columns.forEach((column:any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
    // console.log('5rdawre7')
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.data= page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
    console.log(data);
  }
}
