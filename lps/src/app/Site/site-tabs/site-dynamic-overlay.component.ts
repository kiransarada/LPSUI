import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { SiteDynamicTabComponent } from '../../Site/site-tabs/site-dynamic-tab.component';
import { LeaseBasicService } from 'src/app/components/leasedatasheet/lease-details-tabs/lease-tab.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-site-dynamic-overlay',
  templateUrl: './site-dynamic-overlay.component.html',
  styleUrls: ['./site-dynamic-overlay.component.css']
})
export class SiteDynamicOverlayComponent implements OnInit {
  public isCollapsed = false;
  @ViewChild(SiteDynamicTabComponent) private overLayChild: SiteDynamicTabComponent;
  tabs: any;
  sections: any;
  path: any;
  sectionData:any =[];
  data= false
  tab : any;
  section :any;
  url:any;
  agreementId  : any;

  constructor(private dataService: DataService,private lbService: LeaseBasicService,
                  private spinner: NgxSpinnerService) { }
  ngOnInit() {
    this.spinner.show();
  }

   
  showConfig(response, agreeId) {
    this.spinner.show();
   console.log(this.overLayChild);

      this.url=`http://130.6.149.41:5102/LeaseMoreUIService/lease/getSection`;

      // this.overLayChild.setAgreementIDNew(agreeId);
      this.agreementId = agreeId;
      this.setAggrementId(agreeId);
      this.dataService.getSectionPost(this.url,response, agreeId).subscribe((data)=> {
        this.spinner.hide();
      // this.dataService.getConfig(url)
      // .subscribe((data) => {
        console.log(data);        
        this.tabs = data['data'];     
       },
      (error: any) => {
        console.log('error', error);
      });
  }
  fetchContent(section,i,agreementID, j) {
    // console.log(section,i);
    this.tabs[j].section[i].show = true;
    
    if(document.getElementById(i+section).classList[1]=="show"){
        document.getElementById(i+section).classList.remove('show');
      }
    else{
        document.getElementById(i+section).classList.add('show');
      }
    this.data =false;
    // console.log("FetchContent",section)
   // this.path = 'assets/JSON/' + section + '.json';

   this.section = section;
   this.sectionData = {
    'path': this.path,
    'section': section ,
    'agreementID': agreementID ,
    'flag':true
  }
   
    
  }
  closeAccodion(section, i){
    if(document.getElementById(i+section).classList[1]=="show")
      {
           document.getElementById(i+section).classList.remove('show');
      }
   else{
           document.getElementById(i+section).classList.add('show');
       }
   }
  setAggrementId(aggrementId){
    this.lbService.setAggrementId(aggrementId);
  }

  

}
