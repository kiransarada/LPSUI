import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import {environment} from '../../../../src/environments/environment';
@Component({
  selector: 'app-site-dynamic-tab',
  templateUrl: './site-dynamic-tab.component.html',
  styleUrls: ['./site-dynamic-tab.component.css']
})
export class SiteDynamicTabComponent implements OnInit, AfterViewInit {
  @Input() parentJson;
  @Input() tab;
  sectionData: any;
  isTable: boolean;
  left: any;
  right: any;
  section: string;
  label: any;
  data: any;
  url: any;
  oneSidedSection: any;
  indicator:boolean;
  companyIndicator:boolean;
  showFlag: Boolean = true;
  present: string = "Show More";
  newShowData:any;
  showMore1:any;
  showMore2:any;
  leftSiteModal : any;
  sectionUrl: any;
  agreementId : any;
  agrId:any;
  //parentJson : any;
  constructor(private dataService: DataService) { }
  ngOnInit() {
    
    this.section = this.parentJson.section;
    this.section = this.tab.key;
    this.indicator = true;
    this.companyIndicator = true;
    
  }
  ngAfterViewInit() {
    if(this.parentJson.flag)
    this.getSectionData(this.parentJson.section);
    console.log(this.parentJson.agreementID);
    this.parentJson.flag = false;
  }
  fetchSiteInfo(popover, type, value,agrId) {
    this.url=environment.leaseBasicInfo+'/LeaseBasicUIService/lease/sitedetails';
    this.getData(this.url, popover,value, agrId);
  }
  getData(url, popover,value,agrId) {
   
    // console.log("val",value)
    this.dataService.getGeneralPopup(url,agrId)
      .subscribe(response => {    
        this.leftSiteModal = response['data'];       
      },
        (error: any) => {
          console.log('error', error);
        });
  }

  // setAgreementIDNew(agreementId){
  //   alert('ftgtfyhgf');
  //   alert(agreementId);
  //   this.agreementId = agreementId;
    
  // }

 

