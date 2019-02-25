import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service'

@Component({
  selector: 'app-lps-site-overlay',
  templateUrl: './lps-site-overlay.component.html',
  styleUrls: ['./lps-site-overlay.component.css']
})
export class LpsSiteOverlayComponent implements OnInit {
  generalJSOn: any;
  url = 'assets/JSON/General_Tab.json';
  constructor(private dataService: DataService) { }
  private json;
  ngOnInit() {
    this.showConfig();
  }
  showConfig() {
    this.dataService.getConfig(this.url)
      .subscribe((data) => {
        this.generalJSOn = data;
       // console.log(JSON.stringify(this.generalJSOn));
      },
      (error: any) => {
        console.log('error', error);
      });
  }
}
