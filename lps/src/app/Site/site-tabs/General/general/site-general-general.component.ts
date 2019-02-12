import { Component, OnInit, Input } from '@angular/core';

import { SiteGeneral } from 'src/app/Site/site-tabs/General/general/site-general-general-model';

@Component({
  selector: 'app-site-general-general',
  templateUrl: './site-general-general.component.html',
  styleUrls: ['./site-general-general.component.css']
})
export class SiteGeneralGeneralComponent implements OnInit {
  @Input() parentJson;
  siteGeneral: SiteGeneral;
  constructor() {
  }
  ngOnInit() {
    console.log(this.parentJson);
    this.siteGeneral = this.parentJson['general'];
  }
}

