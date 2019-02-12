import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-site-dynamic-tab',
  templateUrl: './site-dynamic-tab.component.html',
  styleUrls: ['./site-dynamic-tab.component.css']
})
export class SiteDynamicTabComponent implements OnInit, AfterViewInit {
  @Input() parentJson;
  sectionData: any;
  isTable: boolean;
  left: any;
  right: any;
  section: string;
  label: any;
  data: any;
  url: any;
  constructor(private dataService: DataService) { }
  ngOnInit() {
  }
  ngAfterViewInit() {
     this.getSectionData(this.parentJson.path);
     this.section = this.parentJson.section;
  }
  fetchSiteInfo(popover, type, value) {
    this.url = 'assets/JSON/' + type + '.json';
    this.getData(this.url, popover);
  }
  getData(path, popover) {
    this.dataService.getConfig(path)
    .subscribe(response => {
      if (popover.isOpen()) {
        popover.close();
      } else {
        popover.open(response['data']);
      }
    },
      (error: any) => {
        console.log('error', error);
      });
  }
  getSectionData(path) {
    this.dataService.getConfig(path)
    .subscribe(response => {
      this.sectionData = response;
      this.isTable = this.sectionData.isTable;
      if (!this.isTable) {
      const half = Math.ceil(this.sectionData.data.length / 2);
      this.left = JSON.stringify(this.sectionData.data);
      this.left = JSON.parse(this.left);
      this.right = JSON.stringify(this.sectionData.data);
      this.right = JSON.parse(this.right);
      this.left = this.left.splice(0, half);
      this.right = this.right.splice(half, this.sectionData.data.length - half);
      } else {
        this.label = this.sectionData.label;
        this.data = this.sectionData.data;
      }
     // console.log(JSON.stringify(this.generalJSOn));
    },
      (error: any) => {
        console.log('error', error);
      });
  }
}

