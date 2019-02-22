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

  constructor() { }
  // downloadFile() {
  //   return this.http
  //     .get('https://www.cdu.edu.au/sites/default/files/acike/docs/academic-essay-writing-resource.pdf', {
  //       responseType: ResponseContentType.Blob,
       
  //     })
  //     .map(res => {
  //       return {
  //         filename: 'https://www.cdu.edu.au/sites/default/files/acike/docs/academic-essay-writing-resource.pdf',
  //         data: res.blob()
  //       };
  //     })
  //     .subscribe(res => {
  //         console.log('start download:',res);
  //         var url = window.URL.createObjectURL(res.data);
  //         var a = document.createElement('a');
  //         document.body.appendChild(a);
  //         a.setAttribute('style', 'display: none');
  //         a.href = url;
  //         a.download = `https://www.cdu.edu.au/sites/default/files/acike/docs/academic-essay-writing-resource.pdf`;
  //         a.click();
  //         window.URL.revokeObjectURL(url);
  //         a.remove(); // remove the element
  //       }, error => {
  //         console.log('download error:', JSON.stringify(error));
  //       }, () => {
  //         console.log('Completed file download.')
  //       });
  // }
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
}