  show() {
    let url =environment.leaseBasicInfo+'/LeaseBasicUIService/lease/showmoregeneral';  
    this.showFlag = !this.showFlag;
    if (!this.showFlag) {
    this.dataService.getShowMoreGeneral(url,this.parentJson.agreementID).subscribe((res)=> {
    // console.log("show res",res);
    let halflength =Math.ceil(res['data'].length/2);  
    let arr1 = res['data'].slice(0,halflength);
    let arr2 = res['data'].slice(halflength,res['data'].length);
    this.showMore1 = arr1; 
    this.showMore2 = arr2; 
    this.present = "Show Less";
    }) 
    }else { 
    this.present ="Show More";  
    } 
    }
    
    
  getSectionData(response) {
      if(response == 'general'){        
        this.sectionUrl = environment.leaseBasicInfo+'/LeaseBasicUIService/lease/general';
      }else if(response == 'managementCompany'){
        this.sectionUrl = environment.leaseBasicInfo+'/LeaseBasicUIService/lease/managementcompany';
      }else if(response == 'assetLesseeandLessorDetails'){
        this.sectionUrl = environment.contact+'/LeaseContactUIService/lessee/lessor';
      }else if(response == 'contactLookup'){
        this.sectionUrl = environment.contact+'/LeaseContactUIService/contact/otherinfo';
      }else if(response == 'lesseeAssignment'){
        this.sectionUrl = environment.leaseBasicInfo+'/LeaseBasicUIService/lease/lesseeassignment';
      }else if(response == 'lessorAssignment'){
        this.sectionUrl = environment.leaseBasicInfo+'/LeaseBasicUIService/lease/lessorassignment';
      }else if(response == 'criticalDates'){
        this.sectionUrl = environment.leaseBasicInfo+'/LeaseBasicUIService/lease/criticaldate';
      }else if(response == 'moreDetails'){
        this.sectionUrl = environment.leaseMoreInfo+'/LeaseMoreUIService/lease/details';
      }else if(response == 'notes'){
        this.sectionUrl = environment.leaseMoreInfo+'/LeaseMoreUIService/lease/Notes';
      }else if(response == 'mla'){
        this.sectionUrl = environment.leaseMoreInfo+'/LeaseMoreUIService/lease/mla';
      }else if(response == 'contractManager'){
        this.sectionUrl = environment.contact+'/LeaseContactUIService/contract/manager';
      }else if(response == 'revisionHistory'){
        this.sectionUrl = environment.auditInfo+'/LeaseAuditUIService/audit/revisionHistory';
      }else if(response == 'amendmentHistory'){
        this.sectionUrl = environment.auditInfo+'/LeaseAuditUIService/audit/amendmentHistory';
      }else if(response == 'faChangeAudit'){
        this.sectionUrl = environment.auditInfo+'/LeaseAuditUIService/audit/fachangeAudit';
      }else if(response == 'mlaAssociationAudit'){
        this.sectionUrl = environment.auditInfo+'/LeaseAuditUIService/audit/mlaAssociation';
      }else if(response == 'mlaApplyTemplateAudit'){
        this.sectionUrl = environment.auditInfo+'/LeaseAuditUIService/audit/mlaTemplateAudit';
      }else if(response == 'unretireAudit'){
        this.sectionUrl = environment.auditInfo+'/LeaseAuditUIService/audit/unretiredAudit';
      }else if(response == 'terminationAudit'){
        this.sectionUrl = environment.auditInfo+'/LeaseAuditUIService/audit/terminationAudit';
      }
      
      this.dataService.getSectionData(this.sectionUrl, response, this.parentJson.agreementID)
    .subscribe(sectionResponse => {
      this.indicator = false;
      this.companyIndicator =false;
    this.sectionData = sectionResponse; 
    // console.log(this.sectionData);
    this.oneSidedSection = this.sectionData.data;
    // console.log("section data", this.sectionData)
    // console.log(this.sectionData.data);
    this.isTable = this.sectionData.isTable;

    if (!this.isTable) {
      const half = Math.ceil(this.sectionData.data.length / 2);
      // console.log(half+"^^^^^^^^^^^^^^^^^^^^^^^^^^^");
      this.left = JSON.stringify(this.sectionData.data);
      this.left = JSON.parse(this.left);

      console.log("lefti data:", this.left[0].Value);
      this.agrId = this.left[0].Value;
      this.right = JSON.stringify(this.sectionData.data);
      this.right = JSON.parse(this.right);
      this.left = this.left.splice(0, half);
      this.right = this.right.splice(half, this.sectionData.data.length - half);
    } else if (this.isTable && this.section === 'amendmentHistory') {
        this.label = this.sectionData.labels;
        this.data = this.sectionData.data;
        // console.log(this.sectionData.labels);
        // console.log(this.sectionData.section.data);
    } else if (this.isTable && this.section === 'contactsLookup') {
        this.label = this.sectionData.labels;
        this.data = this.sectionData.data;
        // console.log(this.sectionData.labels);
        // console.log(this.sectionData.data);
    } else {
      
        this.label = this.sectionData.labels;
        this.data = this.sectionData.data;
        //  console.log(this.label);
        //  console.log(this.data);
    }
  });
    // console.log(JSON.stringify(this.generalJSOn));
    // },
    //   (error: any) => {
    //     console.log('error', error);
    //   });
  }

  // fetchContent(path) {
  //   console.log(this.sectionData+'line 90.........');
  //   this.dataService.getSectionData(this.accUrl)
  //     .subscribe((section) => {        
  //      // this.sections =data;
  //      this.sectionData = {
  //       'path': path,
  //       'section': section
  //     };
  //      console.log(this.sectionData);
  //     },
  //     (error: any) => {
  //       console.log('error', error);
  //     });

  // }


}

