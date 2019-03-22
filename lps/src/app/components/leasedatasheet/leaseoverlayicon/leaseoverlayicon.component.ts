import { Component, OnInit } from '@angular/core';

import { LeaseBasicService } from '../lease-details-tabs/lease-tab.service';
import { Http, ResponseContentType } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
declare let jsPDF;
@Component({
  selector: 'app-leaseoverlayicon',
  templateUrl: './leaseoverlayicon.component.html',
  styleUrls: ['./leaseoverlayicon.component.css']
})
export class LeaseoverlayiconComponent implements OnInit {
  aggrementId:any;
  
  constructor(private leaseBasicService:LeaseBasicService) { }
  pdffile ={};
  downloadpdfFile(){
    
        var item = {
        "Site Name" : "AL5155 ROCK SPRING",
        "Address" : "144 TANGLEWOOD DRIVE",
        "Market" : "TENNESSEE/KENTUCKY",
        "Facility Name" : "AL5155 ROCK SPRING"
      };
      
      var doc = new jsPDF();
      var col = ["Site Summary",""];
      var rows = [];
      for(var key in item){
          var temp = [key, item[key]];
          rows.push(temp);
      }     
      // doc.autoTable(col, rows);
      doc.autoTable(col, rows, {
        margin: {horizontal: 10}
    });
      doc.save('Leasedatasheet.pdf');
    
  }
  ngOnInit() {
    // this.pdfService
    // .getpdffile()
    // .subscribe((data)=>{
    //   console.log(data);   
    //   this.pdffile = data['data'];  
    //   console.log(this.pdffile);     
    // });
  }
  // onClick(event: Event) {
  //   this.pdfService
  //   .getpdffile()
  //   .subscribe((data)=>{
  //     console.log(data);   
  //     this.pdffile = data['path'];  
  //     console.log(this.pdffile);     
  //   });
  //   console.log('click', event)
  // }
  // getAggrementId(aggrementId){
  //   this.aggrementId = aggrementId;
  //   this.leaseBasicService.setAggrementId(aggrementId);
  //   console.log( this.aggrementId," this.aggrementId")
  // }
  public leaseDatasheet:any;
 getleaseDataSheetData(){
   console.log("getleaseDataSheetData")
  this.leaseBasicService
  .getleasedatasheet()
  .subscribe((leaseDatasheet)=>{
    console.log(leaseDatasheet,"leaseDatasheet")
    this.leaseDatasheet =leaseDatasheet;
  })
  
 }
}
