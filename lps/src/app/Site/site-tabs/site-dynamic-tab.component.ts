import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

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
  showFlag: Boolean = true;
  present: string = "show more";
  newShowData:any;
  showMore1:any;
  showMore2:any;
  leftSiteModal : any;
  //parentJson : any;
  constructor(private dataService: DataService) { }
  ngOnInit() {

    this.getSectionData(this.parentJson);
    console.log("fgcfgvghbhbh",this.parentJson.section.data);

    this.section = this.tab.key;
    console.log(this.section);
  }
  ngAfterViewInit() {

    //  this.section = this.parentJson.section;
    console.log(this.section);
    //  console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
  }
  fetchSiteInfo(popover, type, value) {

    // this.url = 'assets/JSON/' + type + '.json';
    this.url='http://localhost:12234/LeaseBasicUIService/lease/sitedetails';
    this.getData(this.url, popover);
  }
  getData(url, popover) {
    // console.log("url",url,popover);
    // console.log(popover);
    // alert('test');
    this.dataService.getGeneralPopup(url)
      .subscribe(response => {
       
        this.leftSiteModal = response['data'];
        // if (popover.isOpen()) {
        //   popover.close();
        // } else {
        //   popover.open(response['data']);
        // }
      },
        (error: any) => {
          console.log('error', error);
        });
  }

 

  show() {
    let url = 'http://localhost:12234/LeaseBasicUIService/lease/showmoregeneral';
    this.showFlag = !this.showFlag;
    if (!this.showFlag) {
      this.dataService.getShowMoreGeneral(url)
      .subscribe((res) => {
        console.log("show res",res);
        let halflength = Math.ceil(res['data'].length/2);
          let arr1 =res['data'].slice(0,halflength);
          let arr2 =res['data'].slice(halflength,res['data'].length);
          this.showMore1 = arr1; 
          this.showMore2 = arr2;     
        // this.newShowData= res['data'];
        this.present = "show less";

      })
     
    }
    else {
      this.present = "show more";
    }
  }
  getSectionData(response) {
    // console.log(response, "path.............................+++++++++++");
    // this.dataService.getConfig(path)
    // .subscribe(response => {
    this.sectionData = response;
    console.log("sectionData",this.sectionData);

    this.oneSidedSection = this.sectionData.section.data;
    console.log("section data", this.sectionData)
    console.log(this.sectionData.section.data);
    this.isTable = this.sectionData.section.isTable;

    if (!this.isTable) {
      const half = Math.ceil(this.sectionData.section.data.length / 2);
      // console.log(half+"^^^^^^^^^^^^^^^^^^^^^^^^^^^");
      this.left = JSON.stringify(this.sectionData.section.data);
      this.left = JSON.parse(this.left);
      console.log("left data:", this.left)
      this.right = JSON.stringify(this.sectionData.section.data);
      this.right = JSON.parse(this.right);
      this.left = this.left.splice(0, half);
      this.right = this.right.splice(half, this.sectionData.section.data.length - half);
    } else if (this.isTable && this.section === 'amendmentHistory') {
        this.label = this.sectionData.section.labels;
        this.data = this.sectionData.section.data;
        // console.log(this.sectionData.labels);
        // console.log(this.sectionData.section.data);
    } else if (this.isTable && this.section === 'contactsLookup') {
        this.label = this.sectionData.section.labels;
        this.data = this.sectionData.section.data;
        console.log(this.sectionData.labels);
        console.log(this.sectionData.data);
    } else {
      
        this.label = this.sectionData.section.labels;
        this.data = this.sectionData.section.data;
         console.log(this.label);
         console.log(this.data);
    }
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

