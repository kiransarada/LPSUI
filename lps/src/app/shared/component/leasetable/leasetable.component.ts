import { Component, OnInit } from '@angular/core';
import { LeasetableService } from './leasetable.service';
import { Table } from './table';

@Component({
  selector: 'app-leasetable',
  templateUrl: './leasetable.component.html',
  styleUrls: ['./leasetable.component.css']
 

})
export class LeasetableComponent implements OnInit {

  public leaseData: Table[];
  public filterData:any;

  public searchText : string;
  public searchTextColumn : String;
  recordsPerPageList:any =[8,10,15];

  // public customerData : any;

  // public headerSettings = {
  //       columns: {
  //         agreementId: {
  //           title: 'Agreement ID'
  //         },
  //         faNo:{
  //           title: 'FA Number'
  //         },
  //         siteName: {
  //           title: 'Site Name'
  //         },
  //         siteUsid: {
  //           title: 'Site USID'
  //         },
  //         market: {
  //           title: 'Market'
  //         },
  //         leaseStatus: {
  //           title: 'Lease Status'
  //         }
  //       },

  //     };
            
      headElements = ['Agreement ID','FA Number', 'Site Name', 'Site USID', 'Market','Lease Status'];

    constructor(private tservice: LeasetableService) { }
      
    ngOnInit() {
              // this.settings.pager.display = true;

        this.tservice.getCharacters()
          .subscribe((data: Table[]) => {
            this.leaseData = data;
            console.log("character", this.leaseData);
        });

        // console.log(this.headerSettings.columns);
    }

    search(term: string) {
      console.log(term,this.filterData);
      if(!term) {
        console.log("if");
        this.filterData = this.leaseData;
      } else {
        console.log("else");
        this.filterData = this.leaseData.filter(x => 
           x.siteName.trim().toLowerCase().includes(term.trim().toLowerCase())
        );
      }
    }
}

