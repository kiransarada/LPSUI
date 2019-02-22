import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { SiteDynamicTabComponent } from './site-dynamic-tab.component';
// import * as $ from 'jquery';
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
  // url = 'assets/JSON/site_tabs-sections.json';
  data= false
  tab : any;
  section :any;
  sectionType : any;
  constructor(private dataService: DataService) { }
  ngOnInit() {
  }


  showConfig(url) {
      url=`http://localhost:11251/LeaseContactCRUDService/getSection`;
    this.dataService.getConfig(url)
      .subscribe((data) => {
        this.tabs = data;
        console.log(this.tabs);
        
        for(let i=0;i< this.tabs.length+2;i++){
        this.sectionData.push({
          path: this.path,
          section: {}
        })
      }
        console.log(JSON.stringify(this.tabs));
      },
        (error: any) => {
          console.log('error', error);
        });
  }
  fetchContent(section,i) {
    console.log(section,i);
    this.data =false;
    console.log("FetchContent",section)
   // this.path = 'assets/JSON/' + section + '.json';

   this.sectionType = section;
   
    this.section = section;
       if(section == 'contractManager'){
       this.path='http://localhost:12233/LeaseContactUIService/contract/manager';
       this.section = section;
       } else if(section == 'assetLesseeandLessorDetails'){
          this.path='http://localhost:12233/LeaseContactUIService/lessee/lessor';
          this.section = section;
          } else if(section == 'contactLookup'){
            this.path='http://localhost:12233/LeaseContactUIService/contact/otherinfo';
            this.section = section;
          }else  if(section == 'general'){
                this.path = 'http://localhost:12234/LeaseBasicUIService/lease/general';
                this.section = section;
          }else  if(section == 'managementCompany'){
            this.path = 'http://localhost:12234/LeaseBasicUIService/lease/managementcompany';
            // console.log(section['data'])
            // this.section = section;
          }else if(section == 'lesseeAssignment'){
            this.path= 'http://localhost:12234/LeaseBasicUIService/lease/lesseeassignment';
            this.section = section;
          } else if(section == 'lessorAssignment'){
            this.path = 'http://localhost:12234/LeaseBasicUIService/lease/lessorassignment';
          }else if(section == 'criticalDates'){
            this.path = 'http://localhost:12234/LeaseBasicUIService/lease/criticaldate';
          }else if(section == 'moreDetails'){
            this.path = 'http://localhost:12271/LeaseMoreUIService/lease/details';
          }else if(section == 'notes'){
            this.path = 'http://localhost:12271/LeaseMoreUIService/lease/Notes';
          }else if(section == 'mla'){
            this.path = 'http://localhost:12271/LeaseMoreUIService/lease/mla';
          }
          else if(section == 'showMoreGeneral'){
            this.path = 'http://localhost:12234/LeaseBasicUIService/lease/showmoregeneral';
          }
          else if(section == 'terminationAudit'){
            this.path = 'http://localhost:12288/LeaseAuditUIService/audit/terminationAudit';
          }
          else if(section == 'unretireAudit'){
            this.path = 'http://localhost:12288/LeaseAuditUIService/audit/unretiredAudit';
          }
          else if(section == 'mlaApplyTemplateAudit'){
            this.path = 'http://localhost:12288/LeaseAuditUIService/audit/mlaTemplateAudit';
          }
          else if(section == 'mlaAssociationAudit'){
            this.path = 'http://localhost:12288/LeaseAuditUIService/audit/mlaAssociation';
          }
          else if(section == 'faChangeAudit'){
            this.path = 'http://localhost:12288/LeaseAuditUIService/audit/fachangeAudit';
          }
          else if(section == 'amendmentHistory'){
            this.path = 'http://localhost:12288/LeaseAuditUIService/audit/amendmentHistory';
          }
          else if(section == 'revisionHistory'){
            this.path = ' http://localhost:12288/LeaseAuditUIService/audit/revisionHistory';
          }
          // else if(section == 'leaseAudit'){
          //   this.path = 'http://localhost:12288/LeaseAuditUIService/audit/amendmentHistory';
          // }
          
    
    this.dataService.getSectionData(this.path, section)
      .subscribe((res) => {
      console.log(this.sectionData);
      console.log(i);
        console.log(res,"res");
        console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
        this.sectionData[i].path= this.path,
        this.sectionData[i].section= res;
        this.sectionData[i].data = true;
        this.data = true;
        // };
        // this.sectionData[i] = {
        //   'path': this.path,
        //   'section': res
        // };
        console.log(this.sectionData[i],"v4444444444444444444444444");
      },
        (error: any) => {
          console.log('error', error);
        });

       

    // }
  }


  // fetchGeneralShowMore(){

  // }

}
