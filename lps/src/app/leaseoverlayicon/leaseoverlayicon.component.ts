import { Component, OnInit } from '@angular/core';
import { LeaseBasicService } from '../lease-details-tabs/lease-tab.service';
import { Http, ResponseContentType } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

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
