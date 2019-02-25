import { Component, OnInit, Input } from '@angular/core';
import { SiteAssociatedMasterSites } from '../../General/assoc-master-site/site-general-assoc-mastr-sites-model'

@Component({
  selector: 'app-site-general-assoc-mstr-site',
  templateUrl: './site-general-assoc-mstr-site.component.html',
  styleUrls: ['./site-general-assoc-mstr-site.component.css']
})
export class SiteGeneralAssocMstrSiteComponent implements OnInit {
  @Input() parentJson;
  siteAssociatedMasterSites: SiteAssociatedMasterSites[];
  constructor() {}

  ngOnInit() {
    console.log(this.parentJson);
    this.siteAssociatedMasterSites = this.parentJson['associatedMasterSite'];
  }
}
