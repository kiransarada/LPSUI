import { Component, OnInit, Input } from '@angular/core';
import { LeaseBasicService } from '../../lease-details-tabs/lease-tab.service';
import {ChartsComponent} from '../../charts/charts.component'
@Component({
  selector: 'app-leasedatasheetsitesummary',
  templateUrl: './leasedatasheetsitesummary.component.html',
  styleUrls: ['./leasedatasheetsitesummary.component.css']
})
export class LeasedatasheetsitesummaryComponent implements OnInit {
  @Input() fieldlist1: Array<JSON>;
  @Input() fieldlist2: Array<JSON>;
  constructor(private lbService: LeaseBasicService) { }
  sitesummary={};
  innerArray ={};
  arrayset1={};
  // fieldset1 = {};
  // fieldset2 = {};

ngOnInit(){
    //   this.lbService
    // .getSummarySite()
    // .subscribe((sitesummary)=>{        
    //   this.sitesummary = sitesummary; 
    //   console.log(sitesummary['data']);
    //   let arr1 =sitesummary['data'].slice(0,sitesummary['data'].length/2);
    //   let arr2 =sitesummary['data'].slice(sitesummary['data'].length/2,sitesummary['data'].length);
    //   this.fieldset1 = arr1;
    //   this.fieldset2 = arr2;
    //   console.log(this.fieldset1);
    //   console.log(this.fieldset2);
    // });
}


}
