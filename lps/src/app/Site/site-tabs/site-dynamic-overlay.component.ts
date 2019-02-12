import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-site-dynamic-overlay',
  templateUrl: './site-dynamic-overlay.component.html',
  styleUrls: ['./site-dynamic-overlay.component.css']
})
export class SiteDynamicOverlayComponent implements OnInit {
  tabs: any;
  path: any;
  sectionData: any;
  url = 'assets/JSON/site_tabs-sections.json';
  constructor(private dataService: DataService) { }
  ngOnInit() {
   // this.showConfig(this.url);
  }
  showConfig(url) {
    this.dataService.getConfig(url)
      .subscribe((data) => {
        this.tabs = data;
       // console.log(JSON.stringify(this.generalJSOn));
      },
      (error: any) => {
        console.log('error', error);
      });
  }
  fetchContent(section) {
    console.log('section name::' + section );
    this.path = 'assets/JSON/' + section + '.json';
    this.sectionData = {
      'path': this.path,
      'section': section
    };
  }

}
