import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { LeaseBasicService } from '../lease-details-tabs/lease-tab.service';
@Component({
  selector: 'app-leasedatsheetpage',
  templateUrl: './leasedatsheetpage.component.html',
  styleUrls: ['./leasedatsheetpage.component.css']
})
export class LeasedatsheetpageComponent implements OnInit {
  // @Input() fieldlist1;
  // @Input() fieldlist2;

  @Input() leaseDatasheet: JSON;
  public aggrementId: any;
  constructor(private lbService: LeaseBasicService) { }
  summarySite = {};
  lesseeLessorInfo = {};
  lessorAssignment = {};
  provisionInformation = {};
  provisionInformation1 = {};
  sitesummary = {};
  maindocumentinfo = {};
  criticaldates = {};
  linktofilenet = {};
  sitesummary1 = {};
  sitesummary2 = {};
  criticaldates1 = {};
  criticaldates2 = {};
  maindocInfo1 = {};
  maindocInfo2 = {};
  legalnoticeinfolabel = {};
  legalnoticeinfodata = {};
  contractterminfolabel = {};
  contractterminfodata = {};
  lessorassignmentlabels = {}
  lessorassignmentdata = {};
  lesseeassignmentlabels = {};
  lesseeassignmentdata = {};
  amendmentinfolabels = {};
  amendmentinfodata = {};
  summaryLeasedata = {};
  summaryLeaselabel = {};
  leaseChartData = {};
  leaseChartData1 = {};
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes, "chabges")
    if (changes.leaseDatasheet) {
      this.getData();
    }
  }
  ngOnInit() {
    this.getData();
  }
  // ngDoCheck(){
  //   this.getData();
  // }
  getData() {

    // this.lbService
    // .getleasedatasheet()
    // .subscribe((leaseDatasheet)=>{
    if (this.leaseDatasheet) {
      // console.log("gghh",leaseDatasheet);    
      let arrayData = this.leaseDatasheet['sitesummary']['data'];

      // let halflength = Math.ceil(arrayData.length/2);
      // let arr1 =leaseDatasheet['sitesummary']['data'];

      // let arr2 =leaseDatasheet['sitesummary']['data'].slice(halflength,leaseDatasheet['sitesummary']['data'].length);

      this.sitesummary1 = arrayData;
      // this.sitesummary2 = arr2;     
      // console.log(this.sitesummary1);  
      // console.log(this.sitesummary2); 



      // console.log("shubham",this.lesseeLessorInfo);
      this.leaseChartData = this.leaseDatasheet['summaryLease']['leaseChartData'];
      this.leaseChartData1 = this.leaseDatasheet['summaryLease']['leaseChartData1'];
      //  console.log(this.leaseChartData);


      // this.summaryLeaselabel=leaseDatasheet['summaryLease']['label'];
      this.summaryLeaselabel = this.leaseDatasheet['summaryLease']['data'];


      // this.lesseeLessorInfo=leaseDatasheet['lesseeLessorInfo']['label'];
      this.lesseeLessorInfo = this.leaseDatasheet['lesseeLessorInfo']['data'];


      // console.log(leaseDatasheet['lessorassignment']);
      this.lessorassignmentlabels = this.leaseDatasheet['lessorassignment']['label'];
      this.lessorassignmentdata = this.leaseDatasheet['lessorassignment']['data'];
      // console.log(this.lessorassignmentlabels);
      // console.log(this.lessorassignmentdata);
      this.amendmentinfolabels = this.leaseDatasheet['amendmentinfo']['label'];
      this.amendmentinfodata = this.leaseDatasheet['amendmentinfo']['data'];
      // console.log(this.lesseeassignmentlabels);
      // console.log(this.lesseeassignmentdata);

      this.leaseChartData = this.leaseDatasheet['summaryLease']['leaseChartData'];
      this.leaseChartData1 = this.leaseDatasheet['summaryLease']['leaseChartData1'];


      console.log("shubham", this.leaseChartData);
      console.log("shubham11", this.leaseChartData1);
      if(this.leaseChartData1['endDate']==null || this.leaseChartData1['startDate']==null){
        this.leaseChartData1['show'] = false;
      }else
      this.leaseChartData1['show'] = true;

      if(this.leaseChartData['endDate']==null || this.leaseChartData['startDate']==null){
        this.leaseChartData['show'] = false;
      }else
      this.leaseChartData['show'] = true;
      

      this.lesseeassignmentlabels = this.leaseDatasheet['lesseeassignment']['label'];
      this.lesseeassignmentdata = this.leaseDatasheet['lesseeassignment']['data'];











    };


    // this.lbService
    // .getSummaryLease()
    // .subscribe((data)=>{
    //   console.log(data);   
    //   this.summaryLease = data['data'];  
    //   console.log(this.summaryLease);     
    // });
    // this.lbService
    // .getLesseeLessorInfo()
    // .subscribe((data)=>{
    //   console.log(data);   
    //   this.lesseeLessorInfo = data['data'];  
    //   console.log(this.lesseeLessorInfo);     
    // });

    // this.lbService
    // .getProvisionInformation()
    // .subscribe((data)=>{

    //   this.provisionInformation1 = data;  
    //   console.log(this.provisionInformation1['data'][0].value[0].Label); 
    // });

    // this.lbService
    // .getSummarySite()
    // .subscribe((sitesummary)=>{
    //         this.sitesummary = sitesummary; 
    //     console.log(sitesummary['data']);
    //     let arr1 =sitesummary['data'].slice(0,sitesummary['data'].length/2);
    //     let arr2 =sitesummary['data'].slice(sitesummary['data'].length/2,sitesummary['data'].length);
    //     this.sitesummary1 = arr1; 
    //     this.sitesummary2 = arr2;     
    //     console.log(this.sitesummary1);  
    //     console.log(this.sitesummary2); 
    // });

    // this.lbService
    // .getlessorassignment()
    // .subscribe((data)=>{

    //   this.lessorAssignment = data;  
    //   console.log(); 
    // });


    // this.lbService
    // .getmaindocumentinfo()
    // .subscribe((sitesummary)=>{        
    //   this.maindocumentinfo = sitesummary;  
    //   this.sitesummary = sitesummary; 
    //     console.log(sitesummary['data']);
    //     let arr1 =sitesummary['data'].slice(0,sitesummary['data'].length/2);
    //     let arr2 =sitesummary['data'].slice(sitesummary['data'].length/2,sitesummary['data'].length);
    //     this.maindocInfo1 = arr1; 
    //     this.maindocInfo2 = arr2;     

    // });

    // this.lbService
    // .getcriticaldates()
    // .subscribe((sitesummary)=>{      
    //   let arr1 =sitesummary['data'].slice(0,sitesummary['data'].length/2);
    //   let arr2 =sitesummary['data'].slice(sitesummary['data'].length/2,sitesummary['data'].length);
    //   this.criticaldates1 = arr1; 
    //   this.criticaldates2 = arr2;     
    //   console.log(this.criticaldates1);  
    //   console.log(this.criticaldates2); 
    // });

    // this.lbService
    // .getfilenet()
    // .subscribe((data)=>{        
    //   this.linktofilenet = data['data'];  
    //   console.log(); 
    // });

    // this.lbService
    // .getlegalnoticeinfo()
    // .subscribe((data)=>{  
    //   console.log(data);      
    //   this.legalnoticeinfolabel = data['label']; 
    //   this.legalnoticeinfodata = data['data'];  
    //   console.log(); 
    // });

    // this.lbService
    // .getcontractterminfo()
    // .subscribe((data)=>{  
    //   console.log(data);      
    //   this.contractterminfolabel = data['label']; 
    //   this.contractterminfodata = data['data'];  
    //   console.log(); 
    // });

  }


}
