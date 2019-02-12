import { Component, OnInit, Input  } from '@angular/core';
import { SiteDetails } from 'src/app/Site/site-tabs/General/details/site-general-details-model';

@Component({
  selector: 'app-site-general-details',
  templateUrl: './site-general-details.component.html',
  styleUrls: ['./site-general-details.component.css']
})
export class SiteGeneralDetailsComponent implements OnInit {
  @Input() parentJson;
  constructor() {}
  siteDetails: SiteDetails[];
  ngOnInit() {
    console.log(this.parentJson);
    this.siteDetails = this.parentJson['details'];
  }
}
