import { Component, OnInit, Input } from '@angular/core';
import { SiteReporting } from '../../../../Site/site-tabs/General/reporting/site-general-reporting-model';

@Component({
  selector: 'app-site-general-reporting',
  templateUrl: './site-general-reporting.component.html',
  styleUrls: ['./site-general-reporting.component.css']
})
export class SiteGeneralReportingComponent implements OnInit {

  @Input() parentJson;
  constructor() { }
  siteReporting: SiteReporting[];
  ngOnInit() {
    console.log(this.parentJson);
    this.siteReporting = this.parentJson['reporting'];
  }
}
