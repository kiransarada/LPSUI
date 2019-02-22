import { Component, OnInit, Input } from '@angular/core';
import { SiteAssociatedSites } from './site-general-assoc-sites-model';

@Component({
  selector: 'app-site-general-associated-sites',
  templateUrl: './site-general-associated-sites.component.html',
  styleUrls: ['./site-general-associated-sites.component.css']
})
export class SiteGeneralAssociatedSitesComponent implements OnInit {
  @Input() parentJson;
  siteAssocSites: SiteAssociatedSites[];
  constructor() { }
  ngOnInit() {
    console.log(this.parentJson);
    this.siteAssocSites = this.parentJson['associatedSites'];
  }
}
